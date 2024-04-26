import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ALMetricCard from "./ALMetricCard";
import { TargetOption, targetOptions } from "../../../data/constants";
import { AiOutlineClose } from "react-icons/ai";
import { CategoryType } from "../types";
import { ImpactTargetType } from "../../../utils/types";
import { setCategoryImpactTargets, setReportPromptModal } from "../../../redux/slices/app";

type Props = {
  setOpenModal: (value: boolean) => void;
  category: CategoryType;
};

const Metrics: FC<Props> = ({ setOpenModal, category }) => {
  const dispatch = useDispatch();
  const { impactTargets } = useSelector((state: RootState) => state.app);
  const [targets, setTargets] = useState<TargetOption[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(targets.length / itemsPerPage);
  const [displayedTargets, setDisplayedTargets] = useState<TargetOption[]>([]);

  useEffect(() => {
    if (impactTargets) {
      const matchingTargetsOptions = targetOptions.filter((option) =>
        impactTargets.some(
          (target) =>
            target.name === option.name && option.category === category.category
        )
      );

      const _sorted = [...matchingTargetsOptions].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setTargets(_sorted);

      const matchingTargets = matchingTargetsOptions
        .map((option) =>
          impactTargets.find(
            (target) =>
              target.name === option.name &&
              option.category === category.category
          )
        )
        .filter((target): target is ImpactTargetType => target !== undefined);

      dispatch(
        setCategoryImpactTargets({ categoryImpactTargets: matchingTargets })
      );
    }
  }, [impactTargets, category]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedTargets(targets.slice(start, end));
  }, [currentPage, targets]);

  const handlePrevious = () => {
    setCurrentPage((current) => Math.max(current - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((current) => Math.min(current + 1, totalPages));
  };


  const handleGenerate = () => {
    dispatch(setReportPromptModal(true))
  };

  if (!impactTargets || !impactTargets) {
    return null;
  }

  return (
    <div className="fixed z-40 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="bg-custom-gray fixed rounded-xl w-3/4 px-6 py-2 min-w-min max-w-full space-y-8">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
                {category.title}s
              </h3>
              <button onClick={() => setOpenModal(false)} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <div className="w-full">
              {displayedTargets.length > 0 ? (
                <>
                  <div className="grid grid-cols-3 gap-4 mt-5">
                    {displayedTargets.map((target: TargetOption) => (
                      <ALMetricCard key={target.id} {...{ target, category }} />
                    ))}
                  </div>
                  <div className="flex justify-center gap-2 items-center mt-4">
                    <div className="">
                      {currentPage > 1 && (
                        <button
                          onClick={handlePrevious}
                          className=" px-4 py-2 text-custom-green"
                        >
                          Previous
                        </button>
                      )}
                    </div>

                    <span className="text-white">
                      {currentPage} of {totalPages}
                    </span>

                    <div className="">
                      {currentPage < totalPages && (
                        <button
                          onClick={handleNext}
                          disabled={currentPage >= totalPages}
                          className=" px-4 py-2 text-custom-green"
                        >
                          Next
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-white text-center my-40">
                  <h3>No {category.category} metrics found</h3>
                </div>
              )}
              <div className="w-full flex  justify-center items center">
                <button 
                onClick={handleGenerate}
                className="bg-custom-green text-black rounded px-2 py-2 w-3/4"
                >Generate Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
