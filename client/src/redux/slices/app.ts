import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryType } from "../../pages/analytics/types";
import { ImpactTargetType, Metric } from "../../utils/types";
import { UserRecord } from "../../hooks/declarations/data/data.did";

export type TargetRecordStateType = {
  color: string;
  name: string;
};

type TargetRecordRequest = {
  targetRecord: TargetRecordStateType | null;
};

export type RoportModalRequest = {
  reportModal: boolean;
  reportMetric: Metric | null;
  reportCategory: CategoryType | null;
};

export interface GlobalState {
  isAuthenticated: boolean;
  userInfo: any | null;
  targetRecord: TargetRecordStateType | null;
  storageInitiated: boolean;
  showDataForm: boolean;
  dataComponent: string;
  userRecord: UserRecord | null;

  impactTargets: ImpactTargetType[] | null;

  nextTarget: boolean;
  metricsUpdated: boolean;

  reportModal: boolean;
  reportMetric: Metric | null;
  reportCategory: CategoryType | null;

  openHelp: boolean;
}

const initialState: GlobalState = {
  isAuthenticated: false,
  storageInitiated: false,
  userInfo: null,
  showDataForm: false,
  targetRecord: null,
  dataComponent: "Loading",
  userRecord: null,
  impactTargets: null,

  nextTarget: false,
  metricsUpdated: false,

  reportModal: false,
  reportMetric: null,
  reportCategory: null,

  openHelp: false,

};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuthenticated: (state: GlobalState, action: PayloadAction<any>) => {
      state.isAuthenticated = action.payload;
    },
    setUserInfo: (state: GlobalState, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setShowDataForm: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.showDataForm = action.payload;
    },
    setDataComponent: (state: GlobalState, action: PayloadAction<string>) => {
      state.dataComponent = action.payload;
    },
    setUserRecord: (state: GlobalState, action: PayloadAction<UserRecord>) => {
      state.userRecord = action.payload;
    },
    setStorageInit: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.storageInitiated = action.payload;
    },
    setTargetRecord: (
      state: GlobalState,
      action: PayloadAction<TargetRecordRequest>
    ) => {
      state.targetRecord = action.payload.targetRecord;
    },
    setNextTarget: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.nextTarget = action.payload;
    },
    setMetricsUpdated: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.metricsUpdated = action.payload;
    },
    setReportModal: (state: GlobalState, action: PayloadAction<RoportModalRequest>) => {
      state.reportModal = action.payload.reportModal;
      state.reportMetric = action.payload.reportMetric;
      state.reportCategory = action.payload.reportCategory;
    },
    setHelpModal: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.openHelp = action.payload;
    },
    setImpactTargets: (state: GlobalState, action: PayloadAction<ImpactTargetType[]>) => {
      state.impactTargets = action.payload;
    },
    logout: (state: GlobalState) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  setIsAuthenticated,
  setUserInfo,
  logout,
  setShowDataForm,
  setDataComponent,
  setUserRecord,
  setStorageInit,
  setTargetRecord,
  setNextTarget,
  setMetricsUpdated,
  setReportModal,
  setHelpModal,
  setImpactTargets,
} = appSlice.actions;

export default appSlice.reducer;
