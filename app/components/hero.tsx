// components/hero.tsx
'use client';
import React from 'react';
import Navbar from './navbar';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Hero = () => {
 const handleIconClick = (url: string) => {
  window.open(url, '_blank');
 };

 return (
  <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/hero.jpg")' }}>
   {/* Navbar */}
   <div className="relative top-0 left-0 right-0 bg-transparent z-50">
    <Navbar/>
   </div>

   {/* Hero Content */}
   <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-0">
    <h1 className="text-5xl font-bold mb-4">Bossette Model Portfolio</h1>
    <p className="text-lg">Showcasing the beauty within.</p>

    {/* Social Media Icons */}
    <div className="absolute bottom-4 right-4 flex gap-2">
     <FaFacebook
      size={24}
      color="white"
      style={{ cursor: 'pointer' }}
      onClick={() => handleIconClick('https://www.facebook.com')}
      interactive={true}
     />
     <FaTwitter
      size={24}
      color="white"
      style={{ cursor: 'pointer' }}
      onClick={() => handleIconClick('https://www.twitter.com')}
      interactive={true}
     />
     <FaInstagram
      size={24}
      color="white"
      style={{ cursor: 'pointer' }}
      onClick={() => handleIconClick('https://www.instagram.com/nessah_handas/')}
      interactive={true}
     />
    </div>
   </div>
  </div>
 );
};

export default Hero;
