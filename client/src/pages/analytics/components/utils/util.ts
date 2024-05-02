import { ReportPromptsResponses } from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";
import { BarGraphData, LineGraphData, MetricReportData, xisVals } from "./types";

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

export const getMetricsReportData = (
  metricsWithDataForPeriod: Metric[],
  reportPromptResponse: ReportPromptsResponses
) => {
  const metricsData: MetricReportData[] = [];
  for (const metric of metricsWithDataForPeriod) {
    if (metric.data.length === 0) {
      continue;
    }
    if (metric.key === "jobTraining") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "Job Training and Educational Programs";
      const lineGraphData = getLineGraphData(
        reportPromptResponse.periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        reportPromptResponse.periodOfTime,
        metric.data,
       graphName,
        valueKey
      );

      const _reportData: MetricReportData = {
        name: "Job Training",
        key: "jobTraining",
        graphs: {
          1: {
            name: "Job Training",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: lineGraphData,
          },
          2: {
            name: "Job Training",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };
      
      metricsData.push(_reportData);
    } else if (metric.key === "microloans") {
      // Handle microloans logic here
    } else if (metric.key === "peopleAssisted") {
      // Handle people assisted logic here
    } else if (metric.key === "foodDonation") {
      // Handle food donation logic here
    } else if (metric.key === "sustainableAgriculture") {
      // Handle sustainable agriculture logic here
    } else if (metric.key === "peopleFed") {
      // Handle people fed logic here
    } else if (metric.key === "healthcareFunding") {
      // Handle healthcare funding logic here
    } else if (metric.key === "healthCheckups") {
      // Handle health checkups logic here
    } else if (metric.key === "peopleAccessingHealthcare") {
      // Handle people accessing healthcare logic here
    } else if (metric.key === "schoolsBuilt") {
      // Handle schools built logic here
    } else if (metric.key === "educationalGrants") {
      // Handle educational grants logic here
    } else if (metric.key === "studentsBenefiting") {
      // Handle students benefiting logic here
    } else if (metric.key === "womensEmpowerment") {
      // Handle women's empowerment logic here
    } else if (metric.key === "genderEqualityWorkshops") {
      // Handle gender equality workshops logic here
    } else if (metric.key === "workplaceGenderEquality") {
      // Handle workplace gender equality logic here
    } else if (metric.key === "sanitationFacilities") {
      // Handle sanitation facilities logic here
    } else if (metric.key === "waterConservation") {
      // Handle water conservation logic here
    } else if (metric.key === "peopleWithAccess") {
      // Handle people with access logic here
    } else if (metric.key === "renewableEnergyProjects") {
      // Handle renewable energy projects logic here
    } else if (metric.key === "energyEfficientSystems") {
      // Handle energy efficient systems logic here
    } else if (metric.key === "energyConsumptionReduction") {
      // Handle energy consumption reduction logic here
    } else if (metric.key === "jobCreation") {
      // Handle job creation logic here
    } else if (metric.key === "vocationalTraining") {
      // Handle vocational training logic here
    } else if (metric.key === "employmentImprovements") {
      // Handle employment improvements logic here
    } else if (metric.key === "stemEducation") {
      // Handle STEM education logic here
    } else if (metric.key === "sustainableInfrastructure") {
      // Handle sustainable infrastructure logic here
    } else if (metric.key === "peopleBenefiting") {
      // Handle people benefiting logic here
    } else if (metric.key === "marginalizedCommunitySupport") {
      // Handle marginalized community support logic here
    } else if (metric.key === "inclusionPolicies") {
      // Handle inclusion policies logic here
    } else if (metric.key === "beneficiaries") {
      // Handle beneficiaries logic here
    } else if (metric.key === "urbanSustainability") {
      // Handle urban sustainability logic here
    } else if (metric.key === "affordableHousing") {
      // Handle affordable housing logic here
    } else if (metric.key === "urbanLivingConditions") {
      // Handle urban living conditions logic here
    } else if (metric.key === "wasteReduction") {
      // Handle waste reduction logic here
    } else if (metric.key === "sustainableSupplyChain") {
      // Handle sustainable supply chain logic here
    } else if (metric.key === "resourceFootprintReduction") {
      // Handle resource footprint reduction logic here
    } else if (metric.key === "carbonEmissionReduction") {
      // Handle carbon emission reduction logic here
    } else if (metric.key === "renewableEnergyInvestment") {
      // Handle renewable energy investment logic here
    } else if (metric.key === "reforestationProjects") {
      // Handle reforestation projects logic here
    } else if (metric.key === "marineEcosystemProtection") {
      // Handle marine ecosystem protection logic here
    } else if (metric.key === "oceanPollutionReduction") {
      // Handle ocean pollution reduction logic here
    } else if (metric.key === "sustainableFishing") {
      // Handle sustainable fishing logic here
    } else if (metric.key === "landConservation") {
      // Handle land conservation logic here
    } else if (metric.key === "endangeredSpeciesProtection") {
      // Handle endangered species protection logic here
    } else if (metric.key === "landRehabilitation") {
      // Handle land rehabilitation logic here
    } else if (metric.key === "antiCorruptionPrograms") {
      // Handle anti-corruption programs logic here
    } else if (metric.key === "humanRightsInitiatives") {
      // Handle human rights initiatives logic here
    } else if (metric.key === "communityPeacePrograms") {
      // Handle community peace programs logic here
    } else if (metric.key === "collaborativeProjects") {
      // Handle collaborative projects logic here
    } else if (metric.key === "financialContributions") {
      // Handle financial contributions logic here
    } else if (metric.key === "sdgAdvocacy") {
      // Handle SDG advocacy logic here
    } else {
      console.log("Unknown metric key:", metric.key);
      continue;
    }
  }
  return metricsData;
};

const getLineGraphData = (
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

const getTimeBarGraphData = (
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
        const weekStart = new Date(currentYear, currentMonth + Math.floor(i / 4), (i % 4) * 7 + 1);
        const monthName = weekStart.toLocaleDateString("default", { month: "short" });
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
      categories = Array.from({ length: 5 }, (_, i) => `${currentYear - 4 + i}`);
      break;
    default:
      return null;
  }

  resultData = categories.map(x => ({ x, y: 0 }));
  const counts = Array.from({ length: resultData.length }, () => 0);

  data.forEach(item => {
    const itemDate = new Date(Number(item.startDate));
    console.log(itemDate, item)
    let index = -1;

    if (["1Month", "3Months"].includes(periodOfTime)) {
      const startOfYear = new Date(itemDate.getFullYear(), 0, 1).getTime();
      const weekOfYear = Math.floor(
        (itemDate.getTime() - startOfYear) / (7 * 24 * 60 * 60 * 1000)
      );
      index = weekOfYear % categories.length; // Corrected indexing for weeks
    } else if (["6Months", "1Year"].includes(periodOfTime)) {
      const monthDiff = (itemDate.getFullYear() - currentYear) * 12 + itemDate.getMonth() - currentMonth;
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





