import React, { useEffect, useState } from "react";
import { TargetOption, targetOptions } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TargetRecordsCard from "./TargetRecordsCard";
import { setNextTarget } from "../../../redux/slices/app";

export const TargetRecords = () => {
  const dispatch = useDispatch();
  const { impactTargets, nextTarget } = useSelector(
    (state: RootState) => state.app
  );
  const [targets, setTargets] = useState<TargetOption[]>([]);
  const [displayedTargets, setDisplayedTargets] = useState<TargetOption[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [lastOfLast, setLastOfLast] = useState(false);

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
  }, [nextTarget, targets, dispatch]);

  useEffect(() => {
    if ((currentIndex === targets.length - 1) && lastOfLast) {
      setFinished(true);
    } else {
      setFinished(false);
    }
  }, [currentIndex, targets, lastOfLast]);

  return (
    <div>
      {impactTargets && (
        <>
          {displayedTargets.map((target, index) => {
            return (
              <TargetRecordsCard
                {...{ target, impactTargets, finished, setLastOfLast }}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
};
