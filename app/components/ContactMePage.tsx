// 'use client';
import React from "react";

const ContactMePage = () => {
    return (
        <div className="container mx-auto mt-10">
            {/* contact form */}
            <form className="w-full max-w-lg mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name" type="text" placeholder="Jane"/>
                        <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name" type="text" placeholder="Doe"/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 mx-auto">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="grid-password">
                            E-mail
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email" type="email" placeholder="email"/>
                        <p className="text-gray-600 text-xs italic">Please fill out this field.</p>
                        </div>
                        </div>
                        {/* message */}

         </form>
        </div>
    );
};

export default ContactMePage;