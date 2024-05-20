import React from "react";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <img src="https://m.media-amazon.com/images/I/519V314rWSL._AC_UF1000,1000_QL80_.jpg" />
        <span>raju</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
