import React from 'react'
import image1 from '../assets/dot rectngle.svg'
import { IoChevronDownOutline } from "react-icons/io5";


const Sub = () => {
    return (

        <div className="bg-primary p-2  ">
            <div className="text-white text-center p-6">
                <h2 className="text-lg font-medium p-4  ">Build Process</h2>
                <h1 className="text-2xl font-bold">How it Works</h1>
            </div>
            <div className="w-[100%]  mx-auto relative text-white border-spacing-5 border-dashed border-gray-500 pt-8 hidden md:block  ">
                <span className="text-2xl mr-2 absolute left-[16%] top-16 ">{'----------->'}</span>
                <span className="text-2xl mr-2 absolute right-[45%] top-16">{'----------->'}</span>
                <span className="text-2xl mr-2 absolute right-[16%] top-16">{'----------->'}</span>
            </div>
          

            <div className=" w-[100%] flex  justify-between gap-8 p-4 flex-col md:flex-row h-[120vh] md:h-auto md:flex-wrap ">
                <div className="flex justify-between lg:justify-center lg:flex-col items-center relative ">
                    <div className="border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-neutral-black w-16   h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center  ">01</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center ">
                        <span className="text-white font-roboto block mb-1 px-4 lg:p-0 text-2xl">Select Service</span>
                        <p className="text-white px-4 text-xs pr-16 lg:p-0">Choose the specific service you need</p>
                    </div>
                    <div className='flex flex-col text-white items-center    absolute md:hidden top-32 left-10  '>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <IoChevronDownOutline />
                 </div>
                </div>
                <div className="flex justify-around lg:justify-center lg:flex-col items-center relative   ">
                    <div className=" border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-neutral-black w-16   h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center ">02</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center">
                        <span className="text-white font-roboto block mb-1 px-4 lg:p-0 text-2xl">Consult & Plan</span>
                        <p className="text-white px-4 text-xs pr-16 lg:p-0 ">Discuss needs,set goals and outline project scope</p>
                    </div>
                    <div className='flex flex-col text-white items-center    absolute md:hidden top-32 left-10 ' >
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <IoChevronDownOutline />
                 </div>
                </div>
                <div className="flex justify-around lg:justify-center lg:flex-col items-center relative">
                    <div className=" border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-neutral-black w-16   h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center ">03</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center">
                        <span className="text-white font-roboto block mb-1 px-4 lg:p-0 text-2xl">Onboard & Execute</span>
                        <p className="text-white px-4 text-xs pr-16 lg:p-0">Discuss needs,set goals and outline project scope</p>
                    </div>
                    <div className='flex flex-col text-white items-center    absolute md:hidden top-32 left-10 ' >
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <IoChevronDownOutline />
                 </div>
                </div>
                <div className="flex justify-around lg:justify-center lg:flex-col items-center">
                    <div className=" border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-neutral-black w-16   h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center   ">04</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center">
                        <span className="text-white font-roboto block mb-1 px-4 lg:p-0 text-2xl">Delivery &Support</span>
                        <p className="text-white px-4 text-xs pr-16 lg:p-0 ">Final delivery,ongoing support if appli</p>
                    </div>
                </div>

            </div>
            <div className="flex  items-center p-4 flex-shrink-0 ">
                <img src={image1} alt="" className='filter invert h-auto' />
            </div>



        </div>
    );
};

export default Sub