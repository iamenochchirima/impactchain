import React, { useEffect, useState } from "react";
import TargetCard from "./TargetCard";
import {
  setDataComponent,
  setUserRecord,
} from "../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import { TargetOption, targetOptions } from "../../data/constants";
import { RootState } from "../../redux/store";
import { useAuth } from "../../hooks/AppContext";
import {
  ImpactTarget as ImpactTargetType,
  UserRecord,
} from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";

const ImpactTarget = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);
  const { dataActor } = useAuth();
  const [selectedTargets, setSelectedTargets] = useState<TargetOption[] >(
    []
  );
  const [initialTargets, setInitialTargets] = useState<number[]>([]);

  useEffect(() => {
    if (userRecord) {
      const _innerTargets = Array.isArray(userRecord.impactTargets[0])
        ? userRecord.impactTargets[0]
        : [];
      const _sortedTargets = [..._innerTargets].sort(
        (a, b) => Number(a.id) - Number(b.id)
      );
      if (Array.isArray(_sortedTargets[0])) {
        setInitialTargets(_sortedTargets[0].map((t) => Number(t.id)));
      } else {
        setInitialTargets(_sortedTargets.map((t) => Number(t.id)));
      }
    }
  }, [userRecord]);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(setDataComponent("ProfileLogo"));
  };

  const handleSubmit = async () => {
    if (selectedTargets) {
      const finalTargets = selectedTargets.map((t) => Number(t.id));
      if (JSON.stringify(finalTargets) === JSON.stringify(initialTargets)) {
        dispatch(setDataComponent("Measurements"));
        return;
      }
    }
    if (selectedTargets && dataActor && userRecord) {
      try {
        setLoading(true);

        const tragets: ImpactTargetType[] = selectedTargets.map((target) => {
          const existingTargets = userRecord.impactTargets[0];

          if (existingTargets) {
            const existingTarget = existingTargets.find(
              (t) => t.id === BigInt(target.id)
            );
            if (existingTarget) {
              return existingTarget;
            } else {
              return {
                id: BigInt(target.id),
                name: target.name,
                measurements: [],
                targetRecords: [],
              };
            }
          } else {
            return {
              id: BigInt(target.id),
              name: target.name,
              measurements: [],
              targetRecords: [],
            };
          }
        });
        const data: UserRecord = {
          ...userRecord,
          impactTargets: [tragets],
        };
        dispatch(setUserRecord(data));
        await dataActor.addUserRecord(data);
        dispatch(setDataComponent("Measurements"));
        dispatch(setUserRecord(data));
        setLoading(false);
      } catch (error) {
        console.log("Error adding impact targets", error);
      }
    } else {
      setLoading(false);
      console.log("Error adding impact targets, no dataActor or userRecord");
    }
  };

  return (
    <div>
      <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
        What Impact are you targeting?
      </h3>
      <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-10 rounded-3xl mb-10">
        {targetOptions.map((target) => (
          <div
            key={target.id}
            className="rounded-lg flex items-center justify-center"
          >
            <TargetCard {...{ target, setSelectedTargets }} />
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-20 mb-10  ">
        <div className="flex cursor-pointer relative h-24 rounded-lg items-end  mt-10 ">
          <img
            src="/smiley.svg"
            alt="smiley-icon"
            className="w-14 h-14 mr-2 mb-1"
          />
          <div className="text-white w-[150px] bg-black rounded-3xl p-3">
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
              selectedTargets.length > 0  ? "bg-custom-green" : "bg-green-700"
            } px-10 py-1.5  rounded-full text-black font-bold`}
          >
            {loading ? "Saving..." : "Continue"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpactTarget;
