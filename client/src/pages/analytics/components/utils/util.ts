import { ReportPromptsResponses } from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";
import { MetricReportData, LineGraphData } from "./types";

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

// Getting current year for yearly categories
const currentYear: number = new Date().getFullYear();

// Monthly categories (using a single month as example)
const monthlyCategories: string[] = Array.from(
  { length: 31 },
  (_, i) => `${i + 1}`
);

// Quarterly categories (3 months)
const quarterlyCategories: string[] = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
  "Week 9",
  "Week 10",
  "Week 11",
  "Week 12",
];

// Semi-annual categories (6 months)
const semiAnnualCategories: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
];

// 3-Year categories
const threeYearCategories: string[] = [
  `Q1 ${currentYear}`,
  `Q2 ${currentYear}`,
  `Q3 ${currentYear}`,
  `Q4 ${currentYear}`,
  `Q1 ${currentYear + 1}`,
  `Q2 ${currentYear + 1}`,
  `Q3 ${currentYear + 1}`,
  `Q4 ${currentYear + 1}`,
  `Q1 ${currentYear + 2}`,
  `Q2 ${currentYear + 2}`,
  `Q3 ${currentYear + 2}`,
  `Q4 ${currentYear + 2}`,
];

// 5-Year categories
const fiveYearCategories: string[] = [
  `${currentYear}`,
  `${currentYear + 1}`,
  `${currentYear + 2}`,
  `${currentYear + 3}`,
  `${currentYear + 4}`,
];

export const getMetricsReportData = (
  metricsWithDataForPeriod: Metric[],
  reportPromptResponse: ReportPromptsResponses
) => {
  const metricsData: MetricReportData[] = [];
  for (const metric of metricsWithDataForPeriod) {
    if (metric.data.length === 0) {
      return null;
    }

    if (metric.key === "jobTraining") {
      const uploadedDataDates = metric.data.map((item) => {
        return new Date(Number(item.startDate));
      });
      const dataValues = metric.data.map((item) => {
        return item.numberOfPrograms;
      });
      const data = getLineGraphData(
        reportPromptResponse.periodOfTime,
        metric.data
      );
    } else if (metric.key === "microloans") {
      // Code to execute if the key is microloans
    } else if (metric.key === "peopleAssisted") {
      // Code to execute if the key is peopleAssisted
    } else if (metric.key === "foodDonation") {
      // Code to execute if the key is foodDonation
    } else if (metric.key === "sustainableAgriculture") {
      // Code to execute if the key is sustainableAgriculture
    } else if (metric.key === "peopleFed") {
      // Code to execute if the key is peopleFed
    } else if (metric.key === "healthcareFunding") {
      // Code to execute if the key is healthcareFunding
    } else if (metric.key === "healthCheckups") {
      // Code to execute if the key is healthCheckups
    } else if (metric.key === "peopleAccessingHealthcare") {
      // Code to execute if the key is peopleAccessingHealthcare
    } else if (metric.key === "schoolsBuilt") {
      // Code to execute if the key is schoolsBuilt
    } else if (metric.key === "educationalGrants") {
      // Code to execute if the key is educationalGrants
    } else if (metric.key === "studentsBenefiting") {
      // Code to execute if the key is studentsBenefiting
    } else if (metric.key === "womensEmpowerment") {
      // Code to execute if the key is womensEmpowerment
    } else if (metric.key === "genderEqualityWorkshops") {
      // Code to execute if the key is genderEqualityWorkshops
    } else if (metric.key === "workplaceGenderEquality") {
      // Code to execute if the key is workplaceGenderEquality
    } else if (metric.key === "sanitationFacilities") {
      // Code to execute if the key is sanitationFacilities
    } else if (metric.key === "waterConservation") {
      // Code to execute if the key is waterConservation
    } else if (metric.key === "peopleWithAccess") {
      // Code to execute if the key is peopleWithAccess
    } else if (metric.key === "renewableEnergyProjects") {
      // Code to execute if the key is renewableEnergyProjects
    } else if (metric.key === "energyEfficientSystems") {
      // Code to execute if the key is energyEfficientSystems
    } else if (metric.key === "energyConsumptionReduction") {
      // Code to execute if the key is energyConsumptionReduction
    } else if (metric.key === "jobCreation") {
      // Code to execute if the key is jobCreation
    } else if (metric.key === "vocationalTraining") {
      // Code to execute if the key is vocationalTraining
    } else if (metric.key === "employmentImprovements") {
      // Code to execute if the key is employmentImprovements
    } else if (metric.key === "stemEducation") {
      // Code to execute if the key is stemEducation
    } else if (metric.key === "sustainableInfrastructure") {
      // Code to execute if the key is sustainableInfrastructure
    } else if (metric.key === "peopleBenefiting") {
      // Code to execute if the key is peopleBenefiting
    } else if (metric.key === "marginalizedCommunitySupport") {
      // Code to execute if the key is marginalizedCommunitySupport
    } else if (metric.key === "inclusionPolicies") {
      // Code to execute if the key is inclusionPolicies
    } else if (metric.key === "beneficiaries") {
      // Code to execute if the key is beneficiaries
    } else if (metric.key === "urbanSustainability") {
      // Code to execute if the key is urbanSustainability
    } else if (metric.key === "affordableHousing") {
      // Code to execute if the key is affordableHousing
    } else if (metric.key === "urbanLivingConditions") {
      // Code to execute if the key is urbanLivingConditions
    } else if (metric.key === "wasteReduction") {
      // Code to execute if the key is wasteReduction
    } else if (metric.key === "sustainableSupplyChain") {
      // Code to execute if the key is sustainableSupplyChain
    } else if (metric.key === "resourceFootprintReduction") {
      // Code to execute if the key is resourceFootprintReduction
    } else if (metric.key === "carbonEmissionReduction") {
      // Code to execute if the key is carbonEmissionReduction
    } else if (metric.key === "renewableEnergyInvestment") {
      // Code to execute if the key is renewableEnergyInvestment
    } else if (metric.key === "reforestationProjects") {
      // Code to execute if the key is reforestationProjects
    } else if (metric.key === "marineEcosystemProtection") {
      // Code to execute if the key is marineEcosystemProtection
    } else if (metric.key === "oceanPollutionReduction") {
      // Code to execute if the key is oceanPollutionReduction
    } else if (metric.key === "sustainableFishing") {
      // Code to execute if the key is sustainableFishing
    } else if (metric.key === "landConservation") {
      // Code to execute if the key is landConservation
    } else if (metric.key === "endangeredSpeciesProtection") {
      // Code to execute if the key is endangeredSpeciesProtection
    } else if (metric.key === "landRehabilitation") {
      // Code to execute if the key is landRehabilitation
    } else if (metric.key === "antiCorruptionPrograms") {
      // Code to execute if the key is antiCorruptionPrograms
    } else if (metric.key === "humanRightsInitiatives") {
      // Code to execute if the key is humanRightsInitiatives
    } else if (metric.key === "communityPeacePrograms") {
      // Code to execute if the key is communityPeacePrograms
    } else if (metric.key === "collaborativeProjects") {
      // Code to execute if the key is collaborativeProjects
    } else if (metric.key === "financialContributions") {
      // Code to execute if the key is financialContributions
    } else if (metric.key === "sdgAdvocacy") {
      // Code to execute if the key is sdgAdvocacy
    } else {
      return null;
    }
  }
};

type LineGraphData = {
  name: string;
  data: number[];
  categories: string[];
};

const getLineGraphData = (
  periodOfTime: string,
  data: any[]
): LineGraphData | null => {
  if (periodOfTime === "1Month") {
    const daysInMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      0
    ).getDate();
    const dataValues = Array.from({ length: daysInMonth }, () => 0);
    const categories = Array.from(
      { length: daysInMonth },
      (_, i) => `${i + 1}`
    );
    data.forEach((item) => {
      const date = new Date(Number(item.startDate)).getDate();
      dataValues[date - 1] = item.numberOfPrograms;
    });

    const res: LineGraphData = {
      name: "Job Training",
      data: dataValues,
      categories,
    };
    return res;
  }
  if (periodOfTime === "3Months") {
    const dataValues = Array.from({ length: 12 }, () => 0);
    const categories = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);
    data.forEach((item) => {
      const date = new Date(Number(item.startDate)).getMonth();
      dataValues[date] = item.numberOfPrograms;
    });

    const res: LineGraphData = {
      name: "Job Training",
      data: dataValues,
      categories,
    };
    return res;
  }
  if (periodOfTime === "6Months") {
    const dataValues = Array.from({ length: 6 }, () => 0);
    const categories = Array.from({ length: 6 }, (_, i) => `Week ${i + 1}`);
    data.forEach((item) => {
      const date = new Date(Number(item.startDate)).getMonth();
      dataValues[date] = item.numberOfPrograms;
    });

    const res: LineGraphData = {
      name: "Job Training",
      data: dataValues,
      categories,
    };
    return res;
    
  }
  if (periodOfTime === "1Year") {
    const dataValues = Array.from({ length: 12 }, () => 0);
    const categories = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);
    data.forEach((item) => {
      const date = new Date(Number(item.startDate)).getMonth();
      dataValues[date] = item.numberOfPrograms;
    });

    const res: LineGraphData = {
      name: "Job Training",
      data: dataValues,
      categories,
    };
    return res;
  }
  if (periodOfTime === "3Years") {   
    const dataValues = Array.from({ length: 12 }, () => 0);
    const categories = Array.from({ length: 12 }, (_, i) => `Q${i + 1}`);
    data.forEach((item) => {
      const date = new Date(Number(item.startDate)).getMonth();
      dataValues[date] = item.numberOfPrograms;
    });

    const res: LineGraphData = {
      name: "Job Training",
      data: dataValues,
      categories,
    };
    return res;

    
  }
  if (periodOfTime === "5Years") {
    const dataValues = Array.from({ length: 5 }, () => 0);
    const categories = Array.from({ length: 5 }, (_, i) => `${currentYear + i}`);
    data.forEach((item) => {
      const date = new Date(Number(item.startDate)).getFullYear();
      dataValues[date] = item.numberOfPrograms;
    });

    const res: LineGraphData = {
      name: "Job Training",
      data: dataValues,
      categories,
    };
    return res;
  }
  return null;
};
