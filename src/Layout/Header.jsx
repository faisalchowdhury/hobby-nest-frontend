import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
const Header = () => {
  const menu = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>All Groups</NavLink>
      <NavLink>Create Group</NavLink>
      <NavLink>My Groups</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {menu}
            </ul>
          </div>
          <a>
            <img className="w-[200px]" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 text-lg">
            {menu}
          </ul>
        </div>
        <div className="navbar-end text-lg">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
