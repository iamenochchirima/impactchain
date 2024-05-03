export type LineGraphData = {
  name: string;
  data: number[];
  categories: string[];
};

export type BarGraphData = {
  name: string;
  data: xisVals[];
  categories: string[];
};

export type xisVals = {
  x: string;
  y: number;
};

export type PieChartData = {};

export type MetricReportData = {
    name: string;
    key: string;
    graphs : {
        1: {
            name: string;
            x_label: string;
            y_label: string;
            graph: LineGraphData | BarGraphData | PieChartData | null;
          };
          2?: {

            name: string;
            x_label: string;
            y_label: string;
            graph: LineGraphData | BarGraphData | PieChartData | null;
          };
          3?: {
            name: string;
            x_label: string;
            y_label: string;
            graph: LineGraphData | BarGraphData | PieChartData | null;
          };
    };
    aiOverview: string;
};
