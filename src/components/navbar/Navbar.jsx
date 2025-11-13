import { Plane, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem("isRegistered");
    setIsRegistered(userStatus === "true");
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive
        ? "text-yellow-400 scale-110 font-bold"
        : "text-white hover:text-yellow-400 hover:scale-105"
    }`;

  return (
    <nav className="bg-linear-to-r from-blue-500 to-indigo-600 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-12 py-5">
        <div className="text-2xl font-extrabold text-white tracking-wider flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <Plane className="w-6 h-6" />
          <NavLink to="/homepage" className={navLinkClass}>
            RESERVATION
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <NavLink to="/about" className={navLinkClass}>
            ABOUT
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            SERVICES
          </NavLink>
          <NavLink to="/testimonials" className={navLinkClass}>
            TESTIMONIALS
          </NavLink>
          <NavLink to="/flights" className={navLinkClass}>
            FLIGHTS
          </NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-3">
          <NavLink
            to="/signup"
            className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300"
          >
            SIGN UP
          </NavLink>

          {isRegistered && (
            <NavLink
              to="/login"
              className="px-5 py-2 border border-yellow-200 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              LOGIN
            </NavLink>
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-yellow-300 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-linear-to-r from-blue-600 to-indigo-700 text-white flex flex-col items-center space-y-5 py-6 shadow-lg transition-all duration-300">
          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/testimonials"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            TESTIMONIALS
          </NavLink>
          <NavLink
            to="/flights"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            FLIGHTS
          </NavLink>

          {/* Buttons for mobile */}
          <div className="flex flex-col space-y-3 w-full px-8 mt-4">
            <NavLink
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full text-center shadow-lg hover:bg-yellow-500 transition-transform duration-300"
            >
              SIGN UP
            </NavLink>

            {isRegistered && (
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 border border-yellow-200 text-white font-semibold rounded-full text-center shadow-lg hover:scale-105 transition-transform duration-300"
              >
                LOGIN
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
