import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import MetricCard from "./MetricCard";
import {
  UserRecord,
} from "../../../hooks/declarations/data/data.did";
import { useAuth } from "../../../hooks/AppContext";
import {
  setDataComponent,
  setMetricsUpdated,
  setUserRecord,
} from "../../../redux/slices/app";
import { toast } from "react-toastify";
import { ImpactTargetType } from '../../../utils/types';
import Bubbles from "../../Bubbles";

const bubbleText="Under each SDG, tick the boxes next to, up to three metrics you plan to monitor. You can change your selections at any time to reflect shifts in your sustainability focus"
const Metrics = () => {
  const { dataActor } = useAuth();
  const { impactTargets, metricsUpdated , userRecord} = useSelector(
    (state: RootState) => state.app
  );
  const [record, setRecord] = useState<UserRecord | null>(null);
  const [targets, setTargets] = useState<ImpactTargetType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTargets, setDisplayedTargets] = useState<ImpactTargetType[]>([]);
  const [saving, setSaving] = useState(false);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(targets.length / itemsPerPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userRecord) {
      setRecord(userRecord);
    }
  }, [userRecord]);

  useEffect(() => {
    if (impactTargets) {
      const _sortedTargets = [...impactTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setTargets(_sortedTargets);
    }
  }, [impactTargets]);

  useEffect(() => {
    const end = currentIndex + itemsPerPage;
    setDisplayedTargets(targets.slice(currentIndex, end));
  }, [currentIndex, targets]);

  useEffect(() => {
    setCurrentPage(Math.floor(currentIndex / itemsPerPage) + 1);
  }, [currentIndex]);

  if (!impactTargets || !impactTargets[0]) {
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
      <h3 className="md:text-xl text-3xl font-bold text-white mt-4 text-center font-NeueMachinaUltrabold">
        What metrics do you need to measure?
      </h3>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {displayedTargets.map((target: ImpactTargetType) => (
          <MetricCard
            key={target.id}
            {...{ target, record, setRecord, setTargets, targets }}
          />
        ))}
      </div>
      <div className="flex justify-between my-5 items-center">
      <Bubbles {...{bubbleText}}/>
      <div className="grid grid-cols-4 ">
        <button
          onClick={currentIndex === 0 ? handleBack : handlePrevious}
          className={` bg-custom-green px-2 py-1.5 rounded-xl text-sm text-black font-TelegraphUltraLight font-bold`}
        >
          {currentIndex === 0 ? "Back" : "Previous"}
        </button>
        <div>
          <span className="text-custom-green ml-5 text-xs">
            {currentPage} of {totalPages}
          </span>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className={`bg-custom-green px-3 rounded-xl text-sm text-black font-TelegraphUltraLight font-bold`}
        >
          {saving ? "Saving..." : "Continue"}
        </button>
      </div>
      </div>
    </div>
  );
};

export default Metrics;
