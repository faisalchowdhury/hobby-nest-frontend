import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { ThemeContext } from "../Context/ThemeContext";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <Header></Header>
      <div
        className={`flex flex-col md:flex-row min-h-screen bg-gray-50 ${
          darkMode === true ? "bg-slate-700" : "bg-slate-100"
        } max-w-7xl mx-auto rounded-lg m-5`}>
        <aside className="md:w-60  shadow p-4">
          <h1 className="text-lg font-bold mb-4"> Dashboard</h1>
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/dashboard"
              className="hover:bg-gray-600 px-3 py-2 rounded">
              Dashboard
            </NavLink>
            <NavLink
              to="/dashboard/create-group"
              className="hover:bg-gray-600 px-3 py-2 rounded">
              Create Group
            </NavLink>
            <NavLink
              to="/dashboard/my-groups"
              className="hover:bg-gray-600 px-3 py-2 rounded">
              My Groups
            </NavLink>
            <NavLink
              to="/dashboard/all-groups"
              className="hover:bg-gray-600 px-3 py-2 rounded">
              All Groups
            </NavLink>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Outlet></Outlet>
        </main>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
