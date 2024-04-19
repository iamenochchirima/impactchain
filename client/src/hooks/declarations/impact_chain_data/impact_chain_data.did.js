export const idlFactory = ({ IDL }) => {
  const MarginalizedCommunitySupportData = IDL.Record({
    'feedbackFromCommunity' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'completionDate' : IDL.Text,
    'initiativeName' : IDL.Text,
    'servicesProvided' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'targetGroups' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'complianceRate' : IDL.Nat,
    'implementationDate' : IDL.Text,
    'sectorsAffected' : IDL.Text,
    'feedbackFromBeneficiaries' : IDL.Text,
    'policyName' : IDL.Text,
    'reviewDate' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'policyDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'measuresImplemented' : IDL.Text,
    'targetGroups' : IDL.Text,
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
    'feedbackFromBeneficiaries' : IDL.Text,
    'endDate' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'impactAssessment' : IDL.Text,
    'numberofBeneficiaries' : IDL.Nat,
    'typeOfSupportProvided' : IDL.Text,
    'targetGroups' : IDL.Text,
    'measurableOutcomes' : IDL.Text,
    'totalFundsAllocated' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'completionDate' : IDL.Text,
    'projectName' : IDL.Text,
    'projectDescription' : IDL.Text,
    'technologiesUsed' : IDL.Text,
    'communityEngagement' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnCommunity' : IDL.Text,
    'totalFunding' : IDL.Nat,
    'environmentalBenefits' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'measurableOutcomes' : IDL.Text,
    'location' : IDL.Text,
    'projectScope' : IDL.Text,
    'startDate' : IDL.Text,
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
    'completionDate' : IDL.Text,
    'numberofUnitsConstructed' : IDL.Nat,
    'feedbackFromBeneficiaries' : IDL.Text,
    'housingTypes' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnCommunity' : IDL.Text,
    'totalFunding' : IDL.Nat,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'numberofBeneficiaries' : IDL.Nat,
    'sustainabilityFeatures' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'completionDate' : IDL.Text,
    'environmentalImpact' : IDL.Text,
    'populationImpacted' : IDL.Nat,
    'initiativeName' : IDL.Text,
    'communityInvolvement' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'areasImproved' : IDL.Text,
    'location' : IDL.Text,
    'technologiesImplemented' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'endDate' : IDL.Text,
    'initiativeName' : IDL.Text,
    'wasteReduced' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'wasteTypesTargeted' : IDL.Text,
    'totalFunding' : IDL.Nat,
    'partnershipsInvolved' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'impactOnEnvironmentalSustainability' : IDL.Text,
    'measurableOutcomes' : IDL.Text,
    'recyclingRates' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
    'recyclingMethods' : IDL.Text,
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
    'totalInvestment' : IDL.Nat,
    'endDate' : IDL.Text,
    'environmentalImpact' : IDL.Text,
    'supplierEngagement' : IDL.Text,
    'feedbackFromStakeholders' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'economicImpact' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'impactOnSupplyChainEfficiency' : IDL.Text,
    'location' : IDL.Text,
    'technologiesImplemented' : IDL.Text,
    'startDate' : IDL.Text,
    'areasOfFocus' : IDL.Text,
  });
  const Metric122 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SustainableSupplyChainInvestmentData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const ResourceFootprintReductionData = IDL.Record({
    'endDate' : IDL.Text,
    'impactOnOperationalCosts' : IDL.Text,
    'feedbackFromStakeholders' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'environmentalBenefits' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'reductionStrategiesImplemented' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'totalResourcesTargeted' : IDL.Text,
    'totalReductionAchieved' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
  });
  const Metric123 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(ResourceFootprintReductionData),
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
    'methodsUsed' : IDL.Text,
    'environmentalImpactAssessment' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'endDate' : IDL.Text,
    'impactOnOperationalEfficiency' : IDL.Text,
    'totalEmissionsReduced' : IDL.Nat,
    'feedbackFromStakeholders' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'sectorsImpacted' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'totalInvestment' : IDL.Nat,
    'endDate' : IDL.Text,
    'environmentalImpact' : IDL.Text,
    'capacityInstalled' : IDL.Nat,
    'impactOnOperationalCosts' : IDL.Text,
    'feedbackFromStakeholders' : IDL.Text,
    'typeOfEnergy' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'energyProduced' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'projectName' : IDL.Text,
    'endDate' : IDL.Text,
    'projectDescription' : IDL.Text,
    'biodiversityImpact' : IDL.Text,
    'numberofTreesPlanted' : IDL.Nat,
    'communityInvolvement' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'estimatedCarbonSequestration' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'typesOfTreesPlanted' : IDL.Text,
    'totalAreaReforested' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'endDate' : IDL.Text,
    'protectionStrategies' : IDL.Text,
    'feedbackFromStakeholders' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'speciesBenefited' : IDL.Text,
    'totalAreaProtected' : IDL.Nat,
    'location' : IDL.Text,
    'fundingAllocated' : IDL.Nat,
    'impactOnBiodiversity' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'impactOnMarineLife' : IDL.Text,
    'reductionMethods' : IDL.Text,
    'endDate' : IDL.Text,
    'typesOfPollutantsTargeted' : IDL.Text,
    'initiativeName' : IDL.Text,
    'communityInvolvement' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'totalPollutionReduced' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'endDate' : IDL.Text,
    'fishingPracticesImplemented' : IDL.Text,
    'policyChanges' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnFishPopulations' : IDL.Text,
    'economicImpact' : IDL.Text,
    'totalFisheriesSupported' : IDL.Nat,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'location' : IDL.Text,
    'feedbackFromFishermen' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'endDate' : IDL.Text,
    'conservationMethods' : IDL.Text,
    'initiativeName' : IDL.Text,
    'communityInvolvement' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnEcosystem' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'speciesBenefited' : IDL.Text,
    'location' : IDL.Text,
    'fundingAllocated' : IDL.Nat,
    'totalAreaConserved' : IDL.Nat,
    'startDate' : IDL.Text,
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
    'impactOnSpeciesPopulation' : IDL.Text,
    'endDate' : IDL.Text,
    'protectionStrategies' : IDL.Text,
    'feedbackFromStakeholders' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'partnershipsFormed' : IDL.Text,
    'speciesProtected' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'areaRehabilitated' : IDL.Nat,
    'endDate' : IDL.Text,
    'biodiversityImpact' : IDL.Text,
    'communityFeedback' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'economicImpact' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'rehabilitationMethods' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'strategiesImplemented' : IDL.Text,
    'legalActionsTaken' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'programName' : IDL.Text,
    'impactOnCorruptionLevels' : IDL.Text,
    'Engagement' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromBeneficiaries' : IDL.Text,
    'endDate' : IDL.Text,
    'areasCovered' : IDL.Text,
    'impactOnLegalOutcomes' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'numberofBeneficiaries' : IDL.Nat,
    'partnershipsFormed' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'programDescription' : IDL.Text,
    'communityOutreach' : IDL.Text,
    'endDate' : IDL.Text,
    'conflictResolutionStrategies' : IDL.Text,
    'incidentsOfViolenceReduced' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'totalFunding' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'programName' : IDL.Text,
    'impactOnCommunityCohesion' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'participatingOrganizations' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'projectName' : IDL.Text,
    'endDate' : IDL.Text,
    'projectDescription' : IDL.Text,
    'feedbackFromParticipants' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'projectScope' : IDL.Text,
    'startDate' : IDL.Text,
    'impactOnSDGs' : IDL.Text,
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
    'feedbackFromBeneficiaries' : IDL.Text,
    'date' : IDL.Text,
    'description' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'amountContributed' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'targetedSDGs' : IDL.Text,
    'impactAssessment' : IDL.Text,
    'donor' : IDL.Text,
    'contributionName' : IDL.Text,
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
    'methodsUsed' : IDL.Text,
    'feedbackFromAudience' : IDL.Text,
    'endDate' : IDL.Text,
    'mainMessages' : IDL.Text,
    'targetAudience' : IDL.Text,
    'impactOnAwareness' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'campaignDescription' : IDL.Text,
    'campaignName' : IDL.Text,
    'reach' : IDL.Nat,
    'startDate' : IDL.Text,
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
  const ParticipantsInfo = IDL.Record({
    'completionRate' : IDL.Float64,
    'numberOfParticipants' : IDL.Nat,
    'targetDemographic' : IDL.Text,
  });
  const ImpactAssessment = IDL.Record({
    'skillsDeveloped' : IDL.Text,
    'employmentRatePostProgram' : IDL.Float64,
    'averageIncomeBeforeProgram' : IDL.Nat,
    'averageIncomeAfterProgram' : IDL.Nat,
  });
  const FeedbackAndVerification = IDL.Record({
    'supportingDocuments' : IDL.Vec(IDL.Vec(IDL.Nat8)),
    'dataVerification' : IDL.Bool,
    'participantFeedback' : IDL.Text,
    'successStories' : IDL.Text,
  });
  const BasicProgramInfo = IDL.Record({
    'programDescription' : IDL.Text,
    'endDate' : IDL.Opt(IDL.Int),
    'programLocation' : IDL.Text,
    'programName' : IDL.Text,
    'startDate' : IDL.Int,
  });
  const FinancialInfo = IDL.Record({
    'fundingSources' : IDL.Text,
    'programBudget' : IDL.Nat,
    'resourcesProvided' : IDL.Text,
  });
  const JobTrainingProgram = IDL.Record({
    'created' : IDL.Int,
    'participantsInfo' : ParticipantsInfo,
    'impactAssessment' : ImpactAssessment,
    'feedbackAndVerification' : FeedbackAndVerification,
    'basicProgramInfo' : BasicProgramInfo,
    'financialInfo' : FinancialInfo,
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
    'numberOfBeneficiaries' : IDL.Nat,
    'endDate' : IDL.Text,
    'description' : IDL.Text,
    'fundingSource' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'disbursementMethod' : IDL.Text,
    'totalBudget' : IDL.Nat,
    'beneficiaryFeedback' : IDL.Text,
    'programChallenges' : IDL.Text,
    'economicImpact' : IDL.Text,
    'repaymentRate' : IDL.Float64,
    'programName' : IDL.Text,
    'averageLoanAmount' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'longTermImpact' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'programName' : IDL.Text,
    'averageIncomeBeforeProgram' : IDL.Nat,
    'participantFeedback' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
    'averageIncomeAfterProgram' : IDL.Nat,
    'followUpDuration' : IDL.Nat,
    'successfullyAssisted' : IDL.Nat,
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
    'programDescription' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'totalDonatedFood' : IDL.Nat,
    'endDate' : IDL.Text,
    'feedbackFromRecipients' : IDL.Text,
    'foodSafetyStandards' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'communityImpact' : IDL.Text,
    'typeOfFoodDonated' : IDL.Text,
    'sourcesOfFood' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'storageFacilities' : IDL.Text,
    'programName' : IDL.Text,
    'distributionMethods' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'agriculturalOutput' : IDL.Nat,
    'totalInvestment' : IDL.Nat,
    'projectName' : IDL.Text,
    'endDate' : IDL.Text,
    'impactOnLocalEconomy' : IDL.Text,
    'farmerFeedback' : IDL.Text,
    'projectDescription' : IDL.Text,
    'sustainabilityMetrics' : IDL.Text,
    'typeOfInvestments' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'numberofBeneficiaries' : IDL.Nat,
    'investmentSource' : IDL.Text,
    'technologyUsed' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'nutritionalContent' : IDL.Text,
    'sourceOfFood' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'mealsProvided' : IDL.Nat,
    'typeOfMeals' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'frequencyOfMeals' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'programName' : IDL.Text,
    'impactOnHealth' : IDL.Text,
    'participantFeedback' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'healthOutcomes' : IDL.Text,
    'programDescription' : IDL.Text,
    'fundingSources' : IDL.Text,
    'feedbackFromBeneficiaries' : IDL.Text,
    'endDate' : IDL.Text,
    'numberofHealthProjects' : IDL.Nat,
    'totalFundingAmount' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'typesOfServicesFunded' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'impactOnHealthServices' : IDL.Text,
    'startDate' : IDL.Text,
  });
  const Metric31 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(HealthcareFunding),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const HealthCheckupVaccinationData = IDL.Record({
    'operationalChallenges' : IDL.Text,
    'totalServicesProvided' : IDL.Nat,
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'feedbackFromParticipants' : IDL.Text,
    'vaccinationCoverage' : IDL.Nat,
    'followUpActions' : IDL.Text,
    'healthOutcomesMeasured' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'communityImpact' : IDL.Text,
    'typeOfService' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
  });
  const Metric32 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(HealthCheckupVaccinationData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const HealthcareAccessData = IDL.Record({
    'operationalChallenges' : IDL.Text,
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'totalHealthFacilities' : IDL.Nat,
    'improvementsMade' : IDL.Text,
    'typesOfServicesProvided' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'communityImpact' : IDL.Text,
    'totalPatientsServed' : IDL.Nat,
    'feedbackFromPatients' : IDL.Text,
    'barriersToAccess' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'patientDemographics' : IDL.Text,
    'startDate' : IDL.Text,
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
  const SchoolsBuiltSupportedData = IDL.Record({
    'feedbackFromCommunity' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'projectName' : IDL.Text,
    'endDate' : IDL.Text,
    'projectDescription' : IDL.Text,
    'sourcesOfFunding' : IDL.Text,
    'numberOfSchoolsBuilt' : IDL.Nat,
    'studentCapacityIncrease' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'communityImpact' : IDL.Text,
    'numberOfSchoolsSupported' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
  });
  const Metric41 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(SchoolsBuiltSupportedData),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const EducationalGrantsData = IDL.Record({
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'typesOfGrants' : IDL.Text,
    'totalAmountAwarded' : IDL.Nat,
    'feedbackFromRecipients' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnEducation' : IDL.Text,
    'totalGrantsAwarded' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'programName' : IDL.Text,
    'recipientDemographics' : IDL.Text,
    'averageGrantAmount' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'graduationRates' : IDL.Nat,
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'totalStudentsBenefited' : IDL.Nat,
    'followUpSuccessRate' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'typeOfBenefits' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'feedbackFromStudents' : IDL.Text,
    'educationalLevel' : IDL.Text,
    'improvementsInPerformance' : IDL.Text,
    'startDate' : IDL.Text,
    'feedbackFromEducators' : IDL.Text,
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
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'impactOnParticipants' : IDL.Text,
    'feedbackFromParticipants' : IDL.Text,
    'followUpSupport' : IDL.Text,
    'typeOfActivities' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'partnershipsFormed' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'numberOfParticipants' : IDL.Nat,
    'startDate' : IDL.Text,
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
    'endDate' : IDL.Text,
    'workshopDescription' : IDL.Text,
    'feedbackFromParticipants' : IDL.Text,
    'themesCovered' : IDL.Text,
    'outcomesMeasured' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'organizationalPartners' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'workshopName' : IDL.Text,
    'location' : IDL.Text,
    'numberOfParticipants' : IDL.Nat,
    'participantDemographics' : IDL.Text,
    'startDate' : IDL.Text,
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
    'complianceRate' : IDL.Nat,
    'implementationDate' : IDL.Text,
    'policyName' : IDL.Text,
    'reviewDate' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'policyDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'measuresTaken' : IDL.Text,
    'feedbackFromEmployees' : IDL.Text,
    'location' : IDL.Text,
    'numberOfEmployeesAffected' : IDL.Nat,
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
    'feedbackFromCommunity' : IDL.Text,
    'operationalChallenges' : IDL.Text,
    'numberOfFacilitiesBuilt' : IDL.Nat,
    'typesOfFacilities' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'completionDate' : IDL.Text,
    'projectDescription' : IDL.Text,
    'populationServed' : IDL.Nat,
    'facilityName' : IDL.Text,
    'complianceWithStandards' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'numberOfFacilitiesRenovated' : IDL.Nat,
    'impactOnHealth' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'methodsUsed' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'endDate' : IDL.Text,
    'waterSaved' : IDL.Nat,
    'initiativeName' : IDL.Text,
    'impactOnLocalEnvironment' : IDL.Text,
    'communityInvolvement' : IDL.Text,
    'outcomesAchieved' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'operationalChallenges' : IDL.Text,
    'numberOfBeneficiaries' : IDL.Nat,
    'completionDate' : IDL.Text,
    'projectDescription' : IDL.Text,
    'communityFeedback' : IDL.Text,
    'healthImpact' : IDL.Text,
    'typesOfInfrastructureBuilt' : IDL.Text,
    'projectTitle' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'qualityOfServicesProvided' : IDL.Text,
    'totalFundsAllocated' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'operationalChallenges' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'completionDate' : IDL.Text,
    'projectName' : IDL.Text,
    'capacityInstalled' : IDL.Nat,
    'successesAchieved' : IDL.Text,
    'projectDescription' : IDL.Text,
    'impactOnLocalEnvironment' : IDL.Text,
    'communityInvolvement' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'typeOfRenewableEnergy' : IDL.Text,
    'energyProduced' : IDL.Nat,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'ROI' : IDL.Text,
    'estimatedEnergySavings' : IDL.Nat,
    'impactOnOperationalEfficiency' : IDL.Text,
    'totalCost' : IDL.Nat,
    'communityFeedback' : IDL.Text,
    'typeOfSystem' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'challengesFaced' : IDL.Text,
    'systemDescription' : IDL.Text,
    'actualEnergySavings' : IDL.Nat,
    'location' : IDL.Text,
    'systemName' : IDL.Text,
    'installationDate' : IDL.Text,
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
    'methodsUsed' : IDL.Text,
    'operationalChallenges' : IDL.Text,
    'completionDate' : IDL.Text,
    'costSavings' : IDL.Nat,
    'totalEnergySaved' : IDL.Nat,
    'feedbackFromStakeholders' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'impactOnEnvironmentalSustainability' : IDL.Text,
    'location' : IDL.Text,
    'percentageReduction' : IDL.Nat,
    'startDate' : IDL.Text,
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
    'totalInvestment' : IDL.Nat,
    'completionDate' : IDL.Text,
    'feedbackFromBeneficiaries' : IDL.Text,
    'demographicFocus' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'economicImpact' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'sectorsImpacted' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'numberOfJobsCreated' : IDL.Nat,
    'typeOfJobs' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'skillsAcquired' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'dataVerification' : IDL.Bool,
    'impactOnCommunity' : IDL.Text,
    'certificationsEarned' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'employmentRatePostTraining' : IDL.Nat,
    'programName' : IDL.Text,
    'participantFeedback' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
  const EmploymentConditionsData = IDL.Record({
    'numberOfWorkplacesImproved' : IDL.Nat,
    'totalInvestment' : IDL.Nat,
    'completionDate' : IDL.Text,
    'impactOnProductivity' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnEmployeeSatisfaction' : IDL.Text,
    'initiativeDescription' : IDL.Text,
    'affectedEmployees' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'typesOfImprovements' : IDL.Text,
    'feedbackFromEmployees' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
  });
  const Metric83 = IDL.Record({
    'key' : IDL.Text,
    'documents' : IDL.Vec(IDL.Text),
    'data' : IDL.Vec(EmploymentConditionsData),
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
    'skillsDeveloped' : IDL.Text,
    'programDescription' : IDL.Text,
    'endDate' : IDL.Text,
    'ageRange' : IDL.Text,
    'totalParticipants' : IDL.Nat,
    'feedbackFromParticipants' : IDL.Text,
    'typeOfEducation' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnCareerOpportunities' : IDL.Text,
    'certificationsEarned' : IDL.Nat,
    'challengesFaced' : IDL.Text,
    'partnershipsFormed' : IDL.Text,
    'programName' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromCommunity' : IDL.Text,
    'totalInvestment' : IDL.Nat,
    'infrastructureType' : IDL.Text,
    'endDate' : IDL.Text,
    'projectDescription' : IDL.Text,
    'projectTitle' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'impactOnCommunity' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'sustainabilityFeatures' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
    'feedbackFromBeneficiaries' : IDL.Text,
    'endDate' : IDL.Text,
    'impactOnQualityOfLife' : IDL.Text,
    'initiativeName' : IDL.Text,
    'dataVerification' : IDL.Bool,
    'initiativeDescription' : IDL.Text,
    'challengesFaced' : IDL.Text,
    'typeOfBenefits' : IDL.Text,
    'totalBeneficiaries' : IDL.Nat,
    'measurableOutcomes' : IDL.Text,
    'location' : IDL.Text,
    'startDate' : IDL.Text,
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
