import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { getMetricsWithDataForTheGivenTimePeriod} from "./utils/util";
import { toast } from "react-toastify";
import { setReportPromptModal } from "../../../redux/slices/app";
import { Metric } from "../../../utils/types";

const ShowReport = () => {
    const dispatch = useDispatch();
  const [allMetrics, setAllMetrics] = useState<Metric[] | null>(null);
  const [metricsWithDataForPeriod, setMetricsWithDataForPeriod] = useState<Metric[] | null>(null);
  const { categoryImpactTargets, reportPromptResponse } = useSelector(
    (state: RootState) => state.app
  );

  useEffect(() => {
    if (!categoryImpactTargets || !reportPromptResponse) {
      console.error("No categoryImpactTargets or reportPromptResponse found");
      return;
    }
    getAllMetrics();
  }, [categoryImpactTargets, reportPromptResponse]);

  const getAllMetrics = () => {
    const metrics = categoryImpactTargets
      ?.map((target) => target.metrics)
      .flat();
    if (metrics) {
        setAllMetrics(metrics);
    }
  };

  useEffect(() => {
    if (allMetrics && reportPromptResponse) {
      const res = getMetricsWithDataForTheGivenTimePeriod(
        allMetrics,
        reportPromptResponse
      );
      if (res) {
        setMetricsWithDataForPeriod(res);
      }
      if (!res) {
        toast.warning("No data found for the given time period, please select another time period", {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
        });
        dispatch(setReportPromptModal(true))

      }
    }
  }, [allMetrics, reportPromptResponse]);

  useEffect(() => {
    if (metricsWithDataForPeriod) {
      console.log("Metrics for period", metricsWithDataForPeriod);
    }
  }, [metricsWithDataForPeriod]);

  return (
    <div>
      <h1>Report for</h1>
    </div>
  );
};

export default ShowReport;
