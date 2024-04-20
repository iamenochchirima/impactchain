import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TargetOption } from "../../../data/constants";
import {
  TargetRecordStateType,
  setDataComponent,
  setNextTarget,
  setShowDataForm,
  setTargetRecord,
  setUserRecord,
} from "../../../redux/slices/app";
import MetricRecords from "./MetricRecords";
import { toast } from "react-toastify";
import { RootState } from "../../../redux/store";
import { useAuth } from "../../../hooks/AppContext";
import { ImpactTargetType, Metric } from "../../../utils/types";
import { UserRecord } from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { getTargetMetrics } from "../../../utils/targets";

type Props = {
  target: TargetOption;
  impactTargets: ImpactTargetType[];
  finished: boolean;
  setLastOfLast: (lastOfLast: boolean) => void;
};

type GradientStyle = {
  backgroundImage: string;
};

const TargetRecordsCard: FC<Props> = ({
  target,
  impactTargets,
  finished,
  setLastOfLast,
}) => {
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({
    backgroundImage: `linear-gradient(to top, #354b5b, ${target.color} 50%, ${target.color})`,
  });
  const [clearGoal, setClearGoal] = useState<boolean>(false);
  const { dataActor } = useAuth();
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [impact, setImpact] = useState<ImpactTargetType | undefined>(undefined);
  const dispatch = useDispatch();
  const metricsPerPage = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedMetrics, setDisplayedMetrics] = useState<Metric[]>([]);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (impact) {
      setTotalPages(Math.ceil(impact.metrics.length / metricsPerPage));
      const end = currentIndex + metricsPerPage;
      setDisplayedMetrics(impact.metrics.slice(currentIndex, end));
    }
  }, [currentIndex, impact, metricsPerPage]);

  useEffect(() => {
    if (totalPages && currentPage === totalPages) {
      setLastOfLast(true);
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    if (impactTargets) {
      const _impact = impactTargets.find((t) => Number(t.id) === target.id);
      setImpact(_impact);
      setCurrentPage(Math.floor(currentIndex / metricsPerPage) + 1);
    }
  }, [impactTargets, target, currentIndex, metricsPerPage]);

  useEffect(() => {
    setCurrentPage(Math.floor(currentIndex / metricsPerPage) + 1);
  }, [currentIndex, metricsPerPage]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - metricsPerPage, 0));
  };

  useEffect(() => {
    if (!impactTargets) return;
    const _record: TargetRecordStateType = {
      color: target.color,
      name: target.name,
    };
    const _impact = impactTargets.find((t) => Number(t.id) === target.id);
    setImpact(_impact);
    dispatch(setTargetRecord({ targetRecord: _record }));
    setGradientStyle({
      backgroundImage: `linear-gradient(to top,#354b5b, ${target.color} 50%, ${target.color})`,
    });
  }, [dispatch, target, impactTargets]);

  const handleBack = () => {
    dispatch(setDataComponent("Metrics"));
    dispatch(setTargetRecord({ targetRecord: null }));
  };

  const handleNext = async () => {
    if (!impact) return;

    for (const metric of displayedMetrics) {
      if (metric.goal.length === 0) {
        toast.error("Please set a goal for all metrics before proceeding");
        return;
      }
    }
    try {
      setSaving(true);
      if (!userRecord) {
        toast.error("User record not found");
        return;
      }
      const updatedImpactMetrics: Metric[] = impact.metrics.map((metric) => {
        const updatedMetric = displayedMetrics.find(
          (m) => m.name === metric.name
        );
        return updatedMetric ? updatedMetric : metric;
      });
      const updatedImpact: ImpactTargetType = {
        ...impact,
        metrics: updatedImpactMetrics,
      };
      const _updatedImpactTargets: ImpactTargetType[] = impactTargets.map((t) =>
        Number(t.id) === target.id ? updatedImpact : t
      );

      const updatedImpactTargets = { ...userRecord.impactTargets };

      _updatedImpactTargets.forEach((target) => {
        const metrics = getTargetMetrics(target);
        updatedImpactTargets[`ImpactTarget${target.id}`] = [
          {
            id: target.id,
            name: target.name,
            metrics: metrics,
          },
        ];
      });
      const updatedUserRecord: UserRecord = {
        ...userRecord,
        impactTargets: updatedImpactTargets,
      };
      await dataActor?.updateUserRecord(updatedUserRecord);
      dispatch(setUserRecord(updatedUserRecord));
      setClearGoal(true);
      if (impactTargets.length === 1) {
        toast.success("All data saved successfully", {
          autoClose: 5000,
          position: "top-center",
        });
        dispatch(setShowDataForm(false));
        window.location.reload();
        return;
      }
      if (finished) {
        toast.success("All data saved successfully", {
          autoClose: 5000,
          position: "top-center",
        });

        dispatch(setShowDataForm(false));
        window.location.reload();
        return;
      }
      if (currentIndex + 2 >= impact.metrics.length) {
        toast.success(`Data for ${impact.name} saved successfully`, {
          autoClose: 5000,
        });
        setSaving(false);
        setCurrentIndex(0);
        dispatch(setNextTarget(true));
        return;
      }
      setSaving(false);
      setCurrentIndex((prev) => prev + metricsPerPage);
    } catch (error) {
      setSaving(false);
      console.log("Error updating impact metrics", error);
    }
  };

  const impactIndex = impactTargets.findIndex(
    (t) => Number(t.id) === target.id
  );
  return (
    <>
      <div className="flex flex-col items-center bg-gray mx-[100px] mt">
        <div className="text-3xl font-bold text-white mt-4 bg-gra text-center font-TelegraphBold flex gap-3 items-center">
          <span>How do you record your data for {target.name}</span>{" "}
          <img
            className="h-20 w-20 ml-2 rounded-lg"
            src={target.icon}
            alt={target.name}
          />
        </div>
        <div className="mt-5">
          <span
            className={`text-white text-xl font-bold mt-4 text-center font-TelegraphBold`}
          >
            {impactIndex + 1} of {impactTargets.length}
          </span>
        </div>
        <div
          style={gradientStyle}
          className={` rounded-3xl min-h-[300px] w-full mt-5`}
        >
          {impact && (
            <>
              {displayedMetrics.map((metric, index) => (
                <MetricRecords
                  key={index}
                  {...{
                    metric,
                    displayedMetrics,
                    setDisplayedMetrics,
                    clearGoal,
                    setClearGoal,
                  }}
                />
              ))}
            </>
          )}
          <div className="text-center my-4">
            <span className="text-white">
              {currentPage} of {totalPages}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-between my-4">
          <button
            className={` bg-custom-green px-10 py-1 rounded-full text-black font-bold`}
            onClick={handleBack}
          >
            <span className="">Back</span>
          </button>
          <div className="">
            {currentPage > 1 && (
              <button
                onClick={handlePrevious}
                className="px-10 py-1 text-custom-green font-bold"
              >
                <span>Previous</span>
              </button>
            )}
            <button
              className={` bg-custom-green px-10 py-1 rounded-full text-black font-bold`}
              disabled={saving}
              onClick={handleNext}
            >
              <span className="">
                {finished
                  ? `${saving ? "Saving" : "Finish"}`
                  : `${saving ? "Saving" : "Next"}`}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetRecordsCard;
