import React, { FC, useState } from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import { ApexOptions } from "apexcharts";
import {
  BarGraphData,
} from "../../../analytics/components/utils/types";

dayjs.extend(quarterOfYear);

type Props = {
  data: BarGraphData;
  graphKey: string;
};

const BarGraph: FC<Props> = ({ data, graphKey }) => {
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
      id: graphKey,
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
      <div className="">
        <h3>
          Key
        </h3>
        X: {data.x_label}
        <br />
        Y: {data.y_label}
      </div>
    </div>
  );
};

export default BarGraph;
