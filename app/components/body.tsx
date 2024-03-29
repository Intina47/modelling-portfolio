import React from 'react';
import {bodyInfoItems} from '../constants';

const BodyInfo = () => {
 return (
  <section className="py-16" id='measurements-info'>
   <div className="container mx-auto">
    <div className="flex items-center mb-6">
     <span className="text-2xl font-bold text-gray-500 mr-4">03</span>
     <h2 className="text-3xl font-bold text-pink-500">Measurements</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {bodyInfoItems.map((item, index) => (
      <div key={index} className="flex items-center justify-center mb-4">
       <div className="text-center">
        <p className="text-2xl font-bold mb-2 text-white">{item.title}</p>
        <p className="text-lg text-white">{item.value}</p>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default BodyInfo;
