import React, { memo } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar_page">
      <div className="container">
        <div className="navbar">
          <Link to={"/"} className="header_logo">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
