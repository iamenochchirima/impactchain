import { Testimonials } from "../../../../hooks/declarations/data/data.did";
import { Metric } from "../../../../utils/types";

export type LineGraphData = {
  name: string;
  data: number[];
  description: string;
  categories: string[];
  x_label: string;
  y_label: string;
};

export type BarGraphData = {
  name: string;
  data: xisVals[];
  description: string;
  categories: string[];
  x_label: string;
  y_label: string;
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
      graph: GraphsData
    };
    2?: {
      typeOfGraph: "line" | "bar" | "pie";
      name: string;
      graph: GraphsData
    };
    3?: {
      typeOfGraph: "line" | "bar" | "pie";
      name: string;
      graph: GraphsData
    };
  };
  aiOverview: any;
};

export type GraphLabel = {
  x_label: string;
  y_label: string;
};

export type GraphsData =  LineGraphData | BarGraphData | PieChartData | null;


export type TestimonialType = {
  testimonials: Testimonials;
  location: string;
  startDate: string;
  duration: string;
  description: string;
  notableAchievements: string;
  challenges: string;
}

export type FullReportData = {
  companyName: string;
  overview : any;
  overalGraph: LineGraphData;
  specificMetrics: MetricReportData[];
  rawMetrics: Metric[];
  overalImpact: number;
  participants: number;
  avgPrograms: number;
  avgDuration: string;
  testimonials: TestimonialType[];
  location: number;
};