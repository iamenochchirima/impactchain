import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import SDGCard from "./comps/SDGCard";
import { RootState } from "../../../../redux/store";
import { TargetOption, targetOptions } from "../../../../data/constants";
import STTargetCard from "./comps/STTargetCard";

const ESGs = () => {
  const { userRecord, impactTargets } = useSelector(
    (state: RootState) => state.app
  );
  const [selectedSDGs, setSelectedSDGs] = useState<TargetOption[]>([]);
  const [unselectedSDGs, setUnselectedSDGs] = useState<TargetOption[]>([]);
  const [selectedTargets, setSelectedTargets] = useState<TargetOption[]>([]);

  useEffect(() => {
    if (impactTargets && userRecord) {
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
        <h3 className="font-NeueMachinaUltrabold text-xl">Chosen SDGs</h3>
          <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-5 rounded-3xl mb-10 mr-20 ">
            {selectedSDGs.map((sdg) => (
              <SDGCard key={sdg.id} {...{ sdg }} />
            ))}
          </div>
        </div>
        <div className=" h-screen  mt-5  bg-[#202020] rounded-2xl p-5">
          <h3 className="font-NeueMachinaUltrabold text-xl">Select New SDGs</h3>
          <div className="grid grid-cols-6 gap-4 mt-6 bg-black p-5 rounded-3xl mb-10 mr-20 ">
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
            className="bg-custom-green rounded-3xl px-5 py-2 text-black"
            onClick={() => console.log("Save")}
          >
            Add New
          </button>
        </div>
      </div>
    </div>
  );
};

export default ESGs;
