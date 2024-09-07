import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import contact from "../assets/contact big.svg";
import phone from "../assets/call-calling.svg";
import sms from "../assets/sms.svg";
import website from "../assets/web.svg";
import location from "../assets/location bblu.svg";
import ExternalHero from '../Components/ExternalHero';
// import Modal from '../Components/utils/Modal';
import Footer from '../Layouts/Footer';

const Contact = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    
    };
    // const openModal = () => {
    //     setIsModalOpen(true);
    //   };
    
    //   const closeModal = () => {
    //     setIsModalOpen(false);
    //     reset()
    //   };


    return (
        <>
        <ExternalHero
        heading={"Contact Us"}
        paragraph={
            "We'd love to hear from you - contact us today!"
        }
        image={contact}
        altText={"contact us image"}
        />
            <div className=" container w-11/12 flex flex-col md:flex-row items-center justify-between p-8 bg-white  rounded-lg mt-8">
            <div className="md:w-1/2 space-y-4 text-gray-700">
    <h2 className="text-[2.5rem] font-roboto font-bold text-primary">
        Get In <span className="text-secondary font-roboto font-bold">Touch</span>
    </h2>
    <p>Lorem ipsum dolor sit amet consectetur. Amet velit eget ut massa gravida felis amet.</p>

    <div className="flex flex-col justify-between space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center ">
                <img src={phone} alt="Phone" className=" h-6" />
                <div className="flex flex-col">
                    <span className="font-bold">Phone Number</span>
                    <span>123456789</span>
                </div>
            </div>

            <div className="flex items-center justify-between  space-y-4">
                <img src={sms} alt="Email" className=" h-6" />
                <div className="flex flex-col">
                    <span className="font-bold">Email Address</span>
                    <span>abcd@gmail.com</span>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-between gap-8">
            <div className="flex items-center ">
                <img src={website} alt="Website" className=" h-6" />
                <div className="flex flex-col">
                    <span className="font-bold">Websites</span>
                    <span>www.bizfides.com</span>
                </div>
            </div>

            <div className="flex  ">
                <img src={location} alt="Location" className=" h-6" />
                <div className="flex flex-col">
                    <span className="font-bold">Address</span>
                    <span>17 Avenue, SJK street, Lagos.</span>
                </div>
            </div>
        </div>
    </div>
</div>

                <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 mt-8 md:mt-0 space-y-4">
                <div className="flex space-x-4">
    <div className="flex flex-col w-1/2">
        <label htmlFor="name" className="text-sm font-semibold text-gray-700">
            Name<span className="text-error-red">*</span>
        </label>
        <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            placeholder="Your Name"
            className="mt-1 p-2 border-2 border-gray-300 rounded-[5px] bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
    </div>

    <div className="flex flex-col w-1/2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email<span className="text-error-red">*</span>
        </label>
        <input
            id="email"
            {...register('email', {
                required: 'Email is required',
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                },
            })}
            placeholder="Your Email"
            className="mt-1 p-2 border-2 border-gray-300 rounded-[5px] bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    </div>
</div>


                    <div className="flex flex-col">
                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                            Subject<span className="text-error-red">*</span>
                        </label>
                        <input
                            id="subject"
                            {...register('subject', { required: 'Subject is required' })}
                            placeholder="Your Subject"
                            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">
                            Message<span className="text-error-red">*</span>
                        </label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'Message is required' })}
                            placeholder="Your Message"
                            className="mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            rows="4"
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-white font-inter rounded-lg font-medium hover:bg-primary focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                        Submit
                    </button>
                </form>
                {/* <Modal isOpen={isModalOpen} onClose={closeModal} closeOnClickOutside={false}>
          <div className='w-full text-center py-8 font-roboto '>
            <h2 className='text-primary font-semibold text-[32px]'>Awesome!</h2>
            <p className='text-xl text-neutral-grey-300'>Your message has been sent and received. our team will get back to you in due time</p>
            <button onClick={closeModal} className='bg-primary p-2 px-6 rounded-[10px] text-white hover:bg-primary-dark mt-8' >Okay</button>
          </div>
      </Modal> */}


            </div>
            {/* <Footer/> */}
        </>
    );
};

export default Contact;
