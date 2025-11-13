import React from "react";
import { Plane, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-linear-to-r from-blue-700 via-indigo-800 to-purple-700 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full -top-20 -left-20 animate-ping"></div>
        <div className="absolute w-96 h-96 bg-indigo-400/20 rounded-full -bottom-32 -right-32 animate-ping delay-500"></div>
        <div className="absolute w-56 h-56 bg-purple-500/20 rounded-full top-1/4 left-1/3 animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 lg:px-16 h-full pb-24">
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight animate-fade-in-down">
            Fly Beyond Limits
          </h1>
          <p className="text-lg text-gray-200 sm:text-xl animate-fade-in-up delay-200">
            Experience seamless, fast, and reliable flight services worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <button className="px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-xl hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 animate-bounce-slow">
              Book Now
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition duration-300 animate-bounce-slow delay-100">
              Learn More
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          <div className="w-96 h-96 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl animate-float">
            <Plane className="w-24 h-24 text-white animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-6 animate-fade-in-up">
        <div className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
          <Globe className="w-5 h-5" />
          500+ Destinations
        </div>
        <div className="bg-white/20 backdrop-blur-xl text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
          <Plane className="w-5 h-5" />
          Fast Booking
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
