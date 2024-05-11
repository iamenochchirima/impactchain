import { getAiOverview } from "../../../../helpers/helpers";
import { ReportPromptsResponses } from "../../../../redux/slices/app";
import {
  BarGraphData,
  LineGraphData,
  MetricReportData,
  PieChartData,
  pieData,
  xisVals,
} from "./types";

export const mergeBarGraphData = (graphs: BarGraphData[]): BarGraphData => {
  const dataMap = new Map<string, { totalY: number; count: number }>();

  for (const graph of graphs) {
    for (const data of graph.data) {
      if (dataMap.has(data.x)) {
        const existing = dataMap.get(data.x);
        dataMap.set(data.x, {
          totalY: existing!.totalY + data.y,
          count: existing!.count + 1,
        });
      } else {
        dataMap.set(data.x, { totalY: data.y, count: 1 });
      }
    }
  }

  const averageData: xisVals[] = Array.from(
    dataMap,
    ([x, { totalY, count }]) => ({
      x: x,
      y: totalY / count,
    })
  );

  averageData.sort((a, b) => a.x.localeCompare(b.x));

  const uniqueCategories = new Set<string>();
  graphs.forEach((graph) => {
    graph.categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });

  return {
    name: "Average Performance",
    data: averageData,
    categories: Array.from(uniqueCategories),
  };
};

export const getLineGraphData = (
  periodOfTime: string,
  data: any[],
  name: string,
  valueKey: string
): LineGraphData | null => {
  let periodLength, categories;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  switch (periodOfTime) {
    case "1Month":
      periodLength = new Date(currentYear, currentMonth + 1, 0).getDate();
      categories = Array.from(
        { length: periodLength },
        (_, i) => `${currentYear}-${currentMonth + 1}-${i + 1}`
      );
      break;
    case "3Months":
    case "6Months":
    case "1Year":
    case "3Years":
    case "5Years": {
      const totalMonths = periodTimeToMonths(periodOfTime);
      periodLength = totalMonths;
      categories = Array.from({ length: periodLength }, (_, i) => {
        const monthDate = new Date(
          currentYear,
          currentMonth - periodLength + i + 1,
          1
        );
        return monthDate.toLocaleString("default", {
          month: "short",
          year: "numeric",
        });
      });
      break;
    }
    case "AllTime": {
      const startYear = 2000;
      periodLength = currentYear - startYear + 1;
      categories = Array.from(
        { length: periodLength },
        (_, i) => `${startYear + i}`
      );
      break;
    }
    default:
      return null;
  }

  const dataValues = Array.from({ length: periodLength }, () => 0);
  const counts = Array.from({ length: periodLength }, () => 0);

  data.forEach((item) => {
    let index;
    const itemDate = new Date(Number(item.startDate));

    switch (periodOfTime) {
      case "1Month":
        index = itemDate.getDate() - 1;
        break;
      case "3Months":
      case "6Months":
      case "1Year":
      case "3Years":
      case "5Years":
      case "AllTime":
        index =
          (itemDate.getFullYear() - currentYear) * 12 +
          itemDate.getMonth() -
          currentMonth +
          (periodLength - 1);
        break;
      default:
        index = -1;
    }

    if (index >= 0 && index < periodLength && item[valueKey] != null) {
      dataValues[index] += Number(item[valueKey]);
      counts[index] += 1;
    }
  });

  const averages = dataValues.map((sum, i) =>
    counts[i] ? parseFloat((sum / counts[i]).toFixed(2)) : 0
  );

  return {
    name,
    data: averages,
    categories,
  };
};

function periodTimeToMonths(periodOfTime: string): number {
  switch (periodOfTime) {
    case "3Months":
      return 3;
    case "6Months":
      return 6;
    case "1Year":
      return 12;
    case "3Years":
      return 36;
    case "5Years":
      return 60;
    default:
      return 0;
  }
}

export const getTimeBarGraphData = (
  periodOfTime: string,
  data: any[],
  name: string,
  valueKey: string
): BarGraphData | null => {
  let categories: string[] = [];
  let resultData: xisVals[] = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  let months = 0;
  const startYear = currentYear - 2;

  switch (periodOfTime) {
    case "1Month":
    case "3Months": {
      const weeksCount = periodOfTime === "1Month" ? 4 : 12;
      categories = [];
      for (let i = 0; i < weeksCount; i++) {
        const weekStart = new Date(
          currentYear,
          currentMonth + Math.floor(i / 4),
          (i % 4) * 7 + 1
        );
        const monthName = weekStart.toLocaleDateString("default", {
          month: "short",
        });
        const weekNumber = i + 1;
        categories.push(`Week ${weekNumber} - ${monthName}`);
      }
      break;
    }
    case "6Months":
    case "1Year": {
      months = periodOfTime === "6Months" ? 6 : 12;
      categories = Array.from({ length: months }, (_, i) => {
        const date = new Date(currentYear, currentMonth - months + i + 1, 1);
        return date.toLocaleDateString("default", { month: "short" });
      });
      break;
    }
    case "3Years":
      categories = Array.from({ length: 3 * 4 }, (_, i) => {
        const year = startYear + Math.floor(i / 4);
        const quarter = (i % 4) + 1;
        return `Q${quarter} ${year}`;
      });
      break;
    case "5Years":
      categories = Array.from(
        { length: 5 },
        (_, i) => `${currentYear - 4 + i}`
      );
      break;
    default:
      return null;
  }

  resultData = categories.map((x) => ({ x, y: 0 }));
  const counts = Array.from({ length: resultData.length }, () => 0);

  data.forEach((item) => {
    const itemDate = new Date(Number(item.startDate));
    let index = -1;

    if (["1Month", "3Months"].includes(periodOfTime)) {
      const startOfYear = new Date(itemDate.getFullYear(), 0, 1).getTime();
      const weekOfYear = Math.floor(
        (itemDate.getTime() - startOfYear) / (7 * 24 * 60 * 60 * 1000)
      );
      index = weekOfYear % categories.length; // Corrected indexing for weeks
    } else if (["6Months", "1Year"].includes(periodOfTime)) {
      const monthDiff =
        (itemDate.getFullYear() - currentYear) * 12 +
        itemDate.getMonth() -
        currentMonth;
      index = monthDiff + months - 1;
    } else if (periodOfTime === "3Years") {
      const yearDiff = itemDate.getFullYear() - startYear;
      const quarter = Math.floor(itemDate.getMonth() / 3);
      index = yearDiff * 4 + quarter;
    } else if (periodOfTime === "5Years") {
      index = itemDate.getFullYear() - (currentYear - 4);
    }

    if (index >= 0 && index < resultData.length && item[valueKey] != null) {
      resultData[index].y += Number(item[valueKey]);
      counts[index]++;
    }
  });

  resultData.forEach((item, idx) => {
    if (counts[idx] > 0) {
      item.y = parseFloat((item.y / counts[idx]).toFixed(2));
    }
  });

  return { name, data: resultData, categories };
};

export const getPieChartData = (
  periodOfTime: string,
  data: any[],
  name: string,
  valueKey: string
): PieChartData | null => {
  const resultData: pieData[] = [];

  data.forEach((item) => {
    const value = item[valueKey];
    if (value != null) {
      const index = resultData.findIndex((x) => x.name === value);
      if (index === -1) {
        resultData.push({ name: value, y: 1 });
      } else {
        resultData[index].y += 1;
      }
    }
  });

  return { name, pieChat: true, data: resultData };
};

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

export const generateOverralOverview = async (
  metricsData: MetricReportData[],
  allBarGraphData: BarGraphData,
  timePeriod: string,
  category: string
) => {
  const aiOverviews = metricsData.map((metric) => {
    return metric.aiOverview.content;
  });

  const prompt = `We are generating an Environmental, Social, and Governance (ESG) report for a company on our platform focusing on ${category}. The company has been using our platform to track their ESG metrics. The report will cover the company's performance over the last ${timePeriod}. Here is an array of AI-generated overviews for each metric: ${aiOverviews.join(
    ", "
  )}. The report will also include a bar graph showing the overall average performance of all metrics over the last ${timePeriod}. Here is the bar graph data: ${allBarGraphData.data
    .map((data) => `${data.x}: ${data.y}`)
    .join(
      ", "
    )}. In less than 175 words and some line breaks for better visualization, write an overall overview of the company's performance over the last ${timePeriod} focusing on ${category}. Here is an example: "Overview: Starbucks offers comprehensive health benefits, stock options, and education opportunities to all employees, including part-time workers. Performance: High employee satisfaction scores; reduced turnover by 28% in 2019. Future Goals: Expand mental health benefits and professional development programs globally."`;

  const res = await getAiOverview(prompt);
  if (!res.choices) {
    console.error("No choices found");
    return null;
  }

  return res;
};
