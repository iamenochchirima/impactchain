type TemplateMetricReportData = {
  name: string;
  key: string;
  graph: string;
  aiOverview: any;
};

export const pdfTemplate = ({
  period,
  logo,
  overview,
  overalGraph,
  metrics,
  companyName,
}: {
  period: string;
  logo: string;
  companyName: string;
  overview: any;
  overalGraph: string;
  metrics: TemplateMetricReportData[];
}): string => {

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
        src: url("fonts/PPTelegraf-UltraBold.otf") format("opentype"),
          url("fonts/PPTelegraf-UltraBold.otf") format("opentype");
        font-weight: bolder;
        font-style: normal;
      }
      @font-face {
        font-family: "TelegraphRegular";
        src: url("fonts/PPTelegraf-Regular.otf") format("opentype"),
          url("fonts/PPTelegraf-Regular.otf") format("opentype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "TelegraphUltraLight";
        src: url("fonts/PPTelegraf-UltraLight.otf") format("opentype"),
          url("fonts/PPTelegraf-UltraLight.otf") format("opentype");
        font-weight: lighter;
        font-style: normal;
      }
      body,
      html {
        height: 100%;
        margin: 0;
        font-family: Arial, sans-serif;
        background: linear-gradient(to bottom, #ffffff, #b6dbf2);
      }
      .container {
        padding: 50px 20px 20px;
        box-sizing: border-box;
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

      .report-title-div {
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
        margin-top: 16px;
        margin-bottom: 16px;
      }
      .logo {
        height: 75%;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
      }
      .footer {
        font-size: 14px;
        color: #666;
        text-align: left;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <span class="header">${period}</span>
      <div class="report-title-div">
        <span>ESG</span>
        <span>Performance</span>
        <span>Report</span>
      </div>
      <div class="logo-div">
        <img class="logo" src=${logo} alt="logo" />
      </div>
      <div class="logo-div">
      <img class="logo" src=${overalGraph} alt="logo" />
    </div>
      <div class="footer">POWERED BY impact.chain</div>
    </div>
  </body>
</html>
`;
};
