import React from "react";

const Category = ({ category }) => {
  return (
    <div className="w-1/3 flex cursor-pointer flex-col items-center gap-4 justify-center bg-custom-gray p-5 rounded-[56px] ">
      <img className="w-28 h-28" src={`${category.icon}`} />
      <span className="text-3xl text-center">{category.title}</span>
    </div>
  );
};

export default Category;
