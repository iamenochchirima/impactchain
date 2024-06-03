import { useEffect, useState } from "react";
import STMetricCard from "./STMetricCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { AiOutlineClose } from "react-icons/ai";
import {
  setCurrentSDGInfo,
  setMetricsUpdated,
  setUserRecord,
} from "../../../../../redux/slices/app";
import RemoveWarning from "./RemoveWarning";
import { UserRecord } from "../../../../../hooks/declarations/data/data.did";
import { useAuth } from "../../../../../hooks/AppContext";
import ManuallyUpload from "../../../../../components/data-submission/targetrecords/ManuallyUpload";
import { ManualData } from "../../../../../components/data-submission/targetrecords/MetricRecords";
import { Metric } from "../../../../../utils/types";

type GradientStyle = {
  backgroundImage: string;
};

const SDGInfo = () => {
  const dispatch = useDispatch();
  const { dataActor } = useAuth();
  const [showWarning, setShowWarning] = useState(false);
  const {
    currentSDGInfo,
    metricsUpdated,
    userRecord,
    settingsUploadModelMetric,
  } = useSelector((state: RootState) => state.app);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  useEffect(() => {
    if (currentSDGInfo) {
      setMetrics(currentSDGInfo.target.metrics);
    }
  }, [currentSDGInfo]);

  const [record, setRecord] = useState<UserRecord | null>(null);
  const [manualData, setManualData] = useState<ManualData | null>(null);
  const [uploadedMetricKey, setUploadedMetricKey] = useState<string>("");
  const [uploadManually, setUploadManually] = useState<boolean>(false);
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({
    backgroundImage: "",
  });

  useEffect(() => {
    if (userRecord) {
      setRecord(userRecord);
    }
  }, [userRecord]);

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

  const handleSave = async () => {
    if (!record) {
      console.error("Record is null");
      return;
    }
    await dataActor?.updateUserRecord(record);
    dispatch(setUserRecord(record));
  };

  useEffect(() => {
    if (manualData) {
      if (!settingsUploadModelMetric) {
        console.error("Metric not found");
        return;
      }

      const updatedData = settingsUploadModelMetric.data.concat(manualData.data);
      const updatedMetric: Metric = {
        ...settingsUploadModelMetric,
        data: updatedData,
        goal: [manualData.goal],
      };
      setUploadedMetricKey(settingsUploadModelMetric.key);
      setMetrics(
        metrics.map((m) =>
          m.name === settingsUploadModelMetric.name ? updatedMetric : m
        )
      );
    }
  }, [manualData]);

  return (
    <>
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
                <img
                  src="i.c.logo2.png"
                  alt="logo-image"
                  className="h-20 w-20"
                />

                <button onClick={handleClose} className="">
                  <AiOutlineClose size={30} className="text-white" />
                </button>
              </div>

              <div className="w-3/4 flex flex-col justify-center items-center pt-10">
                <STMetricCard {...{ record, setRecord, setUploadManually,  uploadedMetricKey}} />
              </div>

              <div className="pb-20 w-full flex  justify-center mt-4 gap-10 ">
                <button
                  onClick={handleRemoveSDG}
                  className="text-custom-green rounded-3xl px-3 py-2 bg-custom-gray"
                >
                  Remove SDG
                </button>
                {metricsUpdated || manualData && (
                  <button
                    onClick={handleSave}
                    className="bg-custom-green rounded-3xl px-5 py-2 text-black"
                  >
                    Save
                  </button>
                )}
              </div>
              {showWarning && <RemoveWarning {...{ setShowWarning }} />}
            </div>
          </div>
        </div>
      </div>
      {uploadManually && settingsUploadModelMetric && (
        <ManuallyUpload
          {...{
            setUploadManually,
            setManualData,
            metric: settingsUploadModelMetric,
          }}
        />
      )}
    </>
  );
};

export default SDGInfo;
