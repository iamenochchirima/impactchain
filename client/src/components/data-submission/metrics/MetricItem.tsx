import { useEffect, useState } from "react";
import { FaSquare } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setMetricsUpdated } from "../../../redux/slices/app";

const MetricItem = ({
  m,
  setSelectedMetrics,
  selectedMetrics,
}) => {
  const [selectedButton, setSelectedButton] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMetrics.includes(m.description)) {
      setSelectedButton(true);
    }
  }, [selectedMetrics, m.description]);

  const handleClicked = () => {
    setSelectedButton(!selectedButton);
    if (selectedMetrics.includes(m.description)) {
      setSelectedMetrics(
        selectedMetrics.filter((item) => item !== m.description)
      );
    } else {
      setSelectedMetrics((prev) => [...(prev || []), m.description]);
    }
    dispatch(setMetricsUpdated(true))
  };
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

export default MetricItem;
