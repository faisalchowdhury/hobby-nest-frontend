import React from "react";
import "../App.css";
import Header from "./Header";
import { Outlet } from "react-router";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-10 gap-10 py-5">
          <div className="col-span-8">
            <Outlet></Outlet>
          </div>
          <div className="col-span-2">
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
