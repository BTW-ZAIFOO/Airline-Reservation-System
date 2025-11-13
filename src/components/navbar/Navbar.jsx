import { Plane } from "lucide-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem("isRegistered");
    setIsRegistered(userStatus === "true");
  }, []);

  return (
    <div className="flex justify-between items-center px-12 py-6 bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="text-xl font-extrabold text-white tracking-wider hover:scale-105 transition-transform duration-300">
        <NavLink to="/homepage">
          AIRLINE-RESERVATION 
        </NavLink>
      </div>

      <div className="hidden md:flex space-x-8 text-white font-medium">
        <NavLink
          to="/about"
          className="hover:text-yellow-400 hover:scale-105 transition duration-300"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/services"
          className="hover:text-yellow-400 hover:scale-105 transition duration-300"
        >
          SERVICES
        </NavLink>
        <NavLink
          to="/testimonials"
          className="hover:text-yellow-400 hover:scale-105 transition duration-300"
        >
          TESTIMONIALS
        </NavLink>
        <NavLink
          to="/flights"
          className="hover:text-yellow-400 hover:scale-105 transition duration-300"
        >
          FLIGHTS
        </NavLink>
      </div>

      <div className="space-x-3">
        <NavLink
          to="/signup"
          className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
        >
          SIGN UP
        </NavLink>

        {isRegistered && (
          <NavLink
            to="/login"
            className="px-5 py-2 border border-yellow-200 text-blue-900 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            LOGIN
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
