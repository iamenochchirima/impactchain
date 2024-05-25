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

export type PieChartData = {
  name: string;
  pieChat: boolean;
  data:  pieData[];
};

export type pieData = {
  name: string;
  y: number;
};

export type avarageStatsData = {
  avarageParticipants: number;
  avaragePrograms: number;
  avarageDuration: number;
  overallImpact: number;
  locations: number;
}

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
  aiOverview: any;
};

export type GraphsData =  LineGraphData | BarGraphData | PieChartData | null;


export type FullReportData = {
  overview : any;
  overalGraph: LineGraphData;
  specificMetrics: MetricReportData[];
  participants: number;
  avgPrograms: number;
  avgDuration: string;
  location: number;
};