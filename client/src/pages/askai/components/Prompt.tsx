import React, { FC } from 'react'
import { CiUser } from 'react-icons/ci'
import { Message } from '../AskAI'
type Props = {
    message: Message
    }
const Prompt: FC<Props> = ({message}) => {
  return (
    <div className="flex items-startborder-gray-200 rounded-2xl p-2 bg-custom-gray gap-2.5">
    <CiUser className="w-8 h-8 text-white" />
    <div className="flex flex-col gap-1 w-full">
        <h1 className="font-bold mb-2 mt-2">You</h1>
      <div className="flex flex-col w-full  leading-1.5 pb-4 rounded-e-xl rounded-es-xl ">
        <p className=" font-normal text-gray-900 dark:text-white">
            {message.message}
        </p>
      </div>
    </div>
  </div>
  )
}

export default Prompt