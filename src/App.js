import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import AdminBar from "./Components/Top-menu/Top-menu";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";

const App = () => {
  return (
    
      <div>
        <AdminBar/>
        <NavbarMobileView/>
        <Sidebar/>
      </div>
  );
};

export default App;
