import React from "react";
import { getReportTimeTitle } from "./utils/utils";

interface ReportPeriodProps {
  periodOfTime?: string;
}

const ReportPeriod: React.FC<ReportPeriodProps> = ({ periodOfTime }) => {
  return (
    <span className="border py-2 px-3 mt-6 rounded-full">
      {periodOfTime && <>{getReportTimeTitle(periodOfTime)}</>}
    </span>
  );
};

export default ReportPeriod;
