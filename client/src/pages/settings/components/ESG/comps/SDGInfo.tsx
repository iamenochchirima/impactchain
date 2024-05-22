import { useEffect, useState } from "react";
import STMetricCard from "./STMetricCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { AiOutlineClose } from "react-icons/ai";
import {
  setCurrentSDGInfo,
  setMetricsUpdated,
} from "../../../../../redux/slices/app";
import RemoveWarning from "./RemoveWarning";

type GradientStyle = {
  backgroundImage: string;
};

const SDGInfo = () => {
  const dispatch = useDispatch();
  const [showWarning, setShowWarning] = useState(false);
  const { currentSDGInfo, metricsUpdated } = useSelector(
    (state: RootState) => state.app
  );
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({
    backgroundImage: "",
  });

  useEffect(() => {
    if (currentSDGInfo) {
      const gradient = `linear-gradient(to top, black, ${currentSDGInfo.targetOption.color})`;
      setGradientStyle({ backgroundImage: gradient });
    }
  }, [currentSDGInfo]);

  const handleClose = () => {
    dispatch(setCurrentSDGInfo({ currentSDGInfo: null }));
    dispatch(setMetricsUpdated(false));
  };

    const handleRemoveSDG = () => {
        setShowWarning(true);
    };
  return (
    <div className="fixed z-50 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          style={gradientStyle}
          className={`${
            currentSDGInfo ? "" : "bg-black"
          }  rounded-xl w-2/4 px-6 py-2 min-w-min max-w-full space-y-8`}
        >
          <div className="w-full justify-center items-center flex flex-col">
            <div className="flex justify-between w-full items-center">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />

              <button onClick={handleClose} className="">
                <AiOutlineClose size={30} className="text-white" />
              </button>
            </div>

            <div className="w-3/4 flex flex-col justify-center items-center pt-10">
              <STMetricCard />
            </div>

            <div className="pb-20 w-full flex  justify-center mt-4 gap-10 ">
              <button
              onClick={handleRemoveSDG}
               className="text-custom-green rounded-3xl px-3 py-2 bg-custom-gray">
                Remove SDG
              </button>
              {metricsUpdated && (
                <button className="bg-custom-green rounded-3xl px-5 py-2 text-black">
                  Save
                </button>
              )}
            </div>
              {showWarning && <RemoveWarning {...{setShowWarning}} />}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SDGInfo;
