import React , { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import AdminBar from "./Components/Top-menu/Top-menu";
import "./App.css";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
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

const App = () => {

  const [expandSidebar, setExpandSidebar] = useState(false);
  
  return (
    
      <div>
        <AdminBar/>
        <Router>
          <NavbarMobileView/>
          <Sidebar
          onCollapse={(expandSidebar) => {
            setTimeout(() => setExpandSidebar(expandSidebar), 0);
          }}
          />
          <div className={expandSidebar ? "pageContainer pageContainer-expand":"pageContainer"}>
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
