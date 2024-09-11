import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import line from '../assets/Frame 115.svg';
import image from '../assets/auth.jpeg';
import logo from '../assets/Bizfides logo.svg';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useAuth } from '../Contexts/Auth';
import { ImNotification } from "react-icons/im";
import LoadingButtonText from '../Components/utils/Loading';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(''); // State to hold success or error message

  // Initialize useForm hook
  const {
    register, 
    handleSubmit,
    formState: { errors, isValid }, // Destructure isValid to check form validity
    reset
  } = useForm({
    mode: 'onChange', // Enable form validation on change
  });

  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await login(data);
      if (!response.error) {
        reset();
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        setMessage('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setMessage(`An error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // window.location.href = 'https://betahouse-api.onrender.com/api/auth/google'; // Replace with your backend URL
  };

  return (
    <main className='py-5 lg:py-0'>
      <div className="bg-white w-full h-screen flex">
        <div className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-center container mx-auto">
          <Link to='/'>
            <img src={logo} alt="logo" className='w-[74px] h-[42px] my-[10px] mb-[25px] lg:hidden' />
          </Link>
          <h2 className="text-[16px] md:text-xl lg:text-[28px] font-bold text-primary lg:max-w-[390px] font-inter">
            Welcome Back To <br className='lg:hidden' />Bizfides
          </h2>
          <p className='font-medium text-[12px] md:text-sm lg:text-[28px] py-2 lg:py-4 text-primary lg:text-secondary'>Sign in to continue.</p>

          {/* Form start */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4 lg:mt-6 font-inter">
            <div>
              <label htmlFor="email" className="block text-sm md:text-base l2xlg:text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: 'Email is required' })}
                placeholder='Enter your Email'
                className="mt-1 block w-full text-sm md:text-base 2xl:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-[.625rem] shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              />
              {errors.email && <p className="text-primary-red text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-base 2xl:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                  className="relative mt-1 block w-full text-sm md:text-base 2xl:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-[.625rem] shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <div
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </div>
              </div>
              {errors.password && (
                <p className="text-primary-red text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className='flex justify-between items-center pb-[1rem]'>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("RememberMe")}
                  className={`h-4 w-4`}
                />
                <label htmlFor="RememberMe" className="ml-2 block text-sm lg:text-base 2xl:text-lg font-medium font-inter text-neutral-grey-300">
                  Remember Me
                </label>
              </div>
              <Link to='/forgot-password' className="text-primary-red text-sm lg:text-base 2xl:text-lg">Forgot password</Link>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium text-white ${isValid && !loading ? 'bg-primary hover:bg-secondary' : 'bg-gray-400'}`}
                disabled={!isValid || loading}
              >
                {loading ? <LoadingButtonText color="text-white" text="Signing In..." /> : 'Sign In'}
              </button>
            </div>
          </form>
          {/* Form end */}
          {/* Success or Error message */}
          {message && (
            <div className={`mt-4 text-left text-sm md:text-base lg:text-lg flex items-center gap-1 ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
              <ImNotification />{message}
            </div>
          )}

          <div className="w-full flex justify-center flex-col mt-4">
            <img src={line} className='py-2' alt="divider" />
            <button
              className="w-full flex justify-center items-center gap-2 py-4 px-4 border-2 border-gray-500 rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium text-gray-700 bg-white hover:bg-gray-50"
              onClick={handleGoogleLogin}
            >
              <FcGoogle />
              Continue with Google
            </button>
          </div>
          <p className="mt-6 text-center text-sm md:text-base lg:text-lg text-gray-500">
            New User? <Link to="/register" className="text-secondary hover:text-green-800">Sign up</Link>
          </p>
        </div>
        <div className="hidden lg:flex lg:w-1/2 h-screen bg-cover relative" style={{ backgroundImage: `url(${image})` }}>
          <Link to='/' className="absolute right-[5.875rem] top-[4.7rem]">
            <img src={logo} alt="Bizfides Logo" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;