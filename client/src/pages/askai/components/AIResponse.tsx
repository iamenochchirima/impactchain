import React, { FC } from "react";
import { Message } from "../AskAI";
type Props = {
  message: Message;
  livetext: string;
};
const AIResponse: FC<Props> = ({ message, livetext }) => {
  return (
    <div className="flex items-startborder-gray-200 rounded-2xl p-2 bg-gray-800 gap-2.5">
      <img src="/smiley.svg" alt="smiley" className="h-8 w-8" />
      <div className="flex flex-col gap-1 w-full">
        <h1 className="font-bold mb-2 mt-2">AI</h1>
        <div className="flex flex-col w-full  leading-1.5 pb-4 rounded-e-xl rounded-es-xl ">
          <p className=" font-normal text-gray-900 dark:text-white">
            {message.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIResponse;
