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

      <div>
      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-lg font-TelegraphRegular">Full Name:</p>
        <input type="password" className="bg-black border-2 border-custom-green rounded-2xl p-2"></input>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-lg font-TelegraphRegualr">Email:</p>
        <input type="password" className="bg-black border-2 border-custom-green rounded-2xl p-2"></input>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-lg font-TelegraphRegular">Company Name:</p>
        <input type="password" className="bg-black border-2 border-custom-green rounded-2xl p-2"></input>
      </div>

      
      <div className="ml-5 mt-5">
        <p className=" text-white text-lg font-TelegraphRegular"> Appearance:</p>
        <div className="flex gap-4">
          <button className=" bg-custom-green px-5 py-2 mt-3 rounded-3xl">
            <span className=" text-white font-TelegraphRegular text-xl">
              Light
            </span>
          </button>

          <button className=" bg-custom-green px-5 py-2 mt-3 rounded-3xl">
            <span className=" text-black font-TelegraphRegular text-xl">
              Dark
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-xl font-TelegraphBold">Delete your Organisation:</p>
        <p className="text-white font-TelegraphRegular">
          You may delete your organisation at any time.
        </p>
        <p className="text-white font-TelegraphRegular">
          This will delete all of your data.
        </p>

      </div>
      <button className=" bg-custom-green px-5 py-2 mt-3 ml-5 rounded-3xl">
            <span className=" text-black font-TelegraphRegular text-xl">
              Delete Organisation
            </span>
          </button>

      </div>
    </div>
  )
}

export default Profile