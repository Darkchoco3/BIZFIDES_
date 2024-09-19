import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import contact from "../assets/contact big.svg";
import phone from "../assets/call-calling.svg";
import sms from "../assets/sms.svg";
import website from "../assets/web.svg";
import location from "../assets/location bblu.svg";
import ExternalHero from "../Components/ExternalHero";
import Modal from "../Components/utils/Modal";
import { ImNotification } from "react-icons/im";
import LoadingButtonText from "../Components/utils/Loading";
import { useAuth } from "../Contexts/Auth";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { auth } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Populate form fields if auth data is available
  useEffect(() => {
    if (auth.user) {
      setName(`${auth.user?.firstName} ${auth.user?.lastName}`);
      setEmail(auth.user?.email);
    }
  }, [auth]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage("");
    reset();
    setEmail('')
    setName('')
  };

  const handleFocus = () => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Post request using axios
      const response = await axios.post("/gcontact", {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      console.log(response.data.success);
      
      // Handle response
      if (response.data?.success === "true") {
        openModal();
        toast.success(`${response.data.message}`);
      } else {
        openModal();
      }
    } catch (error) {
      toast.error("Unable to submit the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ExternalHero
        heading={"Contact Us"}
        paragraph={"We'd love to hear from you - contact us today!"}
        image={contact}
        altText={"contact us image"}
      />

      <div className="container w-11/12 flex flex-col-reverse lg:flex-row lg:items-center gap-10 sm:px-2 lg:pt-[5rem] lg:pb-[1.875rem] bg-white rounded-lg mt-8 lg:mt-0">
        {/* Left Side - Contact Details */}
        <div className="space-y-2 lg:space-y-8 text-gray-700 text-sm font-inter flex-1">
          <h2 className="text-xl md:text-3xl lg:text-[2.5rem] 2xl:text-[2.8rem] font-roboto font-bold text-primary text-center lg:text-left">
            Get In
            <span className="text-secondary font-roboto font-bold"> Touch</span>
          </h2>
          <p className="text-center text-pretty text-sm md:text-lg 2xl:text-xl lg:text-left pb-2 lg:pb-0">
            Get In Touch with us by contacting us Today through these platforms
          </p>
          <div className="space-y-6">
            {/* Phone and Email */}
            <div className="flex md:justify-center lg:justify-start lg:items-start space-x-1 md:space-x-7">
              <div className="flex items-center space-x-2 flex-1">
                <img src={phone} alt="Phone" className="h-5 lg:h-6" />
                <div>
                  <span className="font-bold md:text-base 2xl:text-xl">Phone Number</span>
                  <p className="text-sm md:text-base 2xl:text-xl">123456789</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-1">
                <img src={sms} alt="Email" className="h-5 lg:h-6" />
                <div>
                  <span className="font-bold md:text-base 2xl:text-xl">Email Address</span>
                  <p className="text-sm md:text-base 2xl:text-xl">
                    bizfides7@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Website and Address */}
            <div className="flex md:justify-center lg:justify-start lg:items-start space-x-1 md:space-x-6">
              <div className="flex items-center space-x-2 flex-1">
                <img src={website} alt="Website" className="h-5 lg:h-6" />
                <div>
                  <span className="font-bold md:text-base 2xl:text-xl">Websites</span>
                  <p className="text-sm md:text-base 2xl:text-xl">
                    www.bizfides.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2 flex-1">
                <img src={location} alt="Location" className="h-5 lg:h-6" />
                <div>
                  <span className="font-bold md:text-base 2xl:text-xl">Address</span>
                  <p className="text-sm md:text-base 2xl:text-xl">
                  1, Ogunlesi Street, Onipanu
                  Lagos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 xl:min-w-[633px] font-inter flex-1"
        >
          <div className="flex flex-col xl:flex-row xl:space-x-4">
            <div className="flex flex-col xl:w-1/2">
              <label
                htmlFor="name"
                className="text-sm md:text-base 2xl:text-xl font-semibold text-gray-700 flex gap-[.15rem]"
              >
                Name<span className="text-error-red -translate-y-px">*</span>
              </label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                className="text-sm md:text-base 2xl:text-xl mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                onFocus={handleFocus}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm md:text-base 2xl:text-xl mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col xl:w-1/2 mt-[1rem] xl:mt-0 ">
              <label
                htmlFor="email"
                className="text-sm md:text-base 2xl:text-xl font-semibold text-gray-700 flex gap-[.15rem]"
              >
                Email<span className="text-error-red -translate-y-px">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Your Email"
                className="text-sm md:text-base 2xl:text-xl mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                onFocus={handleFocus}
                value={email} // Controlled input
                onChange={(e) => setEmail(e.target.value)} // Allow user to edit
              />
              {errors.email && (
                <p className="text-red-500 text-sm md:text-base 2xl:text-xl mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-sm md:text-base 2xl:text-xl font-semibold text-gray-700 flex gap-[.15rem]"
            >
              Subject<span className="text-error-red -translate-y-px">*</span>
            </label>
            <input
              id="subject"
              {...register("subject", { required: "Subject is required" })}
              placeholder="Your Subject"
              className="text-sm md:text-base 2xl:text-xl mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onFocus={handleFocus}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm md:text-base 2xl:text-xl mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="flex flex-col lg:pb-6">
            <label
              htmlFor="message"
              className="text-sm md:text-base 2xl:text-xl font-semibold text-gray-700 flex gap-[.15rem]"
            >
              Message<span className="text-error-red -translate-y-px">*</span>
            </label>
            <textarea
              id="message"
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
              className="text-sm md:text-base 2xl:text-xl mt-1 p-2 border-2 border-neutral-grey-200 rounded-[5px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
              onFocus={handleFocus}
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500 text-sm md:text-base 2xl:text-xl mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 lg:py-3 px-4 bg-primary text-white text-sm lg:text-base xl:text-xl 2xl:text-2xl font-inter rounded-lg font-medium hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 "
            disabled={loading}
          >
            {loading ? (
              <LoadingButtonText color="text-white" text="Submitting..." />
            ) : (
              "Submit"
            )}
          </button>
          {message && (
            <div
              className={`mt-4 text-left text-sm md:text-base lg:text-lg flex items-center gap-1 ${
                message.includes("successful")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <ImNotification />
              {message}
            </div>
          )}
        </form>
        {/* Form end */}
      </div>
      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        closeOnClickOutside={false}
      >
        <div className="w-full text-center py-8 font-roboto ">
          <h2 className="font-semibold text-xl font-roboto text-primary pb-4">
            Awesome!
          </h2>
          <p className="text-base 2xl:text-xl text-neutral-grey-300">
            Your message has been sent and received. Our team will get back to you in due time.
          </p>
  
          <div className="flex justify-center gap-12">
            <button
              onClick={closeModal}
              className="bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-secondary transition-colors duration-300 mt-8"
            >
              Okay
            </button>
            <button
              onClick={closeModal}
              className="p-2 px-6 rounded-[10px] text-primary mt-8"
            >
              Login
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Contact;
