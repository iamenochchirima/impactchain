import React, { useEffect, useState } from "react";
import TargetCard from "./TargetCard";
import { setDataComponent, setImpactTargets, setUserRecord } from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import { TargetOption, targetOptions } from "../../data/constants";
import { RootState } from "../../redux/store";
import { useAuth } from "../../hooks/AppContext";
import {
  UserRecord,
} from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { ImpactTargetType } from "../../utils/types";
import { getTargetMetrics } from "../../utils/targets";

const ImpactTarget = () => {
  const { dataActor } = useAuth();
  const { impactTargets, userRecord } = useSelector(
    (state: RootState) => state.app
  );
  const [selectedTargets, setSelectedTargets] = useState<TargetOption[]>([]);
  // Intial targets so that we can compare if the user has changed the targets or not before saving
  const [initialTargets, setInitialTargets] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (impactTargets && impactTargets.length > 0) {
      const _targets = impactTargets;

      const _sortedTargets = [..._targets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      setInitialTargets(_sortedTargets.map((t) => Number(t.id)));
    }
  }, [impactTargets]);

  const handleBack = () => {
    dispatch(setDataComponent("ProfileLogo"));
  };

  const handleSubmit = async () => {
    if (selectedTargets) {
      const finalTargets = selectedTargets.map((t) => Number(t.id));
      if (JSON.stringify(finalTargets) === JSON.stringify(initialTargets)) {
        dispatch(setDataComponent("Metrics"));
        return;
      }
    }
    if (selectedTargets && dataActor && userRecord) {
      try {
        setLoading(true);
        const targets: ImpactTargetType[] = selectedTargets.map((target) => {
          const existingTargets = impactTargets;

          if (existingTargets) {
            const existingTarget = existingTargets.find(
              (t) => t.id === target.id
            );
            if (existingTarget) {
              return existingTarget;
            } else {
              return {
                id: target.id,
                name: target.name,
                metrics: [],
              };
            }
          } else {
            return {
              id: target.id,
              name: target.name,
              metrics: [],
            };
          }
        });
        const updatedImpactTargets = {...userRecord.impactTargets};

        targets.forEach(target => {
         const metrics = getTargetMetrics(target);
            updatedImpactTargets[`ImpactTarget${target.id}`] = [{
                id: target.id,
                name: target.name,
                metrics: metrics,
            }];
        });
    
        const data: UserRecord = {
          ...userRecord,
          impactTargets: updatedImpactTargets,
        };
        await dataActor.addUserRecord(data);
        dispatch(setUserRecord(data));
        dispatch(setImpactTargets(targets));
        dispatch(setDataComponent("Metrics"));
        dispatch(setUserRecord(data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("Error adding impact targets", error);
      }
    } else {
      setLoading(false);
      console.log("Error adding impact targets, no dataActor or userRecord");
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold mr-12">
        What Impact are you targeting?
      </h3>
      <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-5 rounded-3xl mb-10 mr-20 ml-5">
        {targetOptions.map((target) => (
          <div
            key={target.id}
            className="rounded-lg flex items-center justify-center"
          >
            <TargetCard {...{ target, setSelectedTargets }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-10 mb-10  ">
        <div className="flex cursor-pointer relative h-24 rounded-lg items-end  mt- ">
          <img
            src="/smiley.svg"
            alt="smiley-icon"
            className="w-14 h-14 mr-2 mb-1"
          />
          <div className="text-white w-3/5 bg-black rounded-3xl p-3 ">
            <p>
              Select the Sustainable Development Goal you would like to measure
            </p>
          </div>
        </div>

        <div className=" flex justify-center items-center gap-5">
          <button onClick={handleBack}>
            <span className="text-custom-green">Back</span>
          </button>
          <button
            onClick={handleSubmit}
            className={` ${
              selectedTargets.length > 0 ? "bg-custom-green" : "bg-green-700"
            } px-10 py-1.5  rounded-full text-black font-bold mr-20`}
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactTarget;
