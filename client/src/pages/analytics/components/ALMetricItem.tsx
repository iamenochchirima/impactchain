import { FC } from "react";
import { CategoryType } from "../types";
import { RoportModalRequest, setReportModal } from "../../../redux/slices/app";
import { useDispatch } from "react-redux";
import { Metric } from "../../../utils/types";

type Props = {
  item: Metric;
  category: CategoryType;
};

const ALMetricItem: FC<Props> = ({ item, category }) => {
  const dispatch = useDispatch();
  const handleClicked = () => {
    const req: RoportModalRequest = {
      reportModal: true,
      reportMetric: item,
      reportCategory: category,
    };
    dispatch(setReportModal(req));
  };
  return (
      <div className="flex items-center gap-3 text-white hover:cursor-pointer">
        <span className="leading-tight w-1/2">{item.name}</span>
        <button
          onClick={handleClicked}
          className="hover:bg-gray-700 w-1/2 px-2 py-1 text-nowrap text-custom-green rounded"
        >
          View Report
        </button>
      </div>
  );
};

export default ALMetricItem;
