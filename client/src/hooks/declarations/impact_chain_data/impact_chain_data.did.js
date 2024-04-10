export const idlFactory = ({ IDL }) => {
  const IOTDevice = IDL.Record({
    'name' : IDL.Text,
    'platform' : IDL.Text,
    'ipAddress' : IDL.Text,
  });
  const Metric = IDL.Record({
    'documents' : IDL.Vec(IDL.Text),
    'goal' : IDL.Opt(IDL.Text),
    'name' : IDL.Text,
    'iotDevice' : IDL.Opt(IOTDevice),
  });
  const ImpactTarget = IDL.Record({
    'id' : IDL.Nat,
    'metrics' : IDL.Vec(Metric),
    'name' : IDL.Text,
  });
  const UserRecord = IDL.Record({
    'aboutCompany' : IDL.Record({
      'logo' : IDL.Text,
      'name' : IDL.Text,
      'companySize' : IDL.Text,
      'industry' : IDL.Text,
    }),
    'email' : IDL.Text,
    'impactTargets' : IDL.Vec(ImpactTarget),
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
