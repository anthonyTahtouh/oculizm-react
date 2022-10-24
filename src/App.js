//Basic imports 
import React , { useState } from "react";
import "./App.css";

//Components import
import Sidebar from "./Components/Sidebar/Sidebar";
import AdminBar from "./Components/Top-menu/Top-menu";
import AccountBar from "./Components/Account-Bar/account-bar";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import RoutesManager from "./Setup/routes manager/routes";

//Packages import
import { BrowserRouter as Router } from "react-router-dom";

// creatining app function component
const App = () => {

  // Declare a new state variable to use in react hooks 
  const [expandSidebar, setExpandSidebar] = useState(false);
  const [expandMobileNav, setExpandMobileNav] = useState(false);
  return (
    
      <div>
        {/*using AdminBar component  */}
        <AdminBar/>
        <AccountBar/>
        <Router>
          {/*using NavbarMobileView component and pulling open nav bar data from the component */}
          <NavbarMobileView
          onCollapseMobile={(expandMobileNav) => {
            setTimeout(() => setExpandMobileNav(expandMobileNav), 0);
          }}
          />
          {/*using Sidebar component and pulling expandSidebar data from the component */}
          <Sidebar
          onCollapse={(expandSidebar) => {
            setTimeout(() => setExpandSidebar(expandSidebar), 0);
          }}
          />
          {/* desktop page container */}
          <div className={expandSidebar ? "pageContainer pageContainer-expand":"pageContainer"}>
            <RoutesManager/>
          </div>
            {/* mobile page container */}
          <div className={expandMobileNav ? "pageContainer-mobile pageContainer-expand-mobile":"pageContainer-mobile"}>
            <RoutesManager/>
          </div>
          
        </Router>
        
      </div>
  );
};

export default App;
