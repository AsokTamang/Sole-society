import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Help from "./components/help";
import Signin from "./components/signin";
import Find from "./components/find";
import Detail from "./components/detail";
import Layout from "./components/Layout";
import NotFound from "./components/notfound";
import Authenticated from "./components/authentication";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
           
           <Route element={<Authenticated/>}>
              <Route path="/findstore" element={<Find />} />
          </Route>
         
          <Route path="/help" element={<Help />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route  path="/signin" element={<Signin />}/>
       
       

        <Route path="/about" element={<About />} />
        <Route path="/about/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
