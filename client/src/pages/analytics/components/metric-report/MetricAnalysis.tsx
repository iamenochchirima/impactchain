import React, { useEffect, useState } from "react";
import ShowMetricReport from "./ShowMetricReport";

import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../../utils/time";
import { AiOutlineClose } from "react-icons/ai";
import {
  setCurrentMetricInfo,
  setMetricAnanlyticsModal,
} from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";
import { checkHasDataForPeriod } from "./report-utils";
import { getMetricsReportData } from "../utils/getGraphsData";
import { toast } from "react-toastify";
import { MetricReportData } from "../utils/types";
import Loading from "../Loading";
import axios from "axios";
import { API_BASE_URL } from "../../../../hooks/exporter";
import { saveAs } from "file-saver";
import { getReportTimeTitle } from "../utils/utils";

const MetricAnalysis = () => {
  const dispatch = useDispatch();
  const { currentMetricInfo, userRecord, userInfo } = useSelector(
    (state: RootState) => state.app
  );
  const [metricReport, setMetricReport] = useState<MetricReportData | null>(
    null
  );
  const [timePeriod, setTimePeriod] = useState<string>("1Year");

  const handleClose = () => {
    dispatch(setMetricAnanlyticsModal(false));
    dispatch(setCurrentMetricInfo({ currentMetricInfo: null }));
  };

  useEffect(() => {
    if (currentMetricInfo) {
      const _allTime = checkHasDataForPeriod(
        "AllTime",
        currentMetricInfo.metric
      );
      if (!_allTime) {
        toastWarn("No data found for the metric, please select another");
        dispatch(setMetricAnanlyticsModal(false));
        dispatch(setCurrentMetricInfo({ currentMetricInfo: null }));
      }
      const res = checkHasDataForPeriod(timePeriod, currentMetricInfo.metric);
      if (res) {
        getData([currentMetricInfo.metric], timePeriod);
      } else {
        getData([currentMetricInfo.metric], "AllTime");
      }
    }
  }, [currentMetricInfo]);

  const getData = async (arg1: Metric[], arg2: string) => {
    const res = await getMetricsReportData(arg1, arg2);
    if (res) {
      setMetricReport(res.metricsData[0]);
    } else {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }
  };

  useEffect(() => {
    if (currentMetricInfo) {
      setMetricReport(null);
      const res = checkHasDataForPeriod(timePeriod, currentMetricInfo.metric);
      if (res) {
        getData([currentMetricInfo.metric], timePeriod);
      } else {
        toastWarn(
          "No data found for the given time period, please select another time period, defaulting to All Time"
        );
        setTimePeriod("AllTime");
      }
    }
  }, [timePeriod]);

  const toastWarn = (warn: string) => {
    toast.warning(warn, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
    });
  };

  const getDataUri = async (chartId) => {
    return await ApexCharts.exec(chartId, "dataURI").then(({ imgURI }) => {
      return imgURI;
    });
  };

  const createAndDownloadPdf = async () => {
    if (!metricReport || !userRecord) {
      console.error("No report data found");
      return;
    }

    try {
      const chartUri = await getDataUri(metricReport.key);
      const body = {
        metricName: metricReport.name,
        period: getReportTimeTitle(timePeriod),
        logo: userRecord.aboutCompany.logo,
        companyName: userRecord.aboutCompany.name,
        overview: metricReport.aiOverview,
        graph: chartUri,
      };

      axios
        .post(`${API_BASE_URL}/api/create-metric-pdf`, body)
        .then(() =>
          axios.get(`${API_BASE_URL}/api/fetch-metric-pdf`, {
            responseType: "blob",
          })
        )
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: "application/pdf" });
          saveAs(pdfBlob, "Metric_report.pdf");
        });
    } catch (error) {
      console.log("Error generating pdf", error);
    }
  };

  return (
    <div className="fixed z-50  inset-0 text-white overflow-y-auto bg-black bg-opacity-75">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="bg-custom-gray fixed rounded-xl mx-10 w-[90%] sm:w-3/4 md:w-[60%] px-6 py-2 min-w-min max-w-full ">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <img
                src={
                  userRecord ? userRecord.aboutCompany.logo : "i.c.logo2.png"
                }
                alt="logo-image"
                className="h-20 w-20 rounded-full"
              />
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
                {userRecord?.aboutCompany.name}
              </h3>
              <button onClick={handleClose} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <div className="my-3 flex justify-between items-center">
              <div className="flex flex-col gap-1 ">
                <span> {`${userInfo.firstname} ${userInfo.lastname} `} </span>
                <span>
                  {userRecord ? formatDate(Number(userRecord.created)) : 0}
                </span>
              </div>
              {metricReport && (
                <button
                  className="bg-custom-green px-4 py-1.5 rounded-3xl text-black font-bold"
                  onClick={createAndDownloadPdf}
                >
                  Generate Report
                </button>
              )}
            </div>
            <hr className="border-2 border-white" />
            <div className="my-4 flex justify-between items-center">
              <h3 className="text-xl">{currentMetricInfo?.category.title}</h3>
              <button
                className="bg-white px-4 py-1.5 rounded-xl text-black font-bold"
              >
                <select
                  className="focus:outline-none "
                  id="time"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                >
                  <option value="">Select Time Period</option>
                  <option value="1Month">1 Month</option>
                  <option value="3Months">3 Months</option>
                  <option value="6Months">6 Months</option>
                  <option value="1Year">1 Year</option>
                  <option value="3Years">3 Years</option>
                  <option value="5Years">5 Years</option>
                  <option value="AllTime">All Time</option>
                </select>
              </button>
            </div>
            <div className="w-full">
              <div className="bg-black rounded-3xl w-full overflow-y-auto max-h-[600px]  p-4 ">
                {metricReport ? (
                  <ShowMetricReport {...{ metricReport }} />
                ) : (
                  <Loading />
                )}
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-5">
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
    </div>
  );
};

export default MetricAnalysis;
