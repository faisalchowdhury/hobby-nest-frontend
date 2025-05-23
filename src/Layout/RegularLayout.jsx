import React from "react";
import "../App.css";
import Header from "./Header";
import { Outlet } from "react-router";
import Footer from "./Footer";

const RegularLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto my-6 px-5 lg:px-0">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default RegularLayout;
