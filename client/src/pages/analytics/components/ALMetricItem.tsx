import { FC } from "react";
import { CategoryType } from "../types";
import {
  setCurrentMetricInfo,
  setMetricAnanlyticsModal,
} from "../../../redux/slices/app";
import { useDispatch } from "react-redux";
import { Metric } from "../../../utils/types";

type Props = {
  item: Metric;
  category: CategoryType;
};

const ALMetricItem: FC<Props> = ({ item, category }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrentMetricInfo({currentMetricInfo: {metric: item, category: category}}));
    dispatch(setMetricAnanlyticsModal(true));
  };

  return (
    <div className="flex items-center gap-3 text-white hover:cursor-pointer">
      <button
        onClick={handleClick}
        className="bg-custom-gray px-2 py-2 rounded-lg w-full hover:bg-gray-700"
      >
        <span className="leading-tight ">{item.name}</span>
      </button>
    </div>
  );
};

export default ALMetricItem;
