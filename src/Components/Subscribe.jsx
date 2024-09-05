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
    <div className="container w-11/12">
    <div className="flex flex-col lg:flex-row  justify-center lg:items-center gap-[5.375rem] py-10">
      <div className="w-full flex flex-1 justify-center">
        <img src={mail} alt="Newsletter" className="h-auto" />
      </div>
      <form onSubmit={handleSubmit} className="lg:p-[3.125rem] rounded-3xl lg:border lg:border-neutral-grey-200  flex-1 ">
        <div className=" mb-[2rem]">
          <h1 className="text-[1.414rem] lg:text-[1.6rem] xl:text-4xl md:text-2xl  font-bold text-primary font-roboto">Subscribe To Our Newsletter</h1>
          <p className="mb-4 font-inter font-normal text-xs lg:text-base leading-[1.21rem] text-neutral-grey-300 max-w-[40ch]">Get exclusive insights, expert tips, and industry news delivered straight to your inbox</p>
          
        </div>
        <div className="mb-4">
          <label className="block mb-3 font-inter text-[0.706rem] lg:text-xl font-medium text-neutral-black">Name</label>
          <input
            type="text"
            value={name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1rem] lg:pl-[1.625rem] w-full rounded-[.625rem] text-[0.706rem] lg:text-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary "
          />
        </div>
        <div className="mb-4">
          <label className="block mb-3 font-inter text-[0.706rem] lg:text-xl font-medium text-neutral-black">Email</label>
          <input
            type="email"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1rem] lg:pl-[1.625rem] mb-[1.5rem] lg:mb-[2.375rem] w-full rounded-[.625rem] text-[0.706rem] lg:text-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      
        <button
          type="submit"
          className="w-full bg-primary  text-white font-medium  py-[0.813rem] px-4 rounded-[.625rem] font-inter text-sm md:text-base
   bg-blue-700 hover:bg-secondary transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
      </div>
  );
};
export default Subscribe;