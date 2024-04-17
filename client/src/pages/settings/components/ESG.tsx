import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};
const ESG: FC<Props> = ({setPage}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./sdg-circle.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Your ESG Goals
        </span>
      </div>

      <div className="w-full flex flex-col">
        <div className=" w-11/12 h-full ml-5 mt-5  bg-[#202020] rounded-2xl p-5"></div>
        <div className=" w-11/12 h-screen ml-5 mt-5  bg-[#202020] rounded-2xl p-5"></div>
        </div>
    </div>
  )
}

export default ESG