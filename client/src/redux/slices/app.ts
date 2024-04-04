import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserRecord } from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";

export type TargetRecordStateType = {
  color: string;
  name: string;
};

type TargetRecordRequest = {
  targetRecord: TargetRecordStateType | null;
};

export interface GlobalState {
  isAuthenticated: boolean;
  userInfo: any | null;
  targetRecord: TargetRecordStateType | null;
  storageInitiated: boolean;
  showDataForm: boolean;
  dataComponent: string;
  userRecord: UserRecord | null;

  nextTarget: boolean;
}

const initialState: GlobalState = {
  isAuthenticated: false,
  storageInitiated: false,
  userInfo: null,
  showDataForm: false,
  targetRecord: null,
  dataComponent: "Loading",
  userRecord: null,

  nextTarget: false,
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
    setShowDataForm: (state: GlobalState, action: PayloadAction<any>) => {
      state.showDataForm = action.payload;
    },
    setDataComponent: (state: GlobalState, action: PayloadAction<any>) => {
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
} = appSlice.actions;

export default appSlice.reducer;
