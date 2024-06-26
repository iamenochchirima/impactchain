import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { CiSearch } from "react-icons/ci";
import SubmitData from "./data-submission/SubmitData";
import {
  setDataComponent,
  setImpactTargets,
  setShowDataForm,
  setUserRecord,
} from "../redux/slices/app";
import { useAuth } from "../hooks/AppContext";
import { isDataIncomplete } from "./utils";
import Report from "../pages/analytics/components/main-report/Report";
import Help from "./Help";
import { ImpactTargetType } from "../utils/types";
import { getImpactTargetsArray } from "../utils/targets";
import GenerateReportPrompt from "../pages/analytics/components/main-report/GenerateReportPrompt";
import GenerateMetricReportPrompt from "../pages/analytics/components/metric-report/GenerateMetricReportPrompt";
import MetricAnalysis from "../pages/analytics/components/metric-report/MetricAnalysis";
import SDGInfo from "../pages/settings/components/ESG/comps/SDGInfo";


const Header = () => {
  const { showDataForm, userInfo, reportModal, openHelp, reportPromptModal, metricReportPromptModal, metricAnanlyticsModal, currentSDGInfo } = useSelector(
    (state: RootState) => state.app
  );
  const userMenuRef = useRef<HTMLDivElement>(null);
  const loginMenuRef = useRef<HTMLDivElement>(null);
  const [userMenu, setUserMenu] = useState(false);
  const dispatch = useDispatch();

  const { dataActor } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenu(false);
      }
      if (
        loginMenuRef.current &&
        !loginMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [userMenuRef, loginMenuRef]);

  useEffect(() => {
    const getOnChainData = async () => {
      try {
        const res = await dataActor?.getUserRecord(userInfo.email);
        if (res) {
          if ("ok" in res) {

            const customImpacts: ImpactTargetType[] = getImpactTargetsArray(res.ok.impactTargets)
            const _sortedTargets = [...customImpacts].sort(
              (a, b) => Number(a.id) - Number(b.id)
            );
            dispatch(setImpactTargets(_sortedTargets));
            dispatch(setUserRecord(res.ok));
            const _res = isDataIncomplete(res.ok, customImpacts);
            if (_res !== "ok") {
              dispatch(setShowDataForm(true));
              dispatch(setDataComponent(_res));
            }
          } else {
            dispatch(setShowDataForm(true));
            dispatch(setDataComponent("About"));
          }
        }
      } catch (error) {
        console.log("Error getting on chain data", error);
      }
    };

    if (userInfo && dataActor) {
      getOnChainData();
    }
  }, [dataActor, userInfo, dispatch]);


  return (
    <>
      {showDataForm && <SubmitData />}
      {reportModal && <Report />}
      {openHelp && <Help />}
      {reportPromptModal && <GenerateReportPrompt />}
      {metricReportPromptModal && <GenerateMetricReportPrompt />}
      {metricAnanlyticsModal && <MetricAnalysis />}
      {currentSDGInfo && <SDGInfo/>}
      <div className="fixed bg-black z-40 left-64 right-0">
        <div className="pt-4">
          <div className=" h-4 flex items-center justify-end bg-custom-gray ml-10 mr-[23px] py-10 rounded-xl border border-green-700">
            <div className="flex items-center justify-between gap-2">
              <Link to="/askai">
                <img src="/smiley.svg" alt="smiley" className="h-10 w-10" />
              </Link>
              <button className="flex items-center gap-6 bg-custom-green text-black py-1 rounded-xl px-5 mr-5">
                <span>Search</span>
                <CiSearch size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
