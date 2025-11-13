import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const airlines = [
  {
    name: "AirFly",
    logo: "🛩️",
    departure: "08:00",
    arrival: "11:30",
    color: "from-blue-500 to-cyan-400",
  },
  {
    name: "SkyJet",
    logo: "✈️",
    departure: "09:30",
    arrival: "12:45",
    color: "from-purple-500 to-pink-400",
  },
  {
    name: "CloudAir",
    logo: "☁️",
    departure: "14:00",
    arrival: "17:15",
    color: "from-orange-500 to-red-400",
  },
];

const BookingForm = ({ setBookingData }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    passengers: 1,
    departureDate: "",
    returnDate: "",
    seatClass: "Economy",
    airline: airlines[0].name,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    if (form.passengers < 1) {
      newErrors.passengers = "At least 1 passenger is required";
    }

    if (!form.departureDate) {
      newErrors.departureDate = "Departure date is required";
    } else {
      const today = new Date().toISOString().split("T")[0];
      if (form.departureDate < today) {
        newErrors.departureDate = "Departure date cannot be in the past";
      }
    }

    if (form.returnDate && form.returnDate < form.departureDate) {
      newErrors.returnDate = "Return date cannot be before departure date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const selectedAirline = airlines.find((a) => a.name === form.airline);
    const bookingData = {
      ...form,
      selectedAirline,
      bookingId: `BK${Date.now()}`,
      bookingDate: new Date().toLocaleDateString(),
    };

    if (setBookingData && typeof setBookingData === "function") {
      setBookingData(bookingData);
    } else {
      localStorage.setItem("bookingData", JSON.stringify(bookingData));
    }

    setIsSubmitting(false);
    navigate("/confirmation");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-bounce">
        ✈️
      </div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-bounce delay-500">
        🛩️
      </div>
      <div className="absolute top-1/3 right-20 text-2xl opacity-30 animate-bounce delay-300">
        🌤️
      </div>
      <div className="absolute bottom-1/3 left-20 text-2xl opacity-30 animate-bounce delay-700">
        ⭐
      </div>

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/10 relative z-10 transform hover:scale-[1.01] transition-all duration-500">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">✈️</span>
          </div>
          <h2 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
            Book Your Flight
          </h2>
          <p className="text-gray-300 text-lg">
            Embark on your next adventure with ease
          </p>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">👤</span> Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-4 shadow-lg transition-all ${
                errors.name
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/20"
              }`}
              required
            />
            {errors.name && (
              <span className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span> {errors.name}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">📧</span> Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-4 shadow-lg transition-all ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/20"
              }`}
              required
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span> {errors.email}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">👥</span> Passengers
            </label>
            <input
              type="number"
              name="passengers"
              min="1"
              max="10"
              value={form.passengers}
              onChange={handleChange}
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white focus:outline-none focus:ring-4 shadow-lg transition-all ${
                errors.passengers
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/20"
              }`}
              required
            />
            {errors.passengers && (
              <span className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span> {errors.passengers}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">💺</span> Seat Class
            </label>
            <select
              name="seatClass"
              value={form.seatClass}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border-2 border-cyan-500/30 bg-white/5 text-white focus:outline-none focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 shadow-lg transition-all"
            >
              <option className="bg-slate-800">Economy</option>
              <option className="bg-slate-800">Business</option>
              <option className="bg-slate-800">First Class</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">🛫</span> Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={form.departureDate}
              onChange={handleChange}
              min={today}
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white focus:outline-none focus:ring-4 shadow-lg transition-all ${
                errors.departureDate
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/20"
              }`}
              required
            />
            {errors.departureDate && (
              <span className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span> {errors.departureDate}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">🛬</span> Return Date (Optional)
            </label>
            <input
              type="date"
              name="returnDate"
              value={form.returnDate}
              onChange={handleChange}
              min={form.departureDate || today}
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white focus:outline-none focus:ring-4 shadow-lg transition-all ${
                errors.returnDate
                  ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                  : "border-cyan-500/30 focus:border-cyan-400 focus:ring-cyan-400/20"
              }`}
            />
            {errors.returnDate && (
              <span className="text-red-400 text-sm mt-2 flex items-center">
                <span className="mr-1">⚠️</span> {errors.returnDate}
              </span>
            )}
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-cyan-300 font-semibold mb-2 flex items-center">
              <span className="mr-2">🏢</span> Select Airline
            </label>
            <select
              name="airline"
              value={form.airline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-cyan-500/30 bg-white/5 text-white focus:outline-none focus:ring-4 focus:ring-cyan-400/20 focus:border-cyan-400 shadow-lg transition-all"
            >
              {airlines.map((airline) => (
                <option
                  key={airline.name}
                  value={airline.name}
                  className="bg-slate-800"
                >
                  {airline.name} ({airline.departure} - {airline.arrival})
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/25 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:shadow-2xl"
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Processing Booking...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span className="mr-2">🎫</span>
                  BOOK FLIGHT
                </div>
              )}
            </button>
          </div>
        </form>

        <div className="mt-12">
          <h3 className="text-cyan-300 font-semibold text-center mb-6 text-xl flex items-center justify-center">
            <span className="mr-2">🌟</span> Our Premium Airlines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {airlines.map((airline) => (
              <div
                key={airline.name}
                className={`p-6 rounded-2xl backdrop-blur-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  form.airline === airline.name
                    ? `border-cyan-400 bg-linear-to-br ${airline.color}/20 shadow-2xl shadow-cyan-500/20`
                    : "border-white/10 bg-white/5 hover:border-cyan-400/30"
                }`}
                onClick={() => setForm({ ...form, airline: airline.name })}
              >
                <div className="text-center">
                  <div
                    className={`text-4xl mb-3 transform transition-transform ${
                      form.airline === airline.name ? "scale-110" : ""
                    }`}
                  >
                    {airline.logo}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">
                    {airline.name}
                  </h4>
                  <div className="text-cyan-300 font-semibold">
                    {airline.departure} - {airline.arrival}
                  </div>
                  <div className="text-gray-400 text-sm mt-2">
                    Direct Flight
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
