import { Metric } from "../../../../utils/types";

export const checkHasDataForPeriod = (period: string, metric: Metric): boolean => {
    if (period === "1Year") {
      const data = metric.data.filter((item) => {
        const startDate = new Date(Number(item.startDate));
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return startDate >= oneYearAgo;
      });
      return data.length > 0;
    } else if (period === "3Months") {
      const data = metric.data.filter((item) => {
        const startDate = new Date(Number(item.startDate));
        const threeMonthsAgo = new Date();
        threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
        return startDate >= threeMonthsAgo;
      });
      return data.length > 0;
    } else if (period === "6Months") {
      const data = metric.data.filter((item) => {
        const startDate = new Date(Number(item.startDate));
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        return startDate >= sixMonthsAgo;
      });
      return data.length > 0;
    } else if (period === "1Month") {
      const data = metric.data.filter((item) => {
        const startDate = new Date(Number(item.startDate));
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        return startDate >= oneMonthAgo;
      });
      return data.length > 0;
    } else if (period === "3Years") {
      const data = metric.data.filter((item) => {
        const startDate = new Date(Number(item.startDate));
        const threeYearsAgo = new Date();
        threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
        return startDate >= threeYearsAgo;
      });
      return data.length > 0;
    } else if (period === "5Years") {
      const data = metric.data.filter((item) => {
        const startDate = new Date(Number(item.startDate));
        const fiveYearsAgo = new Date();
        fiveYearsAgo.setFullYear(fiveYearsAgo.getFullYear() - 5);
        return startDate >= fiveYearsAgo;
      });
      return data.length > 0;
    } else if (period === "AllTime") {
      return metric.data.length > 0;
    }
    return false;
  };