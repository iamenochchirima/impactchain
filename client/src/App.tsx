import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./data/Routes";
import LoadingScreen from "./components/LoadingScreen";
import Layout from "./components/Layout";
import { RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsAuthenticated,
  setStorageInit,
  setUserInfo,
} from "./redux/slices/app";

// Pages
const Login = lazy(() => import("./pages/login/Login"));
const Register = lazy(() => import("./pages/register/Register"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Analytics = lazy(() => import("./pages/analytics/Analytics"));
const AskAI = lazy(() => import("./pages/askai/AskAI"));
const SettingsPage = lazy(() => import("./pages/settings/SettingsPage"));
const CarbonCredits = lazy(
  () => import("./pages/carbon-credits/CarbonCredits")
);
const LandingPage = lazy(() => import("./pages/landing/Landing"));
const Notfound = lazy(() => import("./components/Notfound"));
const ForgotPassword = lazy(() => import("./pages/reset/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/reset/ResetPassword"));
import { initActors } from "./config/storage/functions"


const App = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  const init = async () => {
    const res = await initActors();
    if (res) {
      dispatch(setStorageInit(true));
    }
  };

  useEffect(() => {
    getUserInfo();
    init();
  }, []);

  const getUserInfo = () => {
    const user = JSON.parse(localStorage.getItem("userInfo") as string);
    if (user) {
      dispatch(setIsAuthenticated(true));
      dispatch(setUserInfo(user));
    }
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/askai" element={<AskAI />} />
              <Route path="/carbon-credits" element={<CarbonCredits />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>
          <Route
            path="/"
            element={
              isAuthenticated ? <Navigate to="/dashboard" /> : <LandingPage />
            }
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
          />
          <Route
            path="/signup"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
