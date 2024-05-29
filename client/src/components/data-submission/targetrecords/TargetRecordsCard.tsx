import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TargetOption } from "../../../data/constants";
import {
  TargetRecordStateType,
  setDataComponent,
  setImpactTargets,
  setNextTarget,
  setPreviousTarget,
  setShowDataForm,
  setTargetRecord,
  setUserRecord,
} from "../../../redux/slices/app";
import MetricRecords from "./MetricRecords";
import { toast } from "react-toastify";
import { RootState } from "../../../redux/store";
import { useAuth } from "../../../hooks/AppContext";
import { ImpactTargetType, Metric } from "../../../utils/types";
import { UserRecord } from "../../../hooks/declarations/data/data.did";
import { getTargetMetrics } from "../../../utils/targets";
import Bubbles from "../../Bubbles";

const bubbleText="Now that you have selected your key metrics, the next step is to collect the corresponding data. This information will be used to track your progress against the chosen SDGs and generate detailed reports.";

type Props = {
  target: TargetOption;
  impactTargets: ImpactTargetType[];
  finished: boolean;
  currentIndex: number;
};

type GradientStyle = {
  backgroundImage: string;
};

const TargetRecordsCard: FC<Props> = ({
  target,
  impactTargets,
  finished,
  currentIndex,
}) => {
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({
    backgroundImage: `linear-gradient(to top, #354b5b, ${target.color} 50%, ${target.color})`,
  });
  const { dataActor } = useAuth();
  const { userRecord, nextTarget } = useSelector((state: RootState) => state.app);
  const [impact, setImpact] = useState<ImpactTargetType | undefined>(undefined);
  const dispatch = useDispatch();
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (impact) {
      setMetrics(impact.metrics);
    }
  }, [impact]);

  useEffect(() => {
    if (impactTargets) {
      const _impact = impactTargets.find((t) => Number(t.id) === target.id);
      setImpact(_impact);
    }
  }, [impactTargets, target]);

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

    try {
      setSaving(true);
      if (!userRecord) {
        toast.error("User record not found");
        return;
      }
      const updatedImpactMetrics: Metric[] = impact.metrics.map((metric) => {
        const updatedMetric = metrics.find((m) => m.name === metric.name);
        return updatedMetric ? updatedMetric : metric;
      });
      for (const metric of updatedImpactMetrics) {
        if (metric.data.length === 0) {
          toast.error("Please record data for all metrics");
          setSaving(false);
          return;
        }
      }
      const updatedImpact: ImpactTargetType = {
        ...impact,
        metrics: updatedImpactMetrics,
      };
      const _updatedImpactTargets: ImpactTargetType[] = impactTargets.map((t) =>
        Number(t.id) === target.id ? updatedImpact : t
      );

      dispatch(setImpactTargets(_updatedImpactTargets));

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
      if (finished) {
        toast.success("All data saved successfully", {
          autoClose: 5000,
          position: "top-center",
        });

        dispatch(setShowDataForm(false));
        window.location.reload();
        setSaving(false);
        return;
      }

      toast.success(`Data for ${impact.name} saved successfully`, {
        autoClose: 5000,
      });
      setSaving(false);
      dispatch(setNextTarget(true));
    } catch (error) {
      setSaving(false);
      console.log("Error updating impact metrics", error);
    }
  };

  const impactIndex = impactTargets.findIndex(
    (t) => Number(t.id) === target.id
  );

  const handlePrevious = () => {
    dispatch(setPreviousTarget(true));
  };

  return (
    <>
      <div className="flex flex-col items-center   px-6 py-2 min-w-min max-w-full mr-16 ">
        <div className="md:text-xl text-3xl font-bold text-white mt-4 bg-gra text-center font-TelegraphBold flex gap-3 items-center">
          <span>How do you record your data for {target.name}</span>
          <img
            className="h-20 w-20 ml-2 rounded-lg"
            src={target.icon}
            alt={target.name}
          />
        </div>
        <div className="mt-5">
          <span
            className={`text-white text-xl font-bold mt-4 text-center font-TelegraphBold ${
              saving? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {impactIndex + 1} of {impactTargets.length}
          </span>
        </div>
        <div
          style={gradientStyle}
          className={` rounded-3xl min-h-[300px] w-full mt-5`}
        >
          {impact && (
            <div className="grid grid-col gap-3 justify-center items-center py-3 ">
              {metrics.map((metric, index) => (
                <MetricRecords
                  key={index}
                  {...{
                    metric,
                    metrics,
                    setMetrics,
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="w-full flex justify-between my-4">
          <Bubbles {...{bubbleText}} />
          <div>
          <div className="flex flex-row gap-2">
          <button
            className={`bg-custom-green px-4 py-1 rounded-xl text-black font-bold font-TelegraphUltraLight`}
            onClick={handleBack}
          >
            <span className="">Back</span>
          </button>

          <div className="">
            {currentIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="px-4 py-1 text-custom-green font-bold"
              >
                <span>Previous</span>
              </button>
            )}

            <button
              className={` bg-custom-green px-4 py-1 rounded-xl text-black font-bold font-TelegraphUltraLight`}
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
        </div>
      </div>
    </>
  );
};

export default TargetRecordsCard;
