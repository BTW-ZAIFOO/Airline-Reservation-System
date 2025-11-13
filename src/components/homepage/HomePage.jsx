import React from "react";
import HeroSection from "../heroSection/HeroSection";
import About from "../about/About";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";
import Flights from "../flights/Flights";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Flights />
    </>
  );
};

export default HomePage;
