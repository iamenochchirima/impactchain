import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import MainChart from "./components/MainChat";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TartgetsCharts from "./components/TartgetsCharts";


const Dashboard = () => {
  const {userRecord} = useSelector((state: RootState) => state.app);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Time Period");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);


  console.log("userRecord", userRecord)

  return (
    <div className="mx-10">
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
      <div className="bg-custom-gray grid grid-cols-2 justify-between border-r border-t border-l border-b border-green-600 rounded-3xl px-5  mt-5 font-TelegraphRegular">
        <div className="flex flex-col gap-5 py-5 pr-16">
          <h1 className=""> ESG Performance</h1>
          <div className="flex justify-between items-center">
            <span>R250</span>
            <span className="flex items-center gap-1 px-1 bg-light-green text-green-700 rounded-lg">
              <IoIosArrowRoundUp />
              <span>25%</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-5 border-l  pl-5 pr-5 border-custom-green ">
          <h1 className="">Carbon Credit </h1>
          <div className="flex justify-between items-center">
            <span>R800</span>
            <span className="flex items-center gap-1 px-1 bg-red-400 text-red-950 rounded-lg">
              <IoIosArrowRoundDown />
              <span>0.5%</span>
            </span>
          </div>
        </div>
      </div>

      <div>
        <ul className="flex items-center justify-between mt-20">
          <li className="flex flex-col items-center gap-2">
            <h3>Poverty</h3>
            <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
              <img src="/House.svg" alt="logo" className="h-14 w-14" />
            </div>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h3>Water</h3>
            <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
            <img src="/Droplet.svg" alt="logo" className="h-14 w-14" />
            </div>
          </li>
          <li className="flex flex-col items-center gap-2">
            <h3>Industry</h3>
            <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
            <img src="/innovation.svg" alt="logo" className="h-14 w-14" />
            </div>
          </li>
          <li>
          <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
            <IoMdAdd size={30} className="w-14 h-14" />
            </div>
          </li>
          <li>
          <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
            <IoMdAdd size={30} className="w-14 h-14" />
            </div>
          </li>
          <li>
          <div className="bg-custom-gray p-3 rounded-full border-x border-y border-custom-green">
            <IoMdAdd size={30} className="w-14 h-14" />
            </div>
          </li>
        </ul>
      </div>
      <MainChart />
      <TartgetsCharts />
    </div>
  );
};

export default Dashboard;
