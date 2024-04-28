import { ReportPromptsResponses } from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";

export const getMetricsWithDataForTheGivenTimePeriod = (
  response: ReportPromptsResponses
) => {
  if (response.periodOfTime === "AllTime") {
    return response.selectedMetrics;
  }
  if (response.periodOfTime === "1Month") {
    const res = response.selectedMetrics
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
    const res = response.selectedMetrics
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
    const res = response.selectedMetrics
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
    const res = response.selectedMetrics
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
    const res = response.selectedMetrics
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
    const res = response.selectedMetrics
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

export const getMetricsGraphs = (metricsWithDataForPeriod: Metric[]) => {
  const data = metricsWithDataForPeriod.map((metric) => {
    return {
      name: metric.name,
      data: metric.data.map((item) => item.value),
    };
  });

  const categories = metricsWithDataForPeriod[0].data.map((item) => {
    const date = new Date(Number(item.startDate));
    return date.toLocaleString("default", { month: "short" });
  });

  return {
    data,
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories,
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          formatter: (val) => `${val}%`,
        },
      },
    },
  };
};
