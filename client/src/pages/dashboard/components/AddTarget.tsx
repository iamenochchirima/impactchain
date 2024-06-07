import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../../hooks/AppContext";
import { TargetOption, targetOptions } from "../../../data/constants";
import {
  setLocalImpactTargets,
  setLocalRecord,
  setShowThisModal,
} from "../../../redux/slices/app";
import { ImpactTargetType } from "../../../utils/types";
import STTargetCard from "../../settings/components/ESG/comps/STTargetCard";
import { getTargetMetrics } from "../../../utils/targets";
import { UserRecord } from "../../../hooks/declarations/data/data.did";
import { RootState } from "../../../redux/store";

const AddTarget = () => {
  const { userRecord, impactTargets, showThisModal, localImpactTargets } =
    useSelector((state: RootState) => state.app);
  const { dataActor } = useAuth();
  const [unselectedSDGs, setUnselectedSDGs] = useState<TargetOption[]>([]);
  const [selectedTargets, setSelectedTargets] = useState<TargetOption[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (impactTargets && userRecord) {
      dispatch(setLocalRecord(userRecord));
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
    <div className="fixed z-50 inset-0 text-cyan-700 overflow-y-auto bg-opacity-75 bg-black ">
      <div className=" flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={` llg:h-screen flex flex-col justify-center items-center  w-full rounded-xl px-3 py-2 space-y-8`}
        >
          <div className="flex">
              <div className="w-full justify-center items-center flex flex-col">
                <div className="  bg-[#202020] rounded-2xl pb-5 px-5">
                  <div className="flex justify-between w-full items-center">
                    <img
                      src="i.c.logo2.png"
                      alt="logo-image"
                      className="h-20 w-20"
                    />
                    <button onClick={handleCancel} className="">
                      <AiOutlineClose size={30} className="text-white" />
                    </button>
                  </div>
                  <h3 className="font-TelegraphBold text-xl text-white my-5">
                    Select New SDGs
                  </h3>
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
                    className={`${
                      selectedTargets.length === 0
                        ? "bg-gray-500"
                        : "bg-custom-green"
                    }  rounded-xl p-1.5 text-black`}
                    onClick={handleSubmit}
                    disabled={loading || selectedTargets.length === 0}
                  >
                    {loading ? "Saving..." : "Add New SDGs"}
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTarget;
