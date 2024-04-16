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
        <span className=" font-NeueMachinaRegular text-3xl font-bold">
          SettingsPage
        </span>
      </div>

      <div className="w-full flex flex-col">
        <div className=" w-11/12 h-screen ml-5 mt-5 bg-neutral-800 rounded-[56px] p-5">
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
                className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5"
              >
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Profile
                </span>
                <MdOutlineChevronRight size={25} className="text-white" />
              </button>

              <button
                onClick={() => setPage("Password")}
                className=" bg-black rounded-[56px] flex justify-between items-center py-2 px-5"
              >
                <span className="text-white text-xl font-normal font-['PP Telegraf']">
                  Password
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
