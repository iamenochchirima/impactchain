import React, { FC } from "react";
import Prompt from "./Prompt";
import AIResponse from "./AIResponse";
import { Message } from "../AskAI";

type Props = {
  messages: Message[] | null;
  livetext: string;
};

const Chats: FC<Props> = ({ messages, livetext }) => {
  return (
    <div className="flex flex-col gap-3">
      {messages?.map((message, index) => {
        if (message.from === "user")
          return <Prompt key={index} {...{ message }} />;
        else return <AIResponse key={index} {...{ message, livetext }} />;
      })}
    </div>
  );
};

export default Chats;
