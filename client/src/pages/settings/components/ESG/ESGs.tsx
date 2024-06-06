import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import SDGCard from "./comps/SDGCard";
import { RootState } from "../../../../redux/store";
import { TargetOption, targetOptions } from "../../../../data/constants";
import STTargetCard from "./comps/STTargetCard";
import { getTargetMetrics } from "../../../../utils/targets";
import { UserRecord } from "../../../../hooks/declarations/data/data.did";
import { useAuth } from "../../../../hooks/AppContext";
import { ImpactTargetType } from "../../../../utils/types";
import STMetrics from "./comps/STMetrics";
import { STTargetRecords } from "./comps/STTargetRecords";
import { setLocalImpactTargets, setLocalRecord, setShowThisModal } from "../../../../redux/slices/app";

const ESGs = () => {
  const { userRecord, impactTargets, showThisModal, localImpactTargets } = useSelector(
    (state: RootState) => state.app
  );
  const { dataActor } = useAuth();
  const [selectedSDGs, setSelectedSDGs] = useState<TargetOption[]>([]);
  const [unselectedSDGs, setUnselectedSDGs] = useState<TargetOption[]>([]);
  const [selectedTargets, setSelectedTargets] = useState<TargetOption[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (impactTargets && userRecord) {
      dispatch(setLocalRecord(userRecord));
      const metchingTargets = targetOptions.filter((option) =>
        impactTargets.some((target) => target.id === option.id)
      );
      setSelectedSDGs(metchingTargets);
      const unselected = targetOptions.filter(
        (option) => !impactTargets.some((target) => target.id === option.id)
      );
      setUnselectedSDGs(unselected);
    }
  }, [impactTargets, userRecord]);

  const handleSubmit = async () => {
    if (selectedTargets && dataActor && userRecord) {
      try {
        setLoading(true);
        const targets: ImpactTargetType[] = selectedTargets.map((target) => {
          const existingTargets = localImpactTargets;

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
        const updatedImpactTargets = { ...userRecord.impactTargets };

        const impactTargetKeys = [
          "ImpactTarget1",
          "ImpactTarget2",
          "ImpactTarget3",
          "ImpactTarget4",
          "ImpactTarget5",
          "ImpactTarget6",
          "ImpactTarget7",
          "ImpactTarget8",
          "ImpactTarget9",
          "ImpactTarget10",
          "ImpactTarget11",
          "ImpactTarget12",
          "ImpactTarget13",
          "ImpactTarget14",
          "ImpactTarget15",
          "ImpactTarget16",
          "ImpactTarget17",
        ];

        targets.forEach((target) => {
          const metrics = getTargetMetrics(target);
          updatedImpactTargets[`ImpactTarget${target.id}`] = [
            {
              id: target.id,
              name: target.name,
              metrics,
            },
          ];
        });

        impactTargetKeys.forEach((key) => {
          const targetId = parseInt(key.replace("ImpactTarget", ""), 10);

          if (!selectedTargets.some((t) => t.id === targetId)) {
            updatedImpactTargets[key] = [];
          }
        });

        const data: UserRecord = {
          ...userRecord,
          impactTargets: updatedImpactTargets,
        };
        const sortedTargets = targets.sort((a, b) => a.id - b.id);
        setLocalRecord(data);
        dispatch(setLocalImpactTargets(sortedTargets));
        setSelectedTargets([]);
        dispatch(setShowThisModal("metrics"));
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

  const handleCancel = () => {
    dispatch(setShowThisModal(""));
  };

  return (
    <div>
      <div className="flex items-center gap-3 mt-10  font-TelegraphRegular">
        <img className="w-15 h-15" src="./sdg-circle.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Your ESG Goals
        </span>
      </div>

      <div className="w-full flex flex-col">
        <div className=" h-full  mt-5  bg-custom-gray rounded-2xl p-5">
          <h3 className="font-TelegraphBold text-xl">Chosen SDGs</h3>
          <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-5 rounded-3xl mb-10 mr-20 ">
            {selectedSDGs.map((sdg) => (
              <SDGCard key={sdg.id} {...{ sdg }} />
            ))}
          </div>
        </div>
        <div className=" h-screen  mt-5  bg-[#202020] rounded-2xl p-5">
          <h3 className="font-TelegraphBold text-xl">Select New SDGs</h3>
          <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-5 rounded-3xl mb-3 mr-20 ">
            {unselectedSDGs.map((target) => (
              <div
                key={target.id}
                className="rounded-lg flex items-center justify-center"
              >
                <STTargetCard {...{ target, setSelectedTargets }} />
              </div>
            ))}
          </div>
          <button
            className={`${selectedTargets.length === 0 ? "bg-gray-500" : "bg-custom-green"}  rounded-xl p-1.5 text-black`}
            onClick={handleSubmit}
            disabled={loading || selectedTargets.length === 0}
          >
            {loading ? "Saving..." : "Add New SDGs"}
          </button>
        </div>
      </div>
      {showThisModal === "metrics" && <STMetrics {...{ handleCancel }} />}
      {showThisModal === "targets" && <STTargetRecords />}
    </div>
  );
};

export default ESGs;
