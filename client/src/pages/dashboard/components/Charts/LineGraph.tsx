import React, { FC, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { LineGraphData } from "../../../analytics/components/utils/types";
import { MetricCharts, setMetricsCharts } from "../../../../redux/slices/app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

interface LineGraphState {
  series: {
    name: string;
    data: number[];
  }[];
}

type Props = {
  data: LineGraphData;
  graphKey: string;
};

const LineGraph: FC<Props> = ({ data, graphKey }) => {
  const { metricsCharts } = useSelector((state: RootState) => state.app);
  const [chartMounted, setChartMounted] = useState(false);
  const [chartUpdated, setChartUpdated] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState<LineGraphState>({
    series: [
      {
        name: data.name,
        data: data.data,
      },
    ],
  });

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      id: "linegraph",
      events: {
        mounted: (chartContext, config) => {
          setChartMounted(true);
        },
        updated: (chartContext, config) => {
          setChartUpdated(true);
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 3,
      colors: ["#008FFB"],
    },
    title: {
      text: "Product Trends by Month",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: data.categories,
    },
    tooltip: {
      enabled: true,
      theme: "light",
    },
  };

  const getDataUri = async (chartId) => {
    return await ApexCharts.exec(chartId, "dataURI")
      .then(({ imgURI }) => {
        return imgURI;
      })
      .catch((e) => {
        console.error("Error fetching Data URI", e);
      });
  };

  useEffect(() => {
    if (chartMounted) {
      setTimeout(() => {
        getDataUri("line-graph").then((uri) => {
          const chartFile = new File([uri], "line-graph.png", {
            type: "image/png",
          });
          const metricChart: MetricCharts = {
            key: graphKey,
            chart: chartFile,
          };
          if (metricsCharts) {
            const existingMetricChart = metricsCharts.find(
              (metric) => metric.key === graphKey
            );
            if (!existingMetricChart) {
              const newMetricsCharts = [...metricsCharts, metricChart];
              dispatch(setMetricsCharts({ metricsCharts: newMetricsCharts }));
            }
          } else {
            dispatch(setMetricsCharts({ metricsCharts: [metricChart] }));
          }
        });
      }, 1000);
    }
  }, [dispatch, metricsCharts, graphKey, chartMounted, chartUpdated]);

  return (
    <div>
      <div className="col-span-12 rounded-sm border-gray-300 bg-white px-5 pt-7.5 pb-5 shadow-default">
        <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
          <div className="flex w-full flex-wrap gap-3 sm:gap-5">
            <div className="flex min-w-47.5">
              <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
              </span>
            </div>
            <div className="flex min-w-47.5">
              <span>{data.name}</span>
            </div>
          </div>
          <div className="flex w-full max-w-45 justify-end">
            <div className="inline-flex items-center rounded-md bg-white p-1.5">
              <button className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-gray-100 hover:shadow-card">
                Month
              </button>
            </div>
          </div>
        </div>

        <div>
          <div id="chartOne" className="-ml-5">
            <ReactApexChart
              options={options}
              series={state.series}
              type="line"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineGraph;
