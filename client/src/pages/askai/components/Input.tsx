import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);



  const handleSend = async () => {
    if (!text && !img) {
      return;
    }

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src="smiley.svg" alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
          <img src="smiley.svg" alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
