

const BrandKit = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5">
        <img className="w-15 h-15" src="./paintbrush.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Brand Kit
        </span>
      </div>

      {/*Logo Section */}
      <div className="w-full flex flex-col">
          <div className=" w-11/12 h-full ml-5 mt-5  bg-[#202020] rounded-3xl p-4">
            <p className="bg-slate-50 text-black w-1/12 text-center rounded-3xl text-lg font-TelegraphRegular">Logo</p>
            <div className="flex">
              <div className=" mt-3 p-5 bg-black rounded-3xl w-1/12 text-center">
                 +
              </div>
            </div>
          </div>
        </div>

        {/* Color Palette Section */}
        <div className="w-full flex flex-col">
          <div className=" w-11/12 h-full ml-5 mt-5  bg-[#202020] rounded-3xl p-4">
            <p className="bg-slate-50 text-black w-1/12 text-center rounded-3xl text-lg font-TelegraphRegular">Colors</p>
            <div className="flex">
              <div className=" mt-3 p-5 bg-black rounded-3xl w-1/12 text-center">
                 +
              </div>
            </div>
          </div>
        </div>

        {/* Font Section */}
        <div className="w-full flex flex-col">
          <div className=" w-11/12 h-full ml-5 mt-5  bg-[#202020] rounded-3xl p-4">
            <p className="bg-slate-50 text-black w-1/12 text-center rounded-3xl text-lg font-TelegraphRegular">Fonts</p>
            <div className="flex">
              <div className=" mt-3 p-5 bg-black rounded-3xl w-1/12 text-center">
                 +
              </div>
            </div>
          </div>
        </div>

        {/* Photo Section */}
        <div className="w-full flex flex-col">
          <div className=" w-11/12 h-full ml-5 mt-5  bg-[#202020] rounded-3xl p-4">
            <p className="bg-slate-50 text-black w-1/12 text-center rounded-3xl text-lg font-TelegraphRegular">Photos</p>
            <div className="flex">
              <div className=" mt-3 p-5 bg-black rounded-3xl w-1/12 text-center">
                 +
              </div>
            </div>
          </div>
        </div>

        <button className=" bg-custom-green py-2 px-4 rounded-2xl ml-5 mt-5">
          <span className="text-black text-lg">
          Back
          </span>
        </button>

    </div>
  )
}

export default BrandKit