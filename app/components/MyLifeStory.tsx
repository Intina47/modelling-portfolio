// components/MyLifeStory.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import {MyLifeStoryImages} from '../constants/index';

const MyLifeStory = () => {
 return (
  <section className="py-16 " id="my-life-story">
   <div className="container mx-auto flex flex-col items-center">
    {/* Title */}
    <div className="flex items-center mb-6">
     <span className="text-2xl font-bold text-gray-500 mr-4">01</span>
     <h2 className="text-3xl font-bold text-pink-500">My Life Story</h2>
    </div>

    {/* Short Description */}
    <p className="max-w-2xl text-center text-white mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Proin eget tortor vel justo euismod tincidunt.
    </p>

    {/* desktop */}
    <div className="hidden md:flex flex-col md:flex-row items-center md:justify-between">
     {MyLifeStoryImages.map((item, index) => (
      <Image src={item.image} key={index} alt="Photo" width="400" height="600" className="mb-4 md:mb-0 md:w-1/3 rounded-lg" />
     ))}
    </div>
    {/* mobile */}
    <div className="md:hidden flex flex-col md:flex-row items-center md:justify-between">
     {MyLifeStoryImages.map((item, index) => (
      <div key={index} className="md:hidden relative mb-4 md:mb-0 md:w-1/3">
       <Image src={item.image} alt="Photo 1" width="400" height="600" className="mb-4 md:mb-0 md:w-1/3 mx-1 rounded-l-lg object-cover" />
       <div className="md:hidden absolute bottom-0 right-0 p-2 bg-black text-white opacity-75">
              Photo: {item.description}
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default MyLifeStory;
