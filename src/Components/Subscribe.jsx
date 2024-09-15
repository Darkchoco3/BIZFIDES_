import React, { useState } from "react";
import mail from "../assets/emails.svg";
import axios from "axios";
import Modal from "./utils/Modal";
import { useForm } from "react-hook-form";
import LoadingButtonText from "../Components/utils/Loading";
import toast from "react-hot-toast";

const Subscribe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Form submit handler using react-hook-form
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Post request using axios
      const response = await axios.post("/gsubscribe", {
        name: data.name,
        email: data.email,
      });

      // Handle response
      if (response.data?.success === 'true') {
        toast.success("You have successfully subscribed!");
        openModal(); 
        reset();     
      } else {
        toast.error(response?.data?.message || "Subscription failed.");
      }
    } catch (error) {
      toast.error("Error: Unable to submit the form.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container w-11/12">
      <div className="flex flex-col lg:flex-row  justify-center lg:items-center gap-0 lg:gap-[5.375rem] py-0 lg:py-10">
        <div className="w-full flex flex-1 justify-center">
          <img src={mail} alt="Newsletter" className="h-auto hidden lg:block" />
        </div>

        {/* Form using react-hook-form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="lg:p-[3.125rem] rounded-3xl lg:border lg:border-neutral-grey-200 flex-1"
        >
          <div className=" mb-[2rem]">
            <h1 className="text-[1.414rem] md:text-[1.5rem] lg:text-[1.6rem] xl:text-4xl 2xl:text-5xl font-bold text-primary font-roboto">
              Subscribe To Our Newsletter
            </h1>
            <p className="mb-4 font-inter font-normal text-xs md:text-sm lg:text-base leading-[1.21rem] text-neutral-grey-300 lg:max-w-[40ch]">
              Get exclusive insights, expert tips, and industry news delivered
              straight to your inbox
            </p>
          </div>

          {/* Name Input */}
          <div className="mb-4">
            <label className="block mb-3 font-inter text-[0.706rem] md:text-base lg:text-xl font-medium text-neutral-black">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1rem] lg:pl-[1.625rem] w-full rounded-[.625rem] text-[0.706rem] md:text-base lg:text-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            {/* Error message for Name */}
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-3 font-inter text-[0.706rem] md:text-base lg:text-xl font-medium text-neutral-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="border border-neutral-grey-200 pt-[0.563rem] pb-[1.25rem] pl-[1rem] lg:pl-[1.625rem] w-full rounded-[.625rem] text-[0.706rem] md:text-base lg:text-xl focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
            />
            {/* Error message for Email */}
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Subscribe Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-[0.813rem] px-4 rounded-[.625rem] font-inter text-sm md:text-base bg-blue-700 hover:bg-secondary transition-colors duration-300"
            disabled={loading}
          >
            {loading ? (
              <LoadingButtonText color="text-white" text="Subscribing..." />
            ) : (
              "Subscribe"
            )}
          </button>
        </form>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        closeOnClickOutside={false}
      >
        <div className="w-full text-center py-8 font-roboto ">
          <h2 className="text-primary font-semibold text-[32px]">Thank You!</h2>
          <p className="text-xl text-neutral-grey-300">
            You have successfully Subscribed to receive our newsletter
          </p>
          <button
            onClick={closeModal}
            className="bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-primary-dark mt-8"
          >
            Okay
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Subscribe;
