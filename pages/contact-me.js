import React from 'react';
import Navbar from '../app/components/navbar';
import ContactMePage from '../app/components/ContactMePage';
import '../app/globals.css';
const ContactMe = () => {
 return (
  <div className='bg-black h-screen w-full' id="contact-me-page">
   <Navbar />
   <ContactMePage />
  </div>
 );
};

export default ContactMe;

