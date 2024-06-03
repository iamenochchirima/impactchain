import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { GradientStyle } from "../../../../../components/data-submission/SubmitData";

const STRecords = () => {
  const { targetRecord, currentSDGInfo } = useSelector(
    (state: RootState) => state.app
  );

  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({
    backgroundImage: "",
  });

  useEffect(() => {
    if (targetRecord) {
      const gradient = `linear-gradient(to top, black, ${targetRecord.color})`;
      setGradientStyle({ backgroundImage: gradient });
    } else {
      setGradientStyle({ backgroundImage: "" });
    }
  }, [targetRecord]);

  const handleClose = () => {
    console.log("Close");
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default STRecords;
