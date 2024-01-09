import React, {ChangeEventHandler, useState} from 'react';
import dotenv from 'dotenv';
dotenv.config();

const ContactMePage = () => {
 const [emptyReminder, setemptyreminder] = useState('');
 const [sending, setSending] = useState(false);
 const [sent, setSent] = useState(false);
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
 });

 // handle change
 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
   ...formData,
   [e.target.id]: e.target.value,
  });
 };

 const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();
  if(formData.firstName.trim() == '' || formData.lastName.trim() == '' || formData.email.trim() == '' || formData.message.trim() == ''){
   setemptyreminder('Please fill out this field.');
   return;
  }
  try{
   setSending(true);
   setSent(false);
   const response = await fetch('/api/message', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });
   if(response.status == 200){
    setSending(false);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    const data = await response.json();
    console.log(data);
    setFormData({
     firstName: '',
     lastName: '',
     email: '',
     message: '',
    });
   }else{
    setSending(false);
    setSent(false);
    console.log('sorry an error occured');
    alert(
     `Sorry an error occured, please try again later or reach out to me via my email.\n${process.env.EMAIL}`
    );
   }
  } catch (error) {
   setSending(false);
   setSent(false);
   console.log(error);
   alert(
    `Sorry an error occured, please try again later or reach out to me via my email.\n${process.env.EMAIL}`
   );
  }
 };
 return (
  <div className="container mx-auto mt-10 bg-black h-screen w-full">
   {/* contact form */}
   <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mx-auto">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
       htmlFor="grid-first-name">
                            First Name
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="firstName"
       type="text"
       placeholder= "Enter your first name"
       value={formData.firstName}
       onChange={handleChange}
      />
      <p className="text-gray-600 text-xs italic">{emptyReminder}</p>
     </div>
     <div className="w-full md:w-1/2 px-3 mx-auto">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
       htmlFor="grid-last-name">
                            Last Name
      </label>
      <input
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       id="lastName"
       type="text"
       placeholder="Enter last name"
       value={formData.lastName}
       onChange={handleChange}
      />
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
       id="email"
       type="email"
       placeholder="Enter Email.."
       value={formData.email}
       onChange={handleChange}
      />
      <p className="text-gray-600 text-xs italic">{emptyReminder}</p>
     </div>
    </div>
    {/* message */}
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
      Message
      </label>
      <textarea
       className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       id="message"
       placeholder="Your message goes here..."
       value={formData.message}
       onChange={handleChange as unknown as ChangeEventHandler<HTMLTextAreaElement>}
      />
      <p className="text-gray-600 text-xs italic">{emptyReminder}</p>
     </div>
    </div>

    {/* Submit Button */}
    <div className="flex  flex-col -mx-3 mb-4 mx-auto">
     <div className="w-full px-3 text-center">
      <button
       className={`bg-black text-white py-2 px-4 hover:bg-pink-600 hover:text-black outline outline-offset-2 outline-1 focus:shadow-outline-blue ${sending ? 'cursor-not-allowed' : ''}`}
       type="submit"
       onClick={handleSubmit}
       disabled={sending || sent}
      >
       {sending ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
       ) : sent ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
       ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
       )}
       <span className={`font-bold text-[18px] ${sent ? 'text-green-500' : ''}`}>
        {sending ? 'Sending Message...' : sent ? 'Message Sent' : 'Send Message'}
       </span>
      </button>
     </div>
    </div>
   </form>
  </div>
 );
};

export default ContactMePage;