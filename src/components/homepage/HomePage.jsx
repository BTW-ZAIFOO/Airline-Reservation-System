import React from "react";
import About from "../about/About";
import Services from "../services/Services";
import Testimonials from "../testimonials/Testimonials";
import Flights from "../flights/Flights";
import HeroSection from "../herosection/herosection";

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
