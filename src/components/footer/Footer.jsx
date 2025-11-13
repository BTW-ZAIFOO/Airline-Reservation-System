import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative bg-linear-to-r from-blue-900 via-indigo-900 to-blue-800 text-white py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute w-40 h-40 bg-blue-400/20 rounded-full -top-10 -left-10 animate-ping"></div>
        <div className="absolute w-56 h-56 bg-indigo-500/10 rounded-full bottom-0 right-0 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-wide">
            AIRLINE-RESERVATION
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Fly beyond limits with our seamless, fast, and reliable flight
            services worldwide. Book your next adventure with ease!
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/flights" className="hover:text-yellow-400 transition">
                Flights
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-yellow-400 transition"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:text-yellow-400 transition">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-400">
            Contact
          </h3>
          <p className="text-gray-300">123 Airline Street, New York, NY</p>
          <p className="text-gray-300">Email: support@airfly.com</p>
          <p className="text-gray-300">Phone: +1 234 567 890</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-yellow-400">
            Newsletter
          </h3>
          <p className="text-gray-300 mb-4">
            Subscribe to get the latest flight deals & updates.
          </p>
          <div className="flex items-center border border-yellow-400 rounded-full overflow-hidden shadow-md hover:shadow-lg transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-blue-900 placeholder:text-yellow-400 focus:outline-none"
            />
            <button className="bg-yellow-400 text-blue-900 px-4 py-2 hover:bg-yellow-500 transition flex items-center gap-1">
              <Send className="w-4 h-4" /> Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="relative border-t border-blue-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-16 z-10">
        <p className="text-gray-400 text-sm text-center md:text-left">
          &copy; 2025 AirFly. All rights reserved.
        </p>

        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
