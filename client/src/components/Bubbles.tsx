 import React from 'react'
 
 const Bubbles = ({bubbleText}) => {
   return (
    <div className="flex cursor-pointer relative h-24 rounded-lg items-end w-2/5 ">
    <img
      src="/smiley.svg"
      alt="smiley-icon"
      className="w-14 h-14 mr-2 mb-1"
    />
    <div className="text-black text-xs bg-custom-green rounded-xl p-2 ">
      <p>
        {bubbleText}
      </p>
    </div>
  </div>
   )
 }
 
 export default Bubbles