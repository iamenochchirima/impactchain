import { FC, useState } from "react";
import { TargetOption } from "../../../../../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { CurrentSDGInfoType, setCurrentSDGInfo } from "../../../../../redux/slices/app";

type Props = {
  sdg: TargetOption;
};

const SDGCard: FC<Props> = ({ sdg }) => {
  const dispatch = useDispatch();
  const {impactTargets} = useSelector((state: RootState) => state.app);
  const handleClicked = () => {
    const target = impactTargets?.find((t) => t.id === sdg.id);

    if (!target) {
      console.error("Target not found in impactTargets  ")
      return;
    }
    const value : CurrentSDGInfoType = {
      targetOption: sdg,
      target: target,
    };
    dispatch(setCurrentSDGInfo({currentSDGInfo: value}));

  };

  const [hover, setHover] = useState(false);

  return (
    <div
    onClick={handleClicked}
     className="relative group w-32 h-32">
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        style={{ backgroundImage: `url(${sdg.icon})` }}
        className="relative bg-cover w-32 h-32  bg-center col-span-3 text-white "
      >
        <div
          className={`absolute top-0 left-0 w-full bg-black h-full ${
            hover ? `opacity-40` : `opacity-0`
          }`}
        ></div>
        <div
          className={`p-6 relative flex flex-col justify-center items-center w-32 h-32 ${
            hover ? `block` : `hidden`
          } z-10`}
        >
          <button className="text-center">View Details</button>
        </div>
      </div>

    </div>
  );
};

export default SDGCard;
