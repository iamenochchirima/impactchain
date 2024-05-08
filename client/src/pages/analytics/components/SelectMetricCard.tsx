import React, { FC, useState } from "react";
import { Metric } from "../../../utils/types";

const SelectMetricCard = ({ setSelectedMetrics, metric }) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);

  const handleClicked = () => {
    setSelectedButton(!selectedButton);
    if (!selectedButton) {
      setSelectedMetrics((prev) => [...(prev || []), metric]);
    } else {
      setSelectedMetrics((prev) =>
        (prev || []).filter((t) => t.key !== metric.key)
      );
    }
  };
  return (
    <button
      className={`${
        selectedButton
          ? "bg-custom-green text-black hover:bg-green-600"
          : "bg-white text-black hover:bg-green-200"
      }   duration-300 text-sm font-semibold p-2 rounded-lg `}
      onClick={handleClicked}
    >
      <span>{metric.name}</span>
    </button>
  );
};

export default SelectMetricCard;
