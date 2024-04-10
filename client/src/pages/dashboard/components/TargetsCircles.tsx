import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CircleItem from "./CircleItem";
import { IoMdAdd } from "react-icons/io";


const TargetsCircles = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);
  return (
    <div>
      <ul className="flex items-center flex-wrap  mb-5">
        {userRecord?.impactTargets.map((target, index) => (
          <CircleItem key={index} target={target} />
        ))}
          <li className="flex flex-col w-1/6 items-center gap-2">
            <h3 className="text-custom-green">Add Target</h3>
          <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
            <IoMdAdd size={30} className="w-14 h-14" />
            </div>
          </li>
      </ul>
    </div>
  );
};

export default TargetsCircles;
