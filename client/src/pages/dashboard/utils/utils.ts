import { targetOptions } from "../../../data/constants";
import { ImpactTarget } from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";

type NameData = {
  name: string;
  color: string;
  percentage: number;
};

export type ChartData = {
  targetName: string;
  data: NameData[];
  names: string[];
  percentArray: number[];
  colors: string[];
  targetColor: string;

};

export const getData = (target: ImpactTarget) => {
  const metricNames = target.metrics.map((m) => m.name);

  const colors = [
    "#3C50E0",
    "#6577F3", 
    "#0077B5",
    "#0FADCF",
    "#00fB23", 
    "#5C2B29", 
  ];

  const getColorForName = (name, colorPalette) => {
    const length = name.length;
    const index = (length - 1) % colorPalette.length;
    return colorPalette[index];
  };

  const generateRandomPercentage = () => {
    return Math.floor(Math.random() * 100);
  };

  const targetColor = targetOptions.find((t) => t.name === target.name)?.color;

  const data: ChartData = {
    targetName: target.name,
    data: metricNames.map((name) => {
      return {
        name,
        color: getColorForName(name, colors),
        percentage: generateRandomPercentage(),
      };
    }),
    percentArray: metricNames.map(() => generateRandomPercentage()),
    colors: metricNames.map((name) => getColorForName(name, colors)),
    names: metricNames,
    targetColor: targetColor || "gray-900",
  };
  return data;
};
