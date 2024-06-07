import {
  ImpactTargets,
  Matrics15,
  Metric101,
  Metric102,
  Metric103,
  Metric11,
  Metric111,
  Metric112,
  Metric113,
  Metric12,
  Metric121,
  Metric122,
  Metric123,
  Metric13,
  Metric131,
  Metric132,
  Metric133,
  Metric141,
  Metric142,
  Metric143,
  Metric151,
  Metric152,
  Metric153,
  Metric161,
  Metric162,
  Metric163,
  Metric171,
  Metric172,
  Metric173,
  Metric21,
  Metric22,
  Metric23,
  Metric32,
  Metric33,
  Metric41,
  Metric42,
  Metric43,
  Metric51,
  Metric52,
  Metric53,
  Metric61,
  Metric62,
  Metric63,
  Metric71,
  Metric72,
  Metric73,
  Metric81,
  Metric82,
  Metric83,
  Metric91,
  Metric92,
  Metric93,
  Metrics1,
  Metrics10,
  Metrics11,
  Metrics12,
  Metrics13,
  Metrics14,
  Metrics16,
  Metrics17,
  Metrics2,
  Metrics4,
  Metrics5,
  Metrics6,
  Metrics7,
  Metrics8,
  Metrics9,
} from "../hooks/declarations/data/data.did";
import { ImpactTargetType, Metric } from "./types";
import { Metrics3, Metric31 } from "../hooks/declarations/data/data.did";

export const getImpactTargetsArray = (targets: ImpactTargets) => {
  const impactTargets: ImpactTargetType[] = [];

  Object.keys(targets).forEach((key) => {
    const impactTarget = targets[key as keyof ImpactTargets];

    if (impactTarget.length > 0) {
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
        if (metric.key === "peopleAssistedOutOfPoverty") {
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
  if (target.id === 2) {
    let metrics: Metrics2 = {
      Metric21: [],
      Metric22: [],
      Metric23: [],
    };
    if (target.metrics.length === 0) {
      return metrics;
    }
    if (target.metrics.length > 0) {
      for (const metric of target.metrics) {
        if (metric.key === "foodDonation") {
          const metric21: Metric21 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric21: [metric21],
          };
        }
        if (metric.key === "sustainableAgriculture") {
          const metric22: Metric22 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric22: [metric22],
          };
        }
        if (metric.key === "peopleFedWithNutritiousFood") {
          const metric23: Metric23 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric23: [metric23],
          };
        }
      }
    }
    return metrics;
  }
  if (target.id === 3) {
    let metrics: Metrics3 = {
      Metric31: [],
      Metric32: [],
      Metric33: [],
    };
    if (target.metrics.length === 0) {
      return metrics;
    }
    if (target.metrics.length > 0) {
      for (const metric of target.metrics) {
        if (metric.key === "healthcareFunding") {
          const metric31: Metric31 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric31: [metric31],
          };
        }
        if (metric.key === "healthCheckups") {
          const metric32: Metric32 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric32: [metric32],
          };
        }
        if (metric.key === "peopleAccessingHealthcare") {
          const metric33: Metric33 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric33: [metric33],
          };
        }
      }
    }
    return metrics;
  }

  if (target.id === 4) {
    let metrics: Metrics4 = {
      Metric41: [],
      Metric42: [],
      Metric43: [],
    };
    if (target.metrics.length === 0) {
      return metrics;
    }
    if (target.metrics.length > 0) {
      for (const metric of target.metrics) {
        if (metric.key === "schoolsBuilt") {
          const metric41: Metric41 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric41: [metric41],
          };
        }
        if (metric.key === "educationalGrants") {
          const metric42: Metric42 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric42: [metric42],
          };
        }
        if (metric.key === "studentsBenefiting") {
          const metric43: Metric43 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric43: [metric43],
          };
        }
      }
    }
    return metrics;
  }

  if (target.id === 5) {
    let metrics :Metrics5 = {
      Metric51: [],
      Metric52: [],
      Metric53: [],
    };
    if (target.metrics.length === 0) {
      return metrics;
    }
    if (target.metrics.length > 0) {
      for (const metric of target.metrics) {
        if (metric.key === "womensEmpowerment") {
          const metric51: Metric51 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric51: [metric51],
          };
        }
        if (metric.key === "genderEqualityWorkshops") {
          const metric52: Metric52 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric52: [metric52],
          };
        }
        if (metric.key === "workplaceGenderEquality") {
          const metric53: Metric53 = {
            key: metric.key,
            name: metric.name,
            documents: metric.documents,
            data: metric.data,
            goal: metric.goal,
            iotDevice: metric.iotDevice,
          };
          metrics = {
            ...metrics,
            Metric53: [metric53],
          };
        }
      }
    }
    return metrics;
  }

  // Target ID 6
if (target.id === 6) {
  let metrics: Metrics6 = {
    Metric61: [],
    Metric62: [],
    Metric63: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "sanitationFacilities") {
        const metric61: Metric61 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric61: [metric61],
        };
      }
      if (metric.key === "waterConservation") {
        const metric62: Metric62 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric62: [metric62],
        };
      }
      if (metric.key === "peopleWithAccessToWater") {
        const metric63: Metric63 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric63: [metric63],
        };
      }
    }
  }
  return metrics;
}

// Target ID 7
if (target.id === 7) {
  let metrics: Metrics7 = {
    Metric71: [],
    Metric72: [],
    Metric73: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "renewableEnergyProjects") {
        const metric71: Metric71 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric71: [metric71],
        };
      }
      if (metric.key === "energyEfficientSystems") {
        const metric72: Metric72 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric72: [metric72],
        };
      }
      if (metric.key === "energyConsumptionReduction") {
        const metric73: Metric73 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric73: [metric73],
        };
      }
    }
  }
  return metrics;
}

// Target ID 8
if (target.id === 8) {
  let metrics: Metrics8 = {
    Metric81: [],
    Metric82: [],
    Metric83: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "jobCreation") {
        const metric81: Metric81 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric81: [metric81],
        };
      }
      if (metric.key === "vocationalTraining") {
        const metric82: Metric82 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric82: [metric82],
        };
      }
      if (metric.key === "employmentImprovements") {
        const metric83: Metric83 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric83: [metric83],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 9) {
  let metrics: Metrics9 = {
    Metric91: [],
    Metric92: [],
    Metric93: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "stemEducation") {
        const metric91: Metric91 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric91: [metric91],
        };
      }
      if (metric.key === "sustainableInfrastructure") {
        const metric92: Metric92 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric92: [metric92],
        };
      }
      if (metric.key === "peopleBenefitingFromInfrastructure") {
        const metric93: Metric93 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric93: [metric93],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 10) {
  let metrics: Metrics10 = {
    Metric101: [],
    Metric102: [],
    Metric103: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "marginalizedCommunitySupport") {
        const metric101: Metric101 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric101: [metric101],
        };
      }
      if (metric.key === "inclusionPolicies") {
        const metric102: Metric102 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric102: [metric102],
        };
      }
      if (metric.key === "beneficiariesOfInequalityReduction") {
        const metric103: Metric103 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric103: [metric103],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 11) {
  let metrics: Metrics11 = {
    Metric111: [],
    Metric112: [],
    Metric113: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "urbanSustainability") {
        const metric111: Metric111 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric111: [metric111],
        };
      }
      if (metric.key === "affordableHousing") {
        const metric112: Metric112 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric112: [metric112],
        };
      }
      if (metric.key === "urbanLivingConditions") {
        const metric113: Metric113 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric113: [metric113],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 12) {
  let metrics: Metrics12 = {
    Metric121: [],
    Metric122: [],
    Metric123: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "wasteReduction") {
        const metric121: Metric121 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric121: [metric121],
        };
      }
      if (metric.key === "sustainableSupplyChain") {
        const metric122: Metric122 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric122: [metric122],
        };
      }
      if (metric.key === "resourceFootprintReduction") {
        const metric123: Metric123 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric123: [metric123],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 13) {
  let metrics: Metrics13 = {
    Metric131: [],
    Metric132: [],
    Metric133: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "carbonEmissionReduction") {
        const metric131: Metric131 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric131: [metric131],
        };
      }
      if (metric.key === "renewableEnergyInvestment") {
        const metric132: Metric132 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric132: [metric132],
        };
      }
      if (metric.key === "reforestationProjects") {
        const metric133: Metric133 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric133: [metric133],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 14) {
  let metrics: Metrics14 = {
    Metric141: [],
    Metric142: [],
    Metric143: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "marineEcosystemProtection") {
        const metric141: Metric141 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric141: [metric141],
        };
      }
      if (metric.key === "oceanPollutionReduction") {
        const metric142: Metric142 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric142: [metric142],
        };
      }
      if (metric.key === "sustainableFishing") {
        const metric143: Metric143 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric143: [metric143],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 15) {
  let metrics: Matrics15 = {
    Metric151: [],
    Metric152: [],
    Metric153: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "landConservation") {
        const metric151: Metric151 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric151: [metric151],
        };
      }
      if (metric.key === "endangeredSpeciesProtection") {
        const metric152: Metric152 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric152: [metric152],
        };
      }
      if (metric.key === "landRehabilitation") {
        const metric153: Metric153 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric153: [metric153],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 16) {
  let metrics: Metrics16 = {
    Metric161: [],
    Metric162: [],
    Metric163: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "antiCorruptionPrograms") {
        const metric161: Metric161 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric161: [metric161],
        };
      }
      if (metric.key === "humanRightsInitiatives") {
        const metric162: Metric162 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric162: [metric162],
        };
      }
      if (metric.key === "communityPeacePrograms") {
        const metric163: Metric163 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric163: [metric163],
        };
      }
    }
  }
  return metrics;
}

if (target.id === 17) {
  let metrics: Metrics17 = {
    Metric171: [],
    Metric172: [],
    Metric173: [],
  };
  if (target.metrics.length === 0) {
    return metrics;
  }
  if (target.metrics.length > 0) {
    for (const metric of target.metrics) {
      if (metric.key === "collaborativeSDGProjects") {
        const metric171: Metric171 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric171: [metric171],
        };
      }
      if (metric.key === "globalPartnershipFinancialContributions") {
        const metric172: Metric172 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric172: [metric172],
        };
      }
      if (metric.key === "sdgAdvocacy") {
        const metric173: Metric173 = {
          key: metric.key,
          name: metric.name,
          documents: metric.documents,
          data: metric.data,
          goal: metric.goal,
          iotDevice: metric.iotDevice,
        };
        metrics = {
          ...metrics,
          Metric173: [metric173],
        };
      }
    }
  }
  return metrics;
}




};
