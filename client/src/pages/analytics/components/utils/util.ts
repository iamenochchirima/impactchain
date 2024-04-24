import { ReportPromptsResponses } from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";

export const getMetricsWithDataForTheGivenTimePeriod = (
  metrics: Metric[],
  response: ReportPromptsResponses
) => {
  if (response.periodOfTime === "AllTime") {
    return metrics;
  }
  if (response.periodOfTime === "1Month") {
    const res = metrics
      .map((metric) => {
        const data = metric.data.filter((item) => {
          const startDate = new Date(Number(item.startDate));
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          return startDate >= oneMonthAgo;
        });

        return { ...metric, data };
      })
      .filter((metric) => metric.data.length >= 1);
    return res.length > 0 ? res : null;
  }

  if (response.periodOfTime === "3Months") {
    const res = metrics
      .map((metric) => {
        const data = metric.data.filter((item) => {
          const startDate = new Date(Number(item.startDate));
          const threeMonthsAgo = new Date();
          threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
          return startDate >= threeMonthsAgo;
        });

        return { ...metric, data };
      })
      .filter((metric) => metric.data.length >= 1);
    return res.length > 0 ? res : null;
  }

  if (response.periodOfTime === "6Months") {
    const res = metrics
      .map((metric) => {
        const data = metric.data.filter((item) => {
          const startDate = new Date(Number(item.startDate));
          const sixMonthsAgo = new Date();
          sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
          return startDate >= sixMonthsAgo;
        });

        return { ...metric, data };
      })
      .filter((metric) => metric.data.length >= 1);
    return res.length > 0 ? res : null;
  }

  if (response.periodOfTime === "1Year") {
    const res = metrics
      .map((metric) => {
        const data = metric.data.filter((item) => {
          const startDate = new Date(Number(item.startDate));
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
          return startDate >= oneYearAgo;
        });

        return { ...metric, data };
      })
      .filter((metric) => metric.data.length >= 1);
    return res.length > 0 ? res : null;
  }

  if (response.periodOfTime === "3Years") {
    const res = metrics
      .map((metric) => {
        const data = metric.data.filter((item) => {
          const startDate = new Date(Number(item.startDate));
          const threeYearsAgo = new Date();
          threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
          return startDate >= threeYearsAgo;
        });

        return { ...metric, data };
      })
      .filter((metric) => metric.data.length >= 1);
    return res.length > 0 ? res : null;
  }

  if (response.periodOfTime === "5Years") {
    const res = metrics
      .map((metric) => {
        const data = metric.data.filter((item) => {
          const startDate = new Date(Number(item.startDate));
          const fiveYearsAgo = new Date();
          fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
          return startDate >= fiveYearsAgo;
        });

        return { ...metric, data };
      })
      .filter((metric) => metric.data.length >= 1);
    return res.length > 0 ? res : null;
  }
  return null;
};
