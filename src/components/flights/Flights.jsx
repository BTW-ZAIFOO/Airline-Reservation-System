import React from "react";
import { Plane } from "lucide-react";

const flightsData = [
  {
    from: "New York (JFK)",
    to: "London (LHR)",
    date: "2025-12-20",
    departure: "08:30 AM",
    arrival: "08:45 PM",
    price: "$799",
  },
  {
    from: "Los Angeles (LAX)",
    to: "Tokyo (NRT)",
    date: "2025-12-22",
    departure: "11:00 AM",
    arrival: "03:30 PM",
    price: "$950",
  },
  {
    from: "Paris (CDG)",
    to: "Dubai (DXB)",
    date: "2025-12-25",
    departure: "09:15 AM",
    arrival: "05:00 PM",
    price: "$650",
  },
];

const Flights = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Available Flights
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Browse and book flights from top destinations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flightsData.map((flight, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Plane className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {flight.from} → {flight.to}
                </h3>
              </div>

              <div className="text-gray-600 mb-4 space-y-1">
                <p>
                  <span className="font-semibold">Date:</span> {flight.date}
                </p>
                <p>
                  <span className="font-semibold">Departure:</span>{" "}
                  {flight.departure}
                </p>
                <p>
                  <span className="font-semibold">Arrival:</span>{" "}
                  {flight.arrival}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="text-xl font-bold text-blue-600">
                  {flight.price}
                </span>
                <button className="px-4 py-2 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow hover:bg-yellow-500 hover:scale-105 transition-transform duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flights;
