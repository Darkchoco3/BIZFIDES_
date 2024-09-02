import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import line from '../assets/Frame 115.svg'
import image from '../assets/Frame 1171277974.png'

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Initialize useForm hook
  const {
    register, 
    handleSubmit,
    watch,
    formState: { errors }, 
  } = useForm();

  // Dummy signup function
  const signup = async (data) => {
    console.log("Submitting form data:", data);
    // Simulate an API call
    return new Promise((resolve) => setTimeout(() => resolve({ error: false }), 1000));
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await signup(data);
      if (!response.error) {
        // Success handling
        // toast.success("Registration successful");
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      } else {
        // Error handling
        // toast.error("Registration failed");
      }
    } catch (err) {
      // toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // window.location.href = 'https://betahouse-api.onrender.com/api/auth/google'; // Replace with your backend URL
  };

  return (
    <main className=''>
      <div className="bg-white w-full h-full flex">
        <div className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-center container mx-auto">
          <h2 className="text-[28px] font-semibold text-primary lg:max-w-[390px]">
          Welcome Back To Bizfides
           </h2>
           <p className='font-medium text-[28px] text-secondary'>Sign in to continue.</p>
          {/* Form start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6 font-inter">
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: 'Email is required' })}
                placeholder='Enter your Email'
                className="mt-1 block w-full px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors.email && <p className="text-primary-red text-sm">{errors.email.message}</p>}
            </div>
  
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", { required: 'Password is required' })}
                placeholder='Enter your password'
                className="mt-1 block w-full px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors.password && <p className="text-primary-red text-sm">{errors.password.message}</p>}
            </div>
  
            <div className='flex justify-between items-center'> 
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("RememberMe")}
                  className={`h-4 w-4`}
                />
                <label htmlFor="RememberMe" className="ml-2 block text-sm font-medium font-inter text-neutral-grey-300">
                  Remember Me
                </label>
              </div>
              <p className="text-primary-red text-sm">Forget password</p>
             </div>

            <div>
              <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-sm text-lg font-medium text-white bg-primary hover:bg-green-800"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Sign In'}
              </button>
            </div>
          </form>
          {/* Form end */}
  
          <div className="w-full flex justify-center flex-col mt-4">
            <img src={line} className='py-2' alt="divider" />
            <button
              className="w-full flex justify-center items-center gap-2 py-4 px-4 border-2 border-gray-500 rounded-2xl shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={handleGoogleLogin}
            >
              <FcGoogle />
              Continue with Google
            </button>
          </div>
          <p className="mt-6 text-center text-lg text-gray-500">
            New User? <Link to="/register" className="text-secondary hover:text-green-800">Sign up</Link>
          </p>
        </div>
        <div className='hidden lg:flex lg:w-1/2 h-[805px]'>
        <img src={image} alt="" className='h-full w-full object-fit' />
        </div>
      </div>
    </main>
  );  
};

export default Login;
