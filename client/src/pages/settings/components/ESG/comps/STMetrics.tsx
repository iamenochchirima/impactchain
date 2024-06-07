import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../../../../../redux/store";
import { ImpactTargetType } from "../../../../../utils/types";
import Bubbles from "../../../../../components/Bubbles";
import { setLocalImpactTargets, setLocalRecord, setShowThisModal } from "../../../../../redux/slices/app";
import { AiOutlineClose } from "react-icons/ai";
import TargetsMetricCard from "./TargetsMetricCard";



const bubbleText =
  "Under each SDG, tick the boxes next to, up to three metrics you plan to monitor. You can change your selections at any time to reflect shifts in your sustainability focus";

const STMetrics = () => {
  const { metricsUpdated, localImpactTargets, localRecord } = useSelector(
    (state: RootState) => state.app
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTargets, setDisplayedTargets] = useState<ImpactTargetType[]>(
    []
  );
  const [saving, setSaving] = useState(false);
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);


  const dispatch = useDispatch();

  useEffect(() => {
    if (localImpactTargets) {
      const end = currentIndex + itemsPerPage;
      const _sortedTargets = [...localImpactTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setDisplayedTargets(_sortedTargets.slice(currentIndex, end));
    } else {
      console.log("No localImpactTargets");
    }
  }, [currentIndex, localImpactTargets]);

  
  useEffect(() => {
    if (localImpactTargets) {
      setTotalPages(Math.ceil(localImpactTargets.length / itemsPerPage));
    } else {
      console.log("No localImpactTargets");
    }
  }, [ localImpactTargets]);


  useEffect(() => {
    setCurrentPage(Math.floor(currentIndex / itemsPerPage) + 1);
  }, [currentIndex]);

  if (!localImpactTargets || !localImpactTargets[0]) {
    return null;
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, localImpactTargets.length - 1)
    );
  };

  const handleCancell = () => {
    dispatch(setLocalImpactTargets(null));
    dispatch(setLocalRecord(null));
  };


  const handleSave = async () => {
    try {
      setSaving(true);
      if (localRecord) {
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
          !(currentIndex + itemsPerPage >= localImpactTargets.length)
        ) {
          handleNext();
          setSaving(false);
          return;
        }
        dispatch(setLocalRecord(localRecord));
        setSaving(false);
        if (currentIndex + itemsPerPage < localImpactTargets.length) {
          handleNext();
          return;
        }
        if (currentIndex + itemsPerPage >= localImpactTargets.length) {
          dispatch(setShowThisModal("targets"));
          return;
        }
      }
    } catch (error) {
      console.error("Error saving localRecord", error);
      setSaving(false);
    }
  };

  const handleCancel = () => {
    dispatch(setShowThisModal(""));
  };

  return (
    <div className="fixed z-50 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={
            "bg-custom-gray rounded-xl w-3/4 px-6 py-2 min-w-min max-w-full space-y-8"
          }
        >
          <div className="w-full justify-center items-center flex flex-col">
            <div className="flex justify-between w-full items-center">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />

              <button onClick={handleCancel} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <div>
              <h3 className="md:text-xl text-3xl font-bold text-white mt-4 text-center font-NeueMachinaUltrabold">
                What metrics do you need to measure?
              </h3>
              <div className="grid grid-cols-3 gap-4 mt-5">
                {displayedTargets.map((target: ImpactTargetType) => (
                  <TargetsMetricCard
                    key={target.id}
                    {...{
                      target,
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between my-5 items-center">
                <Bubbles {...{ bubbleText }} />
                <div className="grid grid-cols-4 ">
                  <button
                    onClick={currentIndex === 0 ? handleCancell : handlePrevious}
                    className={` bg-custom-green px-2 py-1.5 rounded-xl text-sm text-black font-TelegraphUltraLight font-bold`}
                  >
                    {currentIndex === 0 ? "Cancel" : "Previous"}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default STMetrics;
