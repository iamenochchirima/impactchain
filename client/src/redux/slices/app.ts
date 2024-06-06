import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryType } from "../../pages/analytics/types";
import { ImpactTargetType, Metric } from "../../utils/types";
import { UserRecord } from "../../hooks/declarations/data/data.did";
import { FullReportData } from "../../pages/analytics/components/utils/types";
import { TargetOption } from "../../data/constants";

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
  selectedMetrics: Metric[];
  caseStudiesTestimonials: string;
};
export type SetCategoryImpactTargetsType = {
  categoryImpactTargets: ImpactTargetType[] | null;
};

export type AllCategroryMetricsRequest = {
  allCategoryMetrics: Metric[] | null;
};

export type ReportCategoryRequest = {
  reportCategory: CategoryType | null;
};

export type SetReportType = {
  report: FullReportData | null;
};

export type CurrentMetricInfoRequest = {
  currentMetricInfo: CurrentMetricInfo | null;
};

export type CurrentMetricInfo = {
  metric: Metric;
  category: CategoryType;
};

export type CurrentSDGInfoType = {
  targetOption: TargetOption;
  target: ImpactTargetType;
};

export type CurrectSDGInfoRequest = {
  currentSDGInfo: CurrentSDGInfoType | null;
};

export interface GlobalState {
  userEmail: string;
  isAuthenticated: boolean;
  userInfo: any | null;
  targetRecord: TargetRecordStateType | null;
  storageInitiated: boolean;
  showDataForm: boolean;
  dataComponent: string;
  userRecord: UserRecord | null;

  impactTargets: ImpactTargetType[] | null;
  nextTarget: boolean;
  previousTarget: boolean;
  metricsUpdated: boolean;

  reportModal: boolean;
  categoryImpactTargets: ImpactTargetType[] | null;

  reportPromptResponse: ReportPromptsResponses | null;

  reportPromptModal: boolean;
  metricReportPromptModal: boolean;
  metricAnanlyticsModal: boolean;

  openHelp: boolean;

  allCategoryMetrics: Metric[] | null;
  reportCategory: CategoryType | null;

  loadingReport: boolean;
  report: FullReportData | null;

  currentMetricInfo: CurrentMetricInfo | null;

  currentSDGInfo: CurrentSDGInfoType | null;

  settingsUploadModelMetric: Metric | null;

  // Settings Data upload
  showThisModal: string;
  localImpactTargets: ImpactTargetType[] | null;
  localRecord: UserRecord | null;
}

const initialState: GlobalState = {
  userEmail: "",
  isAuthenticated: false,
  storageInitiated: false,
  userInfo: null,
  showDataForm: false,
  targetRecord: null,
  dataComponent: "Loading",
  userRecord: null,
  impactTargets: null,

  nextTarget: false,
  previousTarget: false,
  metricsUpdated: false,

  reportModal: false,
  categoryImpactTargets: null,

  reportPromptResponse: null,
  reportPromptModal: false,
  metricReportPromptModal: false,
  metricAnanlyticsModal: false,

  openHelp: false,

  allCategoryMetrics: null,
  reportCategory: null,

  loadingReport: false,
  report: null,

  currentMetricInfo: null,
  currentSDGInfo: null,

  settingsUploadModelMetric: null,

  // Settings Data upload
  showThisModal: "",
  localImpactTargets: null,
  localRecord: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUserEmail: (state: GlobalState, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
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
    setPreviousTarget: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.previousTarget = action.payload;
    },
    setMetricsUpdated: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.metricsUpdated = action.payload;
    },
    setReportModal: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.reportModal = action.payload;
    },
    setMetricReportPromptModal: (
      state: GlobalState,
      action: PayloadAction<boolean>
    ) => {
      state.metricReportPromptModal = action.payload;
    },
    setMetricAnanlyticsModal: (
      state: GlobalState,
      action: PayloadAction<boolean>
    ) => {
      state.metricAnanlyticsModal = action.payload;
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

    setAllCategoryMetrics: (
      state: GlobalState,
      action: PayloadAction<AllCategroryMetricsRequest>
    ) => {
      state.allCategoryMetrics = action.payload.allCategoryMetrics;
    },

    setReportCategory: (
      state: GlobalState,
      action: PayloadAction<ReportCategoryRequest>
    ) => {
      state.reportCategory = action.payload.reportCategory;
    },

    logout: (state: GlobalState) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },

    setLoadingReport: (state: GlobalState, action: PayloadAction<boolean>) => {
      state.loadingReport = action.payload;
    },

    setReport: (state: GlobalState, action: PayloadAction<SetReportType>) => {
      state.report = action.payload.report;
    },

    setCurrentMetricInfo: (
      state: GlobalState,
      action: PayloadAction<CurrentMetricInfoRequest>
    ) => {
      state.currentMetricInfo = action.payload.currentMetricInfo;
    },

    setCurrentSDGInfo: (
      state: GlobalState,
      action: PayloadAction<CurrectSDGInfoRequest>
    ) => {
      state.currentSDGInfo = action.payload.currentSDGInfo;
    },

    setSettingsUploadModelMetric: (
      state: GlobalState,
      action: PayloadAction<Metric | null>
    ) => {
      state.settingsUploadModelMetric = action.payload;
    },

    // Settings Data upload
    setShowThisModal: (state: GlobalState, action: PayloadAction<string>) => {
      state.showThisModal = action.payload;
    },

    setLocalImpactTargets: (
      state: GlobalState,
      action: PayloadAction<ImpactTargetType[] | null>
    ) => {
      state.localImpactTargets = action.payload;
    },

    setLocalRecord: (state: GlobalState, action: PayloadAction<UserRecord | null>) => {
      state.localRecord = action.payload;
    }
  },
});

export const {
  setUserEmail,
  setIsAuthenticated,
  setUserInfo,
  logout,
  setShowDataForm,
  setDataComponent,
  setUserRecord,
  setStorageInit,
  setTargetRecord,
  setNextTarget,
  setPreviousTarget,
  setMetricsUpdated,
  setReportModal,
  setHelpModal,
  setImpactTargets,
  setCategoryImpactTargets,
  setReportPromptResponse,
  setReportPromptModal,
  setAllCategoryMetrics,
  setReportCategory,
  setLoadingReport,
  setReport,
  setCurrentMetricInfo,
  setMetricReportPromptModal,
  setMetricAnanlyticsModal,
  setCurrentSDGInfo,
  setSettingsUploadModelMetric,
  setShowThisModal,
  setLocalImpactTargets,
  setLocalRecord,
} = appSlice.actions;

export default appSlice.reducer;
