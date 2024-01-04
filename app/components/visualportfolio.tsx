// components/VisualPortfolio.tsx
// use client
'use client';
import React, {use, useState} from 'react';
import Image from 'next/image'; // Import the 'Image' component from the appropriate package

const VisualPortfolio = () => {
    const initilVisibleItems = 6;
    const [visibleItems, setVisibleItems] = useState(initilVisibleItems);
    const portfolioItems = [
        {
            image: '/visual1.jpg',
            description: 'Iconic runway walk at Paris Fashion Week.'
        },
        {
            image: '/visual2.jpg',
            description: 'Vogue photoshoot showcasing elegance.'
        },
        {
            image: '/visual3.jpg',
            description: 'Collaboration with renowned fashion designer.'
        },
        {
            image: '/visual4.jpg',
            description: 'Balenciaga walk at New York Fashion Week.'
        },
        {
            image: '/visual5.jpg',
            description: 'Vogue photoshoot showcasing elegance.'
        },
        {
            image: '/visual6.jpg',
            description: 'Iconic runway walk at Paris Fashion Week.'
        },
        {
            image: '/visual7.jpg',
            description: 'Iconic runway walk at Paris Fashion Week.'
        },
        {
            image: '/visual8.jpg',
            description: 'Iconic runway walk at Paris Fashion Week.'
        },
        {
            image: '/visual9.jpg',
            description: 'Iconic runway walk at Paris Fashion Week.'
        },
    ];

    const showMoreItems = () => {
        setVisibleItems(visibleItems + 3);
    }

    return (
        <section className="py-16">
            <div className="container mx-auto">
                {/* Numbered Title */}
                <div className="flex items-center mb-6">
                    <span className="text-2xl font-bold text-gray-500 mr-4">02</span>
                    <h2 className="text-3xl font-bold">Visual Portfolio</h2>
                </div>

                {/* Portfolio Items */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* {portfolioItems.map((item, index) => ( */}
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
                            <button onClick={showMoreItems} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                                Show More
                            </button>
                        </div>
                    )}
            </div>
        </section>
    );
};

export default VisualPortfolio;
