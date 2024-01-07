'use client';
import React from 'react';
import { Link } from 'react-router-dom';

const ReachOutBtn = () => {
 return(
  <button className="bg-black text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
   <Link to="/contact-me">Reach Out</Link>
   {/* Reach Out */}
  </button>
 );
};

export default ReachOutBtn;