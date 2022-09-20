//Basic imports 
import React, { useState } from "react";
import "./Sidebar.css";

//Components import
import SidebarList from "./SidebarList";

//Packages import
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Sidebar = (props) => {
  const [expandSidebar, setExpandSidebar] = useState(false);
  props.onCollapse(expandSidebar);
  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expanded sidebar":"sidebar"}>

        <div className="icon-for-sidebar-expanded-and-collapsed">
          <p onClick={handleExpandClick}>

            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}

          </p>
        </div>

        <SidebarList expandSidebar={expandSidebar}/>


      </div>
    </div>
  );
};

export default Sidebar;




