import React, { FC, useEffect, useState } from "react";
import {
  IOTDevice,
} from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import UploadDocs from "./UploadDocs";
import LinkDevice from "./LinkDevice";
import { Metric } from "../../../utils/types";

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
  const [goal, setGoal] = useState<string>("");
  const [iotDevice, setIotDevice] = useState<IOTDevice | null>(null);
  const [docs, setDocsUrls] = useState<string[] | null>(null);

  useEffect(() => {
    setUploadDocs(false);
    setLinkDevice(false);
    setIotDevice(null);
    setDocsUrls(null);
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
    </div>
  );
};

export default MetricRecords;
