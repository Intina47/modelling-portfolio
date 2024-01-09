'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import {portfolioItems} from '../constants/index';

const VisualPortfolio = () => {
 const initilVisibleItems = 6;
 const [visibleItems, setVisibleItems] = useState(initilVisibleItems);

 const showMoreItems = () => {
  setVisibleItems(visibleItems + 3);
 };

 return (
  <section className="py-16" id="VisualPortfolio">
   <div className="container mx-auto">
    {/* Title */}
    <div className="flex items-center mb-6">
     <span className="text-2xl font-bold text-gray-500 mr-4">02</span>
     <h2 className="text-3xl font-bold text-pink-500">Visual Portfolio</h2>
    </div>

    {/*Items */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {portfolioItems.slice(0, visibleItems).map((item, index) => (
      <div key={index} className="relative  overflow-hidden">
       <Image src={item.image} alt={`Portfolio ${index + 1}`} width={400} height={600} className="w-full h-full object-cover" />
       <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 transition-opacity opacity-0 hover:opacity-100">
        <p className="text-white text-sm text-center">{item.description}</p>
       </div>
      </div>
     ))}
    </div>

    {/* Show More Button */}
    {visibleItems < portfolioItems.length && (
     <div className="flex justify-center mt-8">
      <button onClick={showMoreItems} className="bg-black hover:bg-pink-600 hover:text-black text-white font-bold py-2 px-4 outline outline-offset-2 outline-1 focus:shadow-outline-blue">
         Show More
      </button>
     </div>
    )}
   </div>
  </section>
 );
};

export default VisualPortfolio;
