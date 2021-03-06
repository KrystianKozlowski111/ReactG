import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import About from '../components/About';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import Works from '../components/Works';
import Services from '../components/Services';
function HomePage() {
  return (
    <>
      {' '}
      <Header />
      <Hero />
      <About />
      <Services />
      <Features />
      <Works />
      <Testimonials />
      <Clients />
      <Footer />
    </>
  );
}
export default HomePage;
