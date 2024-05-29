import React from "react";
import Category from "./components/Category";
import { CategoryType } from "./types";

const categories: CategoryType[] = [
  {
    id: 1,
    title: "Environmental Impact",
    icon: "./earth.svg",
    category: "Environmental",
  },
  {
    id: 2,
    title: "Social Impact",
    icon: "./couple.svg",
    category: "Social",
  },
  {
    id: 3,
    title: "Governance Impact",
    icon: "./scale.svg",
    category: "Governance",
  },
];

const Analytics = () => {
  return (
    <div>
      <div className="ml-5 mr-10">
        <h1 className="font-NeueMachinaUltrabold md:text-2xl text-4xl mt-3">
          Monitor your impact
        </h1>
        <div className="flex w-full font-NeueMachinaRegular gap-10 mt-10 ">
          {categories.map((category, index) => (
           <Category key={index} {...{category}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
