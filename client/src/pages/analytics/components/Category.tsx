import { FC, useState } from "react";
import Metrics from "./Metrics";
import { CategoryType } from "../types";

type Props = {
  category: CategoryType;
};

const Category: FC<Props> = ({ category }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="w-1/3 flex cursor-pointer flex-col items-center gap-4 justify-center bg-custom-gray p-5 rounded-[56px] "
      >
        <img className="w-28 h-28" src={`${category.icon}`} />
        <span className="text-3xl text-center">{category.title}</span>
      </div>
      {openModal && <Metrics {...{ setOpenModal, category }} />}
    </>
  );
};

export default Category;
