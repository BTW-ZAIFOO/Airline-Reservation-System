import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Flights from "./components/flights/Flights";
import SignUpForm from "./components/signupform/SignUpForm";
import Login from "./components/loginform/Login";
import BookingForm from "./components/bookingform/BookingForm";
import Confirmation from "./components/confirmation/Confirmation";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  const [bookingData, setBookingData] = useState(null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/booking"
          element={<BookingForm setBookingData={setBookingData} />}
        />
        <Route
          path="/confirmation"
          element={<Confirmation bookingData={bookingData} />}
        />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
