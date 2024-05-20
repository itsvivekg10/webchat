import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      {" "}
      <div className="userChat">
        <img src="https://m.media-amazon.com/images/I/519V314rWSL._AC_UF1000,1000_QL80_.jpg" />
        <div className="userChatInfo">
          <span>Rohit</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://m.media-amazon.com/images/I/519V314rWSL._AC_UF1000,1000_QL80_.jpg" />
        <div className="userChatInfo">
          <span>Rahul</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
