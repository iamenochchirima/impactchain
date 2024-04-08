import React, { FC } from "react";
import Prompt from "./Prompt";
import AIResponse from "./AIResponse";
import { Message } from "../AskAI";

type Props = {
  messages: Message[] | null;
};

const Chats: FC<Props> = ({ messages }) => {
  return (
   <div className="fixed  bottom-28 top-28 overflow-hidden">
       <div className="flex flex-col gap-3  overflow-auto max-h-full">
      {messages?.map((message, index) => {
        if (message.from === "user")
          return <Prompt key={index} {...{ message }} />;
        else return <AIResponse key={index} {...{ message }} />;
      })}
    </div>
   </div>
  );
};

export default Chats;
