 import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/auth.jpeg';
import logo from '../assets/Bizfides logo.svg';
import Modal from '../Components/utils/Modal';
import { ImNotification } from "react-icons/im";
import LoadingButtonText from '../Components/utils/Loading';
import axios from 'axios';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); 

  const openModal = () => {
    setIsModalOpen(true);

  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage(''); 
    reset()
  };

  // Initialize useForm hook
  const {
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const handleFocus = () => {
    setTimeout(() => {
      setMessage(''); 
    }, 3000);
  };

  const onSubmit = async (data) => {
    setMessage('')
    try {
      setLoading(true);
      const response = await axios.post('/auth/forgot-password',  data );
      if (response?.data?.success === 'true') {
        openModal()
      } else {
        openModal()
        // Error handling
        // toast.error("Failed to send reset instructions");
        setMessage(`${response.data.message}`);
      }
      console.log(res?.data);
      
    } catch (err) {
      
      setMessage(`An error occurred: ${err.response.data.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="">
      <div className="bg-white w-full h-screen flex">
        <div className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-start lg:justify-center container mx-auto">
        <Link to='/'>
        <img src={logo} alt="logo" className='w-[74px] h-[42px] my-[10px] mb-[25px] lg:hidden' />
        </Link>
        <h2 className="text-[16px] md:text-xl lg:text-[28px] font-bold text-primary lg:max-w-[390px] font-inter">
          Forgot password?
          </h2>
          <p className="font-medium text-[12px] md:text-sm lg:text-[20px] text-neutral-black py-4">No worries, we’ll send you reset instructions.</p>
          
          {/* Form start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6 font-inter">
            <div>
              <label htmlFor="email" className="block text-sm md:text-base lg:text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: 'Email is required' })}
                placeholder="Enter your Email"
                className="mt-1 block w-full text-sm md:text-base lg:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                onFocus={handleFocus}
              />
              {errors.email && <p className="text-primary-red text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium text-white bg-primary hover:bg-primary-dark"
                disabled={loading}
              >
                {loading ? <LoadingButtonText color="text-white" text="Loading..." /> : 'Reset Password'}
              </button>
            </div>
          </form>
          {/* Form end */}
          {message && (
            <div className={`mt-4 text-left text-sm md:text-base lg:text-lg flex items-center gap-1 ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message.includes('successfully') ? '' :<ImNotification/> } {message}
            </div>
          )}
          <p className="mt-6 text-center font-medium text-sm md:text-base lg:text-lg">
            <Link to="/" className="text-primary"><span className='pr-4'>&lt;</span>Back to home</Link>
          </p>
        </div>
        <div className="hidden lg:flex lg:w-1/2 h-screen bg-cover relative" style={{ backgroundImage: `url(${image})` }}>
          <Link to="/" className="absolute right-[120px] top-[70px]">
            <img src={logo} alt="Bizfides logo" />
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} closeOnClickOutside={false}>
          <div className='w-full text-center py-8 font-roboto '>
            <h2 className='text-primary font-semibold text-[32px]'>Message Sent!</h2>
            <p className='text-xl text-neutral-grey-300'>Continue with the link sent to you via your Email</p>
            <button onClick={closeModal} className='bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-primary-dark mt-8' >Okay</button>
          </div>
      </Modal>
    </main>
  );
}

export default ForgetPassword;
