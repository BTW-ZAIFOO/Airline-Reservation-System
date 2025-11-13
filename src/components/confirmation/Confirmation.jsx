import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ bookingData }) => {
  const navigate = useNavigate();

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 max-w-md w-full border border-white/10 text-center">
          <div className="text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-bold text-white mb-4">
            No Booking Found
          </h2>
          <p className="text-gray-300 mb-6">
            Please complete your flight booking first
          </p>
          <button
            onClick={() => navigate("/booking")}
            className="w-full py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Book Your Flight
          </button>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">
        🎉
      </div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce delay-500">
        ✈️
      </div>
      <div className="absolute top-1/3 right-20 text-2xl opacity-30 animate-bounce delay-300">
        ⭐
      </div>
      <div className="absolute bottom-1/3 left-20 text-2xl opacity-30 animate-bounce delay-700">
        🏆
      </div>

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 md:p-16 border border-white/10 relative z-10 transform hover:scale-[1.01] transition-all duration-500 my-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-linear-to-r from-green-400 to-cyan-500 rounded-full mb-4 shadow-lg">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-3">
            Booking Confirmed!
          </h2>
          <p className="text-gray-300 text-sm md:text-lg">
            Your adventure awaits! Here's your booking summary
          </p>
          <div className="inline-block mt-2 px-4 py-1 bg-green-500/20 border border-green-400/30 rounded-full">
            <span className="text-green-400 text-sm font-semibold">
              Booking ID: {bookingData.bookingId}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <div className="bg-white/5 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                <span className="mr-2">👤</span> Passenger Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Full Name</span>
                  <span className="text-white font-semibold">
                    {bookingData.name}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Email</span>
                  <span className="text-white font-semibold">
                    {bookingData.email}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Passengers</span>
                  <span className="text-white font-semibold">
                    {bookingData.passengers}{" "}
                    {bookingData.passengers > 1 ? "travelers" : "traveler"}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
                <span className="mr-2">💺</span> Flight Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Seat Class</span>
                  <span className="text-white font-semibold">
                    {bookingData.seatClass}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Departure</span>
                  <span className="text-white font-semibold">
                    {formatDate(bookingData.departureDate)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">Return</span>
                  <span className="text-white font-semibold">
                    {bookingData.returnDate
                      ? formatDate(bookingData.returnDate)
                      : "One-way trip"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {bookingData.selectedAirline && (
              <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-lg">
                <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
                  <span className="mr-2">🏢</span> Airline Information
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-4xl mb-2">
                      {bookingData.selectedAirline.logo}
                    </div>
                    <h4 className="text-white font-bold text-2xl">
                      {bookingData.selectedAirline.name}
                    </h4>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-300 font-semibold text-lg">
                      {bookingData.selectedAirline.departure} -{" "}
                      {bookingData.selectedAirline.arrival}
                    </div>
                    <div className="text-gray-400 text-sm">Direct Flight</div>
                  </div>
                </div>
                <div className="bg-black/20 rounded-xl p-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Flight Duration</span>
                    <span className="text-cyan-300 font-semibold">3h 30m</span>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white/5 border border-green-500/20 rounded-2xl p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
                <span className="mr-2">📋</span> Booking Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Booking Date</span>
                  <span className="text-white font-semibold">
                    {bookingData.bookingDate}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-gray-400">Status</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                    Confirmed
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">E-ticket</span>
                  <span className="text-cyan-400 font-semibold">
                    Will be emailed shortly
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/homepage")}
            className="flex-1 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            <span className="mr-2">🏠</span> Back to Home
          </button>
          <button
            onClick={() => window.print()}
            className="flex-1 py-4 bg-linear-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
          >
            <span className="mr-2">🖨️</span> Print Confirmation
          </button>
          <button
            onClick={() => navigate("/booking")}
            className="flex-1 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
          >
            <span className="mr-2">✈️</span> New Booking
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            📧 A confirmation email has been sent to {bookingData.email}
          </p>
          <p className="text-gray-400 text-sm mt-1">
            ⏰ Please arrive at the airport 2 hours before departure
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
