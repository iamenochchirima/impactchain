import React, {FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { SeletectedMetric } from "../../../../../components/data-submission/metrics/MetricCard";
import STMetricItem from "./STMetricItem";
import { UserRecord } from "../../../../../hooks/declarations/data/data.did";
import { ImpactTargetType, Metric } from "../../../../../utils/types";
import { setImpactTargets } from "../../../../../redux/slices/app";
import { getTargetMetrics } from "../../../../../utils/targets";



type Props = { 
  record: UserRecord | null;
  setRecord: (record: UserRecord) => void;
  setUploadManually: (uploadManually: boolean) => void;
  uploadedMetricKey: string;
}

const STMetricCard : FC<Props> = ({record, setRecord, setUploadManually, uploadedMetricKey}) => {
  const dispatch = useDispatch();
  const { currentSDGInfo, impactTargets } = useSelector((state: RootState) => state.app);
  const [selectedMetrics, setSelectedMetrics] = useState<SeletectedMetric[]>(
    currentSDGInfo?.target.metrics.map((m) => {
      return {
        name: m.name,
        key: m.key,
      };
    }) || []
  );

  const existingmetrics =currentSDGInfo?.target.metrics;


  useEffect(() => {
    if (!record || !existingmetrics || !currentSDGInfo || !impactTargets) {
      console.error("Record, existingmetrics, currentSDGInfo or impactTargets is null");
      return;
    }
    const _updatedmetrics: Metric[] = selectedMetrics.map((m) => {
      const existing = existingmetrics.find((em) => em.name === m.name);
      if (existing) {
        return existing;
      }
      const newmetric: Metric = {
        name: m.name,
        key: m.key,
        data: [],
        documents: [],
        goal: [],
        iotDevice: [],
      };
      return newmetric;
    });

    const updatedTarget: ImpactTargetType = {
      ...currentSDGInfo.target,
      metrics: _updatedmetrics,
    };
    const updatedTargets = impactTargets.map((t) =>
      t.id === currentSDGInfo.target.id ? updatedTarget : t
    );
    dispatch(setImpactTargets(updatedTargets));
    const updatedImpactTargets = { ...record.impactTargets };
    updatedTargets.forEach((target) => {
      const metrics = getTargetMetrics(target);
      updatedImpactTargets[`ImpactTarget${target.id}`] = [
        {
          id: target.id,
          name: target.name,
          metrics: metrics,
        },
      ];
    });
    const updatedRecord: UserRecord = {
      ...record,
      impactTargets: updatedImpactTargets,
    };
    setRecord(updatedRecord);
}, [selectedMetrics]);

  return (
    <div className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center  ">
      <div className="flex items-center justify-center">
        <img
          src={currentSDGInfo?.targetOption.icon}
          alt={currentSDGInfo?.targetOption.name}
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {currentSDGInfo?.targetOption.metrics.map((m) => (
          <STMetricItem
            key={m.key}
            {...{ m, setSelectedMetrics, selectedMetrics, setUploadManually, uploadedMetricKey}}
          />
        ))}
      </div>
    </div>
  );
};

export default STMetricCard;
