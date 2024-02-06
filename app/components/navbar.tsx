// components/Navbar.tsx
'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
 const [isDrawerOpen, setDrawerOpen] = useState(false);
 const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);
 return (
  <nav className="flex items-center justify-between p-4 bg-transparent z-50">
   <div className="flex items-center">
    <button type="button" className="text-white text-2xl cursor-pointer" onClick={toggleDrawer}>
     <Image src="/menu1.png" alt="menu" width={150} height={150} className="w-6 h-6" />
    </button>
   </div>
   {isDrawerOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
     <div className="flex flex-col text-white text-2xl font-bold bg-black p-4 h-screen w-full">
      <div className="self-end">
       <button className="text-white text-2xl" onClick={toggleDrawer}>
        <span className="block">×</span>
       </button>
      </div>
      <Link href="/" className="my-2 hover:text-pink-500 mx-10 " onClick={toggleDrawer}><span className="mr-2 text-pink-500 text-3xl font-bold oldstyle-nums">00.</span>Home</Link>
      <Link href="/#my-life-story" className="my-2 hover:text-pink-500 mx-10 " onClick={toggleDrawer}><span className="mr-2 text-pink-500 text-3xl font-bold oldstyle-nums">01.</span>My Life Story</Link>
      <Link href="/#VisualPortfolio" className="my-2 hover:text-pink-500 mx-10 " onClick={toggleDrawer}><span className="mr-2 text-pink-500 text-3xl font-bold-900 oldstyle-nums">02.</span>Visual Portfolio</Link>
      <Link href="/#measurements-info" className="my-2 hover:text-pink-500 mx-10 " onClick={toggleDrawer}><span className="mr-2 text-pink-500 text-3xl font-bold oldstyle-nums">03.</span>Body Specs</Link>
      <Link href="/contact-me" className="my-2 hover:text-pink-500 mx-10" onClick={toggleDrawer}><span className="mr-2 text-pink-500 font-bold text-3xl oldstyle-nums">04.</span>Contact Me</Link>
      <Link href="/blogComponent" className="my-2 hover:text-pink-500 mx-10" onClick={toggleDrawer}><span className="mr-2 text-pink-500 font-bold text-3xl oldstyle-nums">05.</span>Blog</Link>
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
