import React, { useState } from "react";
import { GoSingleSelect } from "react-icons/go";
import { useAuth } from "../../hooks/AppContext";
import { UserRecord } from "../../hooks/declarations/data/data.did";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setDataComponent, setUserRecord } from "../../redux/slices/app";
import { toast } from "react-toastify";
import Bubbles from "../Bubbles";

const bubbleText = "Before we begin enhancing your ESG reporting and analytics capabilities, we need some details about your company. This information will enable us to tailor our analysis and reports to better suit your organization's specific needs and goals."
const About = () => {
  const dispatch = useDispatch();
  const { userInfo, userRecord } = useSelector((state: RootState) => state.app);
  const { dataActor } = useAuth();
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState(
    userRecord ? userRecord.aboutCompany.name : ""
  );
  const [companySize, setCompanySize] = useState(
    userRecord ? userRecord.aboutCompany.companySize : ""
  );
  const [industry, setIndustry] = useState(
    userRecord ? userRecord.aboutCompany.industry : ""
  );
  const [selectedButton, setSelectedButton] = useState("");

  const handleSubmit = async () => {
    if (companyName === "" || companySize === "" || industry === "") {
      toast.error("Please fill in all fields"), { autoClose: 3000 };
      return;
    }

    setLoading(true);
    try {
      const data: UserRecord = {
        aboutCompany: {
          logo: "",
          name: companyName,
          companySize: companySize,
          industry: industry,
        },
        email: userInfo.email,
        impactTargets: {
          ImpactTarget1: [],
          ImpactTarget2: [],
          ImpactTarget3: [],
          ImpactTarget4: [],
          ImpactTarget5: [],
          ImpactTarget6: [],
          ImpactTarget7: [],
          ImpactTarget8: [],
          ImpactTarget9: [],
          ImpactTarget10: [],
          ImpactTarget11: [],
          ImpactTarget12: [],
          ImpactTarget13: [],
          ImpactTarget14: [],
          ImpactTarget15: [],
          ImpactTarget16: [],
          ImpactTarget17: [],
        },
        created: BigInt(Date.now()),
      };
      await dataActor?.addUserRecord(data);
      dispatch(setUserRecord(data));
      dispatch(setDataComponent("ProfileLogo"));
      setLoading(false);
    } catch (error) {
      console.log("Error setting company info", error);
    }
    setLoading(false);
  };

  return (
    <div className="text-white pt-">
      {" "}
      <h3 className="md:text-xl text-3xl font-bold text-white mt-4 text-center font-NeueMachinaUltrabold  ">
        Basic Organisation Information
      </h3>
      <div className="min-h-96 pr-24 pl-12 mt-10 ">
      <h3 className="font-TelegrapUltraLight md:text-sm">Name of Organisation?</h3>
        <form action="" className="mt-2">
          <div className="mb-4 ">
            <input
              className="shadow placeholder-gray-500 text-white md:text-sm text-xl min-w-[300px] rounded-xl appearance-none border-2 border-green-500 w-full py-3.5 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
              id="company-name"
              type="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company Name"
            />
          </div>
          <div className="mt-5 md:text-sm">
            <h3>In Which Industry Does the Organisation Operate?</h3>
            <div className="relative mt-2">
              <select
                className="appearance-none shadow placeholder-white text-white md:text-sm text-xl min-w-[300px] rounded-xl border-2 border-green-500 w-full py-3.5 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                name="industry"
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="agriculture">Agriculture</option>
                <option value="construction">Construction</option>
                <option value="education">Education</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <GoSingleSelect size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="mt-5 md:text-sm">
            <h2>What Is The Size of Your Organisation?</h2>
            <div className="mt-2 flex items-center gap-3">
              <button
                className={` ${
                  selectedButton === "2-10" ? "bg-custom-green" : " bg-gray-500"
                } py-1 px-4 rounded-lg text-black text-xs font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("2-10");
                  setCompanySize("2-10");
                }}
              >
                2-10
              </button>
              <button
                className={` ${
                  selectedButton === "10-25" ? "bg-custom-green" : "bg-gray-500"
                } py-1 px-4 rounded-lg text-black text-xs font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("10-25");
                  setCompanySize("10-25");
                }}
              >
                10-25
              </button>
              <button
                className={` ${
                  selectedButton === "25-50" ? "bg-custom-green" : "bg-gray-500"
                } py-1 px-4 rounded-lg text-black text-xs font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("25-50");
                  setCompanySize("25-50");
                }}
              >
                25-50
              </button>
              <button
                className={` ${
                  selectedButton === "50-100" ? "bg-custom-green" : "bg-gray-500"
                } py-1 px-4 rounded-lg text-black text-xs font-bold`}
                type="button"
                onClick={() => {
                  setSelectedButton("50-100");
                  setCompanySize("50-100}");
                }}
              >
                50-100
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center  mb-5 ">
        <Bubbles {...{bubbleText}}/>
        <button
          onClick={handleSubmit}
          className="mr-24 p-2 py-1.5 bg-custom-green rounded-xl text-black font-TelegraphUltraLight md:text-sm text-lg font-bold"
        >
          {loading ? "Loading..." : "Continue"}
        </button>
        {/* {userRecord && (
          <button
          onClick={handleNext}
          >
            <span className="text-custom-green mx-32">Next</span>
          </button>
        )} */}
      </div>
    </div>
  );
};

export default About;
