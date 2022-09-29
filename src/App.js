//Basic imports 
import React , { useState } from "react";
import "./App.css";

//Components import
import Sidebar from "./Components/Sidebar/Sidebar";
import AdminBar from "./Components/Top-menu/Top-menu";
import AccountBar from "./Components/Account-Bar/account-bar";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import Dashboard from "./Pages/dashboard/dashboard";
import Posts from "./Pages/posts/posts";
import Galleries from "./Pages/galleries/galleries";
import Instagram from "./Pages/Instagram/Instagram";
import Facebook from "./Pages/Facebook/facebook";
import Twitter from "./Pages/Twitter/twitter";
import Create from "./Pages/Create/Create";
import Products from "./Pages/Products/Products";
import Settings from "./Pages/Settings/Settings";
import Account from "./Pages/Account/account";
import Support from "./Pages/Support/Support";

//Packages import
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

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
            {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Routes>
              <Route path='/' exact element={<Dashboard/>}/>
              <Route path='/posts' element={<Posts/>}/>
              <Route path='/galleries' element={<Galleries/>}/>
              <Route path='/instagram' element={<Instagram/>}/>
              <Route path='/facebook' element={<Facebook/>}/>
              <Route path='/twitter' element={<Twitter/>}/>
              <Route path='/create' element={<Create/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/account' element={<Account/>}/>
              <Route path='/support' element={<Support/>}/>
            </Routes>
          </div>
            {/* mobile page container */}
          <div className={expandMobileNav ? "pageContainer-mobile pageContainer-expand-mobile":"pageContainer-mobile"}>
            <Routes>
              <Route path='/' exact element={<Dashboard/>}/>
              <Route path='/posts' element={<Posts/>}/>
              <Route path='/galleries' element={<Galleries/>}/>
              <Route path='/instagram' element={<Instagram/>}/>
              <Route path='/facebook' element={<Facebook/>}/>
              <Route path='/twitter' element={<Twitter/>}/>
              <Route path='/create' element={<Create/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/account' element={<Account/>}/>
              <Route path='/support' element={<Support/>}/>
            </Routes>
          </div>
          
        </Router>
        
      </div>
  );
};

export default App;
