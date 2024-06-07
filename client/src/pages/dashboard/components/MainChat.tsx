import { ApexOptions } from "apexcharts";
import React, { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { LineGraphData } from "../../analytics/components/utils/types";
import ReportPeriod from "../../analytics/components/main-report/ReportPeriod";
import { getDashboardChatTimeTitle } from "../../analytics/components/utils/utils";

interface MainChartState {
  series: {
    name: string;
    data: number[];
  }[];
}

type Props = {
  graph: LineGraphData;
  timePeriod: string;
};

const MainChart: FC<Props> = ({ graph, timePeriod }) => {
  const [state, setState] = useState<MainChartState>({
    series: [
      {
        name: graph.name,
        data: graph.data,
      },
    ],
  });

  const [options, setOptions] = useState<ApexOptions>({
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#3C50E0", "#80CAEE"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },

      toolbar: {
        show: false,
      },
    },
    tooltip: {
      theme: "dark",
      x: { show: true },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2, 2],
      curve: "straight",
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
      borderColor: "#6B7280",
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: true,
          offsetX: 50,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 1,
      colors: "#fff",
      strokeColors: ["#3056D3", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: "category",
      categories: graph.categories,
      axisBorder: {
        show: false,
        color: "#6B7280",
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "Satoshi, sans-serif",
        },
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: "Satoshi, sans-serif",
        },
      },
      min: -100,
      max: 100,
    },
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  return (
    <div className="col-span-12 border-x border-y rounded-xl border-custom-green p-4 text-white bg-custom-gray px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex  w-full max-w-45 justify-between">
          <span className="font-bold text-xl">Impact Performance Trend</span>
          <span>{getDashboardChatTimeTitle(timePeriod)}</span>
        </div>
      </div>

      <div>
        <div id="MainChart" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
      <div className="text-sm flex text-custom-green flex-col">
        <span>Y: Impact % change</span>
        <span>X: Time</span>
      </div>
    </div>
  );
};

export default MainChart;
