import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};
const Litepaper: FC<Props> = ({ setPage }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Litepaper for Impact.Chain
        </span>
      </div>
    </div>
  )
}

export default Litepaper