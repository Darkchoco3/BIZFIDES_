import React, { useState } from 'react';
import mail from "../assets/emails.svg"; 

const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white rounded shadow-md overflow-hidden w-2/3">
        <div className="w-1/2 p-4 flex justify-center items-center">
          <img src={mail} alt="Newsletter" className="w-full h-full object-cover" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-8 w-1/2"
        >
        
          <h1 className="text-2xl mb-4 text-center">Subscribe To Our Newsletter</h1>
          <p className="mb-4">Get exclusive insights, expert tips, and industry news delivered straight to your inbox</p>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>
          <button
            type="submit"
            className="w-24 bg-primary text-white p-2 rounded hover:bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>
  );
};
export default Subscribe;