// 'use client';
import React from 'react';

const ContactMePage = () => {
 return (
  <div className="container mx-auto mt-10 bg-black h-screen w-full">
   {/* contact form */}
   <form className="w-full max-w-lg mx-auto">
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
       htmlFor="grid-first-name">
                            First Name
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="grid-first-name" type="text" placeholder="Enter first name"/>
      <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
     </div>
     <div className="w-full md:w-1/2 px-3 mx-auto">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
       htmlFor="grid-last-name">
                            Last Name
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="grid-last-name" type="text" placeholder="Enter last name"/>
     </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
       htmlFor="grid-password">
                            E-mail
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="email" type="email" placeholder="Enter email"/>
      <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
     </div>
    </div>
    {/* message */}
    {/* Message */}
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
      Message
      </label>
      <textarea
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="message" placeholder="Your message goes here..."
      />
      <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
     </div>
    </div>

    {/* Submit Button */}
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full px-3 text-center">
      <button
       className="bg-black text-white py-2 px-4 hover:bg-pink-600 hover:text-black outline outline-offset-2 outline-1 focus:shadow-outline-blue"
       type="submit"
      >
      Send Message
      </button>
     </div>
    </div>
   </form>
  </div>
 );
};

export default ContactMePage;