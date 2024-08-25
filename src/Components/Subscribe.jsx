import React, { useState } from 'react';
import mail from "../assets/emails.svg"; 
const Subscribe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <div className="">
    <div className="flex flex-col lg:flex-row  flex-1  justify-center gap-[5.375rem] py-10">
      {/* <div className="w-full md:w-1/2 p-4 flex justify-center items-center"> */}
        <img src={mail} alt="Newsletter" className=" h-auto object-cover hidden lg:block" />
      {/* </div> */}
      <form onSubmit={handleSubmit} className="p-[3.125rem] rounded-3xl border border-neutral-grey-200">
        <div className=" mb-[2rem]">
          <h1 className="text-4xl font-bold text-primary-dark font-roboto leading-15   ">Subscribe To Our Newsletter</h1>
          <p className="mb-4 font-inter font-normal text-base leading-[1.21rem] text-neutral-grey-300 max-w-[40ch]">Get exclusive insights, expert tips, and industry news delivered straight to your inbox</p>
          
        </div>
        <div className="mb-4">
          <label className="block mb-3 font-inter text-xl font-medium text-neutral-black">Name</label>
          <input
            type="text"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1.625rem] w-full rounded-[0.625rem] text-xl  "
          />
        </div>
        <div className="mb-4">
          <label className="block mb-3 font-inter text-xl font-medium text-neutral-black">Email</label>
          <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1.625rem] mb-[2.375rem] w-full rounded-[0.625rem] text-xl"
          />
        </div>
      
        <button
          type="submit"
          className="w-full bg-primary  text-white font-medium  py-[0.813rem] px-4 rounded-md font-inter text-base
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