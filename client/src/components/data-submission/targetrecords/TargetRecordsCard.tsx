import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TargetOption } from "../../../data/constants";
import { TargetRecordStateType, setTargetRecord } from "../../../redux/slices/app";
import { ImpactTarget, Measurement } from "../../../hooks/declarations/impact_chain_data/impact_chain_data.did";
import MeasurementRecords from "./MeasurementRecords";

type Props = {
  target: TargetOption;
  impactTargets: ImpactTarget[];
};

type GradientStyle = {
  backgroundImage: string;
}

const TargetRecordsCard: FC<Props> = ({ target, impactTargets }) => {
  const [impact, setImpact] = useState<ImpactTarget| undefined>(undefined);
  const dispatch = useDispatch();
  const [gradientStyle, setGradientStyle] = useState<GradientStyle>({ backgroundImage: `linear-gradient(to top, #354b5b, ${target.color} 50%, ${target.color})`});
  const [displayedMeasurements, setDisplayedMeasurements] = useState<Measurement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (impact) {
      setDisplayedMeasurements(impact.measurements.slice(currentIndex, currentIndex + 2));
    }
  }, [currentIndex, impact]);

  useEffect(() => {
    const _record: TargetRecordStateType = {
      color: target.color,
      name: target.name,
    };
    const _impact = impactTargets.find((t) => Number(t.id) === target.id);
    setImpact(_impact);
    dispatch(setTargetRecord({ targetRecord: _record }));
    setGradientStyle({ backgroundImage: `linear-gradient(to top,#354b5b, ${target.color} 50%, ${target.color})`});
  }, [dispatch, target]);

  const handleNext = async () => {
    if (impact) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 2, impact.measurements.length - 2));
    }

  };

  console.log("displayedMeasurements", displayedMeasurements)


  return (
    <div className="flex flex-col items-center bg-gray  mt">
      <div className="text-3xl font-bold text-white mt-4 bg-gra text-center font-TelegraphBold flex gap-3 items-center">
        <span>How do you record your data for  {target.name}</span>{" "}
        <img className="h-14 w-14 ml-2" src={target.icon} alt={target.name} />
      </div>
      <div style={gradientStyle} className={` rounded-3xl min-h-[300px] min-w-[300px] mt-5`}>
          {impact && <>
          {displayedMeasurements.map((measurement, index) => (
            <MeasurementRecords key={index} {...{measurement, displayedMeasurements, setDisplayedMeasurements}} />  
          ))}
          </>}

          <div className="">
        <button
          onClick={handleNext}
    
        >
          <span className="text-custom-green">Next</span>
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default TargetRecordsCard;

