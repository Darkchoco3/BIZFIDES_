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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="flex flex-col md:flex-row bg-white rounded shadow-md overflow-hidden w-11/12 md:w-2/3">
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <img src={mail} alt="Newsletter" className="w-full h-auto object-cover" />
      </div>
      <form onSubmit={handleSubmit} className="p-8 w-full md:w-1/2">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Subscribe To Our Newsletter</h1>
          <p className="mb-4">Get exclusive insights, expert tips, and industry news delivered straight to your inbox</p>
        </div>
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
          className="w-full bg-primary    
   bg-blue-700"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>
  );
};
export default Subscribe;