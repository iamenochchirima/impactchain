import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import ProfileLogo from "./ProfileLogo";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ImpactTarget from "./ImpactTarget";
import Measurements from "./measurements/Measurements";
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
    <div className="fixed z-20 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div style={gradientStyle} className={`${targetRecord ? "" : "bg-[#191919]"} rounded w-3/4 px-6 py-2 min-w-min max-w-full space-y-8`}>
          <div className="flex">
            <div className="flex justify-start">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              {dataComponent === "Loading" && <Loading />}
              {dataComponent === "About" && <About />}
              {dataComponent === "ProfileLogo" && <ProfileLogo />}
              {dataComponent === "ImpactTarget" && <ImpactTarget />}
              {dataComponent === "Measurements" && <Measurements />}
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
