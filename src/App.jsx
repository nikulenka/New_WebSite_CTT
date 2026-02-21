import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Partners from './components/Partners';
import Trust from './components/Trust';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Trust />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
