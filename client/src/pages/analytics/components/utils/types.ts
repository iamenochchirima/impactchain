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

export type PieChartData = {
  name: string;
  data: {
    name: string;
    y: number;
  }[];
};

export type xisVals = {
  x: string;
  y: number;
};

export type MetricReportData = {
  name: string;
  key: string;
  graphs: {
    1?: {
      typeOfGraph: "line" | "bar" | "pie";
      name: string;
      x_label: string;
      y_label: string;
      graph: GraphsData
    };
    2?: {
      typeOfGraph: "line" | "bar" | "pie";
      name: string;
      x_label: string;
      y_label: string;
      graph: GraphsData
    };
    3?: {
      typeOfGraph: "line" | "bar" | "pie";
      name: string;
      x_label: string;
      y_label: string;
      graph: GraphsData
    };
  };
  aiOverview: string;
};

export type GraphsData =  LineGraphData | BarGraphData | PieChartData | null;
