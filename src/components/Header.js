import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src="logo.png" alt="logo" />
      </div>
      <div className="title-container">
        <span>COZ Shopping</span>
      </div>
      <div className="hamgugger-container">
        <img src="hambugger.png" alt="hamburger"></img>
      </div>
    </header>
  );
};

export default Header;
