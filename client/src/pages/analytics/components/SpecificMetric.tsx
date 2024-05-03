import ChartTwo from "../../dashboard/components/Charts/ChartTwo";
import BarGraph from "../../dashboard/components/Charts/BarGraph";
import PieChart from "../../dashboard/components/Charts/PieChart";
import LineGraph from "../../dashboard/components/Charts/LineGraph";
import { MetricReportData } from "./utils/types";
import { FC } from "react";

type Props = {
  metricData: MetricReportData;
}

const SpecificMetric: FC<Props> = ({metricData}) => {
  return (
    <div>
      <LineGraph />
      <PieChart />
      <ChartTwo />
      <PieChart />
      <ChartTwo />
      <BarGraph />
    </div>
  );
};

export default SpecificMetric;
