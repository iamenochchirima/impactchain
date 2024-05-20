const Password = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./lock%key.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Password
        </span>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-lg font-TelegraphRegular">Current Password</p>
        <input type="password" className="bg-black border-2 border-custom-green rounded-2xl p-2"></input>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-lg font-TelegraphRegular">New Password</p>
        <input type="password" className="bg-black border-2 border-custom-green rounded-2xl p-2"></input>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className="  text-white text-lg font-TelegraphRegular">Confirm New Password</p>
        <input type="password" className="bg-black border-2 border-custom-green rounded-2xl p-2"></input>
      </div>

      <button className=" bg-custom-green p-3 ml-5 mt-5 rounded-3xl">
        <span className=" text-black font-TelegraphRegular text-xl">
          Reset Password
        </span>
      </button>
    </div>
  )
}

export default Password