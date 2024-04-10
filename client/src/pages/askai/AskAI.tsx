import { useState } from "react";
import Chats from "./components/Chats";
import Input from "./components/Input";
import Welcome from "./components/Welcome";

export type Message = {
  id: string;
  from: "user" | "AI";
  message: string;
};

const AskAI = () => {
  const [messages, setMessages] = useState<Message[]| null>(null);

  return (
    <div className="relative w-full">
      {!messages ? <Welcome /> : <Chats {...{messages}} />}
      <Input {...{messages, setMessages}} />
    </div>
  );
};

export default AskAI;
