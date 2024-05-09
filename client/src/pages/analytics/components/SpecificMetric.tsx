import BarGraph from "../../dashboard/components/Charts/BarGraph";
import PieChart from "../../dashboard/components/Charts/PieChart";
import LineGraph from "../../dashboard/components/Charts/LineGraph";
import { BarGraphData, GraphsData, LineGraphData, MetricReportData, PieChartData } from "./utils/types";
import { FC } from "react";

type Props = {
  metricData: MetricReportData;
};

const SpecificMetric: FC<Props> = ({ metricData }) => {
  const { graphs } = metricData;

  function isLineGraphData(data: GraphsData): data is LineGraphData {
    return data !== null && Array.isArray(data.data) && typeof data.data[0] === 'number';
  }
 
  function isBarGraphData(data: GraphsData): data is BarGraphData {
    return data !== null && Array.isArray(data.data) && typeof data.data[0] !== 'number';
  }
  
  function isPieChartData(data: GraphsData): data is PieChartData {
    return data !== null && Array.isArray(data.data) && typeof data.data[0] === 'object' && 'y' in data.data[0];
  }

  return (
    <div>
    <h3 className="text-xl mb-3">{metricData.name}</h3>
    <p className="mb-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    {graphs[1]?.graph && isLineGraphData(graphs[1].graph) && (
      <LineGraph data={graphs[1].graph} />
    )}
    {graphs[1]?.graph && isPieChartData(graphs[1].graph) && (
      <PieChart data={graphs[1].graph} />
    )}
    {graphs[1]?.graph && isBarGraphData(graphs[1].graph) && (
      <BarGraph data={graphs[1].graph} />
    )}

    {graphs[2]?.graph && isLineGraphData(graphs[2].graph) && (
      <LineGraph data={graphs[2].graph} />
    )}
    {graphs[2]?.graph && isPieChartData(graphs[2].graph) && (
      <PieChart data={graphs[2].graph} />
    )}
    {graphs[2]?.graph && isBarGraphData(graphs[2].graph) && (
      <BarGraph data={graphs[2].graph} />
    )}

    {graphs[3]?.graph && isLineGraphData(graphs[3].graph) && (
      <LineGraph data={graphs[3].graph} />
    )}
    {graphs[3]?.graph && isPieChartData(graphs[3].graph) && (
      <PieChart data={graphs[3].graph} />
    )}
    {graphs[3]?.graph && isBarGraphData(graphs[3].graph) && (
      <BarGraph data={graphs[3].graph} />
    )}
  </div>
  );
};

export default SpecificMetric;
