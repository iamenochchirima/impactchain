import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import MainChart from "./components/MainChat";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TartgetsCharts from "./components/TartgetsCharts";
import TargetsCircles from "./components/TargetsCircles";


const Dashboard = () => {
  const {userRecord} = useSelector((state: RootState) => state.app);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Time Period");
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

  return (
    <div className="mx-10 flex flex-col gap-5">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <div className=" text-center text-white text-4xl font-NeueMachinaUltrabold">
            Impact Overview
          </div>
          {/* Drop down Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#d9d9d9] text-black font-TelegraphRegular flex gap-2 rounded-3xl px-3 py-2 text-center items-center"
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
        <button className="flex items-center bg-custom-green text-black rounded-full px-3 py-1 ">
          <img src="/smiley.svg" alt="logo" className="h-8 w-8" />
          <span>Generate Report</span>
        </button>
      </div>
      <MainChart />
      <TargetsCircles />
      <TartgetsCharts />
    </div>
  );
};

export default Dashboard;
