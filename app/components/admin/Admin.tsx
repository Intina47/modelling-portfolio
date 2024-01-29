// components/Admin.tsx
'use client';
import React, { useState } from 'react';

const Admin = () => {
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');

    const handleImageUpload = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleDescriptionChange = (event) => {
        const words = event.target.value.split(' ');
        if (words.length <= 50) { // limit to 50 words
            setDescription(event.target.value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: upload image and description to database, firebase.
        console.log('Image:', image);
        console.log('Description:', description);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-pink-500">Admin Page</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" accept="image/*" onChange={handleImageUpload} required />
                </div>

                <div>
                    <label htmlFor="description">Description (max 50 words):</label>
                    <textarea id="description" value={description} onChange={handleDescriptionChange} required />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Admin;