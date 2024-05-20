import React from "react";

const NavBar = ({ file, displayName, photoURL }) => {
  return (
    <div className="navbar">
      <span className="logo">WEB CHAT</span>
      <div className="user">
        <img src={photoURL} alt="" />
        <span>{displayName}</span>
        <button>log out</button>
      </div>
    </div>
  );
};

export default NavBar;
