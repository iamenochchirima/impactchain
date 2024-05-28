import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AffordableHousingSupportData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'numberOfHousingUnitsSupported' : bigint,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface AntiCorruptionProgramsData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'natureOfAntiCorruptionMeasures' : string,
  'dataVerification' : boolean,
  'typeOfProgram' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface CarbonEmissionReductionData {
  'created' : bigint,
  'duration' : string,
  'reductionInEmission' : number,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfEmissionReduced' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface CollaborativeSDGProjectsData {
  'created' : bigint,
  'duration' : string,
  'projectName' : string,
  'typeOfCollaboration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
  'numberOfProjects' : bigint,
}
export interface CommunityPeaceProgramsData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfProgram' : string,
  'numberOfPrograms' : bigint,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface EducationalGrantsData {
  'created' : bigint,
  'duration' : string,
  'totalAmountAwarded' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'typeOfGrant' : string,
  'startDate' : bigint,
}
export interface EmploymentConditionsImprovementData {
  'created' : bigint,
  'duration' : string,
  'numberOfBeneficiaries' : bigint,
  'typeOfImprovement' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface EndangeredSpeciesProtectionData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'numberOfSpeciesProtected' : bigint,
  'typeOfSpecies' : string,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface EnergyConsumptionReductionData {
  'reductionInEnergyConsumption' : bigint,
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'measurementsUnitsUsed' : string,
  'startDate' : bigint,
}
export interface EnergyEfficientSystemsData {
  'created' : bigint,
  'supportingFiles' : Array<string>,
  'numberOfSystemsInstalled' : bigint,
  'typeOfSystem' : string,
  'efficiencyRate' : bigint,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
  'duration' : string,
}
export interface FoodDonation {
  'created' : bigint,
  'duration' : string,
  'numberOfBeneficiaries' : bigint,
  'supportingFiles' : Array<string>,
  'volumeOfDonatedFood' : bigint,
  'dataVerification' : boolean,
  'typeOfFoodDonated' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface GenderEqualityWorkshopsData {
  'created' : bigint,
  'duration' : string,
  'typeOfWorkshop' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'numberOfParticipants' : bigint,
  'startDate' : bigint,
}
export interface GlobalPartnershipFinancialContributionsData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'amountContributed' : bigint,
  'typeOfContribution' : string,
  'sourceOfFunds' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface HealthServicesData {
  'created' : bigint,
  'duration' : string,
  'totalParticipants' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfService' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface HealthcareAccessData {
  'created' : bigint,
  'duration' : string,
  'numberOfBeneficiaries' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface HealthcareFunding {
  'numberOfProjects' : bigint,
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'typeOfFunding' : string,
  'dataVerification' : boolean,
  'amountFunded' : bigint,
  'numberOfProjects': bigint,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface HumanRightsInitiativesData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'numberOfInitiatives' : bigint,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'typeOfInitiative' : string,
  'startDate' : bigint,
}
export interface IOTDevice {
  'name' : string,
  'platform' : string,
  'ipAddress' : string,
}
export interface ImpactTarget1 {
  'id' : bigint,
  'metrics' : Metrics1,
  'name' : string,
}
export interface ImpactTarget10 {
  'id' : bigint,
  'metrics' : Metrics10,
  'name' : string,
}
export interface ImpactTarget11 {
  'id' : bigint,
  'metrics' : Metrics11,
  'name' : string,
}
export interface ImpactTarget12 {
  'id' : bigint,
  'metrics' : Metrics12,
  'name' : string,
}
export interface ImpactTarget13 {
  'id' : bigint,
  'metrics' : Metrics13,
  'name' : string,
}
export interface ImpactTarget14 {
  'id' : bigint,
  'metrics' : Metrics14,
  'name' : string,
}
export interface ImpactTarget15 {
  'id' : bigint,
  'metrics' : Matrics15,
  'name' : string,
}
export interface ImpactTarget16 {
  'id' : bigint,
  'metrics' : Metrics16,
  'name' : string,
}
export interface ImpactTarget17 {
  'id' : bigint,
  'metrics' : Metrics17,
  'name' : string,
}
export interface ImpactTarget2 {
  'id' : bigint,
  'metrics' : Metrics2,
  'name' : string,
}
export interface ImpactTarget3 {
  'id' : bigint,
  'metrics' : Metrics3,
  'name' : string,
}
export interface ImpactTarget4 {
  'id' : bigint,
  'metrics' : Metrics4,
  'name' : string,
}
export interface ImpactTarget5 {
  'id' : bigint,
  'metrics' : Metrics5,
  'name' : string,
}
export interface ImpactTarget6 {
  'id' : bigint,
  'metrics' : Metrics6,
  'name' : string,
}
export interface ImpactTarget7 {
  'id' : bigint,
  'metrics' : Metrics7,
  'name' : string,
}
export interface ImpactTarget8 {
  'id' : bigint,
  'metrics' : Metrics8,
  'name' : string,
}
export interface ImpactTarget9 {
  'id' : bigint,
  'metrics' : Metrics9,
  'name' : string,
}
export interface ImpactTargets {
  'ImpactTarget10' : [] | [ImpactTarget10],
  'ImpactTarget11' : [] | [ImpactTarget11],
  'ImpactTarget12' : [] | [ImpactTarget12],
  'ImpactTarget13' : [] | [ImpactTarget13],
  'ImpactTarget14' : [] | [ImpactTarget14],
  'ImpactTarget15' : [] | [ImpactTarget15],
  'ImpactTarget16' : [] | [ImpactTarget16],
  'ImpactTarget17' : [] | [ImpactTarget17],
  'ImpactTarget1' : [] | [ImpactTarget1],
  'ImpactTarget2' : [] | [ImpactTarget2],
  'ImpactTarget3' : [] | [ImpactTarget3],
  'ImpactTarget4' : [] | [ImpactTarget4],
  'ImpactTarget5' : [] | [ImpactTarget5],
  'ImpactTarget6' : [] | [ImpactTarget6],
  'ImpactTarget7' : [] | [ImpactTarget7],
  'ImpactTarget8' : [] | [ImpactTarget8],
  'ImpactTarget9' : [] | [ImpactTarget9],
}
export interface InclusionPoliciesData {
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'typeOfPolicy' : string,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
}
export interface InequalityReductionBeneficiariesData {
  'created' : bigint,
  'duration' : string,
  'typeOfInequalityAddressed' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'totalBeneficiaries' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface JobCreationInitiativesData {
  'jobsCreated' : bigint,
  'created' : bigint,
  'duration' : string,
  'jobsSectors' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface JobTrainingProgram {
  'created' : bigint,
  'duration' : string,
  'numberOfBeneficiaries' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface LandConservationReforestationData {
  'created' : bigint,
  'duration' : string,
  'areaOfLandConserved' : bigint,
  'supportingFiles' : Array<string>,
  'typeOfLandConservation' : string,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface LandRehabilitationData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'areaOfLandRehabilitated' : bigint,
  'startDate' : bigint,
}
export interface MarginalizedCommunitySupportData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'programName' : string,
  'typeOfCommunity' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface MarineEcosystemProtectionData {
  'created' : bigint,
  'duration' : string,
  'typeOfEcosystem' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'areaOfEcosystemProtected' : bigint,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface Matrics15 {
  'Metric151' : [] | [Metric151],
  'Metric152' : [] | [Metric152],
  'Metric153' : [] | [Metric153],
}
export interface Metric101 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<MarginalizedCommunitySupportData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric102 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<InclusionPoliciesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric103 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<InequalityReductionBeneficiariesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric11 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<JobTrainingProgram>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric111 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<UrbanSustainabilityProjectsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric112 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<AffordableHousingSupportData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric113 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<UrbanLivingConditionsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric12 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<MicroloanProgram>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric121 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<WasteReductionRecyclingData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric122 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SustainableSupplyChainInvestmentData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric123 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<OrganizationalResourceFootprintReductionData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric13 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<PeopleAssistedOutOfPoverty>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric131 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<CarbonEmissionReductionData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric132 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<RenewableEnergyInvestmentData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric133 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<ReforestationProjectsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric141 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<MarineEcosystemProtectionData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric142 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<OceanPollutionReductionData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric143 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SustainableFishingSupportData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric151 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<LandConservationReforestationData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric152 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<EndangeredSpeciesProtectionData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric153 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<LandRehabilitationData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric161 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<AntiCorruptionProgramsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric162 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<HumanRightsInitiativesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric163 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<CommunityPeaceProgramsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric171 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<CollaborativeSDGProjectsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric172 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<GlobalPartnershipFinancialContributionsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric173 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SDGAdvocacyCampaignsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric21 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<FoodDonation>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric22 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SustainableAgricultureInvestment>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric23 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<NutritiousFoodProgram>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric31 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<HealthcareFunding>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric32 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<HealthServicesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric33 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<HealthcareAccessData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric41 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SchoolsSupportedData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric42 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<EducationalGrantsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric43 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<StudentsBenefitingData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric51 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<WomensEmpowermentProgramData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric52 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<GenderEqualityWorkshopsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric53 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<WorkplaceGenderEqualityPoliciesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric61 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SanitationFacilitiesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric62 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<WaterConservationInitiativesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric63 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<WaterSanitationAccessData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric71 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<RenewableEnergyProjectsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric72 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<EnergyEfficientSystemsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric73 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<EnergyConsumptionReductionData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric81 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<JobCreationInitiativesData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric82 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<VocationalTrainingProgramsData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric83 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<EmploymentConditionsImprovementData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric91 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<STEMInnovationEducationData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric92 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<SustainableInfrastructureData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metric93 {
  'key' : string,
  'documents' : Array<string>,
  'data' : Array<PeopleBenefitingFromInfrastructureData>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export interface Metrics1 {
  'Metric11' : [] | [Metric11],
  'Metric12' : [] | [Metric12],
  'Metric13' : [] | [Metric13],
}
export interface Metrics10 {
  'Metric101' : [] | [Metric101],
  'Metric102' : [] | [Metric102],
  'Metric103' : [] | [Metric103],
}
export interface Metrics11 {
  'Metric111' : [] | [Metric111],
  'Metric112' : [] | [Metric112],
  'Metric113' : [] | [Metric113],
}
export interface Metrics12 {
  'Metric121' : [] | [Metric121],
  'Metric122' : [] | [Metric122],
  'Metric123' : [] | [Metric123],
}
export interface Metrics13 {
  'Metric131' : [] | [Metric131],
  'Metric132' : [] | [Metric132],
  'Metric133' : [] | [Metric133],
}
export interface Metrics14 {
  'Metric141' : [] | [Metric141],
  'Metric142' : [] | [Metric142],
  'Metric143' : [] | [Metric143],
}
export interface Metrics16 {
  'Metric161' : [] | [Metric161],
  'Metric162' : [] | [Metric162],
  'Metric163' : [] | [Metric163],
}
export interface Metrics17 {
  'Metric171' : [] | [Metric171],
  'Metric172' : [] | [Metric172],
  'Metric173' : [] | [Metric173],
}
export interface Metrics2 {
  'Metric21' : [] | [Metric21],
  'Metric22' : [] | [Metric22],
  'Metric23' : [] | [Metric23],
}
export interface Metrics3 {
  'Metric31' : [] | [Metric31],
  'Metric32' : [] | [Metric32],
  'Metric33' : [] | [Metric33],
}
export interface Metrics4 {
  'Metric41' : [] | [Metric41],
  'Metric42' : [] | [Metric42],
  'Metric43' : [] | [Metric43],
}
export interface Metrics5 {
  'Metric51' : [] | [Metric51],
  'Metric52' : [] | [Metric52],
  'Metric53' : [] | [Metric53],
}
export interface Metrics6 {
  'Metric61' : [] | [Metric61],
  'Metric62' : [] | [Metric62],
  'Metric63' : [] | [Metric63],
}
export interface Metrics7 {
  'Metric71' : [] | [Metric71],
  'Metric72' : [] | [Metric72],
  'Metric73' : [] | [Metric73],
}
export interface Metrics8 {
  'Metric81' : [] | [Metric81],
  'Metric82' : [] | [Metric82],
  'Metric83' : [] | [Metric83],
}
export interface Metrics9 {
  'Metric91' : [] | [Metric91],
  'Metric92' : [] | [Metric92],
  'Metric93' : [] | [Metric93],
}
export interface MicroloanProgram {
  'created' : bigint,
  'duration' : string,
  'amountDisbursed' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'typeOfSupport' : string,
  'numberOfLoans' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface NutritiousFoodProgram {
  'created' : bigint,
  'duration' : string,
  'numberOfBeneficiaries' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface OceanPollutionReductionData {
  'created' : bigint,
  'duration' : string,
  'typesOfPollutantsTargeted' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
  'reductionInPollution' : number,
}
export interface OrganizationalResourceFootprintReductionData {
  'created' : bigint,
  'duration' : string,
  'reductionInResourceFootprint' : bigint,
  'typeOfResources' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface PeopleAssistedOutOfPoverty {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'numberOfPeopleAssisted' : bigint,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface PeopleBenefitingFromInfrastructureData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'totalBeneficiaries' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface ReforestationProjectsData {
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'areaOfLandReforested' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
}
export interface RenewableEnergyInvestmentData {
  'created' : bigint,
  'duration' : string,
  'typeOfRenewableEnergyInvestment' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'amountInvested' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface RenewableEnergyProjectsData {
  'numberOfProjects' : bigint,
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfRenewableEnergy' : string,
  'location' : string,
  'startDate' : bigint,
}
export type Result = { 'ok' : UserRecord } |
  { 'err' : string };
  
export interface SDGAdvocacyCampaignsData {
  'created' : bigint,
  'duration' : string,
  'typeOfCampaign' : string,
  'supportingFiles' : Array<string>,
  'scopeOfCampaign' : string,
  'dataVerification' : boolean,
  'numberOfCampaigns':bigint,
  'programName' : string,
  'startDate' : bigint,
  'location':string,
}
export interface STEMInnovationEducationData {
  'created' : bigint,
  'duration' : string,
  'totalParticipants' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfProgram' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface SanitationFacilitiesData {
  'created' : bigint,
  'duration' : string,
  'totalInvestment' : bigint,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfFacility' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface SchoolsSupportedData {
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'numberOfSchoolsSupported' : bigint,
  'typeOfSupport' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface StudentsBenefitingData {
  'created' : bigint,
  'duration' : string,
  'totalStudentsBenefited' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfBenefits' : string,
  'programName' : string,
  'location' : string,
  'educationalLevel' : string,
  'startDate' : bigint,
}
export interface SustainableAgricultureInvestment {
  'numberOfProjects' : bigint,
  'created' : bigint,
  'duration' : string,
  'totalInvestment' : bigint,
  'projectName' : string,
  'typeOfInvestment' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
}
export interface SustainableFishingSupportData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'programName' : string,
  'typeOfSupport' : string,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
}
export interface SustainableInfrastructureData {
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'typeOfInfrastructure' : string,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
}
export interface SustainableSupplyChainInvestmentData {
  'numberOfSupplyChainImproved' : bigint,
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'typeOfInvestment':string,
  'dataVerification' : boolean,
  'programName' : string,
  'amountInvested' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface UrbanLivingConditionsData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'numberOfAreasImproved' : bigint,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface UrbanSustainabilityProjectsData {
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfProject' : string,
  'numberOfProjects' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface UserRecord {
  'created' : bigint,
  'aboutCompany' : {
    'logo' : string,
    'name' : string,
    'companySize' : string,
    'industry' : string,
  },
  'email' : string,
  'impactTargets' : ImpactTargets,
}
export interface VocationalTrainingProgramsData {
  'created' : bigint,
  'duration' : string,
  'totalParticipants' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
  'typeOfTraining' : string,
}
export interface WasteReductionRecyclingData {
  'created' : bigint,
  'duration' : string,
  'recyclingProcessInvolved' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfWaste':string,
  'totalWasteReduced' : bigint,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface WaterConservationInitiativesData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'programName' : string,
  'numberOfInitiatives' : bigint,
  'location' : string,
  'typeOfInitiative' : string,
  'startDate' : bigint,
}
export interface WaterSanitationAccessData {
  'created' : bigint,
  'duration' : string,
  'numberOfBeneficiaries' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'programName' : string,
  'totalFundsAllocated' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface WomensEmpowermentProgramData {
  'created' : bigint,
  'duration' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'typeOfProgram' : string,
  'programName' : string,
  'location' : string,
  'numberOfParticipants' : bigint,
  'startDate' : bigint,
}
export interface WorkplaceGenderEqualityPoliciesData {
  'created' : bigint,
  'duration' : string,
  'programName' : string,
  'supportingFiles' : Array<string>,
  'typeOfPolicy' : string,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,
}
export type email = string;
export interface _SERVICE {
  'addUserRecord' : ActorMethod<[UserRecord], undefined>,
  'getUserRecord' : ActorMethod<[email], Result>,
  'removeUserRecord' : ActorMethod<[email], undefined>,
  'updateUserRecord' : ActorMethod<[UserRecord], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
