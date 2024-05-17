import { getAiOverview } from "../../../../helpers/helpers";
import { ReportPromptsResponses } from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";
import { getLineGraphData, getPieChartData, getTimeBarGraphData } from "./processGraphsData";
import {
  testfoodDonationPrograms,
  testJobCreatedPrograms,
  testmicroloanPrograms,
  testpeopleAssistedOut,
  testsustainableAgricultureInvestments,
} from "./test";
import {
  BarGraphData,
  MetricReportData,
} from "./types";



export const getMetricsReportData = async (
  metricsWithDataForPeriod: Metric[],
  periodOfTime: string,
) => {
  const metricsData: MetricReportData[] = [];

  const allBarGraphData: BarGraphData[] = [];
  for (const metric of metricsWithDataForPeriod) {
    if (metric.data.length === 0) {
      continue;
    }

    /************************************
    Job Training and Educational Programs
    ************************************/

    if (metric.key === "jobTraining") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "Job Training and Educational Programs";
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      )

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }
      const modifiedData: any[] = [];

      for (const item of testJobCreatedPrograms.data) {
        const program = {
          programName: item.programName,
          startDate: new Date(Number(item.startDate)),
          duration: item.duration,
          location: item.location,
          numberOfBeneficiaries: Number(item.numberOfBeneficiaries),
          futureGoal: testJobCreatedPrograms.goal,
        };
        modifiedData.push(program);
      }

      const prompt = `We are generating an ESG report focusing on the social impact of our initiatives. This report will help users understand our contributions to community development and workforce enhancement through various job training programs. Given the data: ${JSON.stringify(modifiedData)}, please analyze the trends in the number of beneficiaries over time, highlighting any seasonal trends or year-on-year growth. In less than 175 words, provide a detailed overview of these trends, which will be included in the users' report PDF to help them comprehend the data and identify areas for improvement. Here is an example of what the overview should look like:

      "Overview: The job training programs, including the Web Development Bootcamp in Cape Town and the Data Science Training in Johannesburg, aim to equip participants with essential technical skills in high-demand fields. These programs, each spanning 3 to 4 months, are strategically located to maximize accessibility and impact.
      Performance: The programs have trained 270 beneficiaries this year, marking a 25% increase from the previous period. While the Web Development Bootcamp achieved high data verification, the Data Science Training faced challenges with verifying data, slightly impacting the overall data integrity.
      Future Goals: Enhance data verification across all programs to ensure robust and reliable reporting of impacts. Plans to expand these initiatives to additional cities are set, aiming to increase the beneficiary count by at least 30% in the next cycle. Additionally, integrating soft skills training into the curriculum is targeted to provide a more holistic educational experience."`;
      
      const res = await getAiOverview(prompt);

      if (!res.choices) {
        console.error("No choices found", res);
        return;
      }

      const _reportData: MetricReportData = {
        name: "Job Training",
        key: "jobTraining",
        graphs: {
          1: {
            typeOfGraph: "bar",
            name: "Job Training",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: barGraphData,
          },
          2: undefined,
          3: undefined,
        },
        aiOverview: res.choices[0].message,
      };
      metricsData.push(_reportData);

      /************************************
       * Microloans or Grants Provided Program
       * **********************************/
    } else if (metric.key === "microloans") {
      const valueKey = "amountDisbursed";
      const graphName = "Microloans or grants provided program";

      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const modifiedData: unknown[] = [];

      for (const item of testmicroloanPrograms.data) {
        const program = {
          programName: item.programName,
          startDate: new Date(Number(item.startDate)),
          duration: item.duration,
          location: item.location,
          typeOfSupport: item.typeOfSupport,
          numberOfLoans: Number(item.numberOfLoans),
          amountDisbursed: Number(item.amountDisbursed),
          futureGoal: testmicroloanPrograms.goal,
        };
        modifiedData.push(program);
      }

      const prompt = `We are generating an Environmental, Social, and Governance (ESG) report, focusing on the economic empowerment aspect of our social initiatives. This report will help users understand the impact of our microloan and grant programs designed to support small businesses and entrepreneurs in underserved communities. Given the data: ${JSON.stringify(modifiedData)}, please analyze the effectiveness of these programs in providing financial support, noting any trends in loan or grant distribution and repayment rates over time. In less than 175 words, provide a detailed overview of these trends, which will be included in the users' report PDF to help them comprehend the data, the effectiveness of the program, and identify areas for improvement. Here is an example of what the overview should look like:

      "Overview: The microloan and grant programs aim to foster economic growth and sustainability by supporting local entrepreneurs and small businesses in regions such as Pretoria and Durban. These initiatives are tailored to enhance the financial stability and growth potential of the beneficiaries.
      Performance: This year, the programs disbursed over 350 loans and grants, showing a 30% increase compared to the previous year. The repayment rate stands at an impressive 85%, reflecting the financial health and success of the supported businesses.
      Future Goals: Increase the total number of loans and grants by 40% in the next fiscal cycle, with a strategic focus on expanding our reach to rural areas. Improving the financial literacy of recipients is also a priority, aiming to further boost the repayment rates and overall success of the program."`;
     
      const res = await getAiOverview(prompt);

      if (!res.choices) {
        console.error("No choices found");
        return;
      }

      const _reportData: MetricReportData = {
        name: "Microloans or Grants Provided Program",
        key: "microloans",
        graphs: {
          1: {
            typeOfGraph: "bar",
            name: "Microloans",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
          2: undefined,
          3: undefined,
        },
        aiOverview: res.choices[0].message,
      };

      metricsData.push(_reportData);

      /********************************
       * People Assisted Out of Poverty
       *******************************/
    } else if (metric.key === "peopleAssistedOutOfPoverty") {
      const valueKey = "numberOfPeopleAssisted";
      const graphName = "People assisted out of poverty";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const modifiedData: unknown[] = [];

      for (const item of testpeopleAssistedOut.data) {
        const program = {
          programName: item.programName,
          startDate: new Date(Number(item.startDate)),
          duration: item.duration,
          location: item.location,
          numberOfPeopleAssisted: item.numberOfPeopleAssisted,
          futureGoal: testJobCreatedPrograms.goal,
        };
        modifiedData.push(program);
      }

      const prompt = `We are generating an Environmental, Social, and Governance (ESG) report, emphasizing our commitment to poverty alleviation. This report will help stakeholders understand the impact of our "People Assisted Out of Poverty" programs, designed to elevate the living standards of individuals in impoverished communities. Given the data: ${JSON.stringify(modifiedData)}, please analyze the progress and success of these programs, observing trends in the number of people assisted and the overall impact on the communities served. In less than 175 words, provide a detailed overview of these trends, which will be included in the ESG report to help stakeholders comprehend the data, the successes, and areas requiring further attention. Here is an example of what the overview should look like:

      "Overview: The 'People Assisted Out of Poverty' initiatives, such as the 'Empowerment Through Education' program in Soweto, aim to provide crucial resources and support to individuals striving to escape poverty. Each program is carefully designed to address specific barriers to economic stability.
      Performance: Throughout the year, our programs have successfully assisted over 500 individuals, achieving a significant improvement in their economic conditions. The sustained success rate of these initiatives demonstrates their effectiveness in real-world applications.
      Future Goals: Continue refining and expanding these programs to increase the number of beneficiaries by 25% next year. We will also focus on integrating additional support services such as financial literacy training and vocational skills development to enhance the long-term impact on participants' lives."`;
      
      const res = await getAiOverview(prompt);

      if (!res.choices) {
        console.error("No choices found");
        return;
      }

      const _reportData: MetricReportData = {
        name: "People Assisted Out of Poverty",
        key: "peopleAssistedOutOfPoverty",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "People Assisted",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: undefined,
          3: undefined,
        },
        aiOverview: res.choices[0].message,
      };

      metricsData.push(_reportData);

      /********************************
       * Food Donation Programs
       ********************************/
    } else if (metric.key === "foodDonation") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "Food Donation";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }
      const modifiedData: unknown[] = [];

      for (const item of testfoodDonationPrograms.data) {
        const program = {
          programName: item.programName,
          startDate: new Date(Number(item.startDate)),
          duration: item.duration,
          location: item.location,
          numberOfBeneficiaries: Number(item.numberOfBeneficiaries),
          futureGoal: testfoodDonationPrograms.goal,
        };
        modifiedData.push(program);
      }

      const prompt = `We are generating an Environmental, Social, and Governance (ESG) report, highlighting our commitment to combating food insecurity. This report will help stakeholders understand the effectiveness of our "Food Donation" programs, aimed at supporting communities in need through nutritional aid. Given the data: ${JSON.stringify(modifiedData)}, please examine the scale and impact of these initiatives, noting trends in food donation volumes and beneficiary counts. In less than 175 words, provide a detailed overview of these trends, which will be included in the ESG report to help stakeholders comprehend the data, the effectiveness of our efforts, and pinpoint areas for improvement. Here is an example of what the overview should look like:

      "Overview: The 'Food Donation' programs, including 'Nourish the Nation' in Port Elizabeth, focus on delivering essential food supplies to underprivileged communities. These programs are tailored to meet the nutritional needs of the beneficiaries while ensuring food sustainability.
      Performance: This year, our initiatives have successfully distributed over 10,000 kilograms of food, directly benefiting 2,000 individuals across multiple locations. The effectiveness of these programs is evidenced by the substantial increase in both the volume of food donated and the number of beneficiaries.
      Future Goals: Strengthen and expand our food donation efforts to reach an additional 30% of beneficiaries annually. We aim to diversify the types of food donated to enhance nutritional value and address specific dietary needs within the communities we serve."`;
      
      const res = await getAiOverview(prompt);

      if (!res.choices) {
        console.error("No choices found");
        return;
      }

      const _reportData: MetricReportData = {
        name: "Food Donation",
        key: "foodDonation",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Food Donation",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: undefined,
          3: undefined,
        },
        aiOverview: res.choices[0].message,
      };

      metricsData.push(_reportData);

      /********************************
       * Sustainable Agriculture
       * ******************************/
    } else if (metric.key === "sustainableAgriculture") {
      const valueKey = "totalInvestment";
      const graphName = "Sustainable Agriculture";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const modifiedData: unknown[] = [];

      for (const item of testsustainableAgricultureInvestments.data) {
        const program = {
          projectName: item.projectName,
          startDate: new Date(Number(item.startDate)),
          duration: item.duration,
          location: item.location,
          totalInvestment: Number(item.totalInvestment),
          typeOfInvestment: item.typeOfInvestment,
          futureGoal: testsustainableAgricultureInvestments.goal,
        };
        modifiedData.push(program);
      }

      const prompt = `We are generating an Environmental, Social, and Governance (ESG) report, underlining our dedication to sustainable agriculture. This report will help stakeholders understand the impact of our investments in sustainable agriculture projects, aimed at enhancing eco-friendly farming practices. Given the data: ${JSON.stringify(modifiedData)}, please analyze the scale and efficacy of these investments, observing trends in the amount invested and the number of projects supported. In less than 175 words, provide a detailed overview of these trends, which will be included in the ESG report to help stakeholders comprehend the data, the impact of our investments, and identify areas for potential enhancement. Here is an example of what the overview should look like:

      "Overview: Our 'Investment in Sustainable Agriculture' initiatives, such as the 'Green Growth Farms' project in Kimberley, are designed to promote sustainable farming techniques and environmental stewardship. Each project is strategically selected to maximize ecological benefits and sustainability.
      Performance: This year, we invested over R20 million across five new projects, marking a significant commitment to sustainable development in agriculture. Our investments have supported advancements in sustainable irrigation and crop rotation, significantly reducing the ecological footprint of farming activities.
      Future Goals: Increase our total investment by 35% in the coming year, focusing on integrating advanced sustainable technologies like precision agriculture. We also plan to expand our project scope to include more regions that stand to benefit from sustainable farming practices."`;
      
      const res = await getAiOverview(prompt);

      if (!res.choices) {
        console.error("No choices found");
        return;
      }

      const _reportData: MetricReportData = {
        name: "Sustainable Agriculture",
        key: "sustainableAgriculture",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Sustainable Agriculture",
            x_label: "Time",
            y_label: "Amount Invested",
            graph: lineGraphData,
          },
        },
        aiOverview: res.choices[0].message,
      };

      metricsData.push(_reportData);
    } else if (metric.key === "peopleFedWithNutritiousFood") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "People with regular nutritious food";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "People Fed",
        key: "peopleFedWithNutritiousFood",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "People Fed",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "People Fed",
            x_label: "Time",
            y_label: "Number of People",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "healthcareFunding") {
      const valueKey = "amountFunded";
      const graphName = "Healthcare Funding";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Healthcare Funding",
        key: "healthcareFunding",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Healthcare Funding",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Healthcare Funding",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };
      metricsData.push(_reportData);
    } else if (metric.key === "healthCheckups") {
      const valueKey = "totalParticipantss";
      const graphName = "Health check-ups or vaccination drives";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Health Checkups Provided",
        key: "healthCheckups",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Health Checkups",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Health Checkups",
            x_label: "Time",
            y_label: "Number of People",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };
      metricsData.push(_reportData);
    } else if (metric.key === "peopleAccessingHealthcare") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "People accessing healthcare services";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "People Accessing Healthcare",
        key: "peopleAccessingHealthcare",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "People Accessing Healthcare",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "People Accessing Healthcare",
            x_label: "Time",
            y_label: "Number of People",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };
      metricsData.push(_reportData);
    } else if (metric.key === "schoolsBuilt") {
      const valueKey = "numberOfSchoolsSupported";
      const graphName = "Schools built or supported";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Schools Built or Supported",
        key: "schoolsBuilt",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Schools Built",
            x_label: "Time",
            y_label: "Number of Schools",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Schools Built",
            x_label: "Time",
            y_label: "Number of Schools",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "educationalGrants") {
      const valueKey = "totalAmountAwarded";
      const graphName = "Educational grants";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Educational Grants Programs",
        key: "educationalGrants",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Educational Grants",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Educational Grants",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };
      metricsData.push(_reportData);
    } else if (metric.key === "studentsBenefiting") {
      const valueKey = "totalStudentsBenefited";
      const graphName = "Students benefiting from educational programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Students Benefiting from Educational Programs",
        key: "studentsBenefiting",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Students Benefiting",
            x_label: "Time",
            y_label: "Number of Students",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Students Benefiting",
            x_label: "Time",
            y_label: "Number of Students",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "womensEmpowerment") {
      const valueKey = "numberOfParticipants";
      const graphName = "Women's Empowerment Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Women's Empowerment Initiatives",
        key: "womensEmpowerment",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Women's Empowerment",
            x_label: "Time",
            y_label: "Participants",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Women's Empowerment",
            x_label: "Time",
            y_label: "Participants",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "genderEqualityWorkshops") {
      const valueKey = "numberOfParticipants";
      const graphName = "Gender Equality Workshops";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Gender Equality Workshops",
        key: "genderEqualityWorkshops",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Gender Equality Workshops",
            x_label: "Time",
            y_label: "Workshops",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Gender Equality Workshops",
            x_label: "Time",
            y_label: "Workshops",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "workplaceGenderEquality") {
      const valueKey = "numberOfPolicies";
      const graphName = "Workplace Gender Equality Policies";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Workplace Gender Equality Policies",
        key: "workplaceGenderEquality",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Workplace Gender Equality Index",
            x_label: "Time",
            y_label: "Index",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Workplace Gender Equality Index",
            x_label: "Time",
            y_label: "Index",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "sanitationFacilities") {
      const valueKey = "numberOfFacilities";
      const graphName = "Sanitation Facilities Provided";
      // TODO: Add pie chart data
      const pieChartData = getPieChartData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      const _reportData: MetricReportData = {
        name: "Sanitation Facilities Provided",
        key: "sanitationFacilities",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Sanitation Facilities",
            x_label: "Time",
            y_label: "Facilities",
            graph: pieChartData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "waterConservation") {
      const valueKey = "waterSaved";
      const graphName = "Water Conservation Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Water Conservation Programs",
        key: "waterConservation",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Water Conservation",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Water Conservation",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "peopleWithAccessToWater") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "People with Access to Clean Water Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "People with Access to Clean Water Programs",
        key: "peopleWithWaterAccess",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "People with Access",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "People with Access",
            x_label: "Time",
            y_label: "Number of People",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };
      metricsData.push(_reportData);
    } else if (metric.key === "renewableEnergyProjects") {
      const valueKey = "numberOfProjects";
      const graphName = "Renewable Energy Projects";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Renewable Energy Projects",
        key: "renewableEnergyProjects",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Renewable Energy Projects",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Renewable Energy Projects",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "energyEfficientSystems") {
      const valueKey = "numberOfSystemsInstalled";
      const graphName = "Energy Efficient Systems Installed";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Energy Efficient Systems Installed",
        key: "energyEfficientSystems",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Energy Efficient Systems",
            x_label: "Time",
            y_label: "Number of Systems",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Energy Efficient Systems",
            x_label: "Time",
            y_label: "Number of Systems",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "energyConsumptionReduction") {
      const valueKey = "reductionInEnergyConsumption";
      const graphName = "Energy Consumption Reduction Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Energy Consumption Reduction Programs",
        key: "energyConsumptionReduction",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Energy Consumption Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Energy Consumption Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "jobCreation") {
      const valueKey = "jobsCreated";
      const graphName = "Job Creation Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Job Creation Programs",
        key: "jobCreation",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Job Creation",
            x_label: "Time",
            y_label: "Number of Jobs",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Job Creation",
            x_label: "Time",
            y_label: "Number of Jobs",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "vocationalTraining") {
      const valueKey = "totalParticipants";
      const graphName = "Vocational Training Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Vocational Training Programs",
        key: "vocationalTraining",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Vocational Training",
            x_label: "Time",
            y_label: "Number of Participants",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Vocational Training",
            x_label: "Time",
            y_label: "Number of Participants",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "employmentImprovements") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "Employment Improvements Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Employment Improvements Programs",
        key: "employmentImprovements",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Employment Improvements",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Employment Improvements",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "stemEducation") {
      const valueKey = "totalParticipants";
      const graphName = "STEM Education Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "STEM Education Programs",
        key: "stemEducation",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "STEM Education",
            x_label: "Time",
            y_label: "Number of Students",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "STEM Education",
            x_label: "Time",
            y_label: "Number of Students",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "sustainableInfrastructure") {
      const valueKey = "numberOfProjects";
      const graphName = "Sustainable Infrastructure Projects";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Sustainable Infrastructure Projects",
        key: "sustainableInfrastructure",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Sustainable Infrastructure",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Sustainable Infrastructure",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "peopleBenefitingFromInfrastructure") {
      const valueKey = "totalBeneficiaries";
      const graphName = "People Benefiting from Infrastructure Projects";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "People Benefiting from Infrastructure Projects",
        key: "peopleBenefitingFromInfrastructure",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "People Benefiting",
            x_label: "Time",
            y_label: "Number of People",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "People Benefiting",
            x_label: "Time",
            y_label: "Number of People",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "marginalizedCommunitySupport") {
      const valueKey = "numberOfBeneficiaries";
      const graphName = "Marginalized Community Support Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Marginalized Community Support Programs",
        key: "marginalizedCommunitySupport",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Marginalized Community Support",
            x_label: "Time",
            y_label: "Number of Participants",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Marginalized Community Support",
            x_label: "Time",
            y_label: "Number of Participants",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "inclusionPolicies") {
      const valueKey = "numberOfPolicies";
      const graphName = "Inclusion Policies Implemented";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Inclusion Policies Implemented",
        key: "inclusionPolicies",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Inclusion Policies",
            x_label: "Time",
            y_label: "Number of Policies",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Inclusion Policies",
            x_label: "Time",
            y_label: "Number of Policies",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "beneficiariesOfInequalityReduction") {
      const valueKey = "totalBeneficiaries";
      const graphName = "Beneficiaries of Inequality Reduction Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Beneficiaries of Inequality Reduction Programs",
        key: "beneficiariesOfInequalityReduction",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Beneficiaries of Inequality Reduction",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Beneficiaries of Inequality Reduction",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "urbanSustainability") {
      const valueKey = "numberOfProjects";
      const graphName = "Urban Sustainability Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Urban Sustainability Programs",
        key: "urbanSustainability",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Urban Sustainability",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Urban Sustainability",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "affordableHousing") {
      const valueKey = "numberOfHousingUnitsSupported";
      const graphName = "Affordable Housing Projects";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Affordable Housing Projects",
        key: "affordableHousing",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Affordable Housing",
            x_label: "Time",
            y_label: "Number of Houses",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Affordable Housing",
            x_label: "Time",
            y_label: "Number of Houses",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "urbanLivingConditions") {
      const valueKey = "numberOfAreasImproved";
      const graphName = "Urban Living Conditions Improvement Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Urban Living Conditions Improvement Programs",
        key: "urbanLivingConditions",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Urban Living Conditions",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Urban Living Conditions",
            x_label: "Time",
            y_label: "Number of Beneficiaries",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "wasteReduction") {
      const valueKey = "totalWasteReduced";
      const graphName = "Waste Reduction Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Waste Reduction Programs",
        key: "wasteReduction",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Waste Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Waste Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "sustainableSupplyChain") {
      const valueKey = "supplyChainImproved";
      const graphName = "Sustainable Supply Chain Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Sustainable Supply Chain Programs",
        key: "sustainableSupplyChain",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Sustainable Supply Chain",
            x_label: "Time",
            y_label: "Number of Companies",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Sustainable Supply Chain",
            x_label: "Time",
            y_label: "Number of Companies",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "resourceFootprintReduction") {
      const valueKey = "reductionInResourceFootprint";
      const graphName = "Resource Footprint Reduction Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Resource Footprint Reduction Programs",
        key: "resourceFootprintReduction",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Resource Footprint Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Resource Footprint Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "carbonEmissionReduction") {
      const valueKey = "reductionInEmission";
      const graphName = "Carbon Emission Reduction Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Carbon Emission Reduction Programs",
        key: "carbonEmissionReduction",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Carbon Emission Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Carbon Emission Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "renewableEnergyInvestment") {
      const valueKey = "amountInvested";
      const graphName = "Renewable Energy Investment Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Renewable Energy Investment Programs",
        key: "renewableEnergyInvestment",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Renewable Energy Investment",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Renewable Energy Investment",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "reforestationProjects") {
      const valueKey = "areaOfLandReforested";
      const graphName = "Reforestation Program";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Reforestation Programs",
        key: "reforestationProjects",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Reforestation Projects",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Reforestation Projects",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "marineEcosystemProtection") {
      const valueKey = "areaOfEcosystemProtected";
      const graphName = "Marine Ecosystem Protection Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Marine Ecosystem Protection Programs",
        key: "marineEcosystemProtection",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Marine Ecosystem Protection",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Marine Ecosystem Protection",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "oceanPollutionReduction") {
      const valueKey = "reductionInPollution";
      const graphName = "Ocean Pollution Reduction Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Ocean Pollution Reduction Programs",
        key: "oceanPollutionReduction",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Ocean Pollution Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Ocean Pollution Reduction",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "sustainableFishing") {
      const valueKey = "numberOfSustainableFishingProjects";
      const graphName = "Sustainable Fishing Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Sustainable Fishing Programs",
        key: "sustainableFishing",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Sustainable Fishing",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Sustainable Fishing",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "landConservation") {
      const valueKey = "areaOfLandConserved";
      const graphName = "Land Conservation Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Land Conservation Programs",
        key: "landConservation",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Land Conservation",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Land Conservation",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "endangeredSpeciesProtection") {
      const valueKey = "numberOfSpeciesProtected";
      const graphName = "Endangered Species Protection Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Endangered Species Protection Programs",
        key: "endangeredSpeciesProtection",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Endangered Species Protection",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Endangered Species Protection",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "landRehabilitation") {
      const valueKey = "areaOfLandRehabilitated";
      const graphName = "Land Rehabilitation Programs";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Land Rehabilitation Programs",
        key: "landRehabilitation",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Land Rehabilitation",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Land Rehabilitation",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "antiCorruptionPrograms") {
      const valueKey = "numberOfPrograms";
      const graphName = "Anti-Corruption Programs Implemented";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Anti-Corruption Programs Implemented",
        key: "antiCorruptionPrograms",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Anti-Corruption Programs",
            x_label: "Time",
            y_label: "Number of Programs",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Anti-Corruption Programs",
            x_label: "Time",
            y_label: "Number of Programs",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "humanRightsInitiatives") {
      const valueKey = "numberOfInitiatives";
      const graphName = "Human Rights Initiatives Implemented";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Human Rights Initiatives Implemented",
        key: "humanRightsInitiatives",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Human Rights Initiatives",
            x_label: "Time",
            y_label: "Number of Initiatives",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Human Rights Initiatives",
            x_label: "Time",
            y_label: "Number of Initiatives",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "communityPeacePrograms") {
      const valueKey = "numberOfPrograms";
      const graphName = "Community Peace Programs Implemented";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Community Peace Programs Implemented",
        key: "communityPeacePrograms",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Community Peace Programs",
            x_label: "Time",
            y_label: "Number of Programs",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Community Peace Programs",
            x_label: "Time",
            y_label: "Number of Programs",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "collaborativeSDGProjects") {
      const valueKey = "numberOfProjects";
      const graphName = "Collaborative SDG Projects Implemented";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Collaborative SDG Projects Implemented",
        key: "collaborativeSDGProjects",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Collaborative SDG Projects",
            x_label: "Time",
            y_label: "Number of Projects",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Collaborative SDG Projects",
            x_label: "Time",
            y_label: "Number of Projects",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "globalPartnershipFinancialContributions") {
      const valueKey = "amountContributed";
      const graphName = "Global Partnership Financial Contributions";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "Global Partnership Financial Contributions",
        key: "globalPartnershipFinancialContributions",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Financial Contributions",
            x_label: "Time",
            y_label: "Amount",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Financial Contributions",
            x_label: "Time",
            y_label: "Amount",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else if (metric.key === "sdgAdvocacy") {
      const valueKey = "numberOfCampaigns";
      const graphName = "SDG Advocacy Campaigns Implemented";
      const lineGraphData = getLineGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );
      const barGraphData = getTimeBarGraphData(
        periodOfTime,
        metric.data,
        graphName,
        valueKey
      );

      if (barGraphData) {
        allBarGraphData.push(barGraphData);
      }

      const _reportData: MetricReportData = {
        name: "SDG Advocacy Campaigns Implemented",
        key: "sdgAdvocacy",
        graphs: {
          1: {
            typeOfGraph: "line",
            name: "Advocacy Campaigns",
            x_label: "Time",
            y_label: "Number of Campaigns",
            graph: lineGraphData,
          },
          2: {
            typeOfGraph: "bar",
            name: "Advocacy Campaigns",
            x_label: "Time",
            y_label: "Number of Campaigns",
            graph: barGraphData,
          },
        },
        aiOverview: "AI Overview",
      };

      metricsData.push(_reportData);
    } else {
      console.log("Unknown metric key:", metric.key);
      continue;
    }
  }
  return {metricsData , allBarGraphData};
};

