//Basic imports 
import React, { useState } from "react";
import "./NavbarMobileView.css";

//Packages import
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom";

const NavbarMobileView = (props) => {
  //react hook to set and populate variable value to use it later in html rendering
  const [expandMobileNav, setExpandMobileNav] = useState(false);
  props.onCollapseMobile(expandMobileNav);

  const handleClick = () => {
    setExpandMobileNav(!expandMobileNav);
  };

  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick} />
        </p>
      </div>

      {expandMobileNav ? (
        <div className="mobile-nav">
          <ul>
            <li className="nav-item">
              <Link
              to="/"
              >
              <span className="sidebar-icon dashboard-icon"></span> Dashboard
              </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/posts"
              >
              <span className="sidebar-icon posts-icon"></span> Posts
              </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/galleries"
              >
              <span className="sidebar-icon galleries-icon"></span> Galleries
            </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/instagram"
              >
              <span className="sidebar-icon instagram-icon"></span> Instagram
            </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/facebook"
              >
              <span className="sidebar-icon facebook-icon"></span> Facebook
            </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/twitter"
              >
              <span className="sidebar-icon twitter-icon"></span> Twitter
            </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/create"
              >
              <span className="sidebar-icon create-icon"></span> Create
            </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/products"
              >
              <span className="sidebar-icon products-icon"></span> Products
            </Link>
            </li>

            <li className="nav-item">
            <Link
              to="/settings"
              >
              <span className="sidebar-icon settings-icon"></span> Settings
            </Link>
            </li>

            <li className="nav-item small-height"> 
            <Link
              to="/account"
              >
              Account
            </Link>
            </li>

            <li className="nav-item small-height"> 
              <Link
                to="/support"
                >
                Support
              </Link>
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
