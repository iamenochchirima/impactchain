import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import MetricCard from "./MetricCard";
import {
  ImpactTarget,
  UserRecord,
} from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { useAuth } from "../../../hooks/AppContext";
import {
  setDataComponent,
  setMetricsUpdated,
  setUserRecord,
} from "../../../redux/slices/app";
import { toast } from "react-toastify";

const Metrics = () => {
  const { dataActor } = useAuth();
  const { userRecord, metricsUpdated } = useSelector(
    (state: RootState) => state.app
  );
  const [record, setRecord] = useState<UserRecord | null>(null);
  const [targets, setTargets] = useState<ImpactTarget[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTargets, setDisplayedTargets] = useState<ImpactTarget[]>([]);
  const [saving, setSaving] = useState(false);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(targets.length / itemsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userRecord) {
      setRecord(userRecord);
      const _sortedTargets = [...userRecord.impactTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setTargets(_sortedTargets);
    }
  }, [userRecord]);

  useEffect(() => {
    const end = currentIndex + itemsPerPage;
    setDisplayedTargets(targets.slice(currentIndex, end));
  }, [currentIndex, targets]);

  useEffect(() => {
    setCurrentPage(Math.floor(currentIndex / itemsPerPage) + 1);
  }, [currentIndex]);

  if (!userRecord || !userRecord.impactTargets[0]) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleBack = () => {
    dispatch(setDataComponent("ImpactTarget"));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, targets.length - 1)
    );
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      if (record) {
        const allMetricsSelected = displayedTargets.every(
          (target) => target.metrics.length > 0
        );
        if (!allMetricsSelected) {
          toast.warning(
            "Please select at least one metric for each target before continuing.",
            {
              position: "top-center",
              autoClose: 5000,
            }
          );
          setSaving(false);
          return;
        }
        if (
          !metricsUpdated &&
          !(currentIndex + itemsPerPage >= targets.length)
        ) {
          handleNext();
          setSaving(false);
          return;
        }
        await dataActor?.updateUserRecord(record);
        dispatch(setUserRecord(record));
        setSaving(false);
        dispatch(setMetricsUpdated(false));
        if (currentIndex + itemsPerPage < targets.length) {
          handleNext();
          return;
        }
        if (currentIndex + itemsPerPage >= targets.length) {
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
        What metrics do you need to measure?
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {displayedTargets.map((target: ImpactTarget) => (
          <MetricCard
            key={target.id}
            {...{ target, record, setRecord, setTargets, targets }}
          />
        ))}
      </div>
      <div className="flex justify-between my-5 items-center">
        <button
          onClick={currentIndex === 0 ? handleBack : handlePrevious}
          className={` bg-custom-green px-10 py-1 rounded-full text-black font-bold`}
        >
          {currentIndex === 0 ? "Back" : "Previous"}
        </button>
        <div>
          <span className="text-custom-green">
            {currentPage} of {totalPages}
          </span>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`bg-custom-green px-10 py-1.5 rounded-full text-black font-bold`}
        >
          {saving ? "Saving..." : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default Metrics;
