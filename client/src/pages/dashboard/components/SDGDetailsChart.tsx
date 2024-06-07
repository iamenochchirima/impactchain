import { ApexOptions } from "apexcharts";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { IoIosArrowDown } from "react-icons/io";

import { Tooltip } from "react-tooltip";
import { ImpactTargetType, Metric } from "../../../utils/types";
import { ChartData, getData } from "../utils/utils";
import { metricValueKeyPairs, targetOptions } from "../../../data/constants";
import { calculateImpact } from "../../analytics/components/utils/processGraphsData";


interface ChartThreeState {
  series: number[];
}

type Props = {
  target: ImpactTargetType;
};


type ImpactData = {
  metric: Metric
  impact: number;
};

const SDGDetailsChart: React.FC<Props> = ({ target }) => {
  const data: ChartData = getData(target);
  const [periodOfTime, setPeriodOfTime] = useState("1Year");
  const [metricsImpact, setMetricsImpact] = useState<ImpactData[]>([]);

  const options: ApexOptions = {
    chart: {
      fontFamily: "Satoshi, sans-serif",
      type: "donut",
    },
    colors: data.colors,
    labels: data.names,
    legend: {
      show: false,
      position: "bottom",
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 200,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  const [state, setState] = useState<ChartThreeState>({
    series: data.percentArray,
  });

  const truncateEnd = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  const matchingTarget = targetOptions.find((t) => t.name === target.name);

  useEffect(() => {
if (target) {
     setMetricsImpact(getMetricsImpact(target.metrics));
    }
  }, [target]);  


  const getMetricsImpact = (metrics: Metric[]) => {
    const data: ImpactData[] = [];

    for (const metric of metrics) {
      const valueKey = metricValueKeyPairs.find(
        (pair) => pair.key === metric.key
      );
      if (!valueKey) {
        console.log("No value key found for metric", metric);
        continue;
      }
      const impact = calculateImpact(
        metric.data,
        valueKey.valueKey,
        periodOfTime
      );
      const value = {
        metric: metric,
        impact,
      };
      data.push(value);
    }
    return data;
  };

  return (
    <div
      className={`sm:px-7.5 bg-custom-gray rounded-xl border-x border-y w-[500px] border-stroke border-custom-green px-2 h-full pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5 p-3`}
    >
        <h2 className="font-bold text-center my-4">Metrics Impact Destribution</h2>

      <div className="mb-3 justify-between items-center gap-2 sm:flex">
        <div className="flex items-center gap-2">
          <img
            src={`${matchingTarget ? `${matchingTarget.emoji}` : ""}`}
            alt="emoji"
            className="w-6 h-6"
          />
          
          <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${target.name}`}
          >
            <Tooltip id="my-tooltip" />
            <h5 className="text-sm  text-white dark:text-white">
              {truncateEnd(target.name, 20)}
            </h5>
          </a>
        </div>
        <div>
          <div className="relative z-10 inline-block">
            <select
              name=""
              id=""
              className="relative z-10 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="1Month" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="1Year" className="dark:bg-boxdark">
                Yearly
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-col items-center justify-center gap-y-3">
        {data.data.map((item, index) => (
          <div key={index} className="sm:w-1/2 w-full px-">
            <div className="flex w-full items-center">
              <span
                style={{ backgroundColor: item.color }}
                className="mr-2 block h-3 w-full max-w-3 rounded-full "
              ></span>
              <p className="flex w-full justify-between text-sm font-medium text-white dark:text-white">
                <a
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={`${item.name}`}
                >
                  <Tooltip id="my-tooltip" />
                  <span className="text-xs">
                    {" "}
                    {truncateEnd(item.name, 20)}{" "}
                  </span>
                </a>
                <span> {item.percentage}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SDGDetailsChart;
