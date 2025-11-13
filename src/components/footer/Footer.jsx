import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-bold mb-4">AIRLINE-RESERVATION</h2>
          <p className="text-gray-300">
            Fly beyond limits with our seamless, fast, and reliable flight
            services worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
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
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-gray-300">123 Airline Street, New York, NY</p>
          <p className="text-gray-300">Email: support@airfly.com</p>
          <p className="text-gray-300">Phone: +1 234 567 890</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Subscribe for latest flight deals & updates
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-full focus:outline-none text-yellow-400 border border-yellow-400"
            />
            <button className="px-4 py-2 bg-yellow-400 text-blue-900 rounded-r-full font-semibold hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-16">
        <p className="text-gray-400 text-sm">
          &copy; 2025 AirFly. All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-400 transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
