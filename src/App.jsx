import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div id="hero"><Hero /></div>
        <div id="services"><Services /></div>
        <div id="team"><Team /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="pricing"><Pricing /></div>
        <div id="contact"><ContactForm /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
