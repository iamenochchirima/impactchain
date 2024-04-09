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
  const [livetext, setLiveText] = useState<string>("");

  return (
    <div className="relative">
      {!messages ? <Welcome /> : <Chats {...{messages, livetext}} />}
      <Input {...{messages, setMessages, livetext, setLiveText}} />
    </div>
  );
};

export default AskAI;
