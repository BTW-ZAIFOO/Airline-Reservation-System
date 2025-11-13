import React from 'react';
import { Plane, Globe, Clock } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">About Our Airline</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We provide seamless and safe air travel experiences worldwide. Our mission is to make your journey fast, reliable, and unforgettable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Fast & Safe Flights */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <Plane className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast & Safe Flights</h3>
            <p className="text-gray-600">
              Enjoy timely departures and arrivals with the highest safety standards in the industry.
            </p>
          </div>

          {/* Global Destinations */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <Globe className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Destinations</h3>
            <p className="text-gray-600">
              Fly to over 500 destinations worldwide with our extensive network of airlines and partners.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300">
            <Clock className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer support team is always available to assist you at any stage of your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
