import { FC, useEffect, useState } from "react";
import { SeletectedMetric } from "../../../../../components/data-submission/metrics/MetricCard";
import { TargetOptionMetric } from "../../../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setMetricsUpdated,
  setSettingsUploadModelMetric,
} from "../../../../../redux/slices/app";
import { styles } from "../../../../../styles/styles";
import { RootState } from "../../../../../redux/store";

type Props = {
  m: TargetOptionMetric;
  setSelectedMetrics: (
    metrics:
      | SeletectedMetric[]
      | ((prev: SeletectedMetric[]) => SeletectedMetric[])
  ) => void;
  selectedMetrics: SeletectedMetric[];
  setUploadManually: (uploadManually: boolean) => void;
  uploadedMetricKey: string;
};

const STMetricItem: FC<Props> = ({
  m,
  setSelectedMetrics,
  selectedMetrics,
  setUploadManually,
  uploadedMetricKey,
}) => {
  const { currentSDGInfo } = useSelector((state: RootState) => state.app);
  const [selectedButton, setSelectedButton] = useState<boolean>(false);
  const [intialMetrics, setInitialMetrics] =
    useState<SeletectedMetric[]>(selectedMetrics);
  const dispatch = useDispatch();
  const metric = currentSDGInfo?.target.metrics.find(
    (met) => met.key === m.key
  );

  useEffect(() => {
    if (selectedMetrics.map((m) => m.name).includes(m.description)) {
      setSelectedButton(true);
    }
  }, [selectedMetrics, m.description]);

  const handleClicked = () => {
    setSelectedButton(!selectedButton);
    setSelectedMetrics((prevMetrics) => {
      const isMetricSelected = prevMetrics.some(
        (item) => item.name === m.description
      );
      if (isMetricSelected) {
        return prevMetrics.filter((item) => item.name !== m.description);
      } else {
        return [...prevMetrics, { name: m.description, key: m.key }];
      }
    });
  };

  const sortMetrics = (metrics: SeletectedMetric[]) => {
    return [...metrics].sort((a, b) => a.name.localeCompare(b.name));
  };

  useEffect(() => {
    if (selectedMetrics.length > 0) {
      const sortedSelectedMetrics = sortMetrics(selectedMetrics);
      const sortedInitialMetrics = sortMetrics(intialMetrics);
      if (
        JSON.stringify(sortedSelectedMetrics) !==
        JSON.stringify(sortedInitialMetrics)
      ) {
        dispatch(setMetricsUpdated(true));
      } else {
        dispatch(setMetricsUpdated(false));
      }
    }
  }, [selectedMetrics, intialMetrics, dispatch]);

  const handleOpenManualUpload = () => {
    if (!metric) {
      console.error("Metric not found");
      return;
    }
    dispatch(setSettingsUploadModelMetric(metric));
    setUploadManually(true);
  };

  return (
    <div className="flex flex-col  bg-gray-700 p-2 rounded gap-3 text-white hover:cursor-pointer">
      <h3 className="leading-tight">{m.description}</h3>
      <div className="w-full flex gap-2 justify-between">
        <button onClick={handleClicked} className={styles.roundedButton}>
          {selectedButton ? <span>Remove</span> : <span>Add</span>}
        </button>
        <button
          onClick={handleOpenManualUpload}
          className={`${
            selectedButton ? "bg-custom-green" : "bg-green-900"
          }  px-10 py-1.5 flex flex-col rounded-xl text-black font-bold`}
          disabled={!selectedButton}
        >
          {uploadedMetricKey && uploadedMetricKey === m.key && (
            <span className="text-white text-xs font-extralight">
              Data uploaded
            </span>
          )}
          <span>Upload Data</span>
        </button>
      </div>
    </div>
  );
};

export default STMetricItem;
