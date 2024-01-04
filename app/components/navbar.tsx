// components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      {/* Left Section - Menu Icon */}
      <div className="flex items-center">
        <button className="text-white text-2xl">
          <span className="block">&#8801;</span>
        </button>
      </div>

      {/* Middle Section - Model's Name */}
      <div className="text-white text-xl font-bold">
        dua
      </div>

      {/* Right Section - Hi Button with Waving Hand Icon */}
      <div className="flex items-center">
        <button className="text-white mr-2">
          Hi
          <span role="img" aria-label="Waving Hand" className="ml-1">
            👋
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
