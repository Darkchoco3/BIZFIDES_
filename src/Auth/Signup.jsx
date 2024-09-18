import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import line from "../assets/Frame 115.svg";
import image from "../assets/auth.jpeg";
import logo from "../assets/Bizfides logo.svg";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useAuth } from "../Contexts/Auth";
import LoadingButtonText from "../Components/utils/Loading";
import { ImNotification } from "react-icons/im";
import Modal from "../Components/utils/Modal";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modalEmail, setModalEmail] = useState('');
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+234');
  const [countdown, setCountdown] = useState(0); // Countdown state
  const [isDisabled, setIsDisabled] = useState(false); // Button disabled state
  const { signup } = useAuth()


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage("");
    reset();
    navigate("/login");
  };

  const handleFocus = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const handlePhoneChange = (e) => {
    let input = e.target.value;

    // Remove the leading 0 if present
    if (input.startsWith("+2340")) {
      input = "+234" + input.slice(5);
    } else if (input.startsWith("0")) {
      input = "+234" + input.slice(1);
    }

    // Ensure only 10 digits are entered after +234
    if (input.length <= 14) {
      setPhoneNumber(input);
    }
  };

  const onSubmit = async (data) => {
    setMessage("");
    setModalEmail(data.email)
    try {
      setLoading(true);
      const response = await signup(data);
      if (!response.error) {
        openModal()
        setCountdown(60); 
        setLoading(false)
        setIsDisabled(true); 
        reset();
      } else {
        // Error handling
        setMessage("Registration failed. Please check your credentials.");
      }
    } catch (err) {
      toast.error(`An error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${axios.defaults.baseURL}/auth/google`;
  };

  const handleResendEmail = async () => {
    setLoading(true)
    try {
      setMessage('');
      const response = await axios.post(`/auth/resend-token`, {email: modalEmail});
      console.log(response);
      toast.success('Email sent successfully!');
      setIsDisabled(true); // Disable the button
      setCountdown(60); // Start the 60 seconds countdown
    } catch (error) {
      toast.error('Error sending email.');
    }
  };

  useEffect(() => {
    let timer;

    // If countdown is active, decrement it every second
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
    }

    // When countdown reaches 0, re-enable the button
    if (countdown === 0 && isDisabled) {
      setIsDisabled(false);
    }

    // Cleanup the interval when component is unmounted or countdown reaches 0
    return () => clearInterval(timer);
  }, [countdown, isDisabled]);

 
  return (
    <>
      <div className="bg-white h-screen w-full flex">
        {/* Left Side - Form */}
        <div className="lg:w-1/2 p-4 lg:p-12 lg:px-20 flex flex-col justify-center  h-full overflow-y-auto">
          <div className="overflow-y-auto container mx-auto custom-scrollbar">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="w-[74px] h-[42px] my-[10px] mb-[25px] lg:hidden"
              />
            </Link>
            <h2 className="text-[16px] md:text-xl xl:text-[28px] font-bold text-primary lg:max-w-[474px] font-inter w-[90%] lg:w-[100%] text-pretty">
              Grow Your Business’s Audience and Influence—
              <span className="text-primary lg:text-secondary">
                Create Your Account Today!
              </span>
            </h2>

            {/* Form start */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 mt-6 font-inter px-1"
            >
              <p className="font-medium text-[12px] md:text-sm xl:text-lg text-secondary">
                Lets get started by filling out the information below
              </p>
              <div className="flex flex-col xl:flex-row xl:space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm md:text-base 2xl:text-lg font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="mt-1 text-sm md:text-base 2xl:text-lg block w-full px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Enter First Name"
                    // onFocus={handleFocus}
                  />
                  {errors.firstName && (
                    <p className="text-primary-red text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="flex-1 mt-[1rem] xl:mt-0">
                  <label
                    htmlFor="lastName"
                    className="block text-sm md:text-base 2xl:text-lg font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    className="mt-1 text-sm md:text-base 2xl:text-lg block w-full px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    placeholder="Enter last Name"
                    // onFocus={handleFocus}
                  />
                  {errors.lastName && (
                    <p className="text-primary-red text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm md:text-base 2xl:text-lg font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    validate: (value) =>
                      value.length === 14 || "Invalid phone number",
                  })}
                  placeholder="Phone"
                  onChange={handlePhoneChange}
                  className="mt-1 block w-full text-sm md:text-base 2xl:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  // onFocus={handleFocus}
                />
                {errors.phoneNumber && (
                  <p className="text-primary-red text-sm">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm md:text-base 2xl:text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your Email"
                  className="mt-1 block w-full text-sm md:text-base 2xl:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  // onFocus={handleFocus}
                />
                {errors.email && (
                  <p className="text-primary-red text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-base lg:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    validate: {
                      hasUppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must contain at least one uppercase letter",
                      hasLowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Password must contain at least one lowercase letter",
                      hasNumber: (value) =>
                        /[0-9]/.test(value) ||
                        "Password must contain at least one number",
                      hasSpecialChar: (value) =>
                        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value) ||
                        "Password must contain at least one special character",
                    },
                  })}
                  placeholder="Enter your password"
                  className="relative mt-1 block w-full text-sm md:text-base lg:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-[.625rem] shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm md:text-base 2xl:text-lg font-medium "
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    placeholder="Confirm your password"
                    className="mt-1 block w-full text-sm md:text-base 2xl:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    // onFocus={handleFocus}
                  />
                  <div
                    className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-xl"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <IoEyeOutline />
                    ) : (
                      <IoEyeOffOutline />
                    )}
                  </div>
                </div>
                {errors.confirmPassword && (
                  <p className="text-primary-red text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("termsAccepted", {
                    required: "You must accept the terms and conditions",
                  })}
                  className={`h-4 w-4 ${
                    errors.termsAccepted
                      ? "border-red"
                      : "border-neutral-grey-200"
                  } text-green-400 rounded focus:ring-green-500`}
                  // onFocus={handleFocus}
                />
                <label
                  htmlFor="termsAccepted"
                  className="ml-2 block text-[12px] md:text-base font-medium font-inter text-neutral-grey-300 "
                >
                  I agree to Bizfides'{" "}
                  <a
                    href="#"
                    className="text-secondary hover:text-primary-dark"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-secondary hover:text-primary-dark"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.termsAccepted && (
                <p className="text-primary-red text-sm">
                  {errors.termsAccepted.message}
                </p>
              )}

              <div>
                <button
                  type="submit"
                  className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium text-white 
                  ${
                    loading
                      ? "bg-secondary hover:bg-secondary"
                      : isValid
                      ? "bg-primary hover:bg-secondary"
                      : "bg-gray-400"
                  }`}
                  disabled={!isValid || loading}
                >
                  {loading ? (
                    <LoadingButtonText
                      color="text-white"
                      text="Creating an account..."
                    />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
            {/* Form end */}
            <div className="w-full flex justify-center flex-col mt-4">
              <img src={line} className="py-2" alt="divider" />
              <button
                className="w-full flex justify-center items-center gap-2 py-4 px-4 border-2 border-gray-500 rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 mt-4"
                onClick={handleGoogleLogin}
              >
                <FcGoogle />
                Continue with Google
              </button>
            </div>
            <p className="mt-6 text-center text-sm md:text-base lg:text-lg text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary hover:text-green-800">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          closeOnClickOutside={false}
        >
          <div className="w-full text-center py-8 font-roboto">
            <h2 className="font-semibold text-2xl sm:text-2xl lg:text-3xl font-roboto text-primary pb-4">
              Email Confirmation Required
            </h2>
            <p className="text-base 2xl:text-xl text-neutral-grey-300">
              We've sent a verification email to <span className="text-primary font-medium">{modalEmail}</span> Please check your inbox  and if you cant see it, kindly check the spam to confirm your email address. Thank you.            </p>
            <div className="flex justify-center gap-12">
            <button
              onClick={handleResendEmail}
              disabled={isDisabled || loading}
              className={`${isDisabled || loading ? 'bg-gray-400' : 'bg-primary'} w-full p-2 px-6 rounded-[10px] text-white hover:bg-secondary mt-8`}
            >
              {loading ? 'Loading...' : isDisabled ? `Resend in ${countdown}s` : 'Resend Email'}
            </button>
            </div>
          </div>
        </Modal>
        {/* Right Side - Image Background */}
        <div
          className="hidden lg:flex lg:w-1/2 h-screen bg-cover  relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <Link to="/" className="absolute right-[120px] top-[40px]">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;