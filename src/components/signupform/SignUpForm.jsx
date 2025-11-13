import React, { useState } from "react";
import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-blue-900 via-indigo-900 to-purple-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 z-10 transform hover:scale-[1.02] transition-all duration-500 mt-16">
        <div className="flex justify-center mb-6">
          <Plane className="w-12 h-12 text-yellow-400" />
        </div>

        <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-wide">
          Fly High with AirFly
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-white font-semibold mb-1 block">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-white/30 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="text-white font-semibold mb-1 block">Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-white/30 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="text-white font-semibold mb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={form.password}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-white/30 bg-white/5 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            SIGN UP
          </button>
        </form>

        <p className="mt-6 text-center text-white/70">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
