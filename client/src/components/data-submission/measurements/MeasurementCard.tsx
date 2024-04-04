import { FC, useEffect, useState } from "react";
import { targetOptions } from "../../../data/constants";
import MeasurementItem from "./MeasurementItem";
import {
  ImpactTarget,
  Measurement,
  UserRecord,
} from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type Props = {
  target: ImpactTarget;
  record: UserRecord | null;
  setRecord: (record: UserRecord) => void;
  setTargets: (targets: ImpactTarget[]) => void;
  targets: ImpactTarget[];
};

const MeasurementCard: FC<Props> = ({
  target,
  setRecord,
  record,
  setTargets,
  targets,
}) => {
  const measurement = targetOptions.find((t) => t.id === Number(target.id));
  const [localTarget, setLocalTarget] = useState<ImpactTarget>(target);
  const [existingMeasurements, setExistingMeasurements] = useState<Measurement[]>(target.measurements);
  const [selectedMeasurements, setSelectedMeasurements] = useState<string[]>(target.measurements.map((m) => m.name));




  useEffect(() => {

    const _updatedMeasurements: Measurement[] = selectedMeasurements.map((m) => {
      const existing = existingMeasurements.find((em) => em.name === m);
      if (existing) {
        return existing;
      }
      const newMeasurement: Measurement = {
        name: m,
        documents: [],
        goal: [],
        iotDevice: [],
      };
      return newMeasurement;
    });

    const updatedTarget: ImpactTarget = {
      ...localTarget,
      measurements: _updatedMeasurements,
    };
    setLocalTarget(updatedTarget);
    const updatedTargets = targets.map((t) =>
      t.id === target.id ? updatedTarget : t
    );
    setTargets(updatedTargets);
    if (record) {
      const updatedRecord: UserRecord = {
        ...record,
        impactTargets: [updatedTargets],
      };
      setRecord(updatedRecord);
      
    }
  }, [selectedMeasurements ]);


  return (
    <div className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center  ">
      <div className="flex items-center justify-center">
        <img
          src={measurement?.icon}
          alt={target.name}
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        {measurement?.measurements.map((m) => (
          <MeasurementItem key={m.id} {...{ m, setSelectedMeasurements , selectedMeasurements}} />
        ))}
      </div>
    </div>
  );
};

export default MeasurementCard;
