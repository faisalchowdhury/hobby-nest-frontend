import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Newsletter = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`${
          darkMode === true
            ? "bg-slate-800"
            : "bg-gradient-to-r from-slate-100 to-slate-50"
        } p-10 md:p-20 rounded space-y-3 `}>
        <h2 className="text-2xl">Join Our Newsletter</h2>
        <p>
          Join our newsletter to get hobby inspiration, community highlights,
          and upcoming group events delivered to your inbox.
        </p>
        <div className="join">
          <div className=" border-slate-700 border border-r-0 rounded">
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                className="md:w-[200px]"
                type="email"
                placeholder="mail@site.com"
                required
              />
            </label>
          </div>
          <button className="btn border-0 border-black join-item rounded bg-black text-white rounded-l-none">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
