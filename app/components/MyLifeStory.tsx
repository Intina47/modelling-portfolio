// components/MyLifeStory.tsx
'use client';
import React from 'react';
import Image from 'next/image';

const MyLifeStory = () => {
 return (
  <section className="py-16 " id="my-life-story">
   <div className="container mx-auto flex flex-col items-center">
    {/* Numbered Title */}
    <div className="flex items-center mb-6">
     <span className="text-2xl font-bold text-gray-500 mr-4">01</span>
     <h2 className="text-3xl font-bold">My Life Story</h2>
    </div>

    {/* Short Description */}
    <p className="max-w-2xl text-center text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin eget tortor vel justo euismod tincidunt.
    </p>

    {/* desktop */}
    <div className="hidden md:flex flex-col md:flex-row items-center md:justify-between">
     <Image src="/mylife1.jpg" alt="Photo 1" width="400" height="600" className="mb-4 md:mb-0 md:w-1/3 rounded-lg" />
     <Image src="/mylife2.jpg" alt="Photo 2" width="400" height="600" className="mb-4 md:mb-0 md:w-1/3 rounded-lg" />
     <Image src="/mylife3.jpg" alt="Photo 3" width="400" height="600" className="md:w-1/3 rounded-lg" />
    </div>
    {/* mobile */}
    <div className="md:hidden flex flex-col md:flex-row items-center md:justify-between">
     <div className="md:hidden relative mb-4 md:mb-0 md:w-1/3">
      <Image src="/mylife1.jpg" alt="Photo 1" width="400" height="600" className="mb-4 md:mb-0 md:w-1/3 mx-1 rounded-l-lg object-cover" />
      <div className="md:hidden absolute bottom-0 right-0 p-2 bg-black text-white opacity-75">
              Photo: Balenciaga Walk 2020
      </div>
     </div>
     <div className="md:hidden relative mb-4 md:mb-0 md:w-1/3">
      <Image src="/mylife2.jpg" alt="Photo 2" width="400" height="600" className="mb-4 md:mb-0 md:w-1/3 mx-1 rounded-l-lg" />
      <div className="md:hidden absolute bottom-0 right-0 p-2 bg-black text-white opacity-75">
              Photo: Vogue Photoshoot
      </div>
     </div>

     <div className="md:hidden relative md:w-1/3 bg-green">
      <Image src="/mylife3.jpg" alt="Photo 3" width="400" height="600" className="md:w-1/3 mx-1 rounded-l-lg" />
      <div className="md:hidden absolute bottom-0 right-0 p-2 bg-black text-white opacity-75">
              Photo: Runway Show Paris
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default MyLifeStory;
