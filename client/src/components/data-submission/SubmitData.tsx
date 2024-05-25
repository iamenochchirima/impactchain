import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import ProfileLogo from "./ProfileLogo";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ImpactTarget from "./ImpactTarget";
import Metrics from "./metrics/Metrics";
import { TargetRecords } from "./targetrecords/TargetRecords";
import { useEffect, useState } from "react";

type GradientStyle = {
  backgroundImage: string;
}

const SubmitData = () => {
  const { dataComponent, targetRecord } = useSelector((state: RootState) => state.app);
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({ backgroundImage: "" });

  useEffect(() => {
    if (targetRecord) {
      const gradient = `linear-gradient(to top, black, ${targetRecord.color})`
      setGradientStyle({ backgroundImage: gradient });
    } else {
      setGradientStyle({ backgroundImage: "" });
    }
  }, [targetRecord]);

  return (
    <div className="fixed z-50 inset-0 text-cyan-700 overflow-y-auto bg-black ">
      <div className=" flex items-center justify-center py-3 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div style={gradientStyle} className={`${targetRecord ? "" : "bg-black"} llg:h-screen flex flex-col justify-center items-center  w-full rounded-xl px-3 py-2 space-y-8`}>
          <div className="flex">
            <div className="flex justify-start">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              {dataComponent === "Loading" && <Loading />}
              {dataComponent === "About" && <About />}
              {dataComponent === "ProfileLogo" && <ProfileLogo />}
              {dataComponent === "ImpactTarget" && <ImpactTarget />}
              {dataComponent === "Metrics" && <Metrics />}
              {dataComponent === "TargetRecords" && <TargetRecords />}
              {dataComponent === "Success" && <h1>Success</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitData;
