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

      <div className="w-11/12 h-screen ml-5 mt-5 bg-neutral-800 rounded-[56px] p-5">

      </div>
    </div>
  )
}

export default Integrations