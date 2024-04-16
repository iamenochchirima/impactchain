import React from 'react'

const Settings = () => {
  return (
    <div>
    <div className="flex mt-10 ml-5">
      <img className="w-[72px] h-[72px]" src="./Gear.svg" />
    <div className="w-[216px] h-[50px] text-center text-white text-[40px] font-extrabold font-NeueMachinaUltrabold">Settings</div>
    </div>

    
    <div className= "w-full flex flex-col">
      {/* Grey background box*/}
        <div className=" w-11/12 h-screen ml-5 mt-5 bg-neutral-800 rounded-[56px]">

          {/* Section 1*/}
          <div>
          {/* Heading*/}
            <div className='flex flex-row'>
              <img className="w-[50px] h-[50px]" src="./user_icon.svg" />
              <div className=" absolute text-white text-[32px] font-normal font-TelegraphRegular">Account</div>
            </div>

            <div className='flex flex-col'>
              <div className="w-[800px] h-[50px] relative bg-black rounded-[56px]" />
              <div className="w-[152px] h-[45px]  text-white text-xl font-normal font-TelegraphRegular">Profile</div>

              
              <div className="w-[800px] h-[50px] relative bg-black rounded-[56px]" />
              <div className="w-[152px] h-[45px]  text-white text-xl font-normal font-['PP Telegraf']">Password</div>
              

              </div>
          </div>

          {/* Section 2*/}
          <div></div>

          {/* Section 3*/}
          <div></div>
          
      </div>

    </div>
</div>
  )
}

export default Settings