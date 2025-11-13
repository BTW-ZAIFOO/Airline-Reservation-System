import React from "react";
import { Plane, Ticket, Globe, Clock } from "lucide-react";

const Services = () => {
  return (
    <div className="relative py-24 bg-linear-to-r from-indigo-600 to-blue-500 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            Our Premium Services
          </h2>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto">
            Discover our exclusive services designed to make your travel
            experience seamless, fast, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="bg-white/20 p-4 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Plane className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast & Safe Flights</h3>
            <p className="text-gray-200">
              Experience timely departures and arrivals with top safety
              standards.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="bg-white/20 p-4 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
            <p className="text-gray-200">
              Fly to over 500 destinations worldwide with our global network.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="bg-white/20 p-4 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Ticket className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Ticket Booking</h3>
            <p className="text-gray-200">
              Book tickets online with instant e-tickets for convenience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="bg-white/20 p-4 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-200">
              Our support team is always available to assist you anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-14 right-0.5 w-full h-40 bg-linear-to-r from-yellow-400 to-yellow-200 rotate-2 opacity-30 pointer-events-none rounded-tl-3xl"></div>
    </div>
  );
};

export default Services;
