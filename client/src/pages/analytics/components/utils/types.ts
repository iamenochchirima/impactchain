export type LineGraphData = {
  name: string;
  data: number[];
  categories: string[];
};

export type BarGraphData = {};

export type PieChartData = {};

export type MetricReportData = {
    name: string;
    key: string;
    graphs : {
        1: {
            name: string;
            x_label: string;
            y_label: string;
            graph: LineGraphData | BarGraphData | PieChartData;
          };
          2?: {

            name: string;
            x_label: string;
            y_label: string;
            graph: LineGraphData | BarGraphData | PieChartData;
          };
          3?: {
            name: string;
            x_label: string;
            y_label: string;
            graph: LineGraphData | BarGraphData | PieChartData;
          };
    };
    aiOverview: string;
};
