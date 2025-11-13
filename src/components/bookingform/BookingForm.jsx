import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const flightData = location.state?.flight;

  const [form, setForm] = useState({
    name: "",
    email: "",
    passengers: 1,
    departureDate: "",
    returnDate: "",
    seatClass: "Economy",
    airline: airlines[0].name,
    from: "",
    to: "",
    price: "",
  });

  useEffect(() => {
    if (flightData) {
      setForm((prev) => ({
        ...prev,
        from: flightData.from,
        to: flightData.to,
        departureDate: flightData.date,
        price: flightData.price,
      }));
    }
  }, [flightData]);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (form.passengers < 1)
      newErrors.passengers = "At least 1 passenger is required";
    if (!form.departureDate)
      newErrors.departureDate = "Departure date is required";
    else if (form.departureDate < new Date().toISOString().split("T")[0])
      newErrors.departureDate = "Departure date cannot be in the past";
    if (form.returnDate && form.returnDate < form.departureDate)
      newErrors.returnDate = "Return date cannot be before departure date";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const selectedAirline = airlines.find((a) => a.name === form.airline);
    const bookingData = {
      ...form,
      selectedAirline,
      bookingId: `BK${Date.now()}`,
      bookingDate: new Date().toLocaleDateString(),
    };

    if (setBookingData && typeof setBookingData === "function")
      setBookingData(bookingData);
    else localStorage.setItem("bookingData", JSON.stringify(bookingData));

    setIsSubmitting(false);
    navigate("/confirmation");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-4xl bg-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 md:p-16 border border-white/10 relative z-10 transform hover:scale-[1.01] transition-all duration-500 my-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-linear-to-r from-cyan-400 to-blue-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">✈️</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            Book Your Flight
          </h2>
          <p className="text-gray-300 text-sm md:text-lg">
            Embark on your next adventure with ease
          </p>
        </div>

        {flightData && (
          <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-4 mb-6 text-center text-white">
            <h3 className="text-lg md:text-xl font-semibold mb-1">
              Selected Flight
            </h3>
            <p>
              ✈️ {flightData.from} → {flightData.to}
            </p>
            <p>
              🗓️ {flightData.date} | 💰 {flightData.price}
            </p>
          </div>
        )}

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">From</label>
            <input
              type="text"
              name="from"
              value={form.from}
              readOnly
              className="px-4 py-3 rounded-xl border-2 bg-white/10 text-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">To</label>
            <input
              type="text"
              name="to"
              value={form.to}
              readOnly
              className="px-4 py-3 rounded-xl border-2 bg-white/10 text-gray-200"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-cyan-300 font-semibold mb-2">Price</label>
            <input
              type="text"
              name="price"
              value={form.price}
              readOnly
              className="px-4 py-3 rounded-xl border-2 bg-white/10 text-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">
              👤 Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white placeholder-gray-400 focus:outline-none ${
                errors.name
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-cyan-500/30 focus:border-cyan-400"
              }`}
              required
            />
            {errors.name && (
              <span className="text-red-400 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">📧 Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`px-4 py-3 rounded-xl border-2 bg-white/5 text-white placeholder-gray-400 focus:outline-none ${
                errors.email
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-cyan-500/30 focus:border-cyan-400"
              }`}
              required
            />
            {errors.email && (
              <span className="text-red-400 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">
              👥 Passengers
            </label>
            <input
              type="number"
              name="passengers"
              min="1"
              max="10"
              value={form.passengers}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border-2 bg-white/5 text-white focus:outline-none border-cyan-500/30 focus:border-cyan-400"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">
              💺 Seat Class
            </label>
            <select
              name="seatClass"
              value={form.seatClass}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border-2 border-cyan-500/30 bg-white/5 text-white focus:outline-none"
            >
              <option className="bg-slate-800">Economy</option>
              <option className="bg-slate-800">Business</option>
              <option className="bg-slate-800">First Class</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">
              🛫 Departure Date
            </label>
            <input
              type="date"
              name="departureDate"
              value={form.departureDate}
              onChange={handleChange}
              min={today}
              className="px-4 py-3 rounded-xl border-2 bg-white/5 text-white"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-cyan-300 font-semibold mb-2">
              🛬 Return Date (Optional)
            </label>
            <input
              type="date"
              name="returnDate"
              value={form.returnDate}
              onChange={handleChange}
              min={form.departureDate || today}
              className="px-4 py-3 rounded-xl border-2 bg-white/5 text-white"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="text-cyan-300 font-semibold mb-2">
              🏢 Select Airline
            </label>
            <select
              name="airline"
              value={form.airline}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-cyan-500/30 bg-white/5 text-white focus:outline-none"
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
              className="w-full py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? "Processing Booking..." : "🎫 BOOK FLIGHT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
