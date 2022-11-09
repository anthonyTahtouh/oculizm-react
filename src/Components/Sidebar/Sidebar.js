//Basic imports 
import React, { useState } from "react";
import "./Sidebar.css";

//Components import
import SidebarList from "./SidebarList";

//Packages import
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Sidebar = (props) => {

  //react hook to set and populate variable value to use it later in html rendering
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
            
            {/* diplaying the sidebar icon depending on the state if expanded or not  */}
            {expandSidebar ? (
              <BsChevronLeft size={30} />
            ) : (
              <BsChevronRight size={30} />
            )}

          </p>
        </div>
        {/* including the SidebarList component */}
        <SidebarList expandSidebar={expandSidebar}/>


      </div>
    </div>
  );
};

export default Sidebar;




