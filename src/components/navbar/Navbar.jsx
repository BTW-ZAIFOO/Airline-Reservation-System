import { Plane } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-12 py-8 bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg">
        <div className="text-4xl font-extrabold text-white tracking-wider hover:scale-105 transition-transform duration-300">
          <NavLink to="/HeroSection">
            <Plane />
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/about"
            className="text-white hover:text-yellow-400 hover:scale-105 transition duration-300 font-medium"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/Services"
            className="text-white hover:text-yellow-400 hover:scale-105 transition duration-300 font-medium"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/Testimonials"
            className="text-white hover:text-yellow-400 hover:scale-105 transition duration-300 font-medium"
          >
            TESTIMONIALS
          </NavLink>
          <NavLink
            to="/Flights"
            className="text-white hover:text-yellow-400 hover:scale-105 transition duration-300 font-medium"
          >
            FLIGHTS
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/signup"
            className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
          >
            SIGN UP
          </NavLink>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
