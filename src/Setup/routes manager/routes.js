import React from "react";

//Packages import
import {Routes, Route } from "react-router-dom";

//pages import
import Dashboard from "../../Pages/dashboard/dashboard";
import Posts from "../../Pages/posts/posts";
import Galleries from "../../Pages/galleries/galleries";
import Instagram from "../../Pages/Instagram/Instagram";
import Facebook from "../../Pages/Facebook/facebook";
import Twitter from "../../Pages/Twitter/twitter";
import Create from "../../Pages/Create/Create";
import Products from "../../Pages/Products/Products";
import Settings from "../../Pages/Settings/Settings";
import Account from "../../Pages/Account/account";
import Support from "../../Pages/Support/Support";
import EditPost from "../../Pages/Edit-post/edit-post";


const router = () => {

 return (
  
  //A <Routes> looks through its children <Route>s and renders the first one that matches the current URL.
  <Routes>
   <Route path='/' exact element={<Dashboard />} />
   <Route path='/posts' element={<Posts />} />
   <Route path='/galleries' element={<Galleries />} />
   <Route path='/instagram' element={<Instagram />} />
   <Route path='/facebook' element={<Facebook />} />
   <Route path='/twitter' element={<Twitter />} />
   <Route path='/create' element={<Create />} />
   <Route path='/products' element={<Products />} />
   <Route path='/settings' element={<Settings />} />
   <Route path='/account' element={<Account />} />
   <Route path='/support' element={<Support />} />
   <Route path='/edit-post' element={<EditPost />} />
  </Routes>
 );
};

export default router;