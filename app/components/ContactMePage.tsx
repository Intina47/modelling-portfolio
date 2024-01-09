import React, {ChangeEventHandler, useState} from 'react';
import ErrorMessage from './error-Message';

const ContactMePage = () => {
 const [firstNameplaceholder, setfirstNameplaceholder] = useState('');
 const [lastNameNameplaceholder, setlastNameNameplaceholder] = useState('');
 const [messageplaceholder, setmessageplaceholder] = useState('');
 const [emailplaceholder, setemailplaceholder] = useState('');
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
  if(formData.firstName.trim() == ''){
   setfirstNameplaceholder('Please enter your first name');
   return;
  }
  if(formData.lastName.trim() == ''){
   setlastNameNameplaceholder('Please enter your last name');
   return;
  }
  if(formData.email.trim() == ''){
   setemailplaceholder('Please enter your email');
   return;
  }
  if(formData.message.trim() == ''){
   setmessageplaceholder('Please enter your message');
   return;
  }
  try{
   const response = await fetch('/api/message', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });
   if(response.ok){
    const data = await response.json();
    console.log(data);
    setFormData({
     firstName: '',
     lastName: '',
     email: '',
     message: '',
    });
   }else{
    console.log('Aotty an error occured');
    //  make the error message appear as an alert at the top of the page
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
     <strong className="font-bold">Sorry An ERROR Occured</strong>
     <span className="block sm:inline">If the error persists please reach out to me in my Email</span>
     <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
      <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
     </span>
    </div>;

   }
  } catch (error) {
   console.log(error);
   <ErrorMessage />;
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
       placeholder={firstNameplaceholder}
       value={formData.firstName}
       onChange={handleChange}
      />
      <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
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
       placeholder={lastNameNameplaceholder}
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
       placeholder={emailplaceholder}
       value={formData.email}
       onChange={handleChange}
      />
      <p className="text-gray-600 text-xs italic">{emailplaceholder}</p>
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
      <p className="text-gray-600 text-xs italic">{messageplaceholder}</p>
     </div>
    </div>

    {/* Submit Button */}
    <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
     <div className="w-full px-3 text-center">
      <button
       className="bg-black text-white py-2 px-4 hover:bg-pink-600 hover:text-black outline outline-offset-2 outline-1 focus:shadow-outline-blue"
       type="submit"
       onClick={handleSubmit}
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