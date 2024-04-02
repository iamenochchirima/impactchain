import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TargetOption } from "../../data/constants";
import { TargetRecordStateType, setTargetRecord } from "../../redux/slices/app";

type Props = {
  target: TargetOption;
};

type GradientStyle = {
  backgroundImage: string;
}

const TargetRecordsCard: FC<Props> = ({ target }) => {
  const dispatch = useDispatch();
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({ backgroundImage: `linear-gradient(to top, #354b5b, ${target.color} 50%, ${target.color})`});

  useEffect(() => {
    const _record: TargetRecordStateType = {
      color: target.color,
      name: target.name,
    };
    dispatch(setTargetRecord({ targetRecord: _record }));
    setGradientStyle({ backgroundImage: `linear-gradient(to top,#354b5b, ${target.color} 50%, ${target.color})`});
  }, [dispatch, target]);

  return (
    <div className="flex flex-col items-center bg-gray">
      <div className="text-3xl font-bold text-white mt-4 bg-gra text-center font-TelegraphBold flex gap-3 items-center">
        <span>How do you record your data for  {target.name}</span>{" "}
        <img className="h-14 w-14 ml-2" src={target.icon} alt={target.name} />
      </div>
      <div style={gradientStyle} className={` rounded-3xl h-[300px] w-[300px]`}>

      </div>
    </div>
  );
};

export default TargetRecordsCard;

