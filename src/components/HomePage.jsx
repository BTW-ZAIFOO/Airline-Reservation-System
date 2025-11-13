import React from 'react'
import Navbar from './navbar/Navbar'
import HeroSection from './herosection/herosection'
import About from './about/About'
import Services from './services/Services'
import Testimonials from './testimonials/Testimonials'
import Flights from './flights/Flights'
import Footer from './footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Services/>
      <Testimonials/>
      <Flights/>
      <Footer/>
    </>
  )
}

export default HomePage