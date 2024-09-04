import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import image from "../assets/auth.jpeg";
import logo from "../assets/Bizfides logo.svg";
import Modal from "../Components/utils/Modal";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  // Initialize useForm hook
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Dummy forgot password function
  const resetpass = async (data) => {
    console.log("Submitting form data:", data);
    // Simulate an API call
    return new Promise((resolve) =>
      setTimeout(() => resolve({ error: false }), 1000)
    );
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await resetpass(data);
      if (!response.error) {
        openModal();
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
        <div className="lg:w-1/2 p-4 py-8 lg:p-12 lg:px-20 flex flex-col justify-start lg:justify-center container mx-auto">
          <img
            src={logo}
            alt="logo"
            className="w-[74px] h-[42px] my-[10px] mb-[25px] lg:hidden"
          />
          <h2 className="text-[16px] md:text-xl lg:text-[28px] font-bold text-primary lg:max-w-[390px] font-inter">
            Reset Your Password?
          </h2>

          {/* Form start */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 mt-6 font-inter"
          >
            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-base lg:text-lg font-medium text-gray-700 "
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
                  className="relative mt-1 block w-full text-sm md:text-base lg:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
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
                className="block text-sm md:text-base lg:text-lg font-medium"
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
                  className="mt-1 block w-full text-sm md:text-base lg:text-lg px-3 py-3 border-[2px] border-neutral-grey-200 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <div
                  className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-primary-red text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium text-white bg-primary hover:bg-primary-dark"
                disabled={loading}
              >
                {loading ? "Loading..." : "Reset"}
              </button>
            </div>
          </form>
          {/* Form end */}

          <button
                className="w-full flex justify-center py-4 px-4 border mt-4 rounded-[10px] shadow-sm text-sm md:text-base lg:text-lg font-medium bg-white border-primary text-primary-dark"
                >
            <Link to="/">
              Cancel
            </Link>
          </button>
        </div>
        <div
          className="hidden lg:flex lg:w-1/2 h-screen bg-cover relative"
          style={{ backgroundImage: `url(${image})` }}
        >
          <Link to="/" className="absolute right-[120px] top-[70px]">
            <img src={logo} alt="Bizfides logo" />
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        closeOnClickOutside={false}
      >
        <div className="w-full text-center py-8 font-roboto">
          <h2 className="text-primary font-semibold text-[32px]">Awesome !</h2>
          <p className="text-xl text-neutral-grey-300">
            You have successfully reset your Password
          </p>
          <button
            onClick={closeModal}
            className="bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-primary-dark mt-8"
          >
            Okay
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default ResetPassword;
