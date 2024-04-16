import React, { FC } from 'react'

type Props = {
  setPage: (page: string) => void;
};

const Profile: FC<Props> = ({setPage}) => {
  return (
    <div>Profile</div>
  )
}

export default Profile