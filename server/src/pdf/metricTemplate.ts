import path from "path";
import fs from "fs";
import { marked } from "marked";

type TemplateMetricReportData = {
  name: string;
  key: string;
  graph: string;
  aiOverview: any;
};

const logoPath = path.join(__dirname, './assets/images/i.clogo.png');
const icon = fs.readFileSync(logoPath, "base64");

export const metricPdfTemplate = ({
  metricName,
  period,
  logo,
  overview,
  graph,
  companyName,
}: {
  metricName: string;
  period: string;
  logo: string;
  companyName: string;
  overview: any;
  graph: string;
}): string => {
  const overviewHtml = marked(overview.content);

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ESG Performance Report</title>
      <style>
        @font-face {
          font-family: "TelegraphUltraBold";
          src: url("assets/fonts/PPTelegraf-UltraBold.otf") format("opentype"),
            url("assets/fonts/PPTelegraf-UltraBold.otf") format("opentype");
          font-weight: bolder;
          font-style: normal;
        }
        @font-face {
          font-family: "TelegraphRegular";
          src: url("assets/fonts/PPTelegraf-Regular.otf") format("opentype"),
            url("assets/fonts/PPTelegraf-Regular.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: "TelegraphUltraLight";
          src: url("assets/fonts/PPTelegraf-UltraLight.otf") format("opentype"),
            url("assets/fonts/PPTelegraf-UltraLight.otf") format("opentype");
          font-weight: lighter;
          font-style: normal;
        }
        body,
        html {
          height: 100%;
          margin: 0;
          font-family: "TelegraphRegular", sans-serif;
          /* background: linear-gradient(to bottom, #ffffff, #b6dbf2); */
        }
        .container {
          padding: 50px 20px 20px;
          box-sizing: border-box;
          margin: 0 100px 0 100px;
        }
        .header {
          font-size: 16px;
          color: #333;
          border: 1px solid #000;
          margin-bottom: 30px;
          padding: 7px 20px;
          text-align: left;
          display: inline-block;
          border-radius: 20px;
        }
  
        .titles {
          font-size: 100px;
          color: #000;
          margin-bottom: 50px;
          display: flex;
          flex-direction: column;
          line-height: 0.8;
          font-family: "TelegraphRegular";
          text-align: left;
        }
        .logo-div {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 100px;
          margin-bottom: 16px;
        }
        .logo {
          height: 75%;
          width: 90%;
          border-radius: 10px;
          margin-left: auto;
          margin-right: auto;
        }
        .footer {
          font-family: "TelegraphUltraBold";
          margin-top: 70px;
          display: flex;
          justify-content: center;
        }
        .footer-icon {
          height: 70px;
          width: 70px;
        }
        .footer-div {
          display: flex;
          align-items: center;
        }
        .impact-span {
          color: #4fef64;
        }
        .chart-div {
          display: flex;
          justify-content: center;
          margin-top: 50px;
        }
        .chart-img {
          height: 50%;
          width: 90%;
          border-radius: 10px;
          margin-left: auto;
          margin-right: auto;
        }
        .specific-chart-img {
          height: 50%;
          width: 80%;
          border-radius: 10px;
          margin-left: auto;
          margin-right: auto;
        }
        .overview-text {
          white-space: pre-wrap;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <span class="header">${period}</span>
        <div class="titles">
          <span>ESG</span>
          <span>Performance</span>
          <span>Report</span>
        </div>
        <div class="logo-div">
          <img class="logo" src=${logo} alt="logo" />
        </div>
        <div class="footer">
          <div class="footer-div">
            <span>POWERED BY</span
            ><img
              class="footer-icon"
              src="data:image/png;base64,${icon}"
              alt="impact-chain-logo"
            />
            <span
              ><span class="impact-span">impact.</span><span>chain</span></span
            >
          </div>
        </div>
        <div class="overview-text">
          <h3>${metricName}</h3>
          ${overviewHtml}
        </div>
        <div class="chart-div">
          <img
            class="specific-chart-img"
            src=${graph}
            alt="metric chart"
          />
        </div>
      </div>
      <div
        style="
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 100px;
          height: 500px;
        "
      >
        <div
          style="display: flex; flex-direction: column; align-items: center"
        >
          <h1>${companyName}</h1>
          <img
            style="height: 200px; width: 200px; border-radius: 100%"
            src="/tree.jpg"
            alt=""
          />
        </div>
      </div>
    </body>
  </html>
  `;
};
