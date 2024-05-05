export const idlFactory = ({ IDL }) => {
  const MarginalizedCommunitySupportData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'targetCommunity' : IDL.Text,
    'programName' : IDL.Text,
    'typeOfSupport' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const IOTDevice = IDL.Record({
    'name' : IDL.Text,
    'platform' : IDL.Text,
    'ipAddress' : IDL.Text,
  });
  const Metric101 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(MarginalizedCommunitySupportData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const InclusionPoliciesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'policyName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'typeOfPolicy' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric102 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(InclusionPoliciesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const InequalityReductionBeneficiariesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typeOfInequalityAddressed' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'totalBeneficiaries' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric103 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(InequalityReductionBeneficiariesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics10 = IDL.Record({
    'Metric101' : IDL.Opt(Metric101),
    'Metric102' : IDL.Opt(Metric102),
    'Metric103' : IDL.Opt(Metric103),
  });
  const ImpactTarget10 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics10,
    'name' : IDL.Text,
  });
  const UrbanSustainabilityProjectsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typeOfSustainabilityFeatures' : IDL.Text,
    'projectName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfProject' : IDL.Text,
    'totalFunding' : IDL.Nat,
    'location' : IDL.Text,
    'projectScope' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric111 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(UrbanSustainabilityProjectsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const AffordableHousingSupportData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'numberOfHousingUnitsSupported' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric112 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(AffordableHousingSupportData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const UrbanLivingConditionsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'numberOfAreasImproved' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric113 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(UrbanLivingConditionsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics11 = IDL.Record({
    'Metric111' : IDL.Opt(Metric111),
    'Metric112' : IDL.Opt(Metric112),
    'Metric113' : IDL.Opt(Metric113),
  });
  const ImpactTarget11 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics11,
    'name' : IDL.Text,
  });
  const WasteReductionRecyclingData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'recyclingProcessInvolved' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'totalWasteReduced' : IDL.Nat,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric121 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(WasteReductionRecyclingData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const SustainableSupplyChainInvestmentData = IDL.Record({
    'supplyChainImproved' : IDL.Text,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'amountInvested' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric122 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SustainableSupplyChainInvestmentData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const OrganizationalResourceFootprintReductionData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'reductionInResourceFootprint' : IDL.Float64,
    'typeOfResources' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric123 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(OrganizationalResourceFootprintReductionData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics12 = IDL.Record({
    'Metric121' : IDL.Opt(Metric121),
    'Metric122' : IDL.Opt(Metric122),
    'Metric123' : IDL.Opt(Metric123),
  });
  const ImpactTarget12 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics12,
    'name' : IDL.Text,
  });
  const CarbonEmissionReductionData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'reductionInEmission' : IDL.Float64,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfEmissionReduced' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric131 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(CarbonEmissionReductionData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const RenewableEnergyInvestmentData = IDL.Record({
    'numberOfProjects' : IDL.Nat,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typeOfRenewableEnergyInvestemt' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'amountInvested' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric132 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(RenewableEnergyInvestmentData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const ReforestationProjectsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'projectName' : IDL.Text,
    'areaOfLandReforested' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfProject' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric133 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(ReforestationProjectsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics13 = IDL.Record({
    'Metric131' : IDL.Opt(Metric131),
    'Metric132' : IDL.Opt(Metric132),
    'Metric133' : IDL.Opt(Metric133),
  });
  const ImpactTarget13 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics13,
    'name' : IDL.Text,
  });
  const MarineEcosystemProtectionData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typeOfEcosystem' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'areaOfEcosystemProtected' : IDL.Nat,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric141 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(MarineEcosystemProtectionData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const OceanPollutionReductionData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typesOfPollutantsTargeted' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
    'reductionInPollution' : IDL.Float64,
  });
  const Metric142 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(OceanPollutionReductionData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const SustainableFishingSupportData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'programName' : IDL.Text,
    'typeOfSupport' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric143 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SustainableFishingSupportData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics14 = IDL.Record({
    'Metric141' : IDL.Opt(Metric141),
    'Metric142' : IDL.Opt(Metric142),
    'Metric143' : IDL.Opt(Metric143),
  });
  const ImpactTarget14 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics14,
    'name' : IDL.Text,
  });
  const LandConservationReforestationData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'areaOfLandConserved' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'typeOfLandConservation' : IDL.Text,
    'typeOfLandUse' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric151 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(LandConservationReforestationData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const EndangeredSpeciesProtectionData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'conservationMeasures' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'numberofSpeciesProtected' : IDL.Nat,
    'typeOfSpecies' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric152 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(EndangeredSpeciesProtectionData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const LandRehabilitationData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfRehabilitation' : IDL.Text,
    'programName' : IDL.Text,
    'typeOfLand' : IDL.Text,
    'location' : IDL.Text,
    'areaOfLandRehabilitated' : IDL.Nat,
    'startDate' : IDL.Int,
  });
  const Metric153 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(LandRehabilitationData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Matrics15 = IDL.Record({
    'Metric151' : IDL.Opt(Metric151),
    'Metric152' : IDL.Opt(Metric152),
    'Metric153' : IDL.Opt(Metric153),
  });
  const ImpactTarget15 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Matrics15,
    'name' : IDL.Text,
  });
  const AntiCorruptionProgramsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'natureOfAntiCorruptionMeasures' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'typeOfProgram' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric161 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(AntiCorruptionProgramsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const HumanRightsInitiativesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'scopeOfHumanRightsActivities' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'typeOfInitiative' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric162 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(HumanRightsInitiativesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const CommunityPeaceProgramsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfProgram' : IDL.Text,
    'communityImpact' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric163 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(CommunityPeaceProgramsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics16 = IDL.Record({
    'Metric161' : IDL.Opt(Metric161),
    'Metric162' : IDL.Opt(Metric162),
    'Metric163' : IDL.Opt(Metric163),
  });
  const ImpactTarget16 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics16,
    'name' : IDL.Text,
  });
  const CollaborativeSDGProjectsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'projectName' : IDL.Text,
    'typeOfCollaboration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
    'scopeOfCollaborativeEfforts' : IDL.Text,
  });
  const Metric171 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(CollaborativeSDGProjectsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const GlobalPartnershipFinancialContributionsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'amountContributed' : IDL.Nat64,
    'typeOfContribution' : IDL.Text,
    'sourceOfFunds' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric172 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(GlobalPartnershipFinancialContributionsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const SDGAdvocacyCampaignsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typeOfCampaign' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'scopeOfCampaign' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'campaignName' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric173 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SDGAdvocacyCampaignsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics17 = IDL.Record({
    'Metric171' : IDL.Opt(Metric171),
    'Metric172' : IDL.Opt(Metric172),
    'Metric173' : IDL.Opt(Metric173),
  });
  const ImpactTarget17 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics17,
    'name' : IDL.Text,
  });
  const JobTrainingProgram = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric11 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(JobTrainingProgram),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const MicroloanProgram = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'amountDisbursed' : IDL.Nat64,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'typeOfSupport' : IDL.Text,
    'numberOfLoans' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric12 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(MicroloanProgram),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const PeopleAssistedOutOfPoverty = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'numberOfPeopleAssisted' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric13 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(PeopleAssistedOutOfPoverty),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics1 = IDL.Record({
    'Metric11' : IDL.Opt(Metric11),
    'Metric12' : IDL.Opt(Metric12),
    'Metric13' : IDL.Opt(Metric13),
  });
  const ImpactTarget1 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics1,
    'name' : IDL.Text,
  });
  const FoodDonation = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'volumeOfDonatedFood' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'typeOfFoodDonated' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric21 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(FoodDonation),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const SustainableAgricultureInvestment = IDL.Record({
    'numberOfProjects' : IDL.Nat,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'projectName' : IDL.Text,
    'typeOfInvestment' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric22 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SustainableAgricultureInvestment),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const NutritiousFoodProgram = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric23 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(NutritiousFoodProgram),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics2 = IDL.Record({
    'Metric21' : IDL.Opt(Metric21),
    'Metric22' : IDL.Opt(Metric22),
    'Metric23' : IDL.Opt(Metric23),
  });
  const ImpactTarget2 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics2,
    'name' : IDL.Text,
  });
  const HealthcareFunding = IDL.Record({
    'numberOfProjects' : IDL.Nat,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'typeOfFunding' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'amountFunded' : IDL.Nat64,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric31 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(HealthcareFunding),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const HealthServicesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfService' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric32 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(HealthServicesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const HealthcareAccessData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric33 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(HealthcareAccessData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics3 = IDL.Record({
    'Metric31' : IDL.Opt(Metric31),
    'Metric32' : IDL.Opt(Metric32),
    'Metric33' : IDL.Opt(Metric33),
  });
  const ImpactTarget3 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics3,
    'name' : IDL.Text,
  });
  const SchoolsSupportedData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'projectName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'numberOfSchoolsSupported' : IDL.Nat,
    'typeOfSupport' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric41 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SchoolsSupportedData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const EducationalGrantsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalAmountAwarded' : IDL.Nat64,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'typeOfGrant' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric42 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(EducationalGrantsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const StudentsBenefitingData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalStudentsBenefited' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfBenefits' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'educationalLevel' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric43 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(StudentsBenefitingData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics4 = IDL.Record({
    'Metric41' : IDL.Opt(Metric41),
    'Metric42' : IDL.Opt(Metric42),
    'Metric43' : IDL.Opt(Metric43),
  });
  const ImpactTarget4 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics4,
    'name' : IDL.Text,
  });
  const WomensEmpowermentProgramData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfProgram' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'numberOfParticipants' : IDL.Nat,
    'startDate' : IDL.Int,
  });
  const Metric51 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(WomensEmpowermentProgramData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const GenderEqualityWorkshopsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'typeOfWorkshop' : IDL.Text,
    'workshopDescription' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'workshopName' : IDL.Text,
    'location' : IDL.Text,
    'numberOfParticipants' : IDL.Nat,
    'startDate' : IDL.Int,
  });
  const Metric52 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(GenderEqualityWorkshopsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const WorkplaceGenderEqualityPoliciesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'policyName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'typeOfPolicy' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric53 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(WorkplaceGenderEqualityPoliciesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics5 = IDL.Record({
    'Metric51' : IDL.Opt(Metric51),
    'Metric52' : IDL.Opt(Metric52),
    'Metric53' : IDL.Opt(Metric53),
  });
  const ImpactTarget5 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics5,
    'name' : IDL.Text,
  });
  const SanitationFacilitiesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'facilityName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfFacility' : IDL.Text,
    'location' : IDL.Text,
    'facilityDescription' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric61 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SanitationFacilitiesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const WaterConservationInitiativesData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'typeOfInitiative' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric62 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(WaterConservationInitiativesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const WaterSanitationAccessData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'typeOfSupport' : IDL.Text,
    'totalFundsAllocated' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric63 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(WaterSanitationAccessData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics6 = IDL.Record({
    'Metric61' : IDL.Opt(Metric61),
    'Metric62' : IDL.Opt(Metric62),
    'Metric63' : IDL.Opt(Metric63),
  });
  const ImpactTarget6 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics6,
    'name' : IDL.Text,
  });
  const RenewableEnergyProjectsData = IDL.Record({
    'numberOfProjects' : IDL.Nat,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'projectName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfRenewableEnergy' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric71 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(RenewableEnergyProjectsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const EnergyEfficientSystemsData = IDL.Record({
    'created' : IDL.Int,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'numberOfSystemsInstalled' : IDL.Nat,
    'totalCost' : IDL.Nat,
    'efficiencyRate' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric72 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(EnergyEfficientSystemsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const EnergyConsumptionReductionData = IDL.Record({
    'reductionInEnergyConsumption' : IDL.Nat,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'measurementsUnitsUsed' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric73 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(EnergyConsumptionReductionData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics7 = IDL.Record({
    'Metric71' : IDL.Opt(Metric71),
    'Metric72' : IDL.Opt(Metric72),
    'Metric73' : IDL.Opt(Metric73),
  });
  const ImpactTarget7 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics7,
    'name' : IDL.Text,
  });
  const JobCreationInitiativesData = IDL.Record({
    'jobsCreated' : IDL.Nat,
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'jobsSectors' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric81 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(JobCreationInitiativesData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const VocationalTrainingProgramsData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
    'typeOfTraining' : IDL.Text,
  });
  const Metric82 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(VocationalTrainingProgramsData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const EmploymentConditionsImprovementData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'typeOfImprovement' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric83 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(EmploymentConditionsImprovementData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics8 = IDL.Record({
    'Metric81' : IDL.Opt(Metric81),
    'Metric82' : IDL.Opt(Metric82),
    'Metric83' : IDL.Opt(Metric83),
  });
  const ImpactTarget8 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics8,
    'name' : IDL.Text,
  });
  const STEMInnovationEducationData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'dataVerification' : IDL.Bool,
    'typeOfProgram' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric91 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(STEMInnovationEducationData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const SustainableInfrastructureData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'projectName' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'typeOfInfrastructure' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric92 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SustainableInfrastructureData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const PeopleBenefitingFromInfrastructureData = IDL.Record({
    'created' : IDL.Int,
    'duration' : IDL.Text,
    'supportingFiles' : IDL.Vec(IDL.Text),
    'typeOfInfrastructure' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'programName' : IDL.Text,
    'totalBeneficiaries' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const Metric93 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(PeopleBenefitingFromInfrastructureData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const Metrics9 = IDL.Record({
    'Metric91' : IDL.Opt(Metric91),
    'Metric92' : IDL.Opt(Metric92),
    'Metric93' : IDL.Opt(Metric93),
  });
  const ImpactTarget9 = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : Metrics9,
    'name' : IDL.Text,
  });
  const ImpactTargets = IDL.Record({
    'ImpactTarget10' : IDL.Opt(ImpactTarget10),
    'ImpactTarget11' : IDL.Opt(ImpactTarget11),
    'ImpactTarget12' : IDL.Opt(ImpactTarget12),
    'ImpactTarget13' : IDL.Opt(ImpactTarget13),
    'ImpactTarget14' : IDL.Opt(ImpactTarget14),
    'ImpactTarget15' : IDL.Opt(ImpactTarget15),
    'ImpactTarget16' : IDL.Opt(ImpactTarget16),
    'ImpactTarget17' : IDL.Opt(ImpactTarget17),
    'ImpactTarget1' : IDL.Opt(ImpactTarget1),
    'ImpactTarget2' : IDL.Opt(ImpactTarget2),
    'ImpactTarget3' : IDL.Opt(ImpactTarget3),
    'ImpactTarget4' : IDL.Opt(ImpactTarget4),
    'ImpactTarget5' : IDL.Opt(ImpactTarget5),
    'ImpactTarget6' : IDL.Opt(ImpactTarget6),
    'ImpactTarget7' : IDL.Opt(ImpactTarget7),
    'ImpactTarget8' : IDL.Opt(ImpactTarget8),
    'ImpactTarget9' : IDL.Opt(ImpactTarget9),
  });
  const UserRecord = IDL.Record({
    'created' : IDL.Int,
    'aboutCompany' : IDL.Record({
      'logo' : IDL.Text,
      'name' : IDL.Text,
      'companySize' : IDL.Text,
      'industry' : IDL.Text,
    }),
    'email' : IDL.Text,
    'impactTargets' : ImpactTargets,
  });
  const email = IDL.Text;
  const Result = IDL.Variant({ 'ok' : UserRecord, 'err' : IDL.Text });
  return IDL.Service({
    'addUserRecord' : IDL.Func([UserRecord], [], []),
    'getUserRecord' : IDL.Func([email], [Result], ['query']),
    'removeUserRecord' : IDL.Func([email], [], []),
    'updateUserRecord' : IDL.Func([UserRecord], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
