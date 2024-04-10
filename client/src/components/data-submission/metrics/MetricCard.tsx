import { FC, useEffect, useState } from "react";
import { targetOptions } from "../../../data/constants";
import MetricItem from "./MetricItem";
import {
  ImpactTarget,
  Metric,
  UserRecord,
} from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type Props = {
  target: ImpactTarget;
  record: UserRecord | null;
  setRecord: (record: UserRecord) => void;
  setTargets: (targets: ImpactTarget[]) => void;
  targets: ImpactTarget[];
};

const MetricCard: FC<Props> = ({
  target,
  setRecord,
  record,
  setTargets,
  targets,
}) => {
  const metric = targetOptions.find((t) => t.id === Number(target.id));
  const [localTarget, setLocalTarget] = useState<ImpactTarget>(target);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(target.metrics.map((m) => m.name));
  const existingmetrics = target.metrics




  useEffect(() => {

    const _updatedmetrics: Metric[] = selectedMetrics.map((m) => {
      const existing = existingmetrics.find((em) => em.name === m);
      if (existing) {
        return existing;
      }
      const newmetric: Metric = {
        name: m,
        documents: [],
        goal: [],
        iotDevice: [],
      };
      return newmetric;
    });

    const updatedTarget: ImpactTarget = {
      ...localTarget,
      metrics: _updatedmetrics,
    };
    setLocalTarget(updatedTarget);
    const updatedTargets = targets.map((t) =>
      t.id === target.id ? updatedTarget : t
    );
    setTargets(updatedTargets);
    if (record) {
      const updatedRecord: UserRecord = {
        ...record,
        impactTargets: updatedTargets,
      };
      setRecord(updatedRecord);
      
    }
  }, [selectedMetrics  ]);


  return (
    <div className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center  ">
      <div className="flex items-center justify-center">
        <img
          src={metric?.icon}
          alt={target.name}
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {metric?.metrics.map((m) => (
          <MetricItem key={m.id} {...{ m, setSelectedMetrics , selectedMetrics}} />
        ))}
      </div>
    </div>
  );
};

export default MetricCard;
