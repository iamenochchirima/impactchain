export const testJobCreatedPrograms = {
  goal: "Create 5 job training programs",
  data: [
    {
      programName: "Cybersecurity Fundamentals Course",
      startDate: BigInt(1680307200),
      duration: "2 months",
      location: "Durban",
      numberOfBeneficiaries: BigInt(100),
      dataVerification: true,
      supportingFiles: ["cybersec1.pdf", "cybersec2.pdf"],
      created: BigInt(1680220800),
    },
    {
      programName: "AI and Machine Learning Workshop",
      startDate: BigInt(1682899200),
      duration: "1 month",
      location: "Pretoria",
      numberOfBeneficiaries: BigInt(80),
      dataVerification: true,
      supportingFiles: ["AIML1.pdf", "AIML2.pdf"],
      created: BigInt(1682812800),
    },
    {
      programName: "Entrepreneurship and Business Management",
      startDate: BigInt(1685491200),
      duration: "4 months",
      location: "Bloemfontein",
      numberOfBeneficiaries: BigInt(90),
      dataVerification: true,
      supportingFiles: ["business1.pdf", "business2.pdf"],
      created: BigInt(1685404800),
    },
    {
      programName: "Renewable Energy Technician Training",
      startDate: BigInt(1688083200),
      duration: "6 months",
      location: "Kimberley",
      numberOfBeneficiaries: BigInt(70),
      dataVerification: true,
      supportingFiles: ["energy1.pdf", "energy2.pdf"],
      created: BigInt(1687996800),
    },
    {
      programName: "Hospitality and Tourism Certification",
      startDate: BigInt(1690675200),
      duration: "3 months",
      location: "Port Elizabeth",
      numberOfBeneficiaries: BigInt(85),
      dataVerification: true,
      supportingFiles: ["hospitality1.pdf", "hospitality2.pdf"],
      created: BigInt(1690588800),
    },
  ],
};

export const testmicroloanPrograms = {
  goal: "Boost the issuance of loans and grants by 40% in the upcoming fiscal year, focusing on rural expansion. Enhance recipient financial literacy to improve repayment rates and program success.",
  data: [
    {
      programName: "Small Business Starter",
      startDate: BigInt(1672527600),
      duration: "6 months",
      location: "Johannesburg",
      typeOfSupport: "Financial and Mentorship",
      numberOfLoans: BigInt(100),
      amountDisbursed: BigInt(5000000),
      dataVerification: true,
      supportingFiles: ["budget.pdf", "plan.pdf"],
      created: BigInt(1672527600),
    },
    {
      programName: "Women Entrepreneurs",
      startDate: BigInt(1683118800),
      duration: "1 year",
      location: "Cape Town",
      typeOfSupport: "Financial",
      numberOfLoans: BigInt(50),
      amountDisbursed: BigInt(2000000),
      dataVerification: false,
      supportingFiles: ["overview.pdf", "application_form.pdf"],
      created: BigInt(1683118800),
    },
    {
      programName: "Agri-business Growth",
      startDate: BigInt(1693700000),
      duration: "3 years",
      location: "Pretoria",
      typeOfSupport: "Equipment and Financial",
      numberOfLoans: BigInt(75),
      amountDisbursed: BigInt(7500000),
      dataVerification: true,
      supportingFiles: ["agreement.pdf", "brochure.pdf"],
      created: BigInt(1693700000),
    },
    {
      programName: "Tech Startup Fund",
      startDate: BigInt(1704281200),
      duration: "2 years",
      location: "Durban",
      typeOfSupport: "Financial, Networking",
      numberOfLoans: BigInt(20),
      amountDisbursed: BigInt(3000000),
      dataVerification: true,
      supportingFiles: ["guidelines.pdf", "submission_guidelines.pdf"],
      created: BigInt(1704281200),
    },
  ],
};

export const testpeopleAssistedOut = {
    goal: "Assist 1000 people in the upcoming fiscal year",
    data: [
        {
          programName: "Urban Renewal Initiative",
          startDate: 1672527600, 
          duration: "12 months",
          location: "Cape Town",
          numberOfPeopleAssisted: 500
        },
        {
          programName: "Rural Skills Development",
          startDate: 1683118800,
          duration: "18 months",
          location: "Mpumalanga",
          numberOfPeopleAssisted: 300
        },
        {
          programName: "Youth Empowerment Project",
          startDate: 1693700000, 
          duration: "24 months",
          location: "Johannesburg",
          numberOfPeopleAssisted: 750
        },
        {
          programName: "Women in Tech",
          startDate: 1704281200,
          duration: "6 months",
          location: "Durban",
          numberOfPeopleAssisted: 200
        }
      ]
      
    
}

export const testfoodDonationPrograms = {
    goal : "Donate 10,000 units of food to local charities",
    data : [
        {
          programName: "Community Harvest",
          startDate: 1672527600, 
          duration: "3 months",
          location: "Cape Town",
          volumeOfDonatedFood: 2000,
          numberOfBeneficiaries: 500,
          typeOfFoodDonated: "Vegetables and fruits"
        },
        {
          programName: "Bread for Life",
          startDate: 1683118800, 
          duration: "6 months",
          location: "Durban",
          volumeOfDonatedFood: 1500,
          numberOfBeneficiaries: 300,
          typeOfFoodDonated: "Bakery products"
        },
        {
          programName: "Daily Meals",
          startDate: 1693700000,
          duration: "1 year",
          location: "Johannesburg",
          volumeOfDonatedFood: 5000,
          numberOfBeneficiaries: 1000,
          typeOfFoodDonated: "Prepared meals"
        },
        {
          programName: "Nutrition Boost",
          startDate: 1704281200, 
          duration: "2 months",
          location: "Pretoria",
          volumeOfDonatedFood: 1200,
          numberOfBeneficiaries: 200,
          typeOfFoodDonated: "Dairy and protein foods"
        }
      ]
}

export const testsustainableAgricultureInvestments = {
    goal: "Invest in sustainable agriculture projects to reduce food insecurity and promote economic growth",
    data: [
        {
          projectName: "Green Farm Expansion",
          startDate: 1672527600, 
          duration: "5 years",
          location: "Eastern Cape",
          totalInvestment: 2000000, 
          typeOfInvestment: "Renewable energy installations",
          numberOfProjects: 10
        },
        {
          projectName: "Water Conservation Systems",
          startDate: 1683118800, 
          duration: "3 years",
          location: "Limpopo",
          totalInvestment: 500000, 
          typeOfInvestment: "Irrigation efficiency upgrades",
          numberOfProjects: 15
        },
        {
          projectName: "Organic Transition Program",
          startDate: 1693700000, 
          duration: "2 years",
          location: "KwaZulu-Natal",
          totalInvestment: 750000, 
          typeOfInvestment: "Organic certification support",
          numberOfProjects: 20
        },
        {
          projectName: "Agroforestry Integration",
          startDate: 1704281200,
          duration: "4 years",
          location: "Western Cape",
          totalInvestment: 1000000, 
          typeOfInvestment: "Tree planting and land management",
          numberOfProjects: 5
        }
      ]
}


  