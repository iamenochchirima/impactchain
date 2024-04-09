import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ChartThree from "./Charts/ChartThree";

const TartgetsCharts = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);

  return (
    <div
      //  style={gridStyle}
      className="flex flex-wrap -m-2"
    >
      {userRecord?.impactTargets.map((target, index) => (
        <div
          className="p-2 flex-col w-full sm:w-1/2 lg:w-1/4 xl:w-1/4"
          key={index}
        >
          <ChartThree {...{target}} />
        </div>
      ))}
    </div>
  );
};

export default TartgetsCharts;
