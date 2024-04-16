import React, {FC} from 'react'

type Props = {
  setPage: (page: string) => void;
};

const BrandKit: FC<Props> = ({setPage}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./paintbrush.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Brand Kit
        </span>
      </div>
    </div>
  )
}

export default BrandKit