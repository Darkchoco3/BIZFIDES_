import React, { useState } from "react";
import mail from "../assets/emails.svg";
import axios from 'axios';
import Modal from "./utils/Modal";
import {motion } from 'framer-motion'

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(`Name: ${name}, Email: ${email}`);
  //   setName("");
  //   setEmail("");
  // };
  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage(''); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Post request using axios
        const response = await axios.post('/gsubscribe', {
            name,
            email
        });

        // Handle response
        if (response?.data?.success === 'true') {
          openModal()
        } else {
          openModal()
          // Error handling
          setMessage(`${response.data.message}`);
        }// Display success message
    } catch (error) {
        console.error('Error submitting form:', error);
        setMessage('Error: Unable to submit the form');
    }
};


  return (
    <div className="container w-11/12">
      <div className="flex flex-col lg:flex-row  justify-center lg:items-center gap-0 lg:gap-[5.375rem] py-0 lg:py-10">
        <motion.div
        initial={{ opacity: 0, x: -90 }}  
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full flex flex-1 justify-center">
            <img src={mail} alt="Newsletter" className="h-auto hidden lg:block"/>
        </motion.div>
        <motion.form
        initial={{ opacity: 0, x: 90 }}  
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
          onSubmit={handleSubmit}
          className="lg:p-[3.125rem] rounded-3xl lg:border lg:border-neutral-grey-200  flex-1 "
        >
          <div className=" mb-[2rem]">
            <h1 className="text-[1.414rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-4xl 2xl:text-5xl  font-bold text-primary font-roboto">
              Subscribe To Our Newsletter
            </h1>
            <p className="mb-4 font-inter font-normal text-xs md:text-sm lg:text-base leading-[1.21rem] text-neutral-grey-300 lg:max-w-[40ch]">
              Get exclusive insights, expert tips, and industry news delivered
              straight to your inbox
            </p>
          </div>
          <div className="mb-4">
            <label className="block mb-3 font-inter text-[0.706rem] md:text-base lg:text-xl font-medium text-neutral-black">
              Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1rem] lg:pl-[1.625rem] w-full rounded-[.625rem] text-[0.706rem] md:text-base lg:text-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary "
            />
          </div>
          <div className="mb-4">
            <label className="block mb-3 font-inter text-[0.706rem] md:text-base lg:text-xl font-medium text-neutral-black">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1rem] lg:pl-[1.625rem] mb-[1.5rem] lg:mb-[2.375rem] w-full rounded-[.625rem] text-[0.706rem] md:text-base lg:text-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary  text-white font-medium  py-[0.813rem] px-4 rounded-[.625rem] font-inter text-sm md:text-base
   bg-blue-700 hover:bg-secondary transition-colors duration-300"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} closeOnClickOutside={false}>
          <div className='w-full text-center py-8 font-roboto '>
            <h2 className='text-primary font-semibold text-[32px]'>Thank You!</h2>
            <p className='text-xl text-neutral-grey-300'>You have successfully Subscribed to receive our news letter</p>
            <button onClick={closeModal} className='bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-primary-dark mt-8' >Okay</button>
          </div>
      </Modal>
    </div>
  );
};
export default Subscribe;
