import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MeasurementCard from "./MeasurementCard";
import {
  ImpactTarget,
  UserRecord,
} from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { useAuth } from "../../hooks/AppContext";
import { setDataComponent, setUserRecord } from "../../redux/slices/app";

const Measurements = () => {
  const { dataActor } = useAuth();
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [record, setRecord] = useState<UserRecord | null>(null);
  const [targets, setTargets] = useState<ImpactTarget[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTargets, setDisplayedTargets] = useState<ImpactTarget[]>([]);
  const [saving, setSaving] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userRecord) {
      setRecord(userRecord);
      const _innerTargets = Array.isArray(userRecord.impactTargets[0])
        ? userRecord.impactTargets[0]
        : [];
      const _sortedTargets = [..._innerTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );

      if (Array.isArray(_sortedTargets[0])) {
        setTargets(_sortedTargets[0]);
      } else {
        setTargets(_sortedTargets);
      }
    }
  }, [userRecord]);

  useEffect(() => {
    setDisplayedTargets(targets.slice(currentIndex, currentIndex + 3));
  }, [currentIndex, targets]);
  if (!userRecord || !userRecord.impactTargets[0]) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleBack = () => {
    dispatch(setDataComponent("ImpactTarget"));
  };
  const handleNext = async () => {
    console.log("currentIndex", currentIndex +3, targets.length)
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, targets.length - 3));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      if (record) {
        await dataActor?.updateUserRecord(record);
        dispatch(setUserRecord(record));
        setSaving(false);
        if (currentIndex + 3 < targets.length) {
         await  handleNext();
         return;
        }
        if (currentIndex + 3 >= targets.length) {
          dispatch(setDataComponent("TargetRecords"));
        }
      }
    } catch (error) {
      console.error("Error saving record", error);
      setSaving(false);
    }
  };
  

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
        What do you need to measure?
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {displayedTargets.map((target: ImpactTarget) => (
          <MeasurementCard
            key={target.id}
            {...{ target, record, setRecord, setTargets, targets }}
          />
        ))}
      </div>
      <div className="flex justify-end my-5 gap-5">
        <button
          onClick={currentIndex === 0 ? handleBack : handlePrevious}
          className="text-custom-green"
        >
          {currentIndex === 0 ? "Back" : "Previous"}
        </button>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`  bg-custom-green px-10 py-1.5  rounded-full text-black font-bold`}
        
        >
          {saving ? "Saving..." : "Continue"}
        </button>
        <button
          onClick={handleNext}
          className="text-custom-green"
          disabled={currentIndex + 3 >= targets.length}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default Measurements;
