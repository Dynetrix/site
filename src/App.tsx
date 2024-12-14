import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default App;