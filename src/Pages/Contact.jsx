import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import contact from "../assets/contact big.svg";
import phone from "../assets/call-calling.svg";
import sms from "../assets/sms.svg";
import website from "../assets/web.svg";
import location from "../assets/location bblu.svg";
import ExternalHero from "../Components/ExternalHero";
import Modal from "../Components/utils/Modal";
import { ImNotification } from "react-icons/im";
import LoadingButtonText from '../Components/utils/Loading';
import { useAuth } from '../Contexts/Auth';

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(''); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {auth} = useAuth()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // Populate form fields if auth data is available
  useEffect(() => {
    if (auth) {
      setName(`${auth.user?.firstName} ${auth.user?.lastName}`);
      setEmail(auth.user?.email);
    }
  }, [auth]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('');
    reset()
  };

  const handleFocus = () => {
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  
  const onSubmit = (data) => {
    openModal()
    setMessage('');
    console.log(data);
  };
  return (
    <>
      <ExternalHero
        heading={"Contact Us"}
        paragraph={"We'd love to hear from you - contact us today!"}
        image={contact}
        altText={"contact us image"}
      />
      <div className="container w-11/12 flex flex-col-reverse lg:flex-row justify-between gap-10 px-1 sm:px-2  lg:p-8 bg-white rounded-lg mt-8">
        
        {/* Left Side - Contact Details */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-[2.5rem] font-roboto font-bold text-primary text-center md:text-left">
            Get In{" "}
            <span className="text-secondary font-roboto font-bold">Touch</span>
          </h2>
          <p className="lg:w-[396px] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Amet velit eget ut massa
            gravida felis amet.
          </p>
          <div className="space-y-6">
            {/* Phone and Email */}
            <div className="flex justify-start items-start space-x-8">
              <div className="flex items-center space-x-2">
                <img src={phone} alt="Phone" className="h-6" />
                <div>
                  <span className="font-bold">Phone Number</span>
                  <p>123456789</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <img src={sms} alt="Email" className="h-6" />
                <div>
                  <span className="font-bold">Email Address</span>
                  <p>abcd@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Website and Address */}
            <div className="flex justify-start items-start space-x-8">
              <div className="flex items-center space-x-2">
                <img src={website} alt="Website" className="h-6" />
                <div>
                  <span className="font-bold">Websites</span>
                  <p>www.bizfides.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <img src={location} alt="Location" className="h-6" />
                <div>
                  <span className="font-bold">Address</span>
                  <p>17 Avenue, SJK street, Lagos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 xl:min-w-[633px]"
        >
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700"
              >
                Name<span className="text-error-red">*</span>
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                onFocus={handleFocus}
                value={name} // Controlled input
                onChange={(e) => setName(e.target.value)} // Allow user to edit

              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col w-1/2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email<span className="text-error-red">*</span>
              </label>
              <input
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your Email"
                className="mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                onFocus={handleFocus}
                value={email} // Controlled input
                onChange={(e) => setEmail(e.target.value)} // Allow user to edit
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-gray-700"
            >
              Subject<span className="text-error-red">*</span>
            </label>
            <input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="Your Subject"
              className="mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onFocus={handleFocus}
              />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700"
            >
              Message<span className="text-error-red">*</span>
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className="mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onFocus={handleFocus}
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white font-inter rounded-lg font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 "
            disabled={loading}
          >
             {loading ?   <LoadingButtonText color="text-white" text="Submitting..." /> : 'Submit'}
             </button>
        </form>
         {/* Form end */}
            {message && (
            <div className={`mt-4 text-left text-sm md:text-base lg:text-lg flex items-center gap-1 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
              <ImNotification/>{message}
            </div>
          )}
      </div>
       {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal} closeOnClickOutside={false}>
          <div className='w-full text-center py-8 font-roboto '>
            <h2 className='font-semibold text-xl font-roboto text-primary pb-4'>Welcome to Bizfides!</h2>
            <p className='text-xl text-neutral-grey-300'>Your account has been successfully created!</p>
            <p className='text-xl text-neutral-grey-300'>Please check your email to verify your account.</p>
            <div className='flex justify-center gap-12'>
            <button onClick={closeModal} className='bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-primary-dark mt-8' >Okay</button>
            <button onClick={closeModal} className='p-2 px-6 rounded-[10px] text-primary mt-8'>Login</button>
            </div>
          </div>
      </Modal>
    </>
  );
};

export default Contact;
