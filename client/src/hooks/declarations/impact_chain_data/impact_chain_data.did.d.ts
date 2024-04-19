import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AffordableHousingSupportData {
  'completionDate' : string,
  'numberofUnitsConstructed' : bigint,
  'feedbackFromBeneficiaries' : string,
  'housingTypes' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'impactOnCommunity' : string,
  'totalFunding' : bigint,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'numberofBeneficiaries' : bigint,
  'sustainabilityFeatures' : string,
  'location' : string,
  'startDate' : string,
}
export interface AntiCorruptionProgramsData {
  'feedbackFromCommunity' : string,
  'programDescription' : string,
  'endDate' : string,
  'strategiesImplemented' : string,
  'legalActionsTaken' : bigint,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'challengesFaced' : string,
  'programName' : string,
  'impactOnCorruptionLevels' : string,
  'Engagement' : string,
  'location' : string,
  'startDate' : string,
}
export interface BasicProgramInfo {
  'programDescription' : string,
  'endDate' : [] | [bigint],
  'programLocation' : string,
  'programName' : string,
  'startDate' : bigint,
}
export interface CarbonEmissionReductionData {
  'methodsUsed' : string,
  'environmentalImpactAssessment' : string,
  'totalInvestment' : bigint,
  'endDate' : string,
  'impactOnOperationalEfficiency' : string,
  'totalEmissionsReduced' : bigint,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'sectorsImpacted' : string,
  'challengesFaced' : string,
  'location' : string,
  'startDate' : string,
}
export interface CollaborativeSDGProjectsData {
  'participatingOrganizations' : string,
  'totalInvestment' : bigint,
  'projectName' : string,
  'endDate' : string,
  'projectDescription' : string,
  'feedbackFromParticipants' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'projectScope' : string,
  'startDate' : string,
  'impactOnSDGs' : string,
}
export interface CommunityPeaceProgramsData {
  'feedbackFromCommunity' : string,
  'programDescription' : string,
  'communityOutreach' : string,
  'endDate' : string,
  'conflictResolutionStrategies' : string,
  'incidentsOfViolenceReduced' : bigint,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'challengesFaced' : string,
  'programName' : string,
  'impactOnCommunityCohesion' : string,
  'location' : string,
  'startDate' : string,
}
export interface EducationalGrantsData {
  'programDescription' : string,
  'endDate' : string,
  'typesOfGrants' : string,
  'totalAmountAwarded' : bigint,
  'feedbackFromRecipients' : string,
  'dataVerification' : boolean,
  'impactOnEducation' : string,
  'totalGrantsAwarded' : bigint,
  'challengesFaced' : string,
  'programName' : string,
  'recipientDemographics' : string,
  'averageGrantAmount' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface EmploymentConditionsData {
  'numberOfWorkplacesImproved' : bigint,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'impactOnProductivity' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'impactOnEmployeeSatisfaction' : string,
  'initiativeDescription' : string,
  'affectedEmployees' : bigint,
  'challengesFaced' : string,
  'typesOfImprovements' : string,
  'feedbackFromEmployees' : string,
  'location' : string,
  'startDate' : string,
}
export interface EndangeredSpeciesProtectionData {
  'impactOnSpeciesPopulation' : string,
  'endDate' : string,
  'protectionStrategies' : string,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'partnershipsFormed' : string,
  'speciesProtected' : string,
  'location' : string,
  'startDate' : string,
}
export interface EnergyConsumptionReductionData {
  'methodsUsed' : string,
  'operationalChallenges' : string,
  'completionDate' : string,
  'costSavings' : bigint,
  'totalEnergySaved' : bigint,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'impactOnEnvironmentalSustainability' : string,
  'location' : string,
  'percentageReduction' : bigint,
  'startDate' : string,
}
export interface EnergyEfficientSystemsData {
  'ROI' : string,
  'estimatedEnergySavings' : bigint,
  'impactOnOperationalEfficiency' : string,
  'totalCost' : bigint,
  'communityFeedback' : string,
  'typeOfSystem' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'systemDescription' : string,
  'actualEnergySavings' : bigint,
  'location' : string,
  'systemName' : string,
  'installationDate' : string,
}
export interface FeedbackAndVerification {
  'supportingDocuments' : Array<Uint8Array | number[]>,
  'dataVerification' : boolean,
  'participantFeedback' : string,
  'successStories' : string,
}
export interface FinancialInfo {
  'fundingSources' : string,
  'programBudget' : bigint,
  'resourcesProvided' : string,
}
export interface FoodDonation {
  'programDescription' : string,
  'numberOfBeneficiaries' : bigint,
  'totalDonatedFood' : bigint,
  'endDate' : string,
  'feedbackFromRecipients' : string,
  'foodSafetyStandards' : string,
  'dataVerification' : boolean,
  'communityImpact' : string,
  'typeOfFoodDonated' : string,
  'sourcesOfFood' : string,
  'challengesFaced' : string,
  'storageFacilities' : string,
  'programName' : string,
  'distributionMethods' : string,
  'location' : string,
  'startDate' : string,
}
export interface GenderEqualityWorkshopsData {
  'endDate' : string,
  'workshopDescription' : string,
  'feedbackFromParticipants' : string,
  'themesCovered' : string,
  'outcomesMeasured' : string,
  'dataVerification' : boolean,
  'organizationalPartners' : string,
  'challengesFaced' : string,
  'workshopName' : string,
  'location' : string,
  'numberOfParticipants' : bigint,
  'participantDemographics' : string,
  'startDate' : string,
}
export interface GlobalPartnershipFinancialContributionsData {
  'feedbackFromBeneficiaries' : string,
  'date' : string,
  'description' : string,
  'dataVerification' : boolean,
  'amountContributed' : bigint,
  'challengesFaced' : string,
  'targetedSDGs' : string,
  'impactAssessment' : string,
  'donor' : string,
  'contributionName' : string,
}
export interface HealthCheckupVaccinationData {
  'operationalChallenges' : string,
  'totalServicesProvided' : bigint,
  'programDescription' : string,
  'endDate' : string,
  'totalParticipants' : bigint,
  'feedbackFromParticipants' : string,
  'vaccinationCoverage' : bigint,
  'followUpActions' : string,
  'healthOutcomesMeasured' : string,
  'dataVerification' : boolean,
  'communityImpact' : string,
  'typeOfService' : string,
  'programName' : string,
  'location' : string,
  'startDate' : string,
}
export interface HealthcareAccessData {
  'operationalChallenges' : string,
  'programDescription' : string,
  'endDate' : string,
  'totalHealthFacilities' : bigint,
  'improvementsMade' : string,
  'typesOfServicesProvided' : string,
  'dataVerification' : boolean,
  'communityImpact' : string,
  'totalPatientsServed' : bigint,
  'feedbackFromPatients' : string,
  'barriersToAccess' : string,
  'programName' : string,
  'location' : string,
  'patientDemographics' : string,
  'startDate' : string,
}
export interface HealthcareFunding {
  'healthOutcomes' : string,
  'programDescription' : string,
  'fundingSources' : string,
  'feedbackFromBeneficiaries' : string,
  'endDate' : string,
  'numberofHealthProjects' : bigint,
  'totalFundingAmount' : bigint,
  'dataVerification' : boolean,
  'typesOfServicesFunded' : string,
  'challengesFaced' : string,
  'programName' : string,
  'location' : string,
  'impactOnHealthServices' : string,
  'startDate' : string,
}
export interface HumanRightsInitiativesData {
  'feedbackFromBeneficiaries' : string,
  'endDate' : string,
  'areasCovered' : string,
  'impactOnLegalOutcomes' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'numberofBeneficiaries' : bigint,
  'partnershipsFormed' : string,
  'location' : string,
  'startDate' : string,
}
export interface IOTDevice {
  'name' : string,
  'platform' : string,
  'ipAddress' : string,
}
export interface ImpactAssessment {
  'skillsDeveloped' : string,
  'employmentRatePostProgram' : number,
  'averageIncomeBeforeProgram' : bigint,
  'averageIncomeAfterProgram' : bigint,
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
  'complianceRate' : bigint,
  'implementationDate' : string,
  'sectorsAffected' : string,
  'feedbackFromBeneficiaries' : string,
  'policyName' : string,
  'reviewDate' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'policyDescription' : string,
  'challengesFaced' : string,
  'measuresImplemented' : string,
  'targetGroups' : string,
}
export interface InequalityReductionBeneficiariesData {
  'feedbackFromBeneficiaries' : string,
  'endDate' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'impactAssessment' : string,
  'numberofBeneficiaries' : bigint,
  'typeOfSupportProvided' : string,
  'targetGroups' : string,
  'measurableOutcomes' : string,
  'totalFundsAllocated' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface JobCreationInitiativesData {
  'totalInvestment' : bigint,
  'completionDate' : string,
  'feedbackFromBeneficiaries' : string,
  'demographicFocus' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'economicImpact' : string,
  'initiativeDescription' : string,
  'sectorsImpacted' : string,
  'challengesFaced' : string,
  'numberOfJobsCreated' : bigint,
  'typeOfJobs' : string,
  'location' : string,
  'startDate' : string,
}
export interface JobTrainingProgram {
  'created' : bigint,
  'participantsInfo' : ParticipantsInfo,
  'impactAssessment' : ImpactAssessment,
  'feedbackAndVerification' : FeedbackAndVerification,
  'basicProgramInfo' : BasicProgramInfo,
  'financialInfo' : FinancialInfo,
}
export interface LandConservationReforestationData {
  'feedbackFromCommunity' : string,
  'endDate' : string,
  'conservationMethods' : string,
  'initiativeName' : string,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'impactOnEcosystem' : string,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'speciesBenefited' : string,
  'location' : string,
  'fundingAllocated' : bigint,
  'totalAreaConserved' : bigint,
  'startDate' : string,
}
export interface LandRehabilitationData {
  'areaRehabilitated' : bigint,
  'endDate' : string,
  'biodiversityImpact' : string,
  'communityFeedback' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'economicImpact' : string,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'rehabilitationMethods' : string,
  'location' : string,
  'startDate' : string,
}
export interface MarginalizedCommunitySupportData {
  'feedbackFromCommunity' : string,
  'numberOfBeneficiaries' : bigint,
  'completionDate' : string,
  'initiativeName' : string,
  'servicesProvided' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'targetGroups' : string,
  'location' : string,
  'startDate' : string,
}
export interface MarineEcosystemProtectionData {
  'endDate' : string,
  'protectionStrategies' : string,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'speciesBenefited' : string,
  'totalAreaProtected' : bigint,
  'location' : string,
  'fundingAllocated' : bigint,
  'impactOnBiodiversity' : string,
  'startDate' : string,
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
  'data' : Array<ResourceFootprintReductionData>,
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
  'data' : Array<HealthCheckupVaccinationData>,
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
  'data' : Array<SchoolsBuiltSupportedData>,
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
  'data' : Array<EmploymentConditionsData>,
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
  'numberOfBeneficiaries' : bigint,
  'endDate' : string,
  'description' : string,
  'fundingSource' : string,
  'dataVerification' : boolean,
  'disbursementMethod' : string,
  'totalBudget' : bigint,
  'beneficiaryFeedback' : string,
  'programChallenges' : string,
  'economicImpact' : string,
  'repaymentRate' : number,
  'programName' : string,
  'averageLoanAmount' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface NutritiousFoodProgram {
  'programDescription' : string,
  'endDate' : string,
  'nutritionalContent' : string,
  'sourceOfFood' : string,
  'totalParticipants' : bigint,
  'mealsProvided' : bigint,
  'typeOfMeals' : string,
  'dataVerification' : boolean,
  'frequencyOfMeals' : string,
  'challengesFaced' : string,
  'programName' : string,
  'impactOnHealth' : string,
  'participantFeedback' : string,
  'location' : string,
  'startDate' : string,
}
export interface OceanPollutionReductionData {
  'feedbackFromCommunity' : string,
  'impactOnMarineLife' : string,
  'reductionMethods' : string,
  'endDate' : string,
  'typesOfPollutantsTargeted' : string,
  'initiativeName' : string,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'totalPollutionReduced' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface ParticipantsInfo {
  'completionRate' : number,
  'numberOfParticipants' : bigint,
  'targetDemographic' : string,
}
export interface PeopleAssistedOutOfPoverty {
  'programDescription' : string,
  'endDate' : string,
  'longTermImpact' : string,
  'totalParticipants' : bigint,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'programName' : string,
  'averageIncomeBeforeProgram' : bigint,
  'participantFeedback' : string,
  'location' : string,
  'startDate' : string,
  'averageIncomeAfterProgram' : bigint,
  'followUpDuration' : bigint,
  'successfullyAssisted' : bigint,
}
export interface PeopleBenefitingFromInfrastructureData {
  'feedbackFromBeneficiaries' : string,
  'endDate' : string,
  'impactOnQualityOfLife' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'typeOfBenefits' : string,
  'totalBeneficiaries' : bigint,
  'measurableOutcomes' : string,
  'location' : string,
  'startDate' : string,
}
export interface ReforestationProjectsData {
  'feedbackFromCommunity' : string,
  'projectName' : string,
  'endDate' : string,
  'projectDescription' : string,
  'biodiversityImpact' : string,
  'numberofTreesPlanted' : bigint,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'estimatedCarbonSequestration' : bigint,
  'challengesFaced' : string,
  'typesOfTreesPlanted' : string,
  'totalAreaReforested' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface RenewableEnergyInvestmentData {
  'totalInvestment' : bigint,
  'endDate' : string,
  'environmentalImpact' : string,
  'capacityInstalled' : bigint,
  'impactOnOperationalCosts' : string,
  'feedbackFromStakeholders' : string,
  'typeOfEnergy' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'energyProduced' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface RenewableEnergyProjectsData {
  'operationalChallenges' : string,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'projectName' : string,
  'capacityInstalled' : bigint,
  'successesAchieved' : string,
  'projectDescription' : string,
  'impactOnLocalEnvironment' : string,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'typeOfRenewableEnergy' : string,
  'energyProduced' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface ResourceFootprintReductionData {
  'endDate' : string,
  'impactOnOperationalCosts' : string,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'environmentalBenefits' : string,
  'initiativeDescription' : string,
  'reductionStrategiesImplemented' : string,
  'challengesFaced' : string,
  'totalResourcesTargeted' : string,
  'totalReductionAchieved' : string,
  'location' : string,
  'startDate' : string,
}
export type Result = { 'ok' : UserRecord } |
  { 'err' : string };
export interface SDGAdvocacyCampaignsData {
  'methodsUsed' : string,
  'feedbackFromAudience' : string,
  'endDate' : string,
  'mainMessages' : string,
  'targetAudience' : string,
  'impactOnAwareness' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'campaignDescription' : string,
  'campaignName' : string,
  'reach' : bigint,
  'startDate' : string,
}
export interface STEMInnovationEducationData {
  'skillsDeveloped' : string,
  'programDescription' : string,
  'endDate' : string,
  'ageRange' : string,
  'totalParticipants' : bigint,
  'feedbackFromParticipants' : string,
  'typeOfEducation' : string,
  'dataVerification' : boolean,
  'impactOnCareerOpportunities' : string,
  'certificationsEarned' : bigint,
  'challengesFaced' : string,
  'partnershipsFormed' : string,
  'programName' : string,
  'location' : string,
  'startDate' : string,
}
export interface SanitationFacilitiesData {
  'feedbackFromCommunity' : string,
  'operationalChallenges' : string,
  'numberOfFacilitiesBuilt' : bigint,
  'typesOfFacilities' : string,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'projectDescription' : string,
  'populationServed' : bigint,
  'facilityName' : string,
  'complianceWithStandards' : string,
  'dataVerification' : boolean,
  'numberOfFacilitiesRenovated' : bigint,
  'impactOnHealth' : string,
  'location' : string,
  'startDate' : string,
}
export interface SchoolsBuiltSupportedData {
  'feedbackFromCommunity' : string,
  'totalInvestment' : bigint,
  'projectName' : string,
  'endDate' : string,
  'projectDescription' : string,
  'sourcesOfFunding' : string,
  'numberOfSchoolsBuilt' : bigint,
  'studentCapacityIncrease' : bigint,
  'dataVerification' : boolean,
  'communityImpact' : string,
  'numberOfSchoolsSupported' : bigint,
  'challengesFaced' : string,
  'location' : string,
  'startDate' : string,
}
export interface StudentsBenefitingData {
  'graduationRates' : bigint,
  'programDescription' : string,
  'endDate' : string,
  'totalStudentsBenefited' : bigint,
  'followUpSuccessRate' : bigint,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'typeOfBenefits' : string,
  'programName' : string,
  'location' : string,
  'feedbackFromStudents' : string,
  'educationalLevel' : string,
  'improvementsInPerformance' : string,
  'startDate' : string,
  'feedbackFromEducators' : string,
}
export interface SustainableAgricultureInvestment {
  'agriculturalOutput' : bigint,
  'totalInvestment' : bigint,
  'projectName' : string,
  'endDate' : string,
  'impactOnLocalEconomy' : string,
  'farmerFeedback' : string,
  'projectDescription' : string,
  'sustainabilityMetrics' : string,
  'typeOfInvestments' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'numberofBeneficiaries' : bigint,
  'investmentSource' : string,
  'technologyUsed' : string,
  'location' : string,
  'startDate' : string,
}
export interface SustainableFishingSupportData {
  'endDate' : string,
  'fishingPracticesImplemented' : string,
  'policyChanges' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'impactOnFishPopulations' : string,
  'economicImpact' : string,
  'totalFisheriesSupported' : bigint,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'location' : string,
  'feedbackFromFishermen' : string,
  'startDate' : string,
}
export interface SustainableInfrastructureData {
  'feedbackFromCommunity' : string,
  'totalInvestment' : bigint,
  'infrastructureType' : string,
  'endDate' : string,
  'projectDescription' : string,
  'projectTitle' : string,
  'dataVerification' : boolean,
  'impactOnCommunity' : string,
  'challengesFaced' : string,
  'sustainabilityFeatures' : string,
  'location' : string,
  'startDate' : string,
}
export interface SustainableSupplyChainInvestmentData {
  'totalInvestment' : bigint,
  'endDate' : string,
  'environmentalImpact' : string,
  'supplierEngagement' : string,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'economicImpact' : string,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'impactOnSupplyChainEfficiency' : string,
  'location' : string,
  'technologiesImplemented' : string,
  'startDate' : string,
  'areasOfFocus' : string,
}
export interface UrbanLivingConditionsData {
  'feedbackFromCommunity' : string,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'environmentalImpact' : string,
  'populationImpacted' : bigint,
  'initiativeName' : string,
  'communityInvolvement' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'areasImproved' : string,
  'location' : string,
  'technologiesImplemented' : string,
  'startDate' : string,
}
export interface UrbanSustainabilityProjectsData {
  'completionDate' : string,
  'projectName' : string,
  'projectDescription' : string,
  'technologiesUsed' : string,
  'communityEngagement' : string,
  'dataVerification' : boolean,
  'impactOnCommunity' : string,
  'totalFunding' : bigint,
  'environmentalBenefits' : string,
  'challengesFaced' : string,
  'measurableOutcomes' : string,
  'location' : string,
  'projectScope' : string,
  'startDate' : string,
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
  'programDescription' : string,
  'endDate' : string,
  'skillsAcquired' : string,
  'totalParticipants' : bigint,
  'dataVerification' : boolean,
  'impactOnCommunity' : string,
  'certificationsEarned' : bigint,
  'challengesFaced' : string,
  'employmentRatePostTraining' : bigint,
  'programName' : string,
  'participantFeedback' : string,
  'location' : string,
  'startDate' : string,
  'typeOfTraining' : string,
}
export interface WasteReductionRecyclingData {
  'feedbackFromCommunity' : string,
  'endDate' : string,
  'initiativeName' : string,
  'wasteReduced' : bigint,
  'dataVerification' : boolean,
  'wasteTypesTargeted' : string,
  'totalFunding' : bigint,
  'partnershipsInvolved' : string,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'impactOnEnvironmentalSustainability' : string,
  'measurableOutcomes' : string,
  'recyclingRates' : bigint,
  'location' : string,
  'startDate' : string,
  'recyclingMethods' : string,
}
export interface WaterConservationInitiativesData {
  'feedbackFromCommunity' : string,
  'methodsUsed' : string,
  'totalInvestment' : bigint,
  'endDate' : string,
  'waterSaved' : bigint,
  'initiativeName' : string,
  'impactOnLocalEnvironment' : string,
  'communityInvolvement' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'location' : string,
  'startDate' : string,
}
export interface WaterSanitationAccessData {
  'operationalChallenges' : string,
  'numberOfBeneficiaries' : bigint,
  'completionDate' : string,
  'projectDescription' : string,
  'communityFeedback' : string,
  'healthImpact' : string,
  'typesOfInfrastructureBuilt' : string,
  'projectTitle' : string,
  'dataVerification' : boolean,
  'qualityOfServicesProvided' : string,
  'totalFundsAllocated' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface WomensEmpowermentProgramData {
  'programDescription' : string,
  'endDate' : string,
  'impactOnParticipants' : string,
  'feedbackFromParticipants' : string,
  'followUpSupport' : string,
  'typeOfActivities' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'partnershipsFormed' : string,
  'programName' : string,
  'location' : string,
  'numberOfParticipants' : bigint,
  'startDate' : string,
}
export interface WorkplaceGenderEqualityPoliciesData {
  'complianceRate' : bigint,
  'implementationDate' : string,
  'policyName' : string,
  'reviewDate' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'policyDescription' : string,
  'challengesFaced' : string,
  'measuresTaken' : string,
  'feedbackFromEmployees' : string,
  'location' : string,
  'numberOfEmployeesAffected' : bigint,
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
