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
  mergeBarGraphData,
} from "../utils/processGraphsData";
import Loading from "../Loading";
import BarGraph from "../../../dashboard/components/Charts/BarGraph";
import ReactMarkdown from "react-markdown";

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
      const res = getMetricsWithDataForTheGivenTimePeriod(reportPromptResponse);
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
      console.error("No reportPromptResponse or reportCategory found");
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
      mergeBarGraphData(_res.allBarGraphData),
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
      overalGraph: mergeBarGraphData(_res.allBarGraphData),
      specificMetrics: _res.metricsData,
    };
    dispatch(setReport({ report }));
    dispatch(setLoadingReport(false));
  };

  return (
    <div>
      {loadingReport ? (
        <Loading />
      ) : (
        <div id="chartContainer" className="overflow-auto ">
          <div className="mt-3">
            <ReportPeriod periodOfTime={reportPromptResponse?.periodOfTime} />
          </div>
          <div className="flex flex-col text-[100px] leading-[0.9] mt-4">
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
            <div className="flex flex-col text-[80px] leading-[0.9] mt-20">
              <span>Executive</span>
              <span>Summary</span>
            </div>
            <div className="">
              <p className=" whitespace-pre-wrap my-4">
              <ReactMarkdown>{report?.overview.content || ""}</ReactMarkdown>
              </p>
            </div>
            {report && (
              <BarGraph data={report.overalGraph} graphKey="overalGraph" />
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
