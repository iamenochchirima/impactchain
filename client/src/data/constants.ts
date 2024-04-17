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
        description: "Job training or educational programs"
        
      },
      {
        id: 2,
        description: "Microloans or grants provided",
      },
      {
        id: 3,
        description: "People assisted out of poverty"
      }
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
        description: "Investment in sustainable agriculture",
      },
      {
        id: 3,
        description: "People with regular nutritious food",
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
        description: "Funding for healthcare"
      },
      {
        id: 2,
        description: "Health check-ups or vaccination drives"
      },
      {
        id: 3,
        description: "People accessing healthcare"
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
        description: "Schools built or supported"
      },
      {
        id: 2,
        description: "Educational grants awarded"
      },
      {
        id: 3,
        description: "Students benefiting from education"
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
        description: "Women's empowerment programs"
      },
      {
        id: 2,
        description: "Gender equality workshops"
      },
      {
        id: 3,
        description: "Workplace gender equality policies"
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
        description: "Sanitation facilities"
      },
      {
        id: 2,
        description: "Water conservation initiatives"
      },
      {
        id: 3,
        description: "People with water and sanitation access"
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
        description: "Renewable energy projects"
      },
      {
        id: 2,
        description: "Energy-efficient systems"
      },
      {
        id: 3,
        description: "Energy consumption reduction"
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
        description: "Job creation initiatives"
      },
      {
        id: 2,
        description: "Vocational training programs"
      },
      {
        id: 3,
        description: "Employment or work condition improvements"
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
        description: "STEM and innovation education"
      },
      {
        id: 2,
        description: "Sustainable infrastructure development"
      },
      {
        id: 3,
        description: "People benefiting from infrastructure"
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
        description: "Marginalized community support"
      },
      {
        id: 2,
        description: "Inclusion policies"
      },
      {
        id: 3,
        description: "Beneficiaries of inequality reduction"
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
        description: "Urban sustainability projects"
      },
      {
        id: 2,
        description: "Affordable housing support"
      },
      {
        id: 3,
        description: "Improved urban living conditions"
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
        description: "Waste reduction and recycling"
      },
      {
        id: 2,
        description: "Sustainable supply chain investment"
      },
      {
        id: 3,
        description: "Organizational resource footprint reduction"
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
        description: "Carbon emission reduction"
      },
      {
        id: 2,
        description: "Renewable energy investment"
      },
      {
        id: 3,
        description: "Reforestation projects"
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
        description: "Marine ecosystem protection"
      },
      {
        id: 2,
        description: "Ocean pollution reduction"
      },
      {
        id: 3,
        description: "Sustainable fishing support"
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
        description: "Land conservation and reforestation"
      },
      {
        id: 2,
        description: "Endangered species protection"
      },
      {
        id: 3,
        description: "Land rehabilitated or conserved"
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
        description: "Anti-corruption programs"
      },
      {
        id: 2,
        description: "Human rights and justice initiatives"
      },
      {
        id: 3,
        description: "Community peace programs"
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
        description: "Collaborative SDG projects"
      },
      {
        id: 2,
        description: "Global partnership financial contributions"
      },
      {
        id: 3,
        description: "SDG advocacy campaigns"
      }
    ]
  },
];
