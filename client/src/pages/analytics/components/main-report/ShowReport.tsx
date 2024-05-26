import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { getMetricsReportData } from "../utils/getGraphsData";
import { toast } from "react-toastify";
import {
  setLoadingReport,
  setReport,
  setReportPromptModal,
} from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";
import { FullReportData } from "../utils/types";
import SpecificMetric from "./SpecificMetric";
import ReportPeriod from "./ReportPeriod";
import {
  generateOverralOverview,
  getMetricsWithDataForTheGivenTimePeriod,
  mergeLineGraphData,
} from "../utils/processGraphsData";
import Loading from "../Loading";
import ReactMarkdown from "react-markdown";
import LineGraph from "../../../dashboard/components/Charts/LineGraph";

const ShowReport = () => {
  const dispatch = useDispatch();
  const [metricsWithDataForPeriod, setMetricsWithDataForPeriod] = useState<
    Metric[] | null
  >(null);
  const {
    categoryImpactTargets,
    reportPromptResponse,
    userRecord,
    loadingReport,
    reportCategory,
    report,
  } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (!categoryImpactTargets || !reportPromptResponse) {
      console.error("No categoryImpactTargets or reportPromptResponse found");
      return;
    }
  }, [categoryImpactTargets, reportPromptResponse]);

  useEffect(() => {
    if (reportPromptResponse) {
      const res = getMetricsWithDataForTheGivenTimePeriod(
        reportPromptResponse.selectedMetrics,
        reportPromptResponse.periodOfTime
      );
      if (res) {
        setMetricsWithDataForPeriod(res);
      }
      if (!res) {
        toast.warning(
          "No data found for the given time period, please select another time period",
          {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
          }
        );
        dispatch(setReportPromptModal(true));
      }
    }
  }, [reportPromptResponse]);

  useEffect(() => {
    if (metricsWithDataForPeriod && reportPromptResponse) {
      getData(metricsWithDataForPeriod, reportPromptResponse.periodOfTime);
    }
  }, [metricsWithDataForPeriod, reportPromptResponse]);

  const getData = async (arg1: Metric[], arg2) => {
    if (!reportPromptResponse || !reportCategory) {
      console.error("No reportPromptResponse or reportCategory found in state");
      return;
    }
    dispatch(setLoadingReport(true));
    const _res = await getMetricsReportData(arg1, arg2);
    if (!_res) {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }
    const overview = await generateOverralOverview(
      _res.metricsData,
      mergeLineGraphData(_res.allLineGraphData),
      reportPromptResponse.periodOfTime,
      reportCategory.category
    );
    if (!overview) {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }
    const report: FullReportData = {
      overview: overview.choices[0].message,
      overalGraph: mergeLineGraphData(_res.allLineGraphData),
      specificMetrics: _res.metricsData,
      overalImpact: _res.averageImpact,
      avgDuration: _res.avgDurationCount,
      avgPrograms: _res.avgProgramsCount,
      participants: _res.avgParticipantsCount,
      location: _res.locationCount,
    };
    dispatch(setReport({ report }));
    dispatch(setLoadingReport(false));
  };

  return (
    <div>
      {loadingReport ? (
        <Loading />
      ) : (
        <div id="chartContainer" className="overflow-auto bg-white text-black">
          <div className="mt-3">
            <ReportPeriod periodOfTime={reportPromptResponse?.periodOfTime} />
          </div>
          <div className="flex flex-col font-semibold text-[100px] leading-[0.9] mt-4">
            <span>ESG</span>
            <span>Performance</span>
            <span>Report</span>
          </div>
          <div className="flex justify-center items-center my-4">
            <img
              src={
                userRecord?.aboutCompany.logo
                  ? userRecord?.aboutCompany.logo
                  : "/i.clogo.png"
              }
              alt="Company logo"
              className="h-75 w-75 mx-auto"
            />
          </div>
          <div className="">
            <div className="flex flex-col font-semibold text-[90px] leading-[0.9] mt-20">
              <span>Executive</span>
              <span>Summary</span>
            </div>
            <div className="">
              <p className=" whitespace-pre-wrap my-4">
                <ReactMarkdown>{report?.overview.content || ""}</ReactMarkdown>
              </p>
            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-3 justify-center items-center p-4 font-PoppinsRegular bg-purple-50 text-white">
              <div className=" bg-purple-500 h-full flex flex-col justify-center items-center p-2">
                <div className="text-center p-8">
                  <h2 className="text-[100px] font-bold">
                    {report?.participants}
                  </h2>
                  <p className="text-sm mt-2 text-nowrap">
                    AVERAGE PARTICIPANTS
                  </p>
                </div>
              </div>
              <div className=" bg-purple-500 h-full flex flex-col justify-center items-center p-2">
                <div className="text-center p-8">
                  <h2 className="text-[100px] font-bold">
                    {report?.avgPrograms}
                  </h2>
                  <p className="text-sm mt-2">AVERAGE PROGRAMS</p>
                </div>
              </div>
              <div className=" p-2 bg-purple-500 h-full flex flex-col justify-center items-center ">
                <div className="text-center p-8">
                  <h2 className=" font-bold">{report?.avgDuration}</h2>
                  <p className="text-sm mt-2">AVERAGE DURATION</p>
                </div>
              </div>
              <div className=" p-2 col-span-2 h-full flex flex-col justify-center items-center">
                <div className="text-center bg-white text-purple-500 p-8">
                  <h2 className="text-[100px] font-bold">
                    {report?.overalImpact} % 
                  </h2>
                  <p className="text-sm mt-2 text-black">OVERALL IMPACT (Increase )</p>
                </div>
              </div>
              <div className=" bg-purple-500 h-full flex flex-col justify-center items-center p-2">
                <div className="text-center p-8">
                  <h2 className="text-[100px] font-bold">{report?.location}</h2>
                  <p className="text-sm mt-2">LOCATIONS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="tracking-widest mt-4">PREPARED BY</span>
              <span className="font-bold">
                {userRecord ? userRecord.aboutCompany.name : ""}
              </span>
            </div>
            {report && (
              <LineGraph data={report.overalGraph} graphKey="overalGraph" />
            )}
          </div>
          <div className="flex flex-col text-[100px] leading-[0.9] mt-4">
            <span>Specific</span>
            <span>Metrics</span>
          </div>

          {/* SPECIFIC METRICS */}
          <div className="">
            {report?.specificMetrics.map((metricData, index) => (
              <SpecificMetric key={index} {...{ metricData }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowReport;
