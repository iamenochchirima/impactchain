import React, { FC, useEffect, useState } from "react";
import { Metric } from "../../../utils/types";
import ManuallyUpload from "./ManuallyUpload";
import { IoCheckmark } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";

type Props = {
  metric: Metric;
  metrics: Metric[];
  setMetrics: (metric: Metric[]) => void;
};

export type ManualData = {
  goal: string;
  data: any[];
};

const MetricRecords: FC<Props> = ({
  metric,
  metrics,
  setMetrics,
}) => {
  const [uploadManually, setUploadManually] = useState<boolean>(false);
  const [manualData, setManualData] = useState<ManualData | null>(null);

  useEffect(() => {
    setUploadManually(false);
    setManualData(null);
  }, [metric]);
  

  useEffect(() => {
    if (manualData) {
      const updatedMetric: Metric = {
        ...metric,
        data: manualData.data,
        goal: [manualData.goal],
      };
      setMetrics(
        metrics.map((m) =>
          m.name === metric.name ? updatedMetric : m
        )
      );
    }
  }, [manualData]);


  return (
    <div className="text-white px-5 py-3 flex flex-col items-center border-x border-y rounded-xl border-green-200 font-TelegraphRegular">
      <h1>{metric.name}</h1>
      <div className="mt-3 flex items-center justify-between">
        <button
          onClick={() => setUploadManually(true)}
          disabled={manualData !== null}
          className=" flex items-center gap-2 bg-white px-4 py-2 text-black rounded-xl"
        >
          {metric.data.length > 0 ? <IoCheckmark size={20} /> : <IoMdAdd size={20} />}
         <span> {metric.data.length > 0 ? "Data recorded" : "Record your data"}</span>
        </button>
      </div>

      {uploadManually && <ManuallyUpload {...{ setUploadManually, setManualData, metric }} />}
    </div>
  );
};

export default MetricRecords;
