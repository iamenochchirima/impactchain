import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { ApexOptions } from 'apexcharts';

// Extend dayjs with the quarterOfYear plugin
dayjs.extend(quarterOfYear);



const BarGraph = () => {
  const [series, setSeries] = useState([
    {
      name: "sales",
      data: [
        { x: '2019/01/01', y: 400 },
        { x: '2019/04/01', y: 430 },
        { x: '2019/07/01', y: 448 },
        { x: '2019/10/01', y: 470 },
        { x: '2020/01/01', y: 540 },
        { x: '2020/04/01', y: 580 },
        { x: '2020/07/01', y: 690 },
        { x: '2020/10/01', y: 690 }
      ]
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
        formatter: (val: string) => "Q" + dayjs(val).quarter()
      },
      group: {
        style: {
          fontSize: '10px',
          fontWeight: 700
        },
        groups: [
          { title: '2019', cols: 4 },
          { title: '2020', cols: 4 }
        ]
      }
    },
    title: {
      text: 'Grouped Labels on the X-axis',
    },
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
