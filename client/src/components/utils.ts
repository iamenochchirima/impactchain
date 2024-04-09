import { UserRecord } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";

export const isDataIncomplete = (info: UserRecord) => {
  if (info.aboutCompany.logo === "") {
    return "ProfileLogo";
  }
  if (info.impactTargets.length === 0) {
    return "ImpactTarget";
  }
  let withoutMeasurements = 0;
  for (const target of info.impactTargets) {
    if (target.measurements.length === 0) {
      withoutMeasurements++;
    }
  }
  if (withoutMeasurements > 0) {
    return "Measurements";
  }

  let measurementWithoutRecords = 0;

  if (info.impactTargets.length > 0) {
    for (const measurement of info.impactTargets[0].measurements) {
      if (measurement.documents.length === 0 && measurement.goal.length === 0) {
        measurementWithoutRecords++;
      }
    }
    if (measurementWithoutRecords > 0) {
      return "TargetRecords";
    }
  }
  return "ok";
};
