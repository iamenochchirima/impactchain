import { IOTDevice } from "../hooks/declarations/impact_chain_data/impact_chain_data.did";

export type ImpactTargetType = {
  id: number;
  name: string;
  metrics: Metric[];
};

export type Metric = {
  key: string;
  name: string;
  documents: string[];
  data: any[];
  goal: [] | [string];
  iotDevice: [] | [IOTDevice];
};
