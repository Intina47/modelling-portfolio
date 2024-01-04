// components/hero.tsx
import React from 'react';
import Navbar from './navbar'

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero.jpg")' }}>
      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 right-0 bg-transparent">
        <Navbar/>
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Super Model Portfolio</h1>
        <p className="text-lg">Showcasing the beauty within.</p>
      </div>
    </div>
  );
};

export default Hero;