import React, { FC } from 'react'

type Props = {
  setPage: (page: string) => void;
};

const Profile: FC<Props> = ({setPage}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./profile.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Profile
        </span>
      </div>
    </div>
  )
}

export default Profile