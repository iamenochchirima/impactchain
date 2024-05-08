import BarGraph from "../../dashboard/components/Charts/BarGraph";
import PieChart from "../../dashboard/components/Charts/PieChart";
import LineGraph from "../../dashboard/components/Charts/LineGraph";
import { MetricReportData } from "./utils/types";
import { FC } from "react";

type Props = {
  metricData: MetricReportData;
};

const SpecificMetric: FC<Props> = ({ metricData }) => {
  const { graphs } = metricData;

  return (
    <div>
      <PieChart />
      <h3 className="text-xl mb-3">{metricData.name}</h3>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      {graphs[1]?.graph && graphs[1].typeOfGraph === 'line' && (
        <LineGraph data={graphs[1].graph} />
      )}
      {graphs[1]?.graph && graphs[1].typeOfGraph === 'pie' && (
        <PieChart data={graphs[1].graph} />
      )}
      {graphs[1]?.graph && graphs[1].typeOfGraph === 'bar' && (
        <BarGraph data={graphs[1].graph} />
      )}

      {graphs[2]?.graph && graphs[2].typeOfGraph === 'line' && (
        <LineGraph data={graphs[2].graph} />
      )}
      {graphs[2]?.graph && graphs[2].typeOfGraph === 'pie' && (
        <PieChart data={graphs[2].graph} />
      )}
      {graphs[2]?.graph && graphs[2].typeOfGraph === 'bar' && (
        <BarGraph data={graphs[2].graph} />
      )}

      {graphs[3]?.graph && graphs[3].typeOfGraph === 'line' && (
        <LineGraph data={graphs[3].graph} />
      )}
      {graphs[3]?.graph && graphs[3].typeOfGraph === 'pie' && (
        <PieChart data={graphs[3].graph} />
      )}
      {graphs[3]?.graph && graphs[3].typeOfGraph === 'bar' && (
        <BarGraph data={graphs[3].graph} />
      )}
    </div>
  );
};

export default SpecificMetric;
