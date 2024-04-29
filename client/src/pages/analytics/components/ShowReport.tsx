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
import ChartOne from "../../dashboard/components/Charts/ChartOne";
import ChartTwo from "../../dashboard/components/Charts/ChartTwo";
import BarGraph from "../../dashboard/components/Charts/BarGraph";

const ShowReport = () => {
  const dispatch = useDispatch();
  const [metricsWithDataForPeriod, setMetricsWithDataForPeriod] = useState<
    Metric[] | null
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
    if (metricsWithDataForPeriod) {
      getMetricsReportData(metricsWithDataForPeriod, reportPromptResponse);
    }
  }, [metricsWithDataForPeriod, reportPromptResponse]);

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold text-center">Report</h1>
        {/* <ChartOne /> */}
        <ChartTwo />
        {/* <BarGraph /> */}
      </div>
    </div>
  );
};

export default ShowReport;
