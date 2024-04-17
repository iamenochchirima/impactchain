import React, { FC } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

type Props = {
  setPage: (page: string) => void;
};

const Settings: FC<Props> = ({ setPage }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./Gear.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Settings
        </span>
      </div>

      <div className="w-full flex flex-col">
        <div className=" w-11/12 h-full ml-5 mt-5  bg-neutral-800 rounded-[56px] p-5">
          <div>
            <div className="flex items-center gap-3">
              <img className="" src="./user_icon.svg" />
              <span className="text-white text-2xl font-NeueMachinaRegular font-bold ml-5">
                {" "}
                Account
              </span>
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <button 
                onClick={() => setPage("Profile")}
              className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Profile
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("Password")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Password
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>
            </div>
          </div>

          {/* Section 2*/}
          <div>
          <div className="flex items-center gap-3 mt-5">
              <img className="" src="./file.svg" />
              <span className="text-white text-2xl font-NeueMachinaRegular font-bold ml-5">
                {" "}
                Admin
              </span>
            </div>

            <div className="flex flex-col mt-4 gap-2">
              <button 
                onClick={() => setPage("BrandKit")}
              className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Brand Kit
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("Integrations")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                    Integrations
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("ESG")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Your ESG Goals
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("Payment")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Payment Account
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>
            </div>

          </div>

          {/* Section 3*/}
          <div>

            <div className="flex items-center gap-3 mt-5">
              <img className="" src="./bulb.svg" />
              <span className="text-white text-2xl font-NeueMachinaRegular font-bold ml-5">
                {" "}
                Info
              </span>
            </div>

            <div className="flex flex-col mt-4 gap-2">
            <button
                onClick={() => setPage("Terms")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Terms of Use
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("Privacy")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Privacy Policy
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("Litepaper")}
               className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5">
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Litepaper
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
