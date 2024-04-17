import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};
const Payment: FC<Props> = ({setPage}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <img className="w-15 h-15" src="./receipt.svg" />
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Payment Account
        </span>
      </div>

      <div>
      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className=" uppercase text-white text-xl font-TelegraphBold">Current Plan</p>
        <hr className=" w-4/6 text-custom-green "></hr>
        <p className=" text-xl font-TelegraphRegular">impact.chain - basic</p>
        <h2 className=" font-TelegraphBold text-3xl">US$0.00 per month</h2>
        <p className=" text-xl font-TelegraphRegular">Your plan renews 30 December 2023</p>

      </div>
      <button className="bg-custom-green p-3 ml-5 mt-3 rounded-3xl">
        <span className="font-TelegraphRegular text-xl text-black">Upgrade Plan
        </span>
        </button>

      </div>

      <div>
      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className=" uppercase text-white text-xl font-TelegraphBold">Payment Method</p>
        <hr className=" w-4/6 text-custom-green "></hr>

        <div className="flex gap-5">
          <p>Account Holder</p>
          <p>W 3 O L A B S</p>
        </div>

        <div className="flex gap-5">
          <p>Bank</p>
          <p>Nedbank</p>
        </div>

        <div className="flex gap-5">
          <p>Card Number</p>
          <p>9603 **** **** **58</p>
        </div>

        <div className="flex gap-5">
          <p>CSS</p>
          <p>***</p>
        </div>

        <div className="flex gap-4">
        <button className="bg-custom-green px-4 py-2.5  mt-3 rounded-3xl">
        <span className="font-TelegraphRegular text-black">
          Update
        </span>
        </button>

        <button className="bg-custom-green px-4 py-2.5 mt-3 rounded-3xl">
        <span className="font-TelegraphRegular text-black">
          Delete
        </span>
        </button>
        </div>

      </div>

    
      <div className="flex flex-col gap-2 ml-5 mt-10">
        <p className=" uppercase text-white text-xl font-TelegraphBold">Billing Information</p>
        <hr className=" w-4/6 text-custom-green "></hr>

        <div className="flex gap-5">
          <p>Email</p>
          <p>radiyya@w3olabs.xyz</p>
        </div>

        <div className="flex gap-5">
          <p>Company Name</p>
          <p>W 3 O L A B S</p>
        </div>

        <div className="flex gap-5">
          <p>Address</p>
          <p>The Unit, 123 Prestwich St</p>
        </div>

        <div className="flex gap-5">
          <p>Tax Number</p>
          <p>**************</p>
        </div>

        

      </div>
      

      </div>
    </div>
  )
}

export default Payment