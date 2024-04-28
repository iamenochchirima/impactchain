import React, { FC } from "react";
import { Metric } from "../../../utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import SelectMetricCard from "./SelectMetricCard";

type Props = {
  setSelectedMetrics: (value: Metric[]) => void;
};

const SelectMetrics: FC<Props> = ({ setSelectedMetrics }) => {
  const { allCategoryMetrics } = useSelector((state: RootState) => state.app);
  return (
    <div className="grid grid-cols-3 w-full border p-3 rounded-lg gap-3">
      {allCategoryMetrics?.map((metric, index) => (
        <SelectMetricCard {...{ metric, setSelectedMetrics }} key={index} />
      ))}
    </div>
  );
};

export default SelectMetrics;
