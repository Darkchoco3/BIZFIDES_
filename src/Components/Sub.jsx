import React from 'react'
import image1 from '../assets/Group 2008.svg'


const Sub = () => {
  return (
   
    <div className="bg-primary  ">
    <div className="max-w-[77.5rem] container">
    <div className="text-white text-center p-6">
        <h2 className="text-lg font-medium p-4  ">Build Process</h2>
        <h1 className="text-2xl font-bold">How it Works</h1>
    </div>
    <div className="w-[100%] mx-auto relative text-white border-spacing-5 border-dashed border-gray-500 pt-8 hidden md:block ">
            <span className="text-2xl mr-2 absolute left-[16%]">{'----------->'}</span>
            <span className="text-2xl mr-2 absolute right-[45%]">{'----------->'}</span>
            <span className="text-2xl mr-2 absolute right-[16%]">{'----------->'}</span>
        </div>
    <div className=" w-[100%] flex  justify-between gap-8 p-4 flex-col md:flex-row">
    <div className="flex justify-center flex-col items-center">
        <div className=" border-[0.6rem] md:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
            <h1 className="text-neutral-black w-10 md:w-16  h-10 md:h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center  ">01</h1>
        </div>
        <div className="bg-gray-800  rounded-lg mt-2 flex flex-col items-center">
            <span className="text-white font-roboto block mb-1">Select Service</span>
            <p className="text-white text-xs ">Choose the specific service you need</p>
        </div>
    </div>
    <div className="flex justify-center flex-col items-center">
        <div className=" border-[0.6rem] md:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
            <h1 className="text-neutral-black w-10 md:w-16  h-10 md:h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center  ">02</h1>
        </div>
        <div className="bg-gray-800  rounded-lg mt-2 flex flex-col items-center">
            <span className="text-white font-roboto block mb-1">Consult & Plan</span>
            <p className="text-white text-xs ">Discuss needs,set goals and outline project scope</p>
        </div>
    </div>
    <div className="flex justify-center flex-col items-center">
        <div className=" border-[0.6rem] md:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
            <h1 className="text-neutral-black w-10 md:w-16  h-10 md:h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center  ">03</h1>
        </div>
        <div className="bg-gray-800  rounded-lg mt-2 flex flex-col items-center">
            <span className="text-white font-roboto block mb-1">Onboard & Execute</span>
            <p className="text-white text-xs ">Discuss needs,set goals and outline project scope</p>
        </div>
    </div>
    <div className="flex justify-center flex-col items-center">
        <div className=" border-[0.6rem] md:border-[1rem] border-green-500 rounded-full flex items-center justify-center text-secondary">
            <h1 className="text-neutral-black w-10 md:w-16  h-10 md:h-16 border-[0.3rem] md:border-8 border-neutral-black bg-primary-light rounded-full flex items-center justify-center  ">04</h1>
        </div>
        <div className="bg-gray-800  rounded-lg mt-2 flex flex-col items-center">
            <span className="text-white font-roboto block mb-1">Delivery &Support</span>
            <p className="text-white text-xs ">Final delivery,ongoing support if appli</p>
        </div>
    </div>
  
</div>
<div className="flex  items-center flex-shrink-0 ">
    <img src={image1} alt="" className=' h-auto'/>
</div>
    </div>



   </div>
   



   


   
  )
}

export default Sub