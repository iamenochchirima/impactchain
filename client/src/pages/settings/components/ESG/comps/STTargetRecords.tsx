import React, { FC, useEffect, useState } from "react";
import { TargetOption, targetOptions } from "../../../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setNextTarget,
  setPreviousTarget,
} from "../../../../../redux/slices/app";
import { RootState } from "../../../../../redux/store";
import STTargetRecordsCard from "./STTargetRecordsCard";


export const STTargetRecords= () => {

  const { localImpactTargets } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const { nextTarget, previousTarget } = useSelector(
    (state: RootState) => state.app
  );
  const [targets, setTargets] = useState<TargetOption[]>([]);
  const [displayedTargets, setDisplayedTargets] = useState<TargetOption[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    if (localImpactTargets) {
      const filteredTargets = localImpactTargets.filter(
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
  }, [localImpactTargets]);

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
      dispatch(setPreviousTarget(false));
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
    <div className="fixed z-50 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={
            "bg-custom-gray rounded-xl w-3/4 px-6 py-2 min-w-min max-w-full space-y-8"
          }
        >
          <div className="w-full justify-center items-center flex flex-col">
            <div>
              {localImpactTargets && (
                <div className="flex flex-col justify-center items-center">
                  {displayedTargets.map((target, index) => {
                    return (
                      <STTargetRecordsCard
                        {...{
                          target,
                          localImpactTargets,
                          currentIndex,
                          finished,
                        }}
                        key={index}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
