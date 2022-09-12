import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {open ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <span className="sidebar-icon dashboard-icon"></span> Dashboard
            </li>

            <li className="nav-item">
              <span className="sidebar-icon posts-icon"></span> Posts
            </li>

            <li className="nav-item">
              <span className="sidebar-icon galleries-icon"></span> Galleries
            </li>

            <li className="nav-item">
              <span className="sidebar-icon instagram-icon"></span> Instagram
            </li>

            <li className="nav-item">
              <span className="sidebar-icon facebook-icon"></span> Facebook
            </li>

            <li className="nav-item">
              <span className="sidebar-icon twitter-icon"></span> Twitter
            </li>

            <li className="nav-item">
              <span className="sidebar-icon create-icon"></span> Create
            </li>

            <li className="nav-item">
              <span className="sidebar-icon products-icon"></span> Products
            </li>

            <li className="nav-item">
              <span className="sidebar-icon settings-icon"></span> Settings
            </li>

            <li className="nav-item small-height"> 
              Account
            </li>

            <li className="nav-item small-height">
               Support
            </li>

            <li className="nav-item small-height">
               Log Out
            </li>

          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
