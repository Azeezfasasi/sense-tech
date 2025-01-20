import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import SignUp from "./app/SignUp";
import Login from "./app/Login";
import CourseCategory from "./app/CourseCategory";
import CouseList from "./app/CouseList";
import Cart from "./app/Cart";
import Checkout from "./app/Checkout";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app/signup" element={<SignUp />} />
        <Route path="/app/login" element={<Login/>} />
        <Route path="/app/coursecategory" element={<CourseCategory />} />
        <Route path="/app/couselist" element={<CouseList />} />
        <Route path="/app/cart" element={<Cart />} />
        <Route path="/app/checkout" element={<Checkout />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
