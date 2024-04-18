import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ImpactTarget } from "../../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { ChartData, getData } from "../../utils/utils";
import { IoIosArrowDown } from "react-icons/io";
import { targetOptions } from "../../../../data/constants";
import { Tooltip } from "react-tooltip";

interface ChartThreeState {
  series: number[];
}

type Props = {
  target: ImpactTarget;
};

const ChartThree: React.FC<Props> = ({ target }) => {
  const data: ChartData = getData(target);

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

  const handleReset = () => {
    setState({
      series: data.percentArray,
    });
  };

  handleReset;

  const truncateEnd = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  const matchingTarget = targetOptions.find((t) => t.name === target.name);

  return (
    <div
      className={`sm:px-7.5 bg-custom-gray rounded-xl border-x border-y border-stroke border-custom-green px-2 h-full pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5 p-3`}
    >
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
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="" className="dark:bg-boxdark">
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

export default ChartThree;
