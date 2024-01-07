// components/Navbar.tsx
'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
 const [isDrawerOpen, setDrawerOpen] = useState(false);
 const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
 return (
  <nav className="flex items-center justify-between p-4 bg-transparent">
   <div className="flex items-center">
    <button type="button" className="text-white text-2xl cursor-pointer" onClick={toggleDrawer}>
     <Image src="/menu1.png" alt="menu" width={150} height={150} className="w-6 h-6" />
    </button>
   </div>
   {isDrawerOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
     <div className="flex justify-end p-4">
      <button className="text-white text-2xl" onClick={toggleDrawer}>
       <span className="block">×</span>
      </button>
     </div>
     <div className="flex flex-col items-center text-white text-xl font-bold">
      <Link href="/" className="my-2" onClick={toggleDrawer}>Home</Link>
      <Link href="/my-life-story" className="my-2" onClick={toggleDrawer}>My Life Story</Link>
      <Link href="/visual-portfolio" className="my-2" onClick={toggleDrawer}>Visual Portfolio</Link>
      <Link href="/model-body-info" className="my-2" onClick={toggleDrawer}>Body</Link>
      <Link href="/contact-me" className="my-2" onClick={toggleDrawer}>Contact Me</Link>
     </div>
    </div>
   )}

   {/* Middle Section - Model's Name */}
   <div className="text-white text-xl font-bold">
        <Link href="/">
       <div>nessah_handas</div>
      </Link>
   </div>

   {/* Right Section - Hi Button with Waving Hand Icon */}
   <div className="flex items-center">
   <Link href="/contact-me" className='hover:bg-pink-600 rounded-lg p-1'>
    <button className="text-white mr-2">
          Hi
     <span role="img" aria-label="Waving Hand" className="ml-1">
            👋
     </span>
    </button>
    </Link>
   </div>
  </nav>
 );
};

export default Navbar;
