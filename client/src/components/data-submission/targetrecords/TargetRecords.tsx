import React, { useEffect, useState } from "react";
import { TargetOption, targetOptions } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TargetRecordsCard from "./TargetRecordsCard";
import { setNextTarget } from "../../../redux/slices/app";

export const TargetRecords = () => {
  const dispatch = useDispatch();
  const { impactTargets, nextTarget, previousTarget } = useSelector(
    (state: RootState) => state.app
  );
  const [targets, setTargets] = useState<TargetOption[]>([]);
  const [displayedTargets, setDisplayedTargets] = useState<TargetOption[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (impactTargets) {
      const filteredTargets = impactTargets.filter(
        (target) => target.metrics?.length > 0
      );
      const _sortedTargets = [...filteredTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      const matchingTargetOption = targetOptions.filter((targetOption) => {
        return _sortedTargets.some(
          (target) => Number(target.id) === targetOption.id
        );
      });
      setTargets(matchingTargetOption);
    }

  }, [impactTargets]);

  useEffect(() => {
    setDisplayedTargets(targets.slice(currentIndex, currentIndex + 1));
  }, [currentIndex, targets]);

  useEffect(() => {
    if (nextTarget) {
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, targets.length - 1)
      );
      dispatch(setNextTarget(false));
    }
    if (previousTarget) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      dispatch(setNextTarget(false));
    }
  }, [nextTarget, previousTarget, targets, dispatch]);


  useEffect(() => {
    if (currentIndex === targets.length - 1) {
      setFinished(true);
    } else {
      setFinished(false);
    }
  }, [currentIndex, targets]);

  return (
    <div>
      {impactTargets && (
        <>
          {displayedTargets.map((target, index) => {
            return (
              <TargetRecordsCard
                {...{ target, impactTargets, currentIndex, finished}}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
