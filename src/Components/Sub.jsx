import React from 'react'
import image1 from '../assets/Group 2008.svg'
import { IoChevronDownOutline } from "react-icons/io5";


const Sub = () => {
    return (

        <div className="bg-primary   ">
            <div className="container w-11/12">
            <div className="text-white text-center p-6">
                <h2 className="text-lg font-medium p-4  ">Build Process</h2>
                <h1 className="text-2xl font-bold">How it Works</h1>
            </div>
            <div className="w-[100%]  mx-auto relative text-white border-spacing-5 border-dashed border-gray-500 pt-8 hidden md:block  ">
                <span className="text-2xl mr-2 absolute md:left-[44%] lg:left-[20%] md:top-20 lg:top-20 hidden lg:block">{'----------->'}</span>
                <span className="text-2xl mr-2 absolute md:left-[46%] md:top-14  hidden md:block lg:hidden">{'--->'}</span>
                <span className="text-2xl mr-2 absolute right-[44%] md:top-56 lg:top-20 hidden lg:block">{'----------->'}</span>
                <span className="text-2xl mr-2 absolute md:left-[46%] md:top-[186px]  hidden md:block lg:hidden">{'--->'}</span>
                <span className="text-2xl mr-2 absolute right-[18%] lg:top-20 hidden lg:block">{'----------->'}</span>
            </div>
          

            <div className=" w-[100%] grid md:grid-cols-2 lg:grid-cols-4 gap-12  h-[120vh] md:h-auto md:flex-wrap ">
                <div className="flex lg:justify-center lg:flex-col items-center relative gap-3 ">
                    <div className="border-[0.6rem] lg:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-primary w-12 h-12 lg:w-16 lg:h-16 border-[0.3rem] lg:border-8 border-primary bg-primary-light rounded-full flex items-center justify-center  font-semibold text-xl">01</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center lg:justify-center font-inter md:w-[290px] lg:w-[233px]">
                        <span className="text-white font-semibold block mb-1 lg:p-0 text-xl md:text-2xl lg:text-center">Select Service</span>
                        <p className="text-white text-xs md:text-sm  lg:text-center">Choose the specific services you need.</p>
                    </div>
                    <div className='flex flex-col  text-white items-center    absolute md:hidden top-28 left-5  '>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <IoChevronDownOutline />
                 </div>
                </div>
                <div className="flex lg:justify-center lg:flex-col items-center relative gap-3 mb-0">
                    <div className=" border-[0.6rem] lg:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-primary w-12 h-12 lg:w-16 lg:h-16 border-[0.3rem] lg:border-8 border-primary bg-primary-light rounded-full flex items-center justify-center font-semibold text-xl">02</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center font-inter md:w-[290px] lg:w-[233px]">
                        <span className="text-white font-semibold block mb-1  lg:p-0 text-xl md:text-2xl">Consult & Plan</span>
                        <p className="text-white text-xs md:text-sm   lg:text-center ">Discuss needs,set goals and outline project scope</p>
                    </div>
                    <div className='flex flex-col text-white items-center    absolute md:hidden top-28 left-5 ' >
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <IoChevronDownOutline />
                 </div>
                </div>
                <div className="flex lg:justify-center lg:flex-col items-center relative gap-3 mb-0">
                    <div className="border-[0.6rem] lg:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-primary w-12 h-12 lg:w-16 lg:h-16 border-[0.3rem] lg:border-8 border-primary bg-primary-light rounded-full flex items-center justify-center font-semibold text-xl">03</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center font-inter md:w-[290px] lg:w-[233px]">
                        <span className="text-white font-semibold block mb-1 text-xl md:text-2xl">Onboard & Execute</span>
                        <p className="text-white  text-xs md:text-sm  lg:text-center ">Discuss needs,set goals and outline project scope</p>
                    </div>
                    <div className='flex flex-col text-white items-center    absolute md:hidden top-28 left-5 ' >
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                    <IoChevronDownOutline />
                 </div>
                </div>
                <div className="flex lg:justify-center lg:flex-col items-center gap-3">
                    <div className="border-[0.6rem] lg:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
                        <h1 className="text-primary w-12 h-12 lg:w-16 lg:h-16 border-[0.3rem] lg:border-8 border-primary bg-primary-light rounded-full flex items-center justify-center  font-semibold text-xl  ">04</h1>
                    </div>
                    <div className="bg-gray-800  rounded-lg mt-2 flex flex-col lg:items-center font-inter md:w-[290px] lg:w-[233px]">
                        <span className="text-white font-semibold block mb-1 text-xl md:text-2xl">Delivery & Support</span>
                        <p className="text-white text-xs md:text-sm  lg:text-center ">Final delivery,ongoing support (if applicable)</p>
                    </div>
                </div>

            </div>
            <div className="mt-16 md:mt-4">
                <img src={image1} alt="" className='' />
            </div>
            </div>



        </div>
    );
};

export default Sub