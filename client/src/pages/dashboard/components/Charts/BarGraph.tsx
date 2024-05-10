import React, { FC, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { ApexOptions } from 'apexcharts';
import { BarGraphData, xisVals } from '../../../analytics/components/utils/types';

// Extend dayjs with the quarterOfYear plugin
dayjs.extend(quarterOfYear);

type Props  ={
  data: BarGraphData
  }

const BarGraph: FC<Props> = ({data}) => {


  const [series, setSeries] = useState([
    {
      name: "sales",
      data: data.data,
    }
  ]);

  const options : ApexOptions = {
    chart: {
      type: 'bar',
      height: 380
    },
    xaxis: {
      type: 'category',
      labels: {
        style: {
          colors: '#fff',
          fontSize: '12px'
        },
      },
    },
    title: {
      text: 'Grouped Labels on the X-axis',
    },
    yaxis : {
      labels: {
        style: {
          colors: '#fff',
          fontSize: '12px'
        },
      }
    }
    // tooltip: {
    //   x: { 
    //     formatter: (val: string) => "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY")
    //   }
    // },
  };


  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarGraph;
