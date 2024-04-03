import React, { useEffect, useState } from "react";
import { TargetOption, targetOptions } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TargetRecordsCard from "./TargetRecordsCard";
import { setDataComponent, setTargetRecord } from "../../../redux/slices/app";
import { ImpactTarget } from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

export const TargetRecords = () => {
  const dispatch = useDispatch();
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [targets, setTargets] = useState<TargetOption[]>([]);
  const [displayedTargets, setDisplayedTargets] = useState<TargetOption[]>([]);
  const [impactTargets, setImpactTargets] = useState<ImpactTarget[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    if (userRecord) {
      const _innerTargets = Array.isArray(userRecord.impactTargets[0])
        ? userRecord.impactTargets[0]
        : [];
      // remove all the targets with 0 measurements
      const filteredTargets = _innerTargets.filter(
        (target) => target.measurements?.length > 0
      );
      const _sortedTargets = [...filteredTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      if (Array.isArray(_sortedTargets[0])) {
        setImpactTargets(_sortedTargets[0]);
        const matchingTargetOption = targetOptions.filter((targetOption) => {
          return _sortedTargets[0].some(
            (target) => Number(target.id) === targetOption.id
          );
        });
        setTargets(matchingTargetOption);
      } else {
        setImpactTargets(_sortedTargets);
        const matchingTargetOption = targetOptions.filter((targetOption) => {
          return _sortedTargets.some(
            (target) => Number(target.id) === targetOption.id
          );
        });
        setTargets(matchingTargetOption);
      }
    }
  }, [userRecord]);

  useEffect(() => {
    setDisplayedTargets(targets.slice(currentIndex, currentIndex + 1));
  }, [currentIndex, targets]);

  const handleSubmit = async () => {
    console.log("submitting target records");
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleBack = () => {
    dispatch(setDataComponent("Measurements"));
    dispatch(setTargetRecord({ targetRecord: null }));
  };
  const handleNext = async () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, targets.length - 1));
  };

  console.log(currentIndex);

  return (
    <div>
      {displayedTargets.map((target, index) => {
        return <TargetRecordsCard {...{ target, impactTargets }} key={index} />;
      })}
      <div className=" flex justify-center items-center gap-5">
        <button onClick={handleBack}>
          <span className="text-custom-green">Back</span>
        </button>
        {currentIndex > 0 && (
          <button onClick={handlePrevious}>
            <span className="text-custom-green">Previous</span>
          </button>
        )}

        {currentIndex === targets.length - 1 && (
          <button
            onClick={handleSubmit}
            className={` ${
              uploaded ? "bg-custom-green" : "bg-green-700"
            } px-10 py-1.5  rounded-full text-black font-bold`}
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        )}

        {currentIndex < targets.length - 1 && (
          <button onClick={handleNext}>
            <span className="text-custom-green">Next</span>
          </button>
        )}
      </div>
    </div>
  );
};
