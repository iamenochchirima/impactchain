 import React from 'react'
 
 const Bubbles = ({bubbleText}) => {
   return (
    <div className="flex cursor-pointer relative  rounded-lg items-end  ">
    <img
      src="/smiley.svg"
      alt="smiley-icon"
      className="w-14 h-14 mr-2 mb-1"
    />
    <div className="text-black text-xs bg-custom-green rounded-xl px-2 py-2 text-justify w-3/5 ">
      <p>
        {bubbleText}
      </p>
    </div>
  </div>
   )
 }
 
 export default Bubbles