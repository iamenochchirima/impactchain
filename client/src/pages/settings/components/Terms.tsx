import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};
const Terms: FC<Props> = ({ setPage }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Terms and Conditions of  Use for Impact.Chain
        </span>
      </div>
    </div>
  )
}

export default Terms