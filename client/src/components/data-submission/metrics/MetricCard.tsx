import { FC, useEffect, useState } from "react";
import { targetOptions } from "../../../data/constants";
import MetricItem from "./MetricItem";
import { UserRecord } from "../../../hooks/declarations/data/data.did";
import { ImpactTargetType, Metric } from "../../../utils/types";
import { getTargetMetrics } from "../../../utils/targets";
import { setImpactTargets } from "../../../redux/slices/app";
import { useDispatch } from "react-redux";


type Props = {
  target: ImpactTargetType;
  record: UserRecord | null;
  setRecord: (record: UserRecord) => void;
  setTargets: (targets: ImpactTargetType[]) => void;
  targets: ImpactTargetType[];
};

export type SeletectedMetric = {
  name: string;
  key: string;
};

const MetricCard: FC<Props> = ({
  target,
  setRecord,
  record,
  setTargets,
  targets,
}) => {
  const targetOP = targetOptions.find((t) => t.id === Number(target.id));
  const [localTarget, setLocalTarget] = useState<ImpactTargetType>(target);
  const [selectedMetrics, setSelectedMetrics] = useState<SeletectedMetric[]>(
    target.metrics.map((m) => {
      return {
        name: m.name,
        key: m.key,
      };
    })
  );
  const dispatch = useDispatch();
  const existingmetrics = target.metrics;

  useEffect(() => {
      if (!record) return 
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
        ...localTarget,
        metrics: _updatedmetrics,
      };
      setLocalTarget(updatedTarget);
      const updatedTargets = targets.map((t) =>
        t.id === target.id ? updatedTarget : t
      );
      setTargets(updatedTargets);
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
    <div
    className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center "
    style={{ boxShadow: `0 4px 6px ${targetOP?.color}` }}
  >
      <div className="flex items-center justify-center">
        <img
          src={targetOP?.icon}
          alt={target.name}
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {targetOP?.metrics.map((m) => (
          <MetricItem
            key={m.id}
            {...{ m, setSelectedMetrics, selectedMetrics }}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
