import React, { useEffect, useRef, useState } from "react"
import { useCompletionsMutation } from "../../../redux/api/externalApiSlice";

const Input = () => {
    const [messages] = useCompletionsMutation();
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState("");


  const sendMessage = (e) => {
    e.preventDefault();

    console.log(message);
    setMessage("");
  };

  const calcHeight = (value: string): number => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length;
    return numberOfLineBreaks * 20 + 50;
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = `${calcHeight(text)}px`;
    }
  }, [text]);

  const handleSend = async () => {
    if (!text && !img) {
      return;
    }

    setText("");
    setImg(null);
  };


  const getMessages = async (e) => {
    e.preventDefault();
    try {
      const data = {
        message: text,
      };
      const res = await messages(data);
      console.log("Response", res);
    } catch (error) {
      console.log("Error getting messages", error);
    }
  };
  return (
    <div className="fixed z-100 bottom-10 left-64 right-10 ">
      <div className="mb-4 mx-10 flex items-center justify-between">
        <button
         className="bg-custom-gray border-x border-y border-custom-green h-14 w-56  px-2 rounded-lg py-1.5">
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
      <form
        onSubmit={getMessages}
        className=" bg-white shadow-md ml-10 rounded-lg px-2"
      >
        <div className="flex items-center mx-auto">
          <textarea
            ref={textareaRef}
            value={text}
            onInput={(e) => setText(e.currentTarget.value)}
            placeholder="Ask AI"
            className="flex-1 text-black pt-2.5 focus:outline-none outline-none appearance-none overflow-hidden "
            required
            style={{ overflow: "hidden", resize: "none", height: "50px" }}
          />
          <button type="submit" className=" focus:outline-none bottom-0">
            <img src="/send.svg" alt="" className="size-8" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
