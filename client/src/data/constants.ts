export type TargetOption = {
  id: number;
  name: string;
  icon: string;
  color: string;
  rectangle: string;
  emoji: string;
  metrics: Metric[];
  category: string;
};

type Metric = {
  id: number;
  description: string;
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
        description: "Poverty aid",
      },
      {
        id: 2,
        description: "Housing units",
      },
      {
        id: 3,
        description: "Essential distribution"
      },
      {
        id: 4,
        description: "Skills training",
      },
      {
        id: 5,
        description: "Financial grants",
      },
      {
        id: 6,
        description: "Poverty reduction",
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
        description: "Food donation",
      },
      {
        id: 2,
        description: "Agriculture investment",
      },
      {
        id: 3,
        description: "Garden support",
      },
      {
        id: 4,
        description: "Nutrition education"
      },
      {
        id: 5,
        description: "Farming support",
      },
      {
        id: 6,
        description: "Nutritional access",
      }
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
        description: "Healthcare funding"
      },
      {
        id: 2,
        description: "Health drives"
      },
      {
        id: 3,
        description: "Worker training"
      },
      {
        id: 4,
        description: "Mental initiatives"
      },
      {
        id: 5,
        description: "Research investment"
      },
      {
        id: 6,
        description: "Healthcare access"
      }
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
        description: "School support"
      },
      {
        id: 2,
        description: "Grants awarded"
      },
      {
        id: 3,
        description: "Teacher development"
      },
      {
        id: 4,
        description: "Material provision"
      },
      {
        id: 5,
        description: "Ed-tech aid"
      },
      {
        id: 6,
        description: "Student benefit"
      }
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
        description: "Empowerment programs"
      },
      {
        id: 2,
        description: "Equality workshops"
      },
      {
        id: 3,
        description: "Leadership support"
      },
      {
        id: 4,
        description: "Violence prevention"
      },
      {
        id: 5,
        description: "Health education"
      },
      {
        id: 6,
        description : "Equality policies"
      }
    ]
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
        description: "Water systems"
      },
      {
        id: 2,
        description: "Sanitation facilities"
      },
      {
        id: 3,
        description: "Conservation initiatives"
      },
      {
        id: 4,
        description: "Hygiene education"
      },
      {
        id: 5,
        description: "Recycling investment"
      },
      {
        id: 6,
        description: "Access improvement"
      }
    ]
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
        description: "Renewable projects"
      },
      {
        id: 2,
        description: "Efficiency systems"
      },
      {
        id: 3,
        description: "Energy training"
      },
      {
        id: 4,
        description: "Energy research"
      },
      {
        id: 5,
        description: "Consumption cut"
      },
      {
        id: 6,
        description: "Energy access"
      }
    ]
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
        description: "Employment initiatives"
      },
      {
        id: 2,
        description: "Vocational training"
      },
      {
        id: 3,
        description: "SME support"
      },
      {
        id: 4,
        description: "Economic projects"
      },
      {
        id: 5,
        description: "Safety programs"
      },
      {
        id: 6,
        description: "Condition improvement"
      }
    ]
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
        description: "Infrastructure development"
      },
      {
        id: 2,
        description: "Innovation investment"
      },
      {
        id: 3,
        description: "Upgrading support"
      },
      {
        id: 4,
        description: "STEM education"
      },
      {
        id: 5,
        description: "Sustainable development"
      },
      {
        id: 6,
        description: "Infrastructure benefit"
      }
    ]
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
        description: "Inequality reduction"
      },
      {
        id: 2,
        description: "Community support"
      },
      {
        id: 3,
        description: "Service access"
      },
      {
        id: 4,
        description: "Inclusion policies"
      },
      {
        id: 5,
        description: "Accessibilty investment"
      },
      {
        id: 6,
        description: "Inequality beneficiaries"
      }
    ]
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
        description: "Urban projects"
      },
      {
        id: 2,
        description: "Green development"
      },
      {
        id: 3,
        description: "Air quality"
      },
      {
        id: 4,
        description: "Housing support"
      },
      {
        id: 5,
        description: "Safety initiatives"
      },
      {
        id: 6,
        description: "Living improvement"
      }
    ]
  },
  {
    id: 12,
    name: "Responsible Consumption and Production",
    icon: "/target/12.svg",
    color: "#BF8B2E",
    rectangle: "#ad8d52",
    emoji : "/targetIcons/12.svg",
    category: "Environmental",
    metrics: [
      {
        id: 1,
        description: "Waste recycling"
      },
      {
        id: 2,
        description: "Resource use"
      },
      {
        id: 3,
        description: "Eco-product support"
      },
      {
        id: 4,
        description: "Sustainability awareness"
      },
      {
        id: 5,
        description: "Supply investment"
      },
      {
        id: 6,
        description: "Footprint reduction"
      }
    ]
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
        description: "Emission reduction"
      },
      {
        id: 2,
        description: "Climate resilience"
      },
      {
        id: 3,
        description: "Renewable investment"
      },
      {
        id: 4,
        description: "Climate education"
      },
      {
        id: 5,
        description: "Reforestation effort"
      },
      {
        id: 6,
        description: "Climate beneficiaries"
      }
    ]
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
        description: "Ecosystem protection"
      },
      {
        id: 2,
        description: "Pollution reduction"
      },
      {
        id: 3,
        description: "Fishing support"
      },
      {
        id: 4,
        description: "Biodiversity research"
      },
      {
        id: 5,
        description: "Conservation education"
      },
      {
        id: 6,
        description: "Ocean impact"
      }
    ]
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
        description: "Land conservation"
      },
      {
        id: 2,
        description: "Species protection"
      },
      {
        id: 3,
        description: "Land use"
      },
      {
        id: 4,
        description: "Desertification combat"
      },
      {
        id: 5,
        description: "Biodiversity investments"
      },
      {
        id: 6,
        description: "Land recovery"
      }
    ]
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
        description: "Enforcement support"
      },
      {
        id: 2,
        description: "Anti-corruption"
      },
      {
        id: 3,
        description: "Rights initiatives"
      },
      {
        id: 4,
        description: "Transparency support"
      },
      {
        id: 5,
        description: "Peace programs"
      },
      {
        id: 6,
        description: "Peace beneficiaries"
      }
    ]
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
        description: "SDG collaboration"
      },
      {
        id: 2,
        description: "Financial contributions"
      },
      {
        id: 3,
        description: "Sharing initiatives"
      },
      {
        id: 4,
        description: "Advocacy campaigns"
      },
      {
        id: 5,
        description: "Country support"
      },
      {
        id: 6,
        description: "Partnership formation"
      }
    ]
  },
];
