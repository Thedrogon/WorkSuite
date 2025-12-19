//import React from 'react'
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import About from "../components/Landing/About";
import Roles from "../components/Landing/Roles";
import Footer from "../components/Landing/Footer";

const Landinglayout = () => {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Roles />
      <Footer />
    </div>
  );
};

export default Landinglayout;
