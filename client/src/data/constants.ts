export type TargetOption = {
  id: number;
  name: string;
  icon: string;
  color: string;
  rectangle: string;
  emoji: string;
  metrics: TargetOptionMetric[];
  category: string;
};

export type TargetOptionMetric = {
  id: number;
  description: string;
  key: string;
  graphs: Graph[];
};

type Graph = {
  type: string;
  name: string;
  x: string;
  y: string;
};

export const targetOptions: TargetOption[] = [
  {
    id: 1,
    name: "No Poverty",
    icon: "/target/18.svg",
    color: "#E5243B",
    rectangle: "#c44c5b",
    emoji: "/targetIcons/1.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "jobTraining",
        description: "Job training or educational programs",
        graphs: [
          {
            name: "ParticipationOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of participants",
          },
          {
            name: "CompletyionByLocation",
            type: "bar",
            x: "Location",
            y: "Number of participants",
          },
        ],
      },
      {
        id: 2,
        key: "microloans",
        description: "Microloans or grants provided",
        graphs: [
          {
            name: "FundsDisbursedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount disbursed",
          },
          {
            name: "FundsDisbursedByLocation",
            type: "bar",
            x: "Location",
            y: "Avarage Amount disbursed",
          },
        ],
      },
      {
        id: 3,
        key: "peopleAssisted",
        description: "People assisted out of poverty",
        graphs: [
          {
            name: "PeopleAssistedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of people",
          },
          {
            name: "PeopleAssistedByLocation",
            type: "bar",
            x: "Location",
            y: "Number of people",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Zero Hunger",
    icon: "/target/19.svg",
    color: "#DDA63A",
    rectangle: "#bc9a59",
    emoji: "/targetIcons/2.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "foodDonation",
        description: "Food donation",
        graphs: [
          {
            name: "FoodDonatedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of food items(killograms or equivalent)",
          },
          {
            name: "FoodDonatedByLocation",
            type: "bar",
            x: "Location",
            y: "Number of food items(killograms or equivalent)",
          },
        ],
      },
      {
        id: 2,
        key: "sustainableAgriculture",
        description: "Investment in sustainable agriculture",
        graphs: [
          {
            name: "InvestmentOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount invested",
          },
          {
            name: "InvestmentByLocation",
            type: "bar",
            x: "Location",
            y: "Amount invested",
          },
          {
            name: "ImpactOnAgriculturalOutput",
            type: "bar",
            x: "Before and After investment",
            y: "Agricultural output(killograms or equivalent)",
          },
        ],
      },
      {
        id: 3,
        key: "peopleFed",
        description: "People with regular nutritious food",
        graphs: [
          {
            name: "PeopleFedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of people",
          },
          {
            name: "DistributionOfMealsTypes",
            type: "pie",
            x: "Type of meal",
            y: "Number of people",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Good Health and Well-being",
    icon: "/target/20.svg",
    color: "#4C9F38",
    rectangle: "#659858",
    emoji: "/targetIcons/3.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "healthcareFunding",
        description: "Funding for healthcare",
        graphs: [
          {
            name: "FundingOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount funded",
          },
          {
            name: "DistributionOfFundsOnHealthProjects",
            type: "bar",
            x: "Project",
            y: "Amount funded",
          },
        ],
      },
      {
        id: 2,
        key: "healthCheckups",
        description: "Health check-ups or vaccination drives",
        graphs: [
          {
            name: "CheckupsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of check-ups",
          },
          {
            name: "CheckupsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of check-ups",
          },
        ],
      },
      {
        id: 3,
        key: "peopleAccessingHealthcare",
        description: "People accessing healthcare",
        graphs: [
          {
            name: "PeopleAccessingHealthcareOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of people",
          },
          {
            name: "PeopleAccessingHealthcareByLocation",
            type: "bar",
            x: "Location",
            y: "Number of people",
          },
          {
            name: "DestributionOfHealthcareServices",
            type: "bar",
            x: " Types of healthcare services provided",
            y: "Number of patients per service",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Quality Education",
    icon: "/target/4.svg",
    color: "#C5192D",
    rectangle: "#b24552",
    emoji: "/targetIcons/4.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "schoolsBuilt",
        description: "Schools built or supported",
        graphs: [
          {
            name: "SchoolsBuiltOrSupportedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of schools",
          },
          {
            name: "SchoolsBuiltOrSupportedByLocation",
            type: "bar",
            x: "Location",
            y: "Number of schools",
          },
        ],
      },
      {
        id: 2,
        key: "educationalGrants",
        description: "Educational grants awarded",
        graphs: [
          {
            name: "GrantsAwardedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of grants",
          },
          {
            name: "DemographicsOfGrantsRecipients",
            type: "pie",
            x: "Demographics eg (Categories such as age, education level, or field of study)",
            y: "Number of grants",
          },
        ],
      },
      {
        id: 3,
        key: "studentsBenefiting",
        description: "Students benefiting from education",
        graphs: [
          {
            name: "StudentsBenefitingOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of students",
          },
          {
            name: "StudentsBenefitingByLocation",
            type: "bar",
            x: "Location",
            y: "Number of students",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Gender Equality",
    icon: "/target/5.svg",
    color: "#FF3A21",
    rectangle: "#d45a4a",
    emoji: "/targetIcons/5.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "womensEmpowerment",
        description: "Women's empowerment programs",
        graphs: [
          {
            name: "EmpowermentOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of participants",
          },
        ],
      },
      {
        id: 2,
        key: "genderEqualityWorkshops",
        description: "Gender equality workshops",
        graphs: [
          {
            name: "WorkshopsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of workshops",
          },
          {
            name: "ParticipantsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of participants",
          },
        ],
      },
      {
        id: 3,
        key: "workplaceGenderEquality",
        description: "Workplace gender equality policies",
        graphs: [
          {
            name: "PoliciesOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of policies",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Clean Water and Sanitation",
    icon: "/target/6.svg",
    color: "#26BDE2",
    rectangle: "#4ea9c1",
    emoji: "/targetIcons/6.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        key: "sanitationFacilities",
        description: "Sanitation facilities",
        graphs: [
          {
            name: "FacilitiesOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of facilities",
          },
          {
            name: "FacilitiesByLocation",
            type: "bar",
            x: "Location",
            y: "Number of facilities",
          },
          {
            name: "FacilitiesByType",
            type: "pie",
            x: "Type of facility",
            y: "Number of facilities",
          },
        ],
      },
      {
        id: 2,
        key: "waterConservation",
        description: "Water conservation initiatives",
        graphs: [
          {
            name: "WaterConservationOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount of water conserved",
          },
          {
            name: "InitiativesOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of initiatives",
          },
          {
            name: "InitiativesByLocation",
            type: "bar",
            x: "Location",
            y: "Number of initiatives",
          },
        ],
      },
      {
        id: 3,
        key: "peopleWithAccess",
        description: "People with water and sanitation access",
        graphs: [
          {
            name: "AccessOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of people",
          },
          {
            name: "AccessByLocation",
            type: "bar",
            x: "Location",
            y: "Number of people",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Affordable and Clean Energy",
    icon: "/target/7.svg",
    color: "#FCC30B",
    rectangle: "#ceac3c",
    emoji: "/targetIcons/7.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        key: "renewableEnergyProjects",
        description: "Renewable energy projects",
        graphs: [
          {
            name: "ProjectsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of projects",
          },
          {
            name: "ProjectsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of projects",
          },
        ],
      },
      {
        id: 2,
        key: "energyEfficientSystems",
        description: "Energy-efficient systems",
        graphs: [
          {
            name: "SystemsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of systems",
          },
          {
            name: "SystemsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of systems",
          },
        ],
      },
      {
        id: 3,
        key: "energyConsumptionReduction",
        description: "Energy consumption reduction",
        graphs: [
          {
            name: "ConsumptionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount of energy saved",
          },
          {
            name: "ConsumptionByLocation",
            type: "bar",
            x: "Location",
            y: "Amount of energy saved",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Decent Work and Economic Growth",
    icon: "/target/8.svg",
    color: "#A21942",
    rectangle: "#9a465e",
    emoji: "/targetIcons/8.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "jobCreation",
        description: "Job creation initiatives",
        graphs: [
          {
            name: "JobsCreatedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of jobs",
          },
          {
            name: "JobsCreatedByLocation",
            type: "bar",
            x: "Location",
            y: "Number of jobs",
          },
          {
            name: "SectorsOfJobCreation",
            type: "pie",
            x: "Sector",
            y: "Number of jobs",
          },
        ],
      },
      {
        id: 2,
        key: "vocationalTraining",
        description: "Vocational training programs",
        graphs: [
          {
            name: "TrainingOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of participants",
          },
          {
            name: "TrainingByLocation",
            type: "bar",
            x: "Location",
            y: "Number of participants",
          },
        ],
      },
      {
        id: 3,
        key: "employmentImprovements",
        description: "Employment or work condition improvements",
        graphs: [
          {
            name: "ImprovementsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of improvements",
          },
          {
            name: "ImprovementsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of improvements",
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "Industry, Innovation and Infrastructure",
    icon: "/target/9.svg",
    color: "#FD6925",
    rectangle: "#d4774c",
    emoji: "/targetIcons/9.svg",
    category: "Governance",
    metrics: [
      {
        id: 1,
        key: "stemEducation",
        description: "STEM and innovation education",
        graphs: [
          {
            name: "ProgramsHelpedOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of programs",
          },
          
          {
            name: "EducationOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of participants",
          },
          {
            name: "EducationByLocation",
            type: "bar",
            x: "Location",
            y: "Number of participants",
          },
        ],
      },
      {
        id: 2,
        key: "sustainableInfrastructure",
        description: "Sustainable infrastructure development",
        graphs: [
          {
            name: "ProjectsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of projects",
          },
          {
            name: "ProjectsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of projects",
          },
        ],
      },
      {
        id: 3,
        key: "peopleBenefiting",
        description: "People benefiting from infrastructure",
        graphs: [
          {
            name: "PeopleBenefitingOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of people",
          },
          {
            name: "PeopleBenefitingByLocation",
            type: "bar",
            x: "Location",
            y: "Number of people",
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: "Reduced Inequality",
    icon: "/target/10.svg",
    color: "#DD1367",
    rectangle: "#be4275",
    emoji: "/targetIcons/17.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "marginalizedCommunitySupport",
        description: "Marginalized community support",
        graphs: [
          {
            name: "SupportOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of programs",
          },
          {
            name: "SupportByLocation",
            type: "bar",
            x: "Location",
            y: "Number of programs",
          },
        ],
      },
      {
        id: 2,
        key: "inclusionPolicies",
        description: "Inclusion policies",
        graphs: [
          {
            name: "PoliciesOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of policies",
          },
        ],
      },
      {
        id: 3,
        key: "beneficiaries",
        description: "Beneficiaries of inequality reduction",
        graphs: [
          {
            name: "BeneficiariesOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of beneficiaries",
          },
          {
            name: "BeneficiariesByLocation",
            type: "bar",
            x: "Location",
            y: "Number of beneficiaries",
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: "Sustainable Cities and Communities",
    icon: "/target/22.svg",
    color: "#FD9D24",
    rectangle: "#d3974c",
    emoji: "/targetIcons/11.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "urbanSustainability",
        description: "Urban sustainability projects",
        graphs: [
          {
            name: "ProjectsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of projects",
          },
          {
            name: "ProjectsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of projects",
          },
          {
            name: "ProjectsByType",
            type: "pie",
            x: "Type of project",
            y: "Number of projects",
          },
        ],
      },
      {
        id: 2,
        key: "affordableHousing",
        description: "Affordable housing support",
        graphs: [
          {
            name: "HousingOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of housing units",
          },
          {
            name: "HousingByLocation",
            type: "bar",
            x: "Location",
            y: "Number of housing units",
          },
        ],
      },
      {
        id: 3,
        key: "urbanLivingConditions",
        description: "Improved urban living conditions",
        graphs: [
          {
            name: "LivingConditionsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of improvements",
          },
          {
            name: "LivingConditionsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of improvements",
          },
          {
            name: "TotalInvestmentOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount invested",
          }
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Responsible Consumption and Production",
    icon: "/target/12.svg",
    color: "#BF8B2E",
    rectangle: "#ad8d52",
    emoji: "/targetIcons/12.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        key: "wasteReduction",
        description: "Waste reduction and recycling",
        graphs: [
          {
            name: "WasteReductionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount of waste reduced",
          },
          {
            name: "WasteReductionByLocation",
            type: "bar",
            x: "Location",
            y: "Amount of waste reduced",
          }
        ]
      },
      {
        id: 2,
        key: "sustainableSupplyChain",
        description: "Sustainable supply chain investment",
        graphs: [
          {
            name: "InvestmentOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount invested",
          },
          {
            name: "InvestmentByLocation",
            type: "bar",
            x: "Location",
            y: "Amount invested",
          },
          {
            name: "SupplyChainImpact",
            type: "bar",
            x: "Impact",
            y: "Number of suppliers impacted"
          }
        ]
      },
      {
        id: 3,
        key: "resourceFootprintReduction",
        description: "Organizational resource footprint reduction",
        graphs: [
          {
            name: "ReductionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount of resources reduced",
          },
          {
            name: "ReductionByLocation",
            type: "bar",
            x: "Location",
            y: "Amount of resources reduced",
          }
        ]
      },
    ],
  },
  {
    id: 13,
    name: "Climate Action",
    icon: "/target/23.svg",
    color: "#48773C",
    rectangle: "#637f5b",
    emoji: "/targetIcons/13.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        key: "carbonEmissionReduction",
        description: "Carbon emission reduction",
        graphs: [
          {
            name: "EmissionReductionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount of emissions reduced",
          },
          {
            name: "EmissionReductionByLocation",
            type: "bar",
            x: "Location",
            y: "Amount of emissions reduced",
          }
        ]
      },
      {
        id: 2,
        key: "renewableEnergyInvestment",
        description: "Renewable energy investment",
        graphs: [
          {
            name: "InvestmentOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount invested",
          },
          {
            name: "InvestmentByLocation",
            type: "bar",
            x: "Location",
            y: "Amount invested",
          }
        ]
      },
      {
        id: 3,
        key: "reforestationProjects",
        description: "Reforestation projects",
        graphs: [
          {
            name: "ProjectsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of projects",
          },
          {
            name: "ProjectsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of projects",
          }
        ]
      },
    ],
  },
  {
    id: 14,
    name: "Life Below Water",
    icon: "/target/14.svg",
    color: "#0A97D9",
    rectangle: "#3c95bf",
    emoji: "/targetIcons/14.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        key: "marineEcosystemProtection",
        description: "Marine ecosystem protection",
        graphs: [
          {
            name: "ProtectionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of ecosystems protected",
          },
          {
            name: "ProtectionByLocation",
            type: "bar",
            x: "Location",
            y: "Number of ecosystems protected",
          }
        ]
      },
      {
        id: 2,
        key: "oceanPollutionReduction",
        description: "Ocean pollution reduction",
        graphs: [
          {
            name: "ReductionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount of pollution reduced",
          },
          {
            name: "ReductionByLocation",
            type: "bar",
            x: "Location",
            y: "Amount of pollution reduced",
          }
        ]
      },
      {
        id: 3,
        key: "sustainableFishing",
        description: "Sustainable fishing support",
        graphs: [
          {
            name: "SupportOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of fishing communities supported",
          },
          {
            name: "SupportByLocation",
            type: "bar",
            x: "Location",
            y: "Number of fishing communities supported",
          }
        ]
      },
    ],
  },
  {
    id: 15,
    name: "Life on Land",
    icon: "/target/15.svg",
    color: "#56C02B",
    rectangle: "#6db051",
    emoji: "/targetIcons/15.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        key: "landConservation",
        description: "Land conservation and reforestation",
        graphs: [
          {
            name: "ConservationOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of hectares conserved",
          },
          {
            name: "ConservationByLocation",
            type: "bar",
            x: "Location",
            y: "Number of hectares conserved",
          }
        ]
      },
      {
        id: 2,
        key: "endangeredSpeciesProtection",
        description: "Endangered species protection",
        graphs: [
          {
            name: "ProtectionOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of species protected",
          },
          {
            name: "ProtectionByLocation",
            type: "bar",
            x: "Location",
            y: "Number of species protected",
          }
        ]
      },
      {
        id: 3,
        key: "landRehabilitation",
        description: "Land rehabilitated or conserved",
        graphs: [
          {
            name: "RehabilitationOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of hectares rehabilitated",
          },
          {
            name: "RehabilitationByLocation",
            type: "bar",
            x: "Location",
            y: "Number of hectares rehabilitated",
          }
        ]
      },
    ],
  },
  {
    id: 16,
    name: "Peace, Justice and Strong Institutions",
    icon: "/target/16.svg",
    color: "#00689D",
    rectangle: "#367697",
    emoji: "/targetIcons/10.svg",
    category: "Social",
    metrics: [
      {
        id: 1,
        key: "antiCorruptionPrograms",
        description: "Anti-corruption programs",
        graphs: [
          {
            name: "ProgramsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of programs",
          },
          {
            name: "ProgramsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of programs",
          }
        ]
      },
      {
        id: 2,
        key: "humanRightsInitiatives",
        description: "Human rights and justice initiatives",
        graphs: [
          {
            name: "InitiativesOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of initiatives",
          },
          {
            name: "InitiativesByLocation",
            type: "bar",
            x: "Location",
            y: "Number of initiatives",
          }
        ]
      },
      {
        id: 3,
        key: "communityPeacePrograms",
        description: "Community peace programs",
        graphs: [
          {
            name: "ProgramsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of programs",
          },
          {
            name: "ProgramsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of programs",
          }
        ]
      },
    ],
  },
  {
    id: 17,
    name: "Partnerships for the Goals",
    icon: "/target/17.svg",
    color: "#19486A",
    rectangle: "#456277",
    emoji: "/targetIcons/16.svg",
    category: "Governance",
    metrics: [
      {
        id: 1,
        key: "collaborativeProjects",
        description: "Collaborative SDG projects",
        graphs: [
          {
            name: "ProjectsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of projects",
          },
          {
            name: "ProjectsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of projects",
          }
        ]
      },
      {
        id: 2,
        key: "financialContributions",
        description: "Global partnership financial contributions",
        graphs: [
          {
            name: "ContributionsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Amount contributed",
          },
          {
            name: "ContributionsByLocation",
            type: "bar",
            x: "Location",
            y: "Amount contributed",
          }
        ]
      },
      {
        id: 3,
        key: "sdgAdvocacy",
        description: "SDG advocacy campaigns",
        graphs: [
          {
            name: "CampaignsOvertime",
            type: "line",
            x: "Time (Months/quaters)",
            y: "Number of campaigns",
          },
          {
            name: "CampaignsByLocation",
            type: "bar",
            x: "Location",
            y: "Number of campaigns",
          }
        ]
      },
    ],
  },
];
