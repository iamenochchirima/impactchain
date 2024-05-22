import { FC, useEffect, useState } from "react";
import { SeletectedMetric } from "../../../../../components/data-submission/metrics/MetricCard";
import { TargetOptionMetric } from "../../../../../data/constants";
import { FaRegSquare, FaSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setMetricsUpdated } from "../../../../../redux/slices/app";

type Props = {
  m: TargetOptionMetric;
  setSelectedMetrics: (
    metrics:
      | SeletectedMetric[]
      | ((prev: SeletectedMetric[]) => SeletectedMetric[])
  ) => void;
  selectedMetrics: SeletectedMetric[];
};

const STMetricItem: FC<Props> = ({
  m,
  setSelectedMetrics,
  selectedMetrics,
}) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);
  const [intialMetrics, setInitialMetrics] = useState<SeletectedMetric[]>(selectedMetrics);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMetrics.map((m) => m.name).includes(m.description)) {
      setSelectedButton(true);
    }
  }, [selectedMetrics, m.description]);

  const handleClicked = () => {
    setSelectedButton(!selectedButton);
    setSelectedMetrics(prevMetrics => {
      const isMetricSelected = prevMetrics.some(item => item.name === m.description);
      if (isMetricSelected) {
        return prevMetrics.filter(item => item.name !== m.description);
      } else {
        return [...prevMetrics, { name: m.description, key: m.key }];
      }
    });
  };


  useEffect(() => {
    if (selectedMetrics.length > 0) {
      if (JSON.stringify(selectedMetrics) !== JSON.stringify(intialMetrics)) {
        dispatch(setMetricsUpdated(true));
      } else {
        dispatch(setMetricsUpdated(false));
      }
    }
  }, [selectedMetrics, intialMetrics, dispatch]);



  return (
    <div
      onClick={handleClicked}
      className="flex items-center gap-3 text-white hover:cursor-pointer"
    >
      <span>
        {selectedButton ? (
          <FaSquare size={30} className=" text-white" />
        ) : (
          <FaRegSquare size={30} className=" text-white" />
        )}
      </span>
      <span className="leading-tight">{m.description}</span>
    </div>
  );
};

export default STMetricItem;
