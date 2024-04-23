import { ReportPromptsResponses } from "../../../../redux/slices/app";

export const gitMetricsForTheGivenTimePeriod = (
  data: any[],
  response: ReportPromptsResponses
) => {
  if (response.periodOfTime === "AllTime") {
    return data;
  }
  if (response.periodOfTime === "1Month") {
    const res = data.filter((value) => {
      const startDate = new Date(Number(value[0].startDate));
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 1);
      return startDate > lastMonth;
    });
    console.log("1Month", res);
    if (res.length === 0) {
      return null;
    } else {
      return res;
    }
  }
  if (response.periodOfTime === "3Months") {
    const res = data.filter((value) => {
      const startDate = new Date(Number(value[0].startDate));
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 3);
      return startDate > lastMonth;
    });
    console.log("3Months", res);
    if (res.length === 0) {
      return null;
    } else {
      return res;
    }
  }
  if (response.periodOfTime === "6Months") {
    const res = data.filter((value) => {
      const startDate = new Date(Number(value[0].startDate));
      const lastMonth = new Date();
      lastMonth.setMonth(lastMonth.getMonth() - 6);
      return startDate > lastMonth;
    });
    console.log("6Months", res);
    if (res.length === 0) {
      return null;
    } else {
      return res;
    }
  }
  if (response.periodOfTime === "1Year") {
    const res = data.filter((value) => {
      const startDate = new Date(Number(value[0].startDate));
      const lastMonth = new Date();
      lastMonth.setFullYear(lastMonth.getFullYear() - 1);
      return startDate > lastMonth;
    });
    console.log("1Year", res);
    if (res.length === 0) {
      return null;
    } else {
      return res;
    }
  }
  if (response.periodOfTime === "3Years") {
    const res = data.filter((value) => {
      const startDate = new Date(Number(value[0].startDate));
      const lastMonth = new Date();
      lastMonth.setFullYear(lastMonth.getFullYear() - 3);
      return startDate > lastMonth;
    });
    console.log("3Years", res);
    if (res.length === 0) {
      return null;
    } else {
      return res;
    }
  }
  if (response.periodOfTime === "5Years") {
    const res = data.filter((value) => {
      const startDate = new Date(Number(value[0].startDate));
      const lastMonth = new Date();
      lastMonth.setFullYear(lastMonth.getFullYear() - 5);
      return startDate > lastMonth;
    });
    console.log("5Years", res);
    if (res.length === 0) {
      return null;
    } else {
      return res;
    }
  }
};
