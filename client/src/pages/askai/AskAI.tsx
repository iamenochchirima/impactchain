import React, { useState } from "react";
import { useCompletionsMutation } from "../../redux/api/externalApiSlice";

const AskAI = () => {
  const [messages, { isSuccess, isError, error }] = useCompletionsMutation();

  const getMessages = async () => {
    try {
      const data = {
        message: "How are you!?",
      };
      const res = await messages(data);
      console.log("Response", res);
    } catch (error) {
      console.log("Error getting messages", error);
    }
  };

  const [message, setMessage] = useState('');

  // Function to handle sending the message
  const sendMessage = (e) => {
    e.preventDefault();
    // Handle the message
    console.log(message);
    setMessage(''); // Clear input after sending
  };
  return (
    <div className="relative">
      <h1>Ask AI</h1>
      <button onClick={getMessages}>Get Messages</button>
      <div className="flex h-screen bg-black justify-center items-center">
      <div className="flex cursor-pointer relative h-24 rounded-lg items-end  mt-10 ">
          <img
            src="/smiley.svg"
            alt="smiley-icon"
            className="w-24 h-24 mr-2 mb-1"
          />
          <div className="text-white w-[250px] mb-[70px] bg-black rounded-3xl p-3">
            <p className="text-center">
            Hi I’m your dedicated AI, ask me any questions about the platform..
            </p>
          </div>
        </div>
      </div>
      <form onSubmit={sendMessage} className="fixed z-100 bottom-10 left-[300px] right-[300px] pb-4 pt-2 bg-white shadow-md">
      <div className="flex items-center pl-16 pr-4 max-w-screen-xl mx-auto">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </form>
    </div>
  );
};

export default AskAI;
