import React from "react";
import Category from "./components/Category";

const categories = [
  {
    id: 1,
    title: "Environmental Impact Report",
    icon: "./earth.svg",
  },
  {
    id: 2,
    title: "Social Impact Report",
    icon: "./couple.svg",
  },
  {
    id: 3,
    title: "Governance Impact Report",
    icon: "./scale.svg",
  },
];

const Analytics = () => {
  return (
    <div>
      <div className="ml-5 mr-10">
        <h1 className="font-NeueMachinaUltrabold text-4xl mt-10">
          Monitor your impact
        </h1>
        <div className="flex w-full font-NeueMachinaRegular gap-28 mt-20 ">
          {categories.map((category, index) => (
           <Category key={index} {...{category}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
