import React, { useEffect, useState } from "react";
import { TargetOption, targetOptions } from "../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import TargetRecordsCard from "./TargetRecordsCard";
import { setDataComponent, setNextTarget, setTargetRecord } from "../../../redux/slices/app";
import { ImpactTarget } from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

export const TargetRecords = () => {
  const dispatch = useDispatch();
  const { userRecord, nextTarget } = useSelector((state: RootState) => state.app);
  const [targets, setTargets] = useState<TargetOption[]>([]);
  const [displayedTargets, setDisplayedTargets] = useState<TargetOption[]>([]);
  const [impactTargets, setImpactTargets] = useState<ImpactTarget[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (userRecord) {
      const _innerTargets =userRecord.impactTargets

        const filteredTargets = _innerTargets.filter(
          (target) => target.measurements?.length > 0
        );
        const _sortedTargets = [...filteredTargets].sort(
          (a, b) => Number(a.id) - Number(b.id)
        );
        setImpactTargets(_sortedTargets);
        const matchingTargetOption = targetOptions.filter((targetOption) => {
          return _sortedTargets.some(
            (target) => Number(target.id) === targetOption.id
          );
        });
        setTargets(matchingTargetOption);
    }
  }, [userRecord]);

  useEffect(() => {
    setDisplayedTargets(targets.slice(currentIndex, currentIndex + 1));
  }, [currentIndex, targets]);

  useEffect(() => {
    if (nextTarget) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, targets.length - 1));
      dispatch(setNextTarget(false));
    }
  }, [nextTarget]);

 useEffect(() => {
    if (currentIndex === targets.length - 1) {
      setFinished(true);
    } else {
      setFinished(false);
    }
  }, [currentIndex]);

  const handleBack = () => {
    dispatch(setDataComponent("Measurements"));
    dispatch(setTargetRecord({ targetRecord: null }));
  };

  return (
    <div>
      {displayedTargets.map((target, index) => {
        return <TargetRecordsCard {...{ target, impactTargets, finished }} key={index} />;
      })}
      
    </div>
  );
};
