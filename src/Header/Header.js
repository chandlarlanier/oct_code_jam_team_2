import React from "react";
import logo from "../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__description">
        <p>Discover the spookiest movies for your Halloween night!</p>
      </div>
    </header>
  );
};

export default Header;
