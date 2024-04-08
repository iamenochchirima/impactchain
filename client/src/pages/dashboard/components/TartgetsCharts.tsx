import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ChartThree from "./Charts/ChartThree";

const TartgetsCharts = () => {
  const { userRecord } = useSelector((state: RootState) => state.app);
  const [gridColumns, setGridColumns] = useState(1); // Default to 1 column

  useEffect(() => {
    if (userRecord) {
        // console.log("userRecord", userRecord.impactTargets[0]?[0]?.length)
        // if (userRecord.impactTargets[0]?.length === 1) {
        //     setGridColumns(1);
        // } else if (userRecord.targets.length === 2) {
        //     setGridColumns(2);
        // } else {
        //     setGridColumns(3);
        // }
    }
  }, [userRecord]);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
    gap: "10px",
  };
  return (
    <div style={gridStyle} className="">
      <ChartThree />
    </div>
  );
};

export default TartgetsCharts;
