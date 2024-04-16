import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};
const Integrations: FC<Props> = ({ setPage }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./plug.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
            Integrations
        </span>
      </div>
    </div>
  )
}

export default Integrations