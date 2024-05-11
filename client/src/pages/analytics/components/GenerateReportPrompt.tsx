import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAllCategoryMetrics,
  setCurrentMetricInfo,
  setReportModal,
  setReportPromptModal,
  setReportPromptResponse,
} from "../../../redux/slices/app";
import { RootState } from "../../../redux/store";
import { AiOutlineClose } from "react-icons/ai";
import { ReportPromptsResponses } from "../../../redux/slices/app";
import { toast } from "react-toastify";
import { Metric } from "../../../utils/types";
import SelectMetrics from "./SelectMetrics";

const targetAudiance = [
  "CorporateExecutives",
  "SustainabilityTeams",
  "ComplianceOfficers",
  "Investors&Shareholder",
  "GovernmentAgencies",
  "ExternalAuditors",
  "SupplyChainPartners",
  "Employees",
  "Clients",
  "ApplicationForGrants",
  "Tenders",
  "Stakeholders",
];

const GenerateReportPrompt = () => {
  const { userRecord, categoryImpactTargets, } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  const [timePreriod, setPeriod] = useState<string>("");
  const [audience, setAudience] = useState<string>("");
  const [futureGoals, setGoals] = useState<string>("");
  const [caseStudies, setStudies] = useState<string>("");
  const [selectedMetrics, setSelectedMetrics] = useState<Metric[]>([]);

  useEffect(() => {
    if (!categoryImpactTargets) {
      console.error("No categoryImpactTargets found");
      return;
    }
    getAllMetrics();
  }, [categoryImpactTargets]);

  const handleGenerate = () => {
    if (
      timePreriod === "" ||
      audience === "" ||
      futureGoals === "" ||
      caseStudies === ""
    ) {
      toast.error("Please fill all the fields");
      return;
    }
    const promptRes: ReportPromptsResponses = {
      periodOfTime: timePreriod,
      selectedMetrics,  
      primaryAudience: audience,
      futureESGGoals: futureGoals,
      caseStudiesTestimonials: caseStudies,
    };
    dispatch(setReportModal(true));
    dispatch(setReportPromptResponse(promptRes));
    dispatch(setReportPromptModal(false));
  };

  const getAllMetrics = () => {
    const metrics = categoryImpactTargets
      ?.map((target) => target.metrics)
      .flat();
    if (metrics) {
      dispatch(setAllCategoryMetrics({ allCategoryMetrics: metrics }));
    }
  };

  const handleClose = () => {
    dispatch(setReportModal(true));
    dispatch(setCurrentMetricInfo({ metric: null, category: null }));
    dispatch(setReportPromptModal(false));
  };

  return (
    <div className="fixed z-50  inset-0 text-white overflow-y-auto bg-black bg-opacity-75">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="bg-custom-gray fixed rounded-xl mx-10 w-[90%] sm:w-3/4 md:w-[60%] px-6 py-2 min-w-min max-w-full ">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <img
                src={userRecord ? "i.c.logo2.png" : "i.c.logo2.png"}
                alt="logo-image"
                className="h-20 w-20"
              />
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
                {userRecord?.aboutCompany.name}
              </h3>
              <button onClick={handleClose} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <hr className="border-2 border-white" />
            <div className="my-4 flex justify-center">
              <h3 className="text-2xl font-bold text-center">
                How would you like your report to be generated?
              </h3>
            </div>
            <div className="w-full">
              <div className="bg-black rounded-3xl w-full flex flex-col gap-4 p-4">
                <div className="">
                  <label
                    htmlFor="timePreriod"
                    className="block text-lg mb-2 font-medium text-gray-900 dark:text-white"
                  >
                    For what time period would you like this report to cover
                  </label>
                  <select
                    id="timePreriod"
                    value={timePreriod}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={timePreriod === "" ? "selected" : ""}>
                      Choose time period
                    </option>
                    <option value="AllTime">All Time</option>
                    <option value="1Month">Month</option>
                    <option value="3Months">3 Months</option>
                    <option value="6Months">6 Months</option>
                    <option value="1Year">Year</option>
                    <option value="3Years">3 Years</option>
                    <option value="5Years">5 Years</option>
                  </select>
                </div>
                <div className="">
                  <label
                    htmlFor="audience"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Who are the primary audiences for this report?
                  </label>
                  <select
                    id="audience"
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={audience === "" ? "selected" : ""}>
                      Choose Audience
                    </option>
                    {targetAudiance.map((audience) => (
                      <option key={audience} value={audience}>
                        {audience}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="">
                  <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Select specific metrics you would like highlighted in the
                    report.
                  </h3>
                  <SelectMetrics
                    {...{
                      setSelectedMetrics,
                    }}
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="initiatives"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    What future ESG goals or initiatives does your organization
                    plan to undertake
                  </label>
                  <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="intiatives"
                    id="initiatives"
                    cols={30}
                    rows={5}
                    value={futureGoals}
                    onChange={(e) => setGoals(e.target.value)}
                  ></textarea>
                </div>
                <div className="">
                  <label
                    htmlFor="caseStudies"
                    className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Are there any case studies, testimonials, or specific
                    projects you would like included in the report?
                  </label>
                  <textarea
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="caseStudies"
                    id="caseStudies"
                    cols={30}
                    rows={5}
                    value={caseStudies}
                    onChange={(e) => setStudies(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleGenerate}
                  className="bg-custom-green px-4 py-1.5 rounded-3xl text-black font-bold mt-2"
                >
                  Generate Report
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 mt-5 mb-2">
            <img
              src="i.c.logo2.png"
              alt="logo-image"
              className="h-10 w-10 border rounded-full border-white"
            />
            <div className="">
              <span>
                <span className="text-custom-green">impact.</span>
                <span>chain</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReportPrompt;
