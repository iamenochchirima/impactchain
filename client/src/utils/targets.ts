import {
  ImpactTargets,
  Metric11,
  Metric12,
  Metric13,
  Metrics1,
} from "../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { ImpactTargetType, Metric } from "./types";

export const getImpactTargetsArray = (targets: ImpactTargets) => {
  const impactTargets: ImpactTargetType[] = [];

  Object.keys(targets).forEach((key) => {
    const impactTarget = targets[key as keyof ImpactTargets];

    if (impactTarget.length > 0) {
      console.log(
        `Processing ${key} with ID: ${impactTarget[0]?.name} and Name: ${impactTarget[0]?.name}`
      );
      const metrics = getMetricsArray(impactTarget[0]?.metrics);
      const target: ImpactTargetType = {
        id: Number(impactTarget[0]?.id ?? 0),
        name: impactTarget[0]?.name ?? "",
        metrics: metrics,
      };
      impactTargets.push(target);
    }
  });
  return impactTargets;
};

const getMetricsArray = (metrics: any) => {
  const metricsArray: Metric[] = [];
  Object.keys(metrics).forEach((key) => {
    const metric = metrics[key];
    if (metric.length > 0) {
      const metricObject: Metric = {
        key: metric[0]?.key,
        name: metric[0]?.name,
        documents: metric[0]?.documents,
        data: metric[0]?.data,
        goal: metric[0]?.goal,
        iotDevice: metric[0]?.iotDevice,
      };
      metricsArray.push(metricObject);
    }
  });
  return metricsArray;
};

export const getTargetMetrics = (target: ImpactTargetType) => {
  if (target.id === 1) {
    let metrics: Metrics1 = {
      Metric11: [],
      Metric12: [],
      Metric13: [],
    };
    if (target.metrics.length === 0) {
      return metrics;
    }
    if (target.metrics.length > 0) {
      for (const metric of target.metrics) {
        if (metric.key === "jobTraining") {
          const metric11: Metric11 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric11: [metric11],
          };
        }
        if (metric.key === "microloans") {
          const metric12: Metric12 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric12: [metric12],
          };
        }
        if (metric.key === "peopleAssisted") {
          const metric13: Metric13 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric13: [metric13],
          };
        }
      }
    }
    return metrics;
  }
};
