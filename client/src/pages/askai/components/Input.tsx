import React, { FC, useEffect, useRef } from "react";
import { Message } from "../AskAI";
import { useAuth } from "../../../hooks/AppContext";
import { v4 as uuid } from "uuid";

type SetMessagesFunction = React.Dispatch<
  React.SetStateAction<Message[] | null>
>;

type WsResponse = {
  type: "data" | "end" | "start";
  content: string | null;
};

type Props = {
  messages: Message[] | null;
  setMessages: SetMessagesFunction;
};
let aiMessageId = "";

const Input: FC<Props> = ({ messages, setMessages }) => {
  const { socket } = useAuth();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = React.useState("");

  const calcHeight = (value: string): number => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    return numberOfLineBreaks * 20 + 50;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${calcHeight(text)}px`;
    }
  }, [text]);

  const handleChatGPTResponse = (aiMessageId: string) => (res: WsResponse) => {
    if (res.type === "data") {
      setMessages((prevMessages) => {
        if (!prevMessages) return [];
        return prevMessages.map((message) => {
          if (message.id === aiMessageId) {
            return {
              ...message,
              message: message.message + (res.content || ""),
            };
          } else {
            return message;
          }
        });
      });
    } else if (res.type === "end") {
      aiMessageId = "";
      console.log("Stream ended.");
    }
  };

  const runPrompt = () => {
    if (!text) return;
    if (socket) {
      socket.emit("streamChatGPT", text);
      setText("");

      setMessages((prev) => {
        const _message: Message = { id: uuid(), from: "user", message: text };
        if (!prev) return [_message];
        return [...prev, _message];
      });

      setMessages((prev) => {
        const _message: Message = { id: aiMessageId, from: "AI", message: "" };
        if (!prev) return [_message];
        return [...prev, _message];
      });

      aiMessageId = uuid();
      socket.on("chatGPTResponse", handleChatGPTResponse(aiMessageId));
      socket.on("chatGPTError", (errorMessage) => {
        console.error("Error from server:", errorMessage);
      });
    } else {
      console.error("Socket is not connected");
    }
  };

  return (
    <div className="fixed z-50 bottom-0 bg-black h-[100px] left-64 right-0 p-10 ">
    <div className="fixed z-100 bottom-10 left-64 right-10 ">
      {!messages && (
        <div className="mb-4 ml-10 flex items-center justify-between">
          <button className="bg-custom-gray border-x border-y border-custom-green h-14 w-56  px-2 rounded-lg py-1.5">
            How can I improve my water use efficiency...
          </button>
          <button className="bg-custom-gray border-x border-y border-custom-green h-14 w-56  px-2 rounded-lg py-1.5">
            What IoT devices can I use ...
          </button>
          <button className="bg-custom-gray border-x border-y border-custom-green h-14 w-56  px-2 rounded-lg py-1.5">
            Automate the following ...
          </button>
          <button className="bg-custom-gray border-x border-y border-custom-green h-14 w-56  px-2 rounded-lg py-1.5">
            How do I calculate my ...
          </button>
        </div>
      )}
      <form
        className=" bg-white shadow-md ml-10 rounded-lg px-2"
      >
        <div className="flex items-center mx-auto">
          <textarea
            ref={textareaRef}
            value={text}
            onInput={(e) => setText(e.currentTarget.value)}
            placeholder="Ask AI"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                runPrompt();
              }
            }}
            className="flex-1 text-black pt-2.5 focus:outline-none outline-none appearance-none overflow-hidden "
            required
            style={{ overflow: "hidden", resize: "none", height: "50px" }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              runPrompt();
            }}
           type="button" className=" focus:outline-none bottom-0">
            <img src="/send.svg" alt="" className="size-8" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Input;
