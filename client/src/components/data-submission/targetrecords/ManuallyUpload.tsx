import React, { FC } from "react";
import { Metric } from "../../../utils/types";
import JobTrainingProgram from "./metricsForms/no-poverty/JobTrainingProgram";
import MircroloansProgram from "./metricsForms/no-poverty/MircroloansProgram";
import PeopleAssistedOutOfPoverty from "./metricsForms/no-poverty/PeopleAssistedOutOfPoverty";

type Props = {
  setUploadManually: (manually: boolean) => void;
  setManualData: (manualData: any) => void;
  metric: Metric;
};

const ManuallyUpload: FC<Props> = ({
  setUploadManually,
  setManualData,
  metric,
}) => {
  return (
    <div className="fixed z-100 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={`bg-gray-900 rounded w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8`}
        >
          <div className="flex">
            <div className="flex justify-start w-[100px]">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              {metric.key === "jobTraining" && (
                <JobTrainingProgram {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "microloans" && (
                <MircroloansProgram {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "peopleAssisted" && (
                <PeopleAssistedOutOfPoverty
                  {...{ setManualData, setUploadManually }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuallyUpload;
