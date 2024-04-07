import React from "react";

const Welcome = () => {
  return (
    <div className="">
      <div className="flex absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg items-end">
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
  );
};

export default Welcome;
