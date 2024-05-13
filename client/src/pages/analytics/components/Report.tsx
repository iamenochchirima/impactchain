import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { formatDate } from "../../../utils/time";
import { setReportModal } from "../../../redux/slices/app";
import ShowReport from "./ShowReport";
import { RiFileEditFill } from "react-icons/ri";
import axios from "axios";
import { saveAs } from 'file-saver';
import { API_BASE_URL } from "../../../hooks/exporter";
import { MetricReportData } from "./utils/types";
import { getReportTimeTitle } from "./utils/utils";


const Report = () => {
  const dispatch = useDispatch();
  const { userRecord, userInfo, reportCategory, reportPromptResponse, report, metricsCharts} = useSelector(
    (state: RootState) => state.app
  );

  const handleClose = () => {
    dispatch(setReportModal(false));
  };

  const getDataUri = async (chartId) => {
    return await ApexCharts.exec(chartId, "dataURI").then(({ imgURI }) => {
      return imgURI;
    });
  };

const handleDownloadChart = async () => {
  const uri1 = await getDataUri("bar-graph");
  const uri2 = await getDataUri("linegraph");

  const a = document.createElement("a");
  a.href = uri1;
  a.download = "bar-graph.png";
  a.click();

  const b = document.createElement("a");
  b.href = uri2;
  b.download = "line-graph.png";
  b.click();
  
}

 type TemplateMetricReportData = {
  name: string;
  key: string;
  graph: File;
  aiOverview: any;
};
const createAndDownloadPdf = () => {
if (!reportPromptResponse || !reportCategory || !report || !userRecord || !metricsCharts) {
    console.error("No report data found");
    return;
  }

  const templateMetrics: TemplateMetricReportData[] = report.specificMetrics.map((metric) => {
    const chart = metricsCharts.find((chart) => chart.key === metric.key);
    if (!chart) {
      console.error("No chart found for metric");
      return undefined; 
    }
    return {
      name: metric.name,
      key: metric.key,
      graph: chart.chart,
      aiOverview: metric.aiOverview,
    };
  }).filter((metric): metric is TemplateMetricReportData => metric !== undefined); 

  const overalGarph = metricsCharts.find((chart) => chart.key === "overalGraph");

  if (!overalGarph) {
    console.error("No overall graph found");
    return;
  }

  const body = {
    period: getReportTimeTitle(reportPromptResponse.periodOfTime),
    logo: userRecord.aboutCompany.logo,
    companyName: userRecord.aboutCompany.name,
    overview: report.overview,
    overalGraph: overalGarph.chart,
    metrics: templateMetrics,
  }
  axios.post(`${API_BASE_URL}/api/create-pdf`, body)
    .then(() => axios.get(`${API_BASE_URL}/api/fetch-pdf`, { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
      saveAs(pdfBlob, 'newPdf.pdf');
    })
}

 

  return (
    <div className="fixed z-50  inset-0 text-white overflow-y-auto bg-black bg-opacity-75">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div className="bg-custom-gray fixed rounded-xl mx-10 w-[90%] sm:w-3/4 md:w-[60%] px-6 py-2 min-w-min max-w-full ">
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <img
                src={userRecord ? "i.c.logo2.png" : "i.c.logo2.png"}
                alt="logo-image"
                className="h-20 w-20"
              />
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold">
                {userRecord?.aboutCompany.name}
              </h3>
              <button onClick={handleClose} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>
            <div className="my-3 flex justify-between items-center">
              <div className="flex flex-col gap-1 ">
                <span> {`${userInfo.firstname} ${userInfo.lastname} `} </span>
                <span>
                  {userRecord ? formatDate(Number(userRecord.created)) : 0}
                </span>
              </div>
             {report &&  <button
                className="bg-custom-green px-4 py-1.5 rounded-3xl text-black font-bold"
                onClick={createAndDownloadPdf}
              >
                Download Report
              </button>}
            </div>
            <hr className="border-2 border-white" />
            <div className="my-4 flex justify-between items-center">
              <h3 className="text-xl">{reportCategory?.title}</h3>
              <button
                className="text-custom-green px-4 py-1.5 font-bold flex items-center gap-2 hover:bg-gray-400 hover:text-black rounded-full"          
              >
                <span>
                  <RiFileEditFill />
                </span>
                <span>Customize Report</span>
              </button>
            </div>
            <div className="w-full">
              <div className="bg-black rounded-3xl w-full overflow-y-auto max-h-[600px]  p-4 ">
                <ShowReport />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-5">
              <img
                src="i.c.logo2.png"
                alt="logo-image"
                className="h-10 w-10 border rounded-full border-white"
              />
              <div className="">
                <span>
                  <span className="text-custom-green">impact.</span>
                  <span>chain</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
