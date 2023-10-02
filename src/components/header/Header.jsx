import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header container">
      <div className="head-container">
        <div className="head-content">
          <div className="head-search">
            <input type="text" placeholder="Search" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="head-tag">
            <p>Relevance</p>
            <i class="fa-solid fa-caret-down"></i>
          </div>
          <div className="head-tag">
            <p>All brands</p>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
