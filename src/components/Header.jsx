import React from "react";
import "./Header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <header>
      <img className="airImg" src={logo} alt="windbnb-logo" />
    </header>
  );
}

export default Header;
