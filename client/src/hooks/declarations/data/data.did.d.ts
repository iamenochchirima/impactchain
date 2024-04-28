import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AffordableHousingSupportData {
  'created' : bigint,
  'completionDate' : string,
  'numberofUnitsConstructed' : bigint,
  'feedbackFromBeneficiaries' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'endDate' : bigint,
  'strategiesImplemented' : string,
  'supportingFiles' : Array<string>,
  'legalActionsTaken' : bigint,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'challengesFaced' : string,
  'programName' : string,
  'impactOnCorruptionLevels' : string,
  'Engagement' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface CarbonEmissionReductionData {
  'methodsUsed' : string,
  'environmentalImpactAssessment' : string,
  'created' : bigint,
  'totalInvestment' : bigint,
  'endDate' : bigint,
  'impactOnOperationalEfficiency' : string,
  'supportingFiles' : Array<string>,
  'totalEmissionsReduced' : bigint,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'sectorsImpacted' : string,
  'challengesFaced' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface CollaborativeSDGProjectsData {
  'created' : bigint,
  'participatingOrganizations' : string,
  'totalInvestment' : bigint,
  'projectName' : string,
  'endDate' : bigint,
  'projectDescription' : string,
  'feedbackFromParticipants' : string,
  'supportingFiles' : Array<string>,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'projectScope' : string,
  'startDate' : bigint,
  'impactOnSDGs' : string,
}
export interface CommunityPeaceProgramsData {
  'feedbackFromCommunity' : string,
  'programDescription' : string,
  'created' : bigint,
  'communityOutreach' : string,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
  'conflictResolutionStrategies' : string,
  'incidentsOfViolenceReduced' : bigint,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'challengesFaced' : string,
  'programName' : string,
  'impactOnCommunityCohesion' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface EducationalGrantsData {
 
  'created' : bigint,
  'endDate' : bigint,
  'location' : string,
  'startDate' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'programName' : string,
  'programDescription' : string,
  'feedbackFromRecipients' : string,
  'typesOfGrants' : string,
  'impactOnEducation' : string,
  'challengesFaced' : string,
  'recipientDemographics' : string,
  'averageGrantAmount' : bigint,
  'totalGrantsAwarded' : bigint,
  'totalAmountAwarded' : bigint,
  
}
export interface EmploymentConditionsData {
  'numberOfWorkplacesImproved' : bigint,
  'created' : bigint,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'impactOnSpeciesPopulation' : string,
  'endDate' : bigint,
  'protectionStrategies' : string,
  'supportingFiles' : Array<string>,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'partnershipsFormed' : string,
  'speciesProtected' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface EnergyConsumptionReductionData {
  'methodsUsed' : string,
  'operationalChallenges' : string,
  'created' : bigint,
  'completionDate' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'estimatedEnergySavings' : bigint,
  'impactOnOperationalEfficiency' : string,
  'supportingFiles' : Array<string>,
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
export interface FoodDonation {
  'programDescription' : string,
  'created' : bigint,
  'numberOfBeneficiaries' : bigint,
  'totalDonatedFood' : bigint,
  'endDate' : bigint,
  'feedbackFromRecipients' : string,
  'supportingFiles' : Array<string>,
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
  'startDate' : bigint,
}
export interface GenderEqualityWorkshopsData {
  'startDate' : bigint,
  'created' : bigint,
  'endDate' : bigint,
  'location' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'workshopName' : string,
  'workshopDescription' : string,
  'challengesFaced' : string,
  'themesCovered' : string,
  'feedbackFromParticipants' : string,
  'participantDemographics' : string,
  'outcomesMeasured' : string,
  'organizationalPartners' : string,
  'numberOfParticipants' : bigint,
  
  
}
export interface GlobalPartnershipFinancialContributionsData {
  'created' : bigint,
  'feedbackFromBeneficiaries' : string,
  'date' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'location' : string,
  'startDate' : bigint,

  'programName' : string,
  'programDescription' : string,
  'operationalChallenges' : string,
  'feedbackFromParticipants' : string,
  'followUpActions' : string,
  'healthOutcomesMeasured' : string,
  'communityImpact' : string,
  'typeOfService' : string,
  'totalServicesProvided' : bigint,
  'totalParticipants' : bigint,
  'vaccinationCoverage' : bigint,
  
  
}
export interface HealthcareAccessData {
  'created' : bigint,
  'startDate' : bigint,
  'endDate' : bigint,
  'location' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  
  'programName' : string,
  'programDescription' : string,
  'operationalChallenges' : string,
  'improvementsMade' : string,
  'typesOfServicesProvided' : string,
  'communityImpact' : string,
  'feedbackFromPatients' : string,
  'barriersToAccess' : string,
  'patientDemographics' : string,
  'totalPatientsServed' : bigint,
  'totalHealthFacilities' : bigint,
  
}
export interface HealthcareFunding {
  'startDate' : bigint,
  'created' : bigint,
  'endDate' : bigint,
  'location' : string,
  'dataVerification' : boolean,
  'supportingFiles' : Array<string>,

  'programName' : string,
  'programDescription' : string,
  'healthOutcomes' : string,
  'fundingSources' : string,
  'feedbackFromBeneficiaries' : string,
  'typesOfServicesFunded' : string,
  'challengesFaced' : string,
  'impactOnHealthServices' : string,
  'numberOfHealthProjects' : bigint,
  'totalFundingAmount' : bigint,
  
  
}
export interface HumanRightsInitiativesData {
  'created' : bigint,
  'feedbackFromBeneficiaries' : string,
  'endDate' : bigint,
  'areasCovered' : string,
  'impactOnLegalOutcomes' : string,
  'supportingFiles' : Array<string>,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'numberofBeneficiaries' : bigint,
  'partnershipsFormed' : string,
  'location' : string,
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
  'complianceRate' : bigint,
  'implementationDate' : string,
  'sectorsAffected' : string,
  'created' : bigint,
  'feedbackFromBeneficiaries' : string,
  'policyName' : string,
  'reviewDate' : string,
  'supportingFiles' : Array<string>,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'policyDescription' : string,
  'challengesFaced' : string,
  'measuresImplemented' : string,
  'targetGroups' : string,
}
export interface InequalityReductionBeneficiariesData {
  'created' : bigint,
  'feedbackFromBeneficiaries' : string,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
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
  'startDate' : bigint,
}
export interface JobCreationInitiativesData {
  'created' : bigint,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'feedbackFromBeneficiaries' : string,
  'demographicFocus' : string,
  'supportingFiles' : Array<string>,
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
  'skillsDeveloped' : string,
  'programDescription' : string,
  'created' : bigint,
  'fundingSources' : string,
  'endDate' : [] | [bigint],
  'completionRate' : string,
  'supportingFiles' : Array<string>,
  'programBudget' : bigint,
  'programLocation' : string,
  'dataVerification' : boolean,
  'programName' : string,
  'employmentRatePostProgram' : string,
  'averageIncomeBeforeProgram' : bigint,
  'participantFeedback' : string,
  'resourcesProvided' : string,
  'numberOfParticipants' : bigint,
  'targetDemographic' : string,
  'startDate' : bigint,
  'successStories' : string,
  'averageIncomeAfterProgram' : bigint,
}
export interface LandConservationReforestationData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
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
  'startDate' : bigint,
}
export interface LandRehabilitationData {
  'created' : bigint,
  'areaRehabilitated' : bigint,
  'endDate' : bigint,
  'biodiversityImpact' : string,
  'supportingFiles' : Array<string>,
  'communityFeedback' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'economicImpact' : string,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'rehabilitationMethods' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface MarginalizedCommunitySupportData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'numberOfBeneficiaries' : bigint,
  'completionDate' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'endDate' : bigint,
  'protectionStrategies' : string,
  'supportingFiles' : Array<string>,
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
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
  'description' : string,
  'fundingSource' : string,
  'dataVerification' : boolean,
  'disbursementMethod' : string,
  'totalBudget' : bigint,
  'beneficiaryFeedback' : string,
  'programChallenges' : string,
  'economicImpact' : string,
  'repaymentRate' : string,
  'programName' : string,
  'averageLoanAmount' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface NutritiousFoodProgram {
  'created' : bigint,
  'location' : string,
  'startDate' : bigint,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'programName' : string,
  'programDescription' : string,
  'nutritionalContent' : string,
  'totalParticipants' : bigint,
  'mealsProvided' : bigint,
  'sourceOfFood' : string,
  'typeOfMeals' : string,
  'frequencyOfMeals' : string,
  'challengesFaced' : string,
  'impactOnHealth' : string,
  'participantFeedback' : string,
  
}
export interface OceanPollutionReductionData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'impactOnMarineLife' : string,
  'reductionMethods' : string,
  'endDate' : bigint,
  'typesOfPollutantsTargeted' : string,
  'supportingFiles' : Array<string>,
  'initiativeName' : string,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'totalPollutionReduced' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface PeopleAssistedOutOfPoverty {
  'programDescription' : string,
  'created' : bigint,
  'endDate' : bigint,
  'longTermImpact' : string,
  'totalParticipants' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'programName' : string,
  'averageIncomeBeforeProgram' : bigint,
  'participantFeedback' : string,
  'location' : string,
  'startDate' : bigint,
  'averageIncomeAfterProgram' : bigint,
  'followUpDuration' : bigint,
  'successfullyAssisted' : bigint,
}
export interface PeopleBenefitingFromInfrastructureData {
  'created' : bigint,
  'feedbackFromBeneficiaries' : string,
  'endDate' : bigint,
  'impactOnQualityOfLife' : string,
  'supportingFiles' : Array<string>,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'typeOfBenefits' : string,
  'totalBeneficiaries' : bigint,
  'measurableOutcomes' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface ReforestationProjectsData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'projectName' : string,
  'endDate' : bigint,
  'projectDescription' : string,
  'biodiversityImpact' : string,
  'supportingFiles' : Array<string>,
  'numberofTreesPlanted' : bigint,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'totalFunding' : bigint,
  'estimatedCarbonSequestration' : bigint,
  'challengesFaced' : string,
  'typesOfTreesPlanted' : string,
  'totalAreaReforested' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface RenewableEnergyInvestmentData {
  'created' : bigint,
  'totalInvestment' : bigint,
  'endDate' : bigint,
  'environmentalImpact' : string,
  'capacityInstalled' : bigint,
  'impactOnOperationalCosts' : string,
  'supportingFiles' : Array<string>,
  'feedbackFromStakeholders' : string,
  'typeOfEnergy' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'energyProduced' : bigint,
  'location' : string,
  'startDate' : bigint,
}
export interface RenewableEnergyProjectsData {
  'operationalChallenges' : string,
  'created' : bigint,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'projectName' : string,
  'capacityInstalled' : bigint,
  'successesAchieved' : string,
  'projectDescription' : string,
  'supportingFiles' : Array<string>,
  'impactOnLocalEnvironment' : string,
  'communityInvolvement' : string,
  'dataVerification' : boolean,
  'typeOfRenewableEnergy' : string,
  'energyProduced' : bigint,
  'location' : string,
  'startDate' : string,
}
export interface ResourceFootprintReductionData {
  'created' : bigint,
  'endDate' : bigint,
  'impactOnOperationalCosts' : string,
  'supportingFiles' : Array<string>,
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
  'startDate' : bigint,
}
export type Result = { 'ok' : UserRecord } |
  { 'err' : string };
export interface SDGAdvocacyCampaignsData {
  'methodsUsed' : string,
  'created' : bigint,
  'feedbackFromAudience' : string,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
  'mainMessages' : string,
  'targetAudience' : string,
  'impactOnAwareness' : string,
  'dataVerification' : boolean,
  'challengesFaced' : string,
  'campaignDescription' : string,
  'campaignName' : string,
  'reach' : bigint,
  'startDate' : bigint,
}
export interface STEMInnovationEducationData {
  'skillsDeveloped' : string,
  'programDescription' : string,
  'created' : bigint,
  'endDate' : bigint,
  'ageRange' : string,
  'totalParticipants' : bigint,
  'feedbackFromParticipants' : string,
  'typeOfEducation' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'impactOnCareerOpportunities' : string,
  'certificationsEarned' : bigint,
  'challengesFaced' : string,
  'partnershipsFormed' : string,
  'programName' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface SanitationFacilitiesData {
  'created' : bigint,
  'startDate' : string,
  'endDate' : bigint,
  'location' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'facilityName' : string,
  'projectDescription' : string,
  'typesOfFacilities' : string,
  'feedbackFromCommunity' : string,
  'impactOnHealth' : string,
  'operationalChallenges' : string,
  'completionDate' : string,
  'complianceWithStandards' : string,
  'numberOfFacilitiesBuilt' : bigint,
  'numberOfFacilitiesRenovated' : bigint,
  'totalInvestment' : bigint,
  'populationServed' : bigint,
  
  
}
export interface SchoolsBuiltSupportedData {
  'location' : string,
  'startDate' : bigint,
  'endDate' : bigint,
  'created' : bigint,
  'dataVerification' : boolean,
  'supportingFiles' : Array<string>,
  
  'projectName' : string,
  'projectDescription' : string,
  'feedbackFromCommunity' : string,
  'sourcesOfFunding' : string,
  'communityImpact' : string,
  'challengesFaced' : string,
  'numberOfSchoolsBuilt' : bigint,
  'studentCapacityIncrease' : bigint,
  'numberOfSchoolsSupported' : bigint,
  'totalInvestment' : bigint,
  
}
export interface StudentsBenefitingData {
  'created' : bigint,
  'endDate' : bigint,
  'startDate' : bigint,
  'location' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'programName' : string,
  'programDescription' : string,
  'challengesFaced' : string,
  'typeOfBenefits' : string,
  'feedbackFromStudents' : string,
  'educationalLevel' : string,
  'improvementsInPerformance' : string,
  'feedbackFromEducators' : string,
  'graduationRates' : bigint,
  'totalStudentsBenefited' : bigint,
  'followUpSuccessRate' : bigint,
}
export interface SustainableAgricultureInvestment {
  'location' : string,
  'startDate' : bigint,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
  'created' : bigint,

  'agriculturalOutput' : bigint,
  'totalInvestment' : bigint,
  'projectName' : string,
  'impactOnLocalEconomy' : string,
  'farmerFeedback' : string,
  'projectDescription' : string,
  'sustainabilityMetrics' : string,
  'typeOfInvestments' : string,
  
  'challengesFaced' : string,
  'numberOfBeneficiaries' : bigint,
  'investmentSource' : string,
  'technologyUsed' : string,
  
  'dataVerification' : boolean,
}
export interface SustainableFishingSupportData {
  'created' : bigint,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
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
  'startDate' : bigint,
}
export interface SustainableInfrastructureData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'totalInvestment' : bigint,
  'infrastructureType' : string,
  'endDate' : bigint,
  'projectDescription' : string,
  'supportingFiles' : Array<string>,
  'projectTitle' : string,
  'dataVerification' : boolean,
  'impactOnCommunity' : string,
  'challengesFaced' : string,
  'sustainabilityFeatures' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface SustainableSupplyChainInvestmentData {
  'created' : bigint,
  'totalInvestment' : bigint,
  'endDate' : bigint,
  'environmentalImpact' : string,
  'supplierEngagement' : string,
  'supportingFiles' : Array<string>,
  'feedbackFromStakeholders' : string,
  'initiativeName' : string,
  'dataVerification' : boolean,
  'economicImpact' : string,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'impactOnSupplyChainEfficiency' : string,
  'location' : string,
  'technologiesImplemented' : string,
  'startDate' : bigint,
  'areasOfFocus' : string,
}
export interface UrbanLivingConditionsData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'totalInvestment' : bigint,
  'completionDate' : string,
  'environmentalImpact' : string,
  'populationImpacted' : bigint,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'completionDate' : string,
  'projectName' : string,
  'projectDescription' : string,
  'technologiesUsed' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'endDate' : bigint,
  'skillsAcquired' : string,
  'totalParticipants' : bigint,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,
  'impactOnCommunity' : string,
  'certificationsEarned' : bigint,
  'challengesFaced' : string,
  'employmentRatePostTraining' : bigint,
  'programName' : string,
  'participantFeedback' : string,
  'location' : string,
  'startDate' : bigint,
  'typeOfTraining' : string,
}
export interface WasteReductionRecyclingData {
  'feedbackFromCommunity' : string,
  'created' : bigint,
  'endDate' : bigint,
  'supportingFiles' : Array<string>,
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
  'startDate' : bigint,
  'recyclingMethods' : string,
}
export interface WaterConservationInitiativesData {
  'feedbackFromCommunity' : string,
  'methodsUsed' : string,
  'created' : bigint,
  'totalInvestment' : bigint,
  'endDate' : bigint,
  'waterSaved' : bigint,
  'supportingFiles' : Array<string>,
  'initiativeName' : string,
  'impactOnLocalEnvironment' : string,
  'communityInvolvement' : string,
  'outcomesAchieved' : string,
  'dataVerification' : boolean,
  'initiativeDescription' : string,
  'challengesFaced' : string,
  'location' : string,
  'startDate' : bigint,
}
export interface WaterSanitationAccessData {
  'operationalChallenges' : string,
  'created' : bigint,
  'numberOfBeneficiaries' : bigint,
  'completionDate' : string,
  'projectDescription' : string,
  'supportingFiles' : Array<string>,
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
  'created' : bigint,
  'startDate' : bigint,
  'endDate' : bigint,
  'location' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'programName' : string,
  'programDescription' : string,
  'challengesFaced' : string,
  'typeOfActivities' : string,
  'feedbackFromParticipants' : string,
  'impactOnParticipants' : string,
  'followUpSupport' : string,
  'outcomesAchieved' : string,
  'partnershipsFormed' : string,
  'numberOfParticipants' : bigint,
  
}
export interface WorkplaceGenderEqualityPoliciesData {
  'startDate' : bigint,
  'endDate' : bigint,
  'created' : bigint,
  'location' : string,
  'supportingFiles' : Array<string>,
  'dataVerification' : boolean,

  'policyName' : string,
  'policyDescription' : string,
  'challengesFaced' : string,
  'reviewDate' : string,
  'implementationDate' : string,
  'feedbackFromEmployees' : string,
  'measuresTaken' : string,
  'outcomesAchieved' : string,
  'numberOfEmployeesAffected' : bigint,
  'complianceRate' : bigint,
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
