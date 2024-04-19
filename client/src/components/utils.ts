import { UserRecord } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";
import { ImpactTargetType } from "../utils/types";

export const isDataIncomplete = (info: UserRecord, impactTargets: ImpactTargetType[]) => {
  if (info.aboutCompany.logo === "") {
    return "ProfileLogo";
  }
  if (impactTargets.length === 0) {
    return "ImpactTarget";
  }
  let withoutMetrics = 0;
  for (const target of impactTargets) {
    if (target.metrics.length === 0) {
      withoutMetrics++;
    }
  }
  if (withoutMetrics > 0) {
    return "Metrics";
  }

  let metricsWithoutRecords = 0;

  if (impactTargets.length > 0) {
    for (const target of impactTargets) {
      for (const metric of target.metrics) {
        if (metric.documents.length === 0 && metric.goal.length === 0) {
          metricsWithoutRecords++;
        }
      }
    }
    if (metricsWithoutRecords > 0) {
      return "TargetRecords";
    }
  }
  return "ok";
};
