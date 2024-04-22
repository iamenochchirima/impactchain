import React, { FC, useEffect, useState } from "react";
import { IOTDevice } from "../../../hooks/declarations/data/data.did";
import UploadDocs from "./UploadDocs";
import LinkDevice from "./LinkDevice";
import { Metric } from "../../../utils/types";
import ManuallyUpload from "./ManuallyUpload";

type Props = {
  metric: Metric;
  displayedMetrics: Metric[];
  setDisplayedMetrics: (metric: Metric[]) => void;
  clearGoal: boolean;
  setClearGoal: (clearGoal: boolean) => void;
};

const MetricRecords: FC<Props> = ({
  metric,
  displayedMetrics,
  setDisplayedMetrics,
  clearGoal,
  setClearGoal,
}) => {
  const [uploadDocs, setUploadDocs] = useState<boolean>(false);
  const [linkDevice, setLinkDevice] = useState<boolean>(false);
  const [uploadManually, setUploadManually] = useState<boolean>(false);
  const [manualData, setManualData] = useState<any | null>(null);
  const [goal, setGoal] = useState<string>("");
  const [iotDevice, setIotDevice] = useState<IOTDevice | null>(null);
  const [docs, setDocsUrls] = useState<string[] | null>(null);

  useEffect(() => {
    setUploadDocs(false);
    setLinkDevice(false);
    setUploadManually(false);
    setIotDevice(null);
    setDocsUrls(null);
    setManualData(null);
  }, [metric]);

  useEffect(() => {
    if (clearGoal) {
      setGoal("");
      setClearGoal(false);
    }
  }, [clearGoal]);

  useEffect(() => {
    if (docs) {
      const updatedMetric: Metric = {
        ...metric,
        documents: docs,
      };
      setDisplayedMetrics(
        displayedMetrics.map((m) =>
          m.name === metric.name ? updatedMetric : m
        )
      );
    }
    if (goal !== "") {
      const updatedMetric: Metric = {
        ...metric,
        goal: [goal],
      };
      setDisplayedMetrics(
        displayedMetrics.map((m) =>
          m.name === metric.name ? updatedMetric : m
        )
      );
    }
  }, [docs, goal]);

  useEffect(() => {
    if (manualData) {
      const updatedMetric: Metric = {
        ...metric,
        data: [manualData],
      };
      setDisplayedMetrics(
        displayedMetrics.map((m) =>
          m.name === metric.name ? updatedMetric : m
        )
      );
    }
  }, [manualData]);

  useEffect(() => {
    if (iotDevice) {
      const updatedMetric: Metric = {
        ...metric,
        iotDevice: [iotDevice],
      };
      const updatedMetrics = displayedMetrics.map((m) =>
        m.name === metric.name ? updatedMetric : m
      );
      setDisplayedMetrics(updatedMetrics);
    }
  }, [iotDevice]);

  return (
    <div className="text-white px-5 py-3">
      <h1>{metric.name}</h1>
      <div className="mt-3 flex items-center justify-between">
        <button
          disabled={docs !== null}
          onClick={() => setUploadDocs(true)}
          className="bg-white px-4 py-2 text-black rounded-3xl"
        >
          {metric.documents.length > 0
            ? "Documents uploaded"
            : "Upload your documents"}
        </button>
        <button
          onClick={() => setUploadManually(true)}
          disabled={manualData !== null}
          className="bg-white px-4 py-2 text-black rounded-3xl"
        >
          {metric.data.length > 0 ? "Data recorded" : "Record data manually"}
        </button>
        <button
          onClick={() => setLinkDevice(true)}
          className="bg-white px-4 py-2 text-black rounded-3xl"
        >
          {metric.iotDevice.length > 0
            ? "Device Linked"
            : "Link your IoT device"}
        </button>
      </div>
      <div className="w-full flex flex-col p-3 bg-gray-400  rounded-3xl mt-3">
        <label className="text-white">Your Goal</label>
        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="h-18 bg-gray-400 appearance-none border border-gray-800 p-1 rounded mt-2 outline-none"
        />
      </div>
      {uploadDocs && <UploadDocs {...{ setUploadDocs, setDocsUrls }} />}
      {linkDevice && <LinkDevice {...{ setLinkDevice, setIotDevice }} />}
      {uploadManually && <ManuallyUpload {...{ setUploadManually, setManualData, metric }} />}
    </div>
  );
};

export default MetricRecords;
