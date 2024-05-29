import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useEffect, useState } from "react";
import { getMetricsReportData } from "../utils/getGraphsData";
import { toast } from "react-toastify";
import {
  setLoadingReport,
  setReport,
  setReportPromptModal,
} from "../../../../redux/slices/app";
import { Metric } from "../../../../utils/types";
import { FullReportData, GraphLabel, TestimonialType } from "../utils/types";
import SpecificMetric from "./SpecificMetric";
import ReportPeriod from "./ReportPeriod";
import {
  filterMetricsData,
  generateOverralOverview,
  getMetricsWithDataForTheGivenTimePeriod,
  mergeLineGraphData,
} from "../utils/processGraphsData";
import Loading from "../Loading";
import ReactMarkdown from "react-markdown";
import LineGraph from "../../../dashboard/components/Charts/LineGraph";
import { formatDate } from "../../../../utils/time";
import CaseStudiesSection from "./CaseStudiesSection";

const ShowReport = () => {
  const dispatch = useDispatch();
  const [metricsWithDataForPeriod, setMetricsWithDataForPeriod] = useState<
    Metric[] | null
  >(null);
  const {
    categoryImpactTargets,
    reportPromptResponse,
    userRecord,
    loadingReport,
    reportCategory,
    report,
  } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (!categoryImpactTargets || !reportPromptResponse) {
      console.error("No categoryImpactTargets or reportPromptResponse found");
      return;
    }
  }, [categoryImpactTargets, reportPromptResponse]);

  useEffect(() => {
    if (reportPromptResponse) {
      const res = getMetricsWithDataForTheGivenTimePeriod(
        reportPromptResponse.selectedMetrics,
        reportPromptResponse.periodOfTime
      );
      if (res) {
        setMetricsWithDataForPeriod(res);
      }
      if (!res) {
        toast.warning(
          "No data found for the given time period, please select another time period",
          {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
          }
        );
        dispatch(setReportPromptModal(true));
      }
    }
  }, [reportPromptResponse]);

  useEffect(() => {
    if (metricsWithDataForPeriod && reportPromptResponse) {
      getData(metricsWithDataForPeriod, reportPromptResponse.periodOfTime);
    }
  }, [metricsWithDataForPeriod, reportPromptResponse]);

  const getData = async (arg1: Metric[], arg2) => {
    if (!reportPromptResponse || !reportCategory || !metricsWithDataForPeriod) {
      console.error("No reportPromptResponse or reportCategory found in state");
      return;
    }
    dispatch(setLoadingReport(true));
    const _res = await getMetricsReportData(arg1, arg2);
    if (!_res) {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }
    const labels: GraphLabel = {
      x_label: "Time",
      y_label: "Impact % change",
    };
    const overview = await generateOverralOverview(
      _res.metricsData,
      mergeLineGraphData(_res.allLineGraphData, labels),
      reportPromptResponse.periodOfTime,
      reportCategory.category
    );
    if (!overview) {
      toast.error("Error Generating report", {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
      });
      return;
    }

    const rawMetrics = filterMetricsData(
      metricsWithDataForPeriod,
      reportPromptResponse.periodOfTime
    );

    const report: FullReportData = {
      companyName: userRecord?.aboutCompany.name || "",
      overview: overview.choices[0].message,
      overalGraph: mergeLineGraphData(_res.allLineGraphData, labels),
      specificMetrics: _res.metricsData,
      rawMetrics,
      overalImpact: _res.averageImpact,
      avgDuration: _res.averageDuration,
      avgPrograms: _res.avgProgramsCount,
      participants: _res.avgParticipantsCount,
      testimonials: getTestimonials(rawMetrics),
      location: _res.locationCount,
    };
    dispatch(setReport({ report }));
    dispatch(setLoadingReport(false));
  };

  const getProgramsData = (metrics: Metric[]): any[] => {
    let combinedData: any[] = [];
    metrics.forEach((metric) => {
      combinedData = combinedData.concat(metric.data);
    });

    return combinedData;
  };

  const getTestimonials = (metrics: Metric[]): TestimonialType[] => {
    const combinedData: TestimonialType[] = [];
    metrics.forEach((metric) => {
      metric.data.forEach((dataEntry) => {
        const testimonial: TestimonialType = {
          projectName: dataEntry.programName,
          testimonials: dataEntry.testimonials,
          description: dataEntry.description,
          notableAchievements: dataEntry.notableAchievements,
          challenges: dataEntry.challenges,
          location: dataEntry.location,
          startDate: formatDate(Number(dataEntry.startDate)),
          duration: dataEntry.duration,
        };
        combinedData.push(testimonial);
      });
    });
    return combinedData;
  };

  return (
    <div>
      {loadingReport ? (
        <Loading />
      ) : (
        <div id="chartContainer" className="overflow-auto bg-white text-black">
          <div className="mt-3">
            <ReportPeriod periodOfTime={reportPromptResponse?.periodOfTime} />
          </div>
          <div className="flex flex-col font-semibold text-[100px] leading-[0.9] mt-4">
            <span>ESG</span>
            <span>Performance</span>
            <span>Report</span>
          </div>
          <div className="flex justify-center items-center my-4">
            <img
              src={
                userRecord?.aboutCompany.logo
                  ? userRecord?.aboutCompany.logo
                  : "/i.clogo.png"
              }
              alt="Company logo"
              className="h-75 w-75 mx-auto"
            />
          </div>

          {/* SCOPE OF REPORT */}

          <div className="">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-4xl font-bold mb-4">Scope of Report</h2>
              <p className="mb-6">
                This report covers the period from
                <strong className="">4 June</strong> to
                <strong className="">5 Jan</strong>, focusing on specific
                regions and communities as determined by the user. The analysis
                includes detailed assessments of various programs' performance,
                highlighting successes, challenges, and opportunities for
                improvement. Users can customize the scope to align with their
                particular areas of interest, ensuring that the report provides
                relevant and actionable insights.
              </p>

              <h2 className="text-2xl font-bold mb-4">Report Highlights</h2>
              <ul className="list-disc list-inside mb-6">
                <li className="mb-2">
                  <strong className="">Transparency and Accountability:</strong>
                  The system provides unparalleled transparency, allowing
                  stakeholders to verify the data and trust in the reported
                  outcomes.
                </li>
                <li className="mb-2">
                  <strong className="">Data-Driven Insights:</strong>
                  The platform enables users to generate detailed reports,
                  offering data-driven insights into the effectiveness of job
                  training initiatives.
                </li>
                <li>
                  <strong className="">Scalability and Replicability:</strong>
                  Insights gained from these programs can inform future
                  initiatives, promoting scalability and replicability of
                  successful models.
                </li>
              </ul>

              <p>
                This report serves as a comprehensive tool for tracking and
                demonstrating the impact of various programs under the
                Sustainable Development Goals (SDGs), fostering a data-driven
                approach to sustainable development.
              </p>
            </div>
          </div>

          {/* EXECUTIVE SUMMARY */}
          <div className="">
            <div className="flex flex-col font-semibold text-[90px] leading-[0.9] mt-20">
              <span>Executive</span>
              <span>Summary</span>
            </div>
            <div className="">
              <p className=" whitespace-pre-wrap my-4">
                <ReactMarkdown>{report?.overview.content || ""}</ReactMarkdown>
              </p>
            </div>

            {/* Statistics */}

            <div className="grid grid-cols-3 gap-3 justify-center items-center p-4 font-PoppinsRegular bg-purple-50 text-white">
              <div className=" bg-purple-500 h-full flex flex-col justify-center items-center p-2">
                <div className="text-center p-8">
                  <h2 className="text-[100px] font-bold">
                    {report?.participants}
                  </h2>
                  <p className="text-sm mt-2 text-nowrap">
                    AVERAGE PARTICIPANTS
                  </p>
                </div>
              </div>
              <div className=" bg-purple-500 h-full flex flex-col justify-center items-center p-2">
                <div className="text-center p-8">
                  <h2 className="text-[100px] font-bold">
                    {report?.avgPrograms}
                  </h2>
                  <p className="text-sm mt-2">AVERAGE PROGRAMS</p>
                </div>
              </div>
              <div className=" p-2 bg-purple-500 h-full flex flex-col justify-center items-center ">
                <div className="text-center p-8">
                  <h2 className=" font-bold">{report?.avgDuration}</h2>
                  <p className="text-sm mt-2">AVERAGE DURATION</p>
                </div>
              </div>
              <div className=" p-2 col-span-2 h-full flex flex-col justify-center items-center">
                <div className="text-center bg-white text-purple-500 p-8">
                  <h2 className="text-[100px] font-bold">
                    {report?.overalImpact} %
                  </h2>
                  <p className="text-sm mt-2 text-black">
                    OVERALL IMPACT (Increase )
                  </p>
                </div>
              </div>
              <div className=" bg-purple-500 h-full flex flex-col justify-center items-center p-2">
                <div className="text-center p-8">
                  <h2 className="text-[100px] font-bold">{report?.location}</h2>
                  <p className="text-sm mt-2">LOCATIONS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <span className="tracking-widest mt-4">PREPARED BY</span>
              <span className="font-bold">
                {userRecord ? userRecord.aboutCompany.name : ""}
              </span>
            </div>
            {report && (
              <LineGraph data={report.overalGraph} graphKey="overalGraph" />
            )}
          </div>
          <div className="flex flex-col font-bold text-[100px] leading-[0.9] mt-4">
            <span>Specific</span>
            <span>Metrics</span>
          </div>

          <p className="mt-5">
            <strong> {report?.companyName}</strong> is dedicated to promoting
            sustainability and upholding ESG principles across all its
            operations. With a strong commitment to social responsibility, the
            organization has been at the forefront of implementing initiatives
            that drive positive social and environmental change. In line with
            the United Nations' 2030 Agenda for Sustainable Development, the
            organization is committed to meeting the 2030 goals. These
            initiatives address various aspects of sustainability, empowering
            individuals, and fostering sustainable development.
          </p>

          {/* SPECIFIC METRICS */}

          <div className="">
            <h1 className="text-4xl font-bold mt-4 mb-4 ">Programs</h1>
            {report && (
              <>
                {" "}
                {getProgramsData(report.rawMetrics).map((program, index) => (
                  <div>
                    <h2 className=" font-bold mb-4">
                      Program Name: {program.name}
                    </h2>
                    <p className="mb-3">
                      <strong>Location:</strong> {program.location}
                    </p>
                    <p className="mb-3">
                      <strong>Start Date:</strong>{" "}
                      {formatDate(Number(program.startDate))}
                    </p>
                    <p className="mb-4">
                      <strong>Duration:</strong> {program.duration}
                    </p>
                    <h3 className="font-bold mb-2">Objective</h3>
                    <p className="mb-3">{program.objectives}</p>
                    <h3 className=" font-bold mb-2">Community Impact</h3>
                    <p>{program.communityImpact}</p>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* KPIS */}

          <div className="flex flex-col font-bold text-[100px] leading-[0.9] mt-5">
            <span>Key Performance Indicators Analysis</span>
          </div>

          <div className="">
            {report?.specificMetrics.map((metricData, index) => (
              <SpecificMetric key={index} {...{ metricData }} />
            ))}
          </div>

          {/* Case Studies and testimonials */}

          <div className="">
            <div className="flex flex-col font-bold text-[100px] leading-[0.9] mt-5">
              <span>Case Studies and Testimonials</span>
            </div>
            <div className="my-5">
              <h2 className="text-xl font-bold mb-4">
                Specific Projects and Case Studies
              </h2>
            </div>
            <div className="">
              {report?.testimonials.map((testimonial, index) => (
                <CaseStudiesSection
                  key={index}
                  {...{ testimonials: testimonial }}
                />
              ))}
            </div>
          </div>
      
        </div>
      )}
    </div>
  );
};

export default ShowReport;
