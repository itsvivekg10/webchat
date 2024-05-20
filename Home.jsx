import React from "react";
import SideBar from "./component/SideBar";
import Chat from "./component/Chat";

const Home = ({ file, displayName, photoURL }) => {
  return (
    <div className="home">
      <div className="container">
        <SideBar file={file} displayName={displayName} photoURL={photoURL} />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
