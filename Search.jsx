import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="find a user" />
      </div>
      <div className="userChat">
        <img src="https://m.media-amazon.com/images/I/519V314rWSL._AC_UF1000,1000_QL80_.jpg" />
        <div className="userChatInfo">
          <span>raju</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
