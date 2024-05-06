import React, { FC } from "react";
import { Metric } from "../../../utils/types";
import JobTrainingProgram from "./metricsForms/1-no-poverty/JobTrainingProgram";
import MircroloansProgram from "./metricsForms/1-no-poverty/MircroloansProgram";
import PeopleAssistedOutOfPoverty from "./metricsForms/1-no-poverty/PeopleAssistedOutOfPoverty";
import { ManualData } from "./MetricRecords";
import FoodDonation from "./metricsForms/2-zero-hunger/FoodDonation";
import SustainableAgriculture from "./metricsForms/2-zero-hunger/SustainableAgriculture";
import NutritiousFoodProgram from "./metricsForms/2-zero-hunger/NutritiousFoodProgram";
import HealthcareFunding from "./metricsForms/3-good-health-and-well-being/HealthCareFunding";
import HealthCheckups from "./metricsForms/3-good-health-and-well-being/HealthCheckups";
import PeopleAccessingHealthCare from "./metricsForms/3-good-health-and-well-being/PeopleAccessingHealthcare";
import SchoolsBuiltData from "./metricsForms/4-quality-education/SchoolsBuilt";
import EducationalGrantsData from "./metricsForms/4-quality-education/EducationalGrants";
import StudentsBenefitingData from "./metricsForms/4-quality-education/StudentsBenefiting";
import WomensEmpowermentProgramData from "./metricsForms/5-gender-equality/WomensEmpowerment";
import GenderEqualityWorkshopsData from "./metricsForms/5-gender-equality/GenderEqualityWorkshops";
import SanitationFacilitiesData from "./metricsForms/6-clean-water-and-sanitation/SanitationFacilities";
import WaterConservationInitiativesData from "./metricsForms/6-clean-water-and-sanitation/WaterConservation";
import PeopleWithWaterAndSanitationAccess from "./metricsForms/6-clean-water-and-sanitation/PeopleWithWaterAndSanitationAccess";
import RenewableEnergyProjects from "./metricsForms/7-affordable-and-clean-energy/RenewableEnergyProjects";
import EnergyEfficientSystems from "./metricsForms/7-affordable-and-clean-energy/EnergyEfficientSystems";
import EnergyConsumptionReduction from "./metricsForms/7-affordable-and-clean-energy/EnergyConsumptionReduction";
import JobCreationInitiatives from "./metricsForms/8-decent-work-and-growth/JobCreationInitiatives";
import VocationalTrainingPrograms from "./metricsForms/8-decent-work-and-growth/VocationalTrainingPrograms";
import EmploymentConditionsImprovement from "./metricsForms/8-decent-work-and-growth/EmploymentConditionsImprovement";
import STEMInnovationEducation from "./metricsForms/9-industry-innovation-infrastructure/STEMInnovationEducation";
import SustainableInfrastructure from "./metricsForms/9-industry-innovation-infrastructure/SustainableInfrastructure";
import PeopleBenefitingFromInfrastructure from "./metricsForms/9-industry-innovation-infrastructure/PeopleBenefitingFromInfrastructure";
import MarginalizedCommunitySupport from "./metricsForms/10-reduced-inequality/MarginalizedCommunitySupport";
import InclusionPolicies from "./metricsForms/10-reduced-inequality/InclusionPolicies";
import InequalityReductionBeneficiaries from "./metricsForms/10-reduced-inequality/InequalityReductionBeneficiaries";
import UrbanSustainabilityProjects from "./metricsForms/11-sustainable-cities-and-communities/UrbanSustainabilityProjects";
import AffordableHousingSupport from "./metricsForms/11-sustainable-cities-and-communities/AffordableHousingSupport";
import UrbanLivingConditions from "./metricsForms/11-sustainable-cities-and-communities/UrbanLivingConditions";
import WasteReductionRecycling from "./metricsForms/12-responsible-consumption-and-production/WasteReductionRecycling";
import SustainableSupplyChainInvestment from "./metricsForms/12-responsible-consumption-and-production/SustainableSupplyChainInvestment";
import OrganizationalResourceFootprintReduction from "./metricsForms/12-responsible-consumption-and-production/OrganizationalResourceFootprintReduction";
import { CarbonEmissionReduction } from "./metricsForms/13-climate-action/CarbonEmissionReduction";
import RenewableEnergyInvestment from './metricsForms/13-climate-action/RenewableEnergyInvestment';
import ReforestationProjects from './metricsForms/13-climate-action/ReforestationProjects';
import MarineEcosystemProtection from './metricsForms/14-life-below-water/MarineEcosystemProtection';
import OceanPollutionReduction from './metricsForms/14-life-below-water/OceanPollutionReduction';
import SustainableFishingSupport from './metricsForms/14-life-below-water/SustainableFishingSupport';
import LandConservationReforestation from './metricsForms/15-life-on-land/LandConservationReforestation';
import EndangeredSpeciesProtection from './metricsForms/15-life-on-land/EndangeredSpeciesProtection';
import LandRehabilitation from "./metricsForms/15-life-on-land/LandRehabilitation";
import AntiCorruptionPrograms from './metricsForms/16-peace-justice-and-strong-institution/AntiCorruptionPrograms';
import HumanRightsInitiatives from './metricsForms/16-peace-justice-and-strong-institution/HumanRightsInitiatives';
import CommunityPeacePrograms from './metricsForms/16-peace-justice-and-strong-institution/CommunityPeacePrograms';
import CollaborativeSDGProjects from './metricsForms/17-partnerships-for-the-goals/CollaborativeSDGProjects';
import GlobalPartnershipFinancialContributions from './metricsForms/17-partnerships-for-the-goals/GlobalPartnershipFinancialContributions';
import SDGAdvocacyCampaigns from './metricsForms/17-partnerships-for-the-goals/SDGAdvocacyCampaigns';
import WorkplaceGenderEqualityPolicies from './metricsForms/5-gender-equality/WorkplaceGenderEquality';

type Props = {
  setUploadManually: (manually: boolean) => void;
  setManualData: (manualData: ManualData) => void;
  metric: Metric;
};

const ManuallyUpload: FC<Props> = ({
  setUploadManually,
  setManualData,
  metric,
}) => {
  return (
    <div className="fixed z-100 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={`bg-gray-900 rounded w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8`}
        >
          <div className="flex">
            <div className="flex justify-start w-[100px]">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              {metric.key === "jobTraining" && (
                <JobTrainingProgram {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "microloans" && (
                <MircroloansProgram {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "peopleAssisted" && (
                <PeopleAssistedOutOfPoverty
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "foodDonation" && (
                <FoodDonation {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "sustainableAgriculture" && (
                <SustainableAgriculture
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "peopleFed" && (
                <NutritiousFoodProgram
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "healthcareFunding" && (
                <HealthcareFunding {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "healthCheckups" && (
                <HealthCheckups {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "peopleAccessingHealthcare" && (
                <PeopleAccessingHealthCare
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "schoolsBuilt" && (
                <SchoolsBuiltData {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "educationalGrants" && (
                <EducationalGrantsData
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "studentsBenefiting" && (
                <StudentsBenefitingData
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "womensEmpowerment" && (
                <WomensEmpowermentProgramData
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "genderEqualityWorkshops" && (
                <GenderEqualityWorkshopsData
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "workplaceGenderEquality" && (
                <WorkplaceGenderEqualityPolicies
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "sanitationFacilities" && (
                <SanitationFacilitiesData
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "waterConservation" && (
                <WaterConservationInitiativesData
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "peopleWithAccess" && (
                <PeopleWithWaterAndSanitationAccess
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "renewableEnergyProjects" && (
                <RenewableEnergyProjects
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "energyEfficientSystems" && (
                <EnergyEfficientSystems
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "energyConsumptionReduction" && (
                <EnergyConsumptionReduction
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "jobCreation" && (
                <JobCreationInitiatives
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "vocationalTraining" && (
                <VocationalTrainingPrograms
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "employmentImprovements" && (
                <EmploymentConditionsImprovement
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "stemEducation" && (
                <STEMInnovationEducation
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "sustainableInfrastructure" && (
                <SustainableInfrastructure
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "peopleBenefiting" && (
                <PeopleBenefitingFromInfrastructure
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "marginalizedCommunitySupport" && (
                <MarginalizedCommunitySupport
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "inclusionPolicies" && (
                <InclusionPolicies {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "beneficiaries" && (
                <InequalityReductionBeneficiaries
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "urbanSustainability" && (
                <UrbanSustainabilityProjects
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "affordableHousing" && (
                <AffordableHousingSupport
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "urbanLivingConditions" && (
                <UrbanLivingConditions
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "wasteReduction" && (
                <WasteReductionRecycling
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "sustainableSupplyChain" && (
                <SustainableSupplyChainInvestment
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "resourceFootprintReduction" && (
                <OrganizationalResourceFootprintReduction
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "carbonEmissionReduction" && (
                <CarbonEmissionReduction {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "renewableEnergyInvestment" && (
                <RenewableEnergyInvestment
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "reforestationProjects" && (
                <ReforestationProjects
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "marineEcosystemProtection" && (
                <MarineEcosystemProtection {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "oceanPollutionReduction" && (
                <OceanPollutionReduction {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "sustainableFishing" && (
                <SustainableFishingSupport
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "landConservation" && (
                <LandConservationReforestation {...{ setManualData, setUploadManually }} />
              )}
              {metric.key === "endangeredSpeciesProtection" && (
                <EndangeredSpeciesProtection
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "landRehabilitation" && (
                <LandRehabilitation
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "antiCorruptionPrograms" && (
                <AntiCorruptionPrograms
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "humanRightsInitiatives" && (
                <HumanRightsInitiatives
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "communityPeacePrograms" && (
                <CommunityPeacePrograms
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "collaborativeProjects" && (
                <CollaborativeSDGProjects
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "financialContributions" && (
                <GlobalPartnershipFinancialContributions
                  {...{ setManualData, setUploadManually }}
                />
              )}
              {metric.key === "sdgAdvocacy" && (
                <SDGAdvocacyCampaigns
                  {...{ setManualData, setUploadManually }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManuallyUpload;
