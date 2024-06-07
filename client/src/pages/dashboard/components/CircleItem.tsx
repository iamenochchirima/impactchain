
import { targetOptions } from "../../../data/constants";
import { Tooltip } from "react-tooltip";;
import { useDispatch} from "react-redux";
import { ImpactTargetType } from "../../../utils/types";
import { FC } from "react";
import { setSelectedSDGDetails, setShowThisModal } from "../../../redux/slices/app";

type Props = {
  target: ImpactTargetType
};

const CircleItem : FC<Props> = ({ target }) => {
  const matchOption = targetOptions.find((t) => t.name === target.name);
  const dispatch = useDispatch();


  const truncateEnd = (text: string, maxLength: number = 20): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.slice(0, maxLength)}...`;
  };

  const handleClicked = () => {
    dispatch(setSelectedSDGDetails(target));
    dispatch(setShowThisModal("SDGDetails"));
  }
  return (
    <li className="flex flex-col w-1/6 py-2 items-center gap-3">
      <a data-tooltip-id="my-tooltip" data-tooltip-content={`${target.name}`}>
        <Tooltip id="my-tooltip" />
        <h3 className="text-sm ">{truncateEnd(target.name)}</h3>
      </a>
      <div
      onClick={handleClicked}
       className="bg-custom-gray hover:cursor-pointer p-3 rounded-full border-x border-y border-custom-green">
        <img src={`${matchOption?.emoji}`} alt="logo" className="h-14 w-14" />
      </div>
    </li>
  );
};

export default CircleItem;
