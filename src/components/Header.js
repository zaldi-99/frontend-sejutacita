import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <img src="/assets/images/line-logo.png" alt="logo" />
        </Link>
      </div>
      <div className="header-bookmarks">
        <Link to="/bookmarks" className='bookmarks-btn'>
          <p>Bookmarks</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
