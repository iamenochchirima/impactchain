import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};

const Password: FC<Props> = ({setPage}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./lock%key.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Password
        </span>
      </div>
    </div>
  )
}

export default Password