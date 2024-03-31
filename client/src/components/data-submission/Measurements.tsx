import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MeasurementCard from "./MeasurementCard";
import {
  ImpactTarget,
  UserRecord,
} from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { useAuth } from "../../hooks/AppContext";
import { setDataComponent } from "../../redux/slices/app";

const Measurements = () => {
  const { dataActor } = useAuth();
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [record, setRecord] = useState<UserRecord | null>(null);
  const [targets, setTargets] = useState<ImpactTarget[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTargets, setDisplayedTargets] = useState<ImpactTarget[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userRecord) {
      setRecord(userRecord);
      const _innerTargets = Array.isArray(userRecord.impactTargets[0]?.[0])
        ? (userRecord.impactTargets[0]?.[0] as ImpactTarget[])
        : [];
      const _sortedTargets = [..._innerTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );

      setTargets(_sortedTargets);
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
    console.log("Back")
    dispatch(setDataComponent("ImpactTarget"));
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, targets.length - 3));
  };

  const handleSave = async () => {
    if (record) {
      await dataActor?.updateUserRecord(record);
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
      <div className="flex justify-center mt-4">
        <button
          onClick={currentIndex === 0 ? handleBack : handlePrevious}
          className="mr-2 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          {currentIndex === 0 ? "Back" : "Previous"}
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Save
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          disabled={currentIndex + 3 >= targets.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Measurements;
