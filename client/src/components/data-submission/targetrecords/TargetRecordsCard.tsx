import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TargetOption } from "../../../data/constants";
import {
  TargetRecordStateType,
  setNextTarget,
  setShowDataForm,
  setTargetRecord,
  setUserRecord,
} from "../../../redux/slices/app";
import {
  ImpactTarget,
  Measurement,
  UserRecord,
} from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import MeasurementRecords from "./MeasurementRecords";
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
  const [displayedMeasurements, setDisplayedMeasurements] = useState<
    Measurement[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clearGoal, setClearGoal] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (impact) {
      setDisplayedMeasurements(
        impact.measurements.slice(currentIndex, currentIndex + 2)
      );
    }
  }, [currentIndex, impact]);

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
  }, [dispatch, target]);

  const handleNext = async () => {
    if (impact) {
      for (const measurement of displayedMeasurements) {
        if (measurement.goal.length === 0) {
          toast.error(
            "Please set a goal for all measurements before proceeding"
          );
          return;
        }
      }
      try {
        setSaving(true);
        if (!userRecord) {
          toast.error("User record not found");
          return;
        }
        const updatedImpactMeasurements: Measurement[] =
          impact.measurements.map((measurement) => {
            const updatedMeasurement = displayedMeasurements.find(
              (m) => m.name === measurement.name
            );
            return updatedMeasurement ? updatedMeasurement : measurement;
          });
        const updatedImpact: ImpactTarget = {
          ...impact,
          measurements: updatedImpactMeasurements,
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
        if (currentIndex + 2 >= impact.measurements.length) {
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
          Math.min(prevIndex + 2, impact.measurements.length - 2)
        );
      } catch (error) {
        setSaving(false);
        console.log("Error updating impact measurements", error);
      }
    }
  };

  console.log("Impact Targets", impactTargets)

  return (
    <>
      <div className="flex flex-col items-center bg-gray mx-[100px] mt">
        <div className="text-3xl font-bold text-white mt-4 bg-gra text-center font-TelegraphBold flex gap-3 items-center">
          <span>How do you record your data for {target.name}</span>{" "}
          <img className="h-20 w-20 ml-2 rounded-lg" src={target.icon} alt={target.name} />
        </div>
        <div
          style={gradientStyle}
          className={` rounded-3xl min-h-[300px] w-full mt-5`}
        >
          {impact && (
            <>
              {displayedMeasurements.map((measurement, index) => (
                <MeasurementRecords
                  key={index}
                  {...{
                    measurement,
                    displayedMeasurements,
                    setDisplayedMeasurements,
                    clearGoal,
                    setClearGoal,
                  }}
                />
              ))}
            </>
          )}
        </div>
        <div className="w-full flex justify-end my-4">
          <button
            className={` bg-custom-green px-10 py-1 rounded-full text-black font-bold`}
            disabled={saving}
            onClick={handleNext}
          >
            <span className="">
              {finished ? `${saving ? "Saving" : "Finish" }` : `${saving ? "Saving" : "Next" }`}
              </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TargetRecordsCard;
