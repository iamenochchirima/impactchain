import { FC } from "react";
import { TargetOption } from "../../../data/constants";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ALMetricItem from "./ALMetricItem";
import { CategoryType } from "../types";

type Props = {
  target: TargetOption;
  category: CategoryType
};
const ALMetricCard: FC<Props> = ({ target, category }) => {
  const { impactTargets } = useSelector((state: RootState) => state.app);

  const matchingTarget = impactTargets?.find(
    (t) => t.name === target.name
  );

  return (
    <div className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center  ">
      <div className="flex items-center justify-center">
        <img
          src={target.icon}
          alt={target.name}
          className="h-[100px] w-[100px]"
        />
      </div>
      <div className="flex flex-col gap-4 mt-5 ">
        {matchingTarget?.metrics.map((item, index) => (
          <ALMetricItem key={index} {...{ item, category }} />
        ))}
      </div>
    </div>
  );
};

export default ALMetricCard;
