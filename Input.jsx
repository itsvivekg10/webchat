import React from "react";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="type message"></input>
      <div className="send">
        <button>send</button>
      </div>
    </div>
  );
};

export default Input;
