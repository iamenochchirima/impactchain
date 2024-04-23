import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEffect, useState } from "react";
import { gitMetricsForTheGivenTimePeriod } from "./utils/util";
import { toast } from "react-toastify";
import { setReportPromptModal } from "../../../redux/slices/app";

const ShowReport = () => {
    const dispatch = useDispatch();
  const [allData, setAllData] = useState<any[] | null>(null);
  const [dataForPeriod, setDataForPeriod] = useState<any[] | null>(null);
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
      const data = metrics.map((metric) => metric.data);
      console.log("Data", data);
      setAllData(data);
    }
  };

  useEffect(() => {
    if (allData && reportPromptResponse) {
      const res = gitMetricsForTheGivenTimePeriod(
        allData,
        reportPromptResponse
      );
      if (res) {
        setDataForPeriod(res);
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
  }, [allData, reportPromptResponse]);

  return (
    <div>
      <h1>Report for</h1>
    </div>
  );
};

export default ShowReport;
