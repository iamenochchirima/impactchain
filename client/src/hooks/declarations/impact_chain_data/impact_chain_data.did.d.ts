import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface IOTDevice {
  'name' : string,
  'platform' : string,
  'ipAddress' : string,
}
export interface ImpactTarget {
  'id' : bigint,
  'metrics' : Array<Metric>,
  'name' : string,
}
export interface Metric {
  'documents' : Array<string>,
  'goal' : [] | [string],
  'name' : string,
  'iotDevice' : [] | [IOTDevice],
}
export type Result = { 'ok' : UserRecord } |
  { 'err' : string };
export interface UserRecord {
  'created' : bigint,
  'aboutCompany' : {
    'logo' : string,
    'name' : string,
    'companySize' : string,
    'industry' : string,
  },
  'email' : string,
  'impactTargets' : Array<ImpactTarget>,
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
