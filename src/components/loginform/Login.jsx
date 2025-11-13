import React from "react";
import { Plane } from "lucide-react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-blue-900 to-indigo-700">
      <div className="relative w-full max-w-lg bg-linear-to-br from-white/90 to-white/70 backdrop-blur-md rounded-2xl shadow-2xl p-10 animate-fadeIn">
        <div className="flex justify-center mb-6">
          <Plane className="w-12 h-12 text-blue-800 animate-bounce" />
        </div>

        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center tracking-wide">
          Welcome Back
        </h2>

        <form className="space-y-5">
          <div>
            <label className="text-blue-900 font-semibold mb-1 block">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-5 py-3 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 shadow-sm"
            />
          </div>

          <div>
            <label className="text-blue-900 font-semibold mb-1 block">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-5 py-3 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-linear-to-r from-yellow-400 to-yellow-500 text-blue-900 font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-6 text-center text-blue-800">
          Don't have an account?{" "}
          <a href="/signup" className="text-yellow-400 font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
