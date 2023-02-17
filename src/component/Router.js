import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home"
import About from "../screens/About"
import Noti from "../screens/Noti"
import Product from '../screens/Product';
import Navbar from './Navbar';

function RouterApp() {
  return (
    <div>
<BrowserRouter>
 <Navbar />
  <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/About" element={<About />} />
    <Route  path="/Noti" element={<Noti />} />
    <Route  path="/Product" element={<Product />}/>
  </Routes>
</BrowserRouter>


    </div>
  )
}

export default RouterApp