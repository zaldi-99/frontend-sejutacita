import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to='/'>
        <div className="header">
          <img src="/assets/images/line-logo.png" alt="logo" />
        </div>
      </Link>
    </>
  );
}

export default Header;
