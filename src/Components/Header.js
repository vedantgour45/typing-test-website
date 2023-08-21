import React from "react";
import AccountCircle from "./AccountCircle";
import icon from "../Assets/logo2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={icon} alt="icon" />
        <div className="tagline">Keys Too Success</div>
      </div>

      <div className="user-icon">
        <AccountCircle />
      </div>
    </div>
  );
};

export default Header;
