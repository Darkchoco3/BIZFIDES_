import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/auth.jpeg';
import logo from '../assets/Bizfides logo.svg';
import Modal from '../Components/utils/Modal';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Initialize useForm hook
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Dummy forgot password function
  const forgotPassword = async (data) => {
    console.log("Submitting form data:", data);
    // Simulate an API call
    return new Promise((resolve) => setTimeout(() => resolve({ error: false }), 1000));
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await forgotPassword(data);
      if (!response.error) {
        openModal()
        // Success handling
        // toast.success("Password reset instructions sent");
      } else {
        // Error handling
        // toast.error("Failed to send reset instructions");
      }
    } catch (err) {
      // toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="">
      <div className="bg-white w-full h-screen flex">
        <div className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-center container mx-auto">
          <h2 className="text-[28px] font-semibold text-primary lg:max-w-[390px]">
            Forgot password?
          </h2>
          <p className="font-medium text-base lg:text-[1.05rem] xl:text-[1.25rem] max-w-[40ch] lg:text text-neutral-black">No worries, we’ll send you reset instructions.</p>
          
          {/* Form start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6 font-inter">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: 'Email is required' })}
                placeholder="Enter your Email"
                className="mt-1 block w-full px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors.email && <p className="text-primary-red text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-[10px] shadow-sm text-lg font-medium text-white bg-primary hover:bg-secondary transition-colors duration-300"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Reset Password'}
              </button>
            </div>
          </form>
          {/* Form end */}
  
          <p className="mt-6 text-center font-medium text-xl">
            <Link to="/" className="text-primary hover:text-secondary"><span className='pr-4'>&lt;</span>Back to home</Link>
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
