import React from "react";
import "./SidebarList.css";

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">

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
      ) : (
        <div className="navbar-items-only-icons">
          <ul>
            <li className="nav-item">
              <span className="sidebar-icon dashboard-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon posts-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon galleries-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon instagram-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon facebook-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon twitter-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon create-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon products-icon"></span>
            </li>

            <li className="nav-item">
              <span className="sidebar-icon settings-icon"></span>
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
      )}
    </React.Fragment>
  );
};

export default SidebarList;
