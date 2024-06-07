import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import CircleItem from "./CircleItem";
import { IoMdAdd } from "react-icons/io";
import AddTarget from "./AddTarget";
import { setShowThisModal } from "../../../redux/slices/app";
import STMetrics from "../../settings/components/ESG/comps/STMetrics";
import { STTargetRecords } from "../../settings/components/ESG/comps/STTargetRecords";
import SDGDetails from "./SDGDetails";


const TargetsCircles = () => {
  const { impactTargets, showThisModal } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setShowThisModal("addTarget"));
  }

  return (
    <div>
      <ul className="flex items-center flex-wrap">
        {impactTargets?.map((target, index) => (
          <CircleItem key={index} target={target} />
        ))}
          <li className="flex flex-col w-1/6 items-center gap-2">
            <h3 className="text-custom-green">Add Target</h3>
          <div onClick={handleClick} className="bg-custom-gray hover:cursor-pointer p-3 rounded-full border-x border-y border-custom-green">
            <IoMdAdd size={30} className="w-14 h-14" />
            </div>
          </li>
      </ul>
      {showThisModal === "addTarget" && <AddTarget />}
      {showThisModal === "metrics" && <STMetrics />}
      {showThisModal === "targets" && <STTargetRecords />}
      {showThisModal === "SDGDetails" && <SDGDetails />}
    </div>
  );
};

export default TargetsCircles;
