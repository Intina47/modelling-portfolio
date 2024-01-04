// components/ContactMeSection.tsx
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';

const ContactMeSection = () => {
  const modelInfo = {
    name: 'Model Name',
    image: '/hero.jpg',
  };

  const contactDetails = {
    address: '123 Anywhere St., Any City State, Country',
    phoneNumber: '(123) 456 7890',
    emailAddress: 'hello@reallygreatsite.com',
  };

  return (
    <section className="py-16 bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Left Side: Model Information */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2">Get in Touch <br/> with Me</h2>
          <p className="text-lg mb-4">{modelInfo.name}</p>
          <Image
            src={modelInfo.image}
            alt="Model"
            width={150}
            height={150}
            className="w-24 h-24 object-cover rounded-full mx-auto md:mx-0 md:ml-4 mb-4"
            />
        </div>

        {/* Contact Details */}
        <div className="max-w-md mx-auto md:mx-0">
          {/* Address */}
          <div className="mb-4">
            <p className="text-lg font-bold">Address</p>
            <p>{contactDetails.address}</p>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <p className="text-lg font-bold">Phone Number</p>
            <p>{contactDetails.phoneNumber}</p>
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <p className="text-lg font-bold">Email Address</p>
            <p>{contactDetails.emailAddress}</p>
          </div>

          {/* Reach Out Button */}
          <button className="bg-black text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          {/* <Link to="/contact-me">Reach Out</Link> */}
          Reach Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMeSection;
