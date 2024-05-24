import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataComponent, setUserRecord } from "../../redux/slices/app";
import { RootState } from "../../redux/store";
import { useAuth } from "../../hooks/AppContext";
import { UserRecord } from "../../hooks/declarations/data/data.did";
import { uploadFile } from "../../config/storage/functions";
import Bubbles from "../Bubbles";

const bubbleText ="Upload your company logo- This will appear on all report headers, reinforcing your brand indentity.";
const ProfileLogo = () => {
  const dispatch = useDispatch();
  const [logo, setLogo] = useState<File | null>(null);
  const [logourl, setLogoUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { userRecord, storageInitiated } = useSelector(
    (state: RootState) => state.app
  );
  const { dataActor } = useAuth();

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(e.target.files[0]);
      setLogoUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBack = () => {
    dispatch(setDataComponent("About"));
  };

  const handleNext = () => {
    dispatch(setDataComponent("ImpactTarget"));
  };

  const handleSubmit = async () => {
    if (userRecord) {
      try {
        setLoading(true);
        const url = await uploadAsset();
        if (!url) {
          console.error("Error uploading logo");
          return;
        }
        const updatedRecord: UserRecord = {
          ...userRecord,
          aboutCompany: { ...userRecord.aboutCompany, logo: url },
        };
        await dataActor?.updateUserRecord(updatedRecord);
        dispatch(setUserRecord(updatedRecord));
        dispatch(setDataComponent("ImpactTarget"));
      } catch (error) {
        setLoading(false);
        console.log("Error setting company info", error);

      }
    }
  };

  const uploadAsset = async () => {
    if (storageInitiated && logo) {
      const file_path = location.pathname;
      try {
        const assetUrl = await uploadFile(logo, file_path);
        console.log("This file was successfully uploaded:", logo.name, assetUrl);
        return assetUrl;
      } catch (error) {
        console.error("Error uploading file:", logo.name, error);
      }
    }
  };

  return (
    <div className="">
      <div className=""></div>
      <h3 className="md:text-xl text-3xl mt-4 font-bold text-white  text-center font-NeueMachinaUltrabold ">
        Upload your company logo
      </h3>
      <div className="flex justify-center">
        <div
          className={`${
            logourl ? "flex-col gap-5 p-5 min-w-[460px]" : "min-w-[400px]"
          } mt-10 min-h-[310px] bg-transparent shadow-md shadow-custom-green flex justify-center items-center rounded-3xl `}
        >
          {logourl && (
            <img
              src={logourl}
              alt="logo"
              className="h-40 w-40 object-cover rounded-full"
            />
          )}
          <div className="flex justify-center">
            <input
              type="file"
              id="logo"
              name="logo"
              onChange={handleLogoChange}
              accept="image/*"
              className="hidden"
            />
            <button>
              {" "}
              <label
                htmlFor="logo"
                className="bg-custom-green text-black px-10 py-2 rounded-full cursor-pointer"
              >
                {logourl ? "Change Logo" : "Upload Logo"}
              </label>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-2 items-center mt-20 mb-10 mx-20 ">
      <Bubbles {...{bubbleText}}/>
        <button onClick={handleBack}>
          <span className="text-custom-green md:text-sm text-lg">Back</span>
        </button>
        <button
          onClick={handleSubmit}
          disabled={!logo}
          className={` ${
            logourl ? "bg-custom-green" : "bg-green-700"
          } p-2 py-1.5  rounded-xl text-black md:text-sm font-TelegraphUltraLight font-bold`}
        >
       {loading ? "Loading..." : "Continue"}
        </button>
        
        <button onClick={handleNext}>
          <span className="text-custom-green md:text-sm text-lg">Skip</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileLogo;
