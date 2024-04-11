import React, { FC, useEffect, useState } from "react";
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
import {
  ImpactTarget,
  Metric,
  UserRecord,
} from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import MetricRecords from "./MetricRecords";
import { toast } from "react-toastify";
import { RootState } from "../../../redux/store";
import { useAuth } from "../../../hooks/AppContext";

type Props = {
  target: TargetOption;
  impactTargets: ImpactTarget[];
  finished: boolean;
};

type GradientStyle = {
  backgroundImage: string;
};

const TargetRecordsCard: FC<Props> = ({ target, impactTargets, finished }) => {
  const { dataActor } = useAuth();
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [impact, setImpact] = useState<ImpactTarget | undefined>(undefined);
  const dispatch = useDispatch();
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({
    backgroundImage: `linear-gradient(to top, #354b5b, ${target.color} 50%, ${target.color})`,
  });
  const [displayedMetrics, setDisplayedMetrics] = useState<Metric[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clearGoal, setClearGoal] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const metricsPerPage = 2;
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (impact) {
      setTotalPages(Math.ceil(impact.metrics.length / metricsPerPage));
    }
  }, [impact, metricsPerPage]);

  useEffect(() => {
    if (impact) {
      const start = currentIndex;
      const end = start + metricsPerPage;
      setDisplayedMetrics(impact.metrics.slice(start, end));
    }
  }, [currentIndex, impact, metricsPerPage]);

  useEffect(() => {
    setCurrentPage(Math.floor(currentIndex / metricsPerPage) + 1);
  }, [currentIndex, metricsPerPage]);

  useEffect(() => {
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
    if (impact) {
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
        const updatedImpact: ImpactTarget = {
          ...impact,
          metrics: updatedImpactMetrics,
        };
        const updatedImpactTargets: ImpactTarget[] = impactTargets.map((t) =>
          Number(t.id) === target.id ? updatedImpact : t
        );
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
        setCurrentIndex((prevIndex) =>
          Math.min(prevIndex + 2, impact.metrics.length - 2)
        );
      } catch (error) {
        setSaving(false);
        console.log("Error updating impact metrics", error);
      }
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
    </>
  );
};

export default TargetRecordsCard;
