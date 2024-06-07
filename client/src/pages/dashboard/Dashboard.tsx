import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import MainChart from "./components/MainChat";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TartgetsCharts from "./components/TartgetsCharts";
import TargetsCircles from "./components/TargetsCircles";
import { Metric } from "../../utils/types";
import { getMetricsWithDataForTheGivenTimePeriod, mergeLineGraphData } from "../analytics/components/utils/processGraphsData";
import { toast } from "react-toastify";
import { getMetricsGraphsData } from '../analytics/components/utils/getGraphsData';
import { GraphLabel, LineGraphData } from "../analytics/components/utils/types";


const Dashboard = () => {
  const {userRecord, impactTargets} = useSelector((state: RootState) => state.app);
  const [graph, setGraph] = useState<LineGraphData | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Time Period");
  const [timePeriod, setTimePeriod] = useState("1Year");
  const [metricsWithDataForPeriod, setMetricsWithDataForPeriod] = useState<
    Metric[] | null
  >(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !((dropdownRef.current as unknown) as HTMLElement).contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef])

  useEffect(() => {
if (userRecord && impactTargets) {
  const allMetrics = impactTargets.flatMap((target) => target.metrics);
      const res = getMetricsWithDataForTheGivenTimePeriod(allMetrics, timePeriod);
      if (res) {
        setMetricsWithDataForPeriod(res);
      }
    }
  }, [userRecord, impactTargets]);

  useEffect(() => {
    if (metricsWithDataForPeriod ) {
      getData(metricsWithDataForPeriod, timePeriod);
    }
  }, [metricsWithDataForPeriod, timePeriod]);

  const getData = async (arg1: Metric[], arg2) => {

    const _res = await getMetricsGraphsData(arg1, arg2);
    if (!_res) {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }
    const labels: GraphLabel = {
      x_label: "Time",
      y_label: "Impact % change",
    }
    setGraph(mergeLineGraphData(_res.allLineGraphData, labels),)
  };

  return (
    <div className=" ml-5 flex flex-col gap-5">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4 mt-3">
          <div className=" text-center text-white md:text-2xl text-4xl font-NeueMachinaUltrabold">
            Impact Overview
          </div>
          {/* Drop down Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#d9d9d9] text-black font-TelegraphRegular flex gap-2 rounded-xl px-3 py-2 text-center items-center"
            >
              <span>{selectedItem}</span>
              <FaChevronDown />
            </button>
            {isOpen && (
              <div className="absolute z-20 bg-[#d9d9d9] shadow-lg rounded ">
                {["Week", "Month", "3 Months", "6 Months", "Year"].map(
                  (item) => (
                    <a
                      href="#"
                      key={item}
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedItem(item);
                        setIsOpen(false);
                      }}
                      className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            )}
          </div>
        </div>
        <button className="flex items-center bg-custom-green text-black rounded-xl px-3 py-1 ">
          <img src="/smiley.svg" alt="logo" className="h-8 w-8" />
          <span>Generate Report</span>
        </button>
      </div>
      {graph && <MainChart {...{graph, timePeriod}} />}
      <TargetsCircles />
      <TartgetsCharts />
    </div>
  );
};

export default Dashboard;
