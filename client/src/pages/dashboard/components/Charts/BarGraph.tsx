import React, { FC, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import { ApexOptions } from "apexcharts";
import {
  BarGraphData,
  MetricReportData,
  xisVals,
} from "../../../analytics/components/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { MetricCharts, setMetricsCharts } from "../../../../redux/slices/app";
import { RootState } from "../../../../redux/store";

// Extend dayjs with the quarterOfYear plugin
dayjs.extend(quarterOfYear);

type Props = {
  data: BarGraphData;
  graphKey: string;
};

const BarGraph: FC<Props> = ({ data, graphKey }) => {
  const [chartMounted, setChartMounted] = useState(false);
  const [chartUpdated, setChartUpdated] = useState(false);
  const { metricsCharts } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const [series, setSeries] = useState([
    {
      name: "sales",
      data: data.data,
    },
  ]);

  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "bar",
      height: 380,
      toolbar: {
        show: true,
      },
      id: "bar-graph",
      events: {
        mounted: (chartContext, config) => {
          setChartMounted(true);
        },
        updated: (chartContext, config) => {
          setChartUpdated(true);
        },
      },
    },

    xaxis: {
      type: "category",
      labels: {
        style: {
          colors: "#333",
          fontSize: "12px",
        },
      },
    },
    title: {
      text: data.name,
      style: {
        color: "#333",
        fontSize: "15px",
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#333",
          fontSize: "12px",
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        columnWidth: "55%",
      },
    },
    fill: {
      opacity: 1,
      colors: ["#008FFB"],
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      theme: "light",
    },
  });

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
        getDataUri("bar-graph").then((uri) => {
          const chartFile = new File([uri], "bar-graph.png", {
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
    <div className="bg-white text-black shadow-lg p-3 rounded-lg">
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={380}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarGraph;
