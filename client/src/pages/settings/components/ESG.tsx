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
    </div>
  )
}

export default ESG