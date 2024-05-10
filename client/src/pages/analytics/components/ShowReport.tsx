import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import {
  getMetricsReportData,
  getMetricsWithDataForTheGivenTimePeriod,
} from "./utils/util";
import { toast } from "react-toastify";
import { setReportPromptModal } from "../../../redux/slices/app";
import { Metric } from "../../../utils/types";
import { MetricReportData } from "./utils/types";
import SpecificMetric from "./SpecificMetric";

const ShowReport = () => {
  const dispatch = useDispatch();
  const [metricsWithDataForPeriod, setMetricsWithDataForPeriod] = useState<
    Metric[] | null
  >(null);
  const [metricsReportData, setMetricsReportData] = useState<
    MetricReportData[] | null
  >(null);
  const { categoryImpactTargets, reportPromptResponse } = useSelector(
    (state: RootState) => state.app
  );

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
      getData(metricsWithDataForPeriod, reportPromptResponse);
    }
  }, [metricsWithDataForPeriod, reportPromptResponse]);

  const getData = async (arg1: Metric[], arg2) => {
    const _res = await getMetricsReportData(arg1, arg2);
    if (!_res) {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }
    setMetricsReportData(_res);
  };

  return (
    <div>
      <div className="overflow-auto">
        <h1 className="text-3xl font-bold text-center">Report</h1>
        {/* SPECIFIC METRICS */}
        <div className="">
          <h3 className="text-2xl font-bold my-4">Specific metrics data</h3>
          <div className="">
            {metricsReportData?.map((metricData, index) => (
              <SpecificMetric key={index} {...{ metricData }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReport;
