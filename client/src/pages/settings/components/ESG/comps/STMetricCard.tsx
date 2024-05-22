import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { SeletectedMetric } from '../../../../../components/data-submission/metrics/MetricCard';
import STMetricItem from './STMetricItem';


const STMetricCard = () => {
    const {currentSDGInfo} = useSelector((state: RootState) => state.app);
    const [selectedMetrics, setSelectedMetrics] = useState<SeletectedMetric[]>( currentSDGInfo?.target.metrics.map((m) => {
        return {
          name: m.name,
          key: m.key,
        };
      }) || []);



  return (
    <div className="flex flex-col rounded-3xl bg-black p-10 slide-fwd-center  ">
    <div className="flex items-center justify-center">
      <img
        src={currentSDGInfo?.targetOption.icon}
        alt={currentSDGInfo?.targetOption.name}
        className="h-[100px] w-[100px]"
      />
    </div>
    <div className="flex flex-col gap-3 mt-5">
      {currentSDGInfo?.targetOption.metrics.map((m) => (
        <STMetricItem
          key={m.key}
          {...{ m, setSelectedMetrics, selectedMetrics }}
        />
      ))}
    </div>
  </div>
  )
}

export default STMetricCard