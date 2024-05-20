import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Chats from "./Chats";
const SideBar = ({ file, displayName, photoURL }) => {
  return (
    <div className="sidebar">
      <NavBar file={file} displayName={displayName} photoURL={photoURL} />
      <Search />
      <Chats />
    </div>
  );
};

export default SideBar;
