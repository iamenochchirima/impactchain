import BarGraph from "../../../dashboard/components/Charts/BarGraph";
import PieChart from "../../../dashboard/components/Charts/PieChart";
import LineGraph from "../../../dashboard/components/Charts/LineGraph";
import ReactMarkdown from 'react-markdown';
import {
  BarGraphData,
  GraphsData,
  LineGraphData,
  MetricReportData,
  PieChartData,
} from "../utils/types";
import { FC } from "react";

type Props = {
  metricReport: MetricReportData;
};

const ShowMetricReport: FC<Props> = ({ metricReport }) => {
  const { graphs } = metricReport;

  function isLineGraphData(data: GraphsData): data is LineGraphData {
    return (
      data !== null &&
      Array.isArray(data.data) &&
      typeof data.data[0] === "number"
    );
  }

  function isBarGraphData(data: GraphsData): data is BarGraphData {
    return (
      data !== null &&
      Array.isArray(data.data) &&
      typeof data.data[0] !== "number"
    );
  }

  function isPieChartData(data: GraphsData): data is PieChartData {
    const res =
      data !== null &&
      typeof data === "object" &&
      "pieChart" in data &&
      data.pieChart === true;
    return res;
  }

  return (
    <div>
      <h3 className="text-2xl font-bold  my-4 underline">{metricReport.name}</h3>
      <p className="whitespace-pre-wrap mb-3">
      <ReactMarkdown>{metricReport.aiOverview.content}
      </ReactMarkdown>
      </p>

      <div className="border-x border-y border-custom-green rounded-lg p-3 ">
        {graphs[1]?.graph && isLineGraphData(graphs[1].graph) && (
          <LineGraph data={graphs[1].graph} graphKey={metricReport.key} />
        )}
        {graphs[1]?.graph && isPieChartData(graphs[1].graph) && (
          <PieChart data={graphs[1].graph} graphKey={metricReport.key}/>
        )}
        {graphs[1]?.graph && isBarGraphData(graphs[1].graph) && (
          <BarGraph data={graphs[1].graph} graphKey={metricReport.key} />
        )}

        {graphs[2]?.graph && isLineGraphData(graphs[2].graph) && (
          <LineGraph data={graphs[2].graph} graphKey={metricReport.key} />
        )}
        {graphs[2]?.graph && isPieChartData(graphs[2].graph) && (
          <PieChart data={graphs[2].graph} graphKey={metricReport.key} />
        )}
        {graphs[2]?.graph && isBarGraphData(graphs[2].graph) && (
          <BarGraph data={graphs[2].graph} graphKey={metricReport.key} />
        )}

        {graphs[3]?.graph && isLineGraphData(graphs[3].graph) && (
          <LineGraph data={graphs[3].graph} graphKey={metricReport.key} />
        )}
        {graphs[3]?.graph && isPieChartData(graphs[3].graph) && (
          <PieChart data={graphs[3].graph} graphKey={metricReport.key} />
        )}
        {graphs[3]?.graph && isBarGraphData(graphs[3].graph) && (
          <BarGraph data={graphs[3].graph} graphKey={metricReport.key} />
        )}
      </div>
    </div>
  );
};

export default ShowMetricReport;
