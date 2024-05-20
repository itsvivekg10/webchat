import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="https://m.media-amazon.com/images/I/519V314rWSL._AC_UF1000,1000_QL80_.jpg" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* <img src="https://m.media-amazon.com/images/I/519V314rWSL._AC_UF1000,1000_QL80_.jpg" /> */}
      </div>
    </div>
  );
};

export default Message;
