import { UserRecord } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";

export const isDataIncomplete = (info: UserRecord) => {
  if (info.aboutCompany.logo === "") {
    return "ProfileLogo";
  }
  if (info.impactTargets.length === 0) {
    return "ImpactTarget";
  }
  let withoutMetrics = 0;
  for (const target of info.impactTargets) {
    if (target.metrics.length === 0) {
      withoutMetrics++;
    }
  }
  if (withoutMetrics > 0) {
    return "Metrics";
  }

  let metricsWithoutRecords = 0;

  if (info.impactTargets.length > 0) {
    for (const metric of info.impactTargets[0].metrics) {
      if (metric.documents.length === 0 && metric.goal.length === 0) {
        metricsWithoutRecords++;
      }
    }
    if (metricsWithoutRecords > 0) {
      return "TargetRecords";
    }
  }
  return "ok";
};
