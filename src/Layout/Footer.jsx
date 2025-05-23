import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="pt-20 divide-y  dark:bg-gray-100 dark:text-gray-800">
        <div className="max-w-7xl flex gap-10  justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 px-5 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm gap-x-3 gap-y-8  sm:grid-cols-4">
            <div className="">
              <Link className="">
                <img className="w-[200px]" src={logo} alt="" />
              </Link>
              <p className="w-3/4">
                Hobbynest is a vibrant community platform where people connect
                through shared hobbies and interests. Whether you're into
                painting, gaming, reading, or running — there's a group here for
                everyone. Discover, join, or create your own group and turn your
                passion into meaningful connections.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide text-xl uppercase dark:text-gray-900">
                Important Links
              </h3>
              <div className="flex flex-col text-lg">
                {" "}
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/all-groups"}>All Groups</NavLink>
                <NavLink to={"/create-group"}>Create Group</NavLink>
                <NavLink to={"/my-groups"}>My Groups</NavLink>
              </div>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-xl dark:text-gray-900">
                Social media
              </div>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/faisal.ahmed.chowdhury.336926/"
                  title="Facebook"
                  target="_blank"
                  className="flex items-center p-1">
                  <FaFacebook size={24}></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/faisal-chowdhury-730a051a6/"
                  title="Linkedin"
                  target="_blank"
                  className="flex items-center p-1">
                  <FaLinkedin size={24}></FaLinkedin>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/faisalchowdhury"
                  title="Github"
                  className="flex items-center p-1">
                  <FaGithub size={24}></FaGithub>
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide text-xl uppercase dark:text-gray-900">
                Get In Touch
              </h3>

              <form action="">
                <div className="join">
                  <div className="">
                    <label className="input validator join-item border border-gray-300">
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
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                      </svg>
                      <input
                        type="email"
                        placeholder="mail@site.com"
                        required
                        className=""
                      />
                    </label>
                    <div className="validator-hint hidden">
                      Enter valid email address
                    </div>
                  </div>
                  <button className="btn border-none bg-primary text-white join-item">
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 2025 Hobbynest. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
