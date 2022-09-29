import React from "react";
import "./Top-menu.css";


const AdminBar = () => {

  return (
    <div className="container-fluid">
      <div className="admin-bar">
      <ul>
            <li>
                <button style={{color: 'red'}}>System</button>
            </li>
            <li>
                <button>Manage Clients</button>
            </li>
            <li>
                <button>Custom CSS</button>
            </li>
            <li>
                <button>Posts</button>
            </li>
            <li>
                <button>Events</button>
            </li>
            <li>
                <button>Media</button>
            </li>

            <li>
                <button>Logs</button>
            </li>
        </ul>
        {/* <button className="oculizm-logo" ></button> */}
      </div>
    </div>
  );
};

export default AdminBar;




