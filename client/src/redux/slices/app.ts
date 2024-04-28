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

export type ReportPromptsResponses = {
  periodOfTime: string;
  primaryAudience: string;
  futureESGGoals: string;
  caseStudiesTestimonials: string;
};

export type CurrentMetricInfo = {
  metric: Metric | null;
  category: CategoryType | null;
};

export type SetCategoryImpactTargetsType = {
  categoryImpactTargets: ImpactTargetType[] | null;
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
  categoryImpactTargets: ImpactTargetType[] | null;

  currentMetricInfo: CurrentMetricInfo | null;
  reportPromptResponse: ReportPromptsResponses | null;

  reportPromptModal: boolean;

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
  categoryImpactTargets: null,

  currentMetricInfo: null,
  reportPromptResponse: null,
  reportPromptModal: false,

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
    setReportModal: (
      state: GlobalState,
      action: PayloadAction<boolean>
    ) => {
      state.reportModal = action.payload;
    },
    setHelpModal: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.openHelp = action.payload;
    },
    setImpactTargets: (
      state: GlobalState,
      action: PayloadAction<ImpactTargetType[]>
    ) => {
      state.impactTargets = action.payload;
    },

    setCurrentMetricInfo: (
      state: GlobalState,
      action: PayloadAction<CurrentMetricInfo>
    ) => {
      state.currentMetricInfo = action.payload;
    },
    setReportPromptResponse: (
      state: GlobalState,
      action: PayloadAction<ReportPromptsResponses>
    ) => {
      state.reportPromptResponse = action.payload;
    },
    setCategoryImpactTargets: (
      state: GlobalState,
      action: PayloadAction<SetCategoryImpactTargetsType>
    ) => {
      state.categoryImpactTargets = action.payload.categoryImpactTargets;
    },

    setReportPromptModal: (
      state: GlobalState,
      action: PayloadAction<boolean>
    ) => {
      state.reportPromptModal = action.payload;
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
  setCategoryImpactTargets,

  setCurrentMetricInfo,
  setReportPromptResponse,
  setReportPromptModal,
} = appSlice.actions;

export default appSlice.reducer;
