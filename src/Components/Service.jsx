import React from "react";
import dot from '../assets/Group 2010.png'
import { services } from "../DB/data";
import ServiceCard from "./Cards/ServiceCard";
import { Link } from 'react-router-dom';

const Service = () => {


  return (
    <div className="container pt-[25px] lgpt-[50px] w-11/12 "> 
    <div className="w-full flex justify-center px-4 md:px-8 lg:px-0 ">
      <div className="border-t border-[#F8F8F8] flex flex-col pb-[50px]">
        <div className="text-center pb-6 lg:pb-0">
          <h4 className="text-lg md:text-xl font-semibold text-primary">
            OUR SERVICES
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary">
            Our Key Services
          </h2>
          <p className="text-sm md:text-base text-neutral-grey-300 mt-2">
            Unlocking business potential with our key services:
          </p>
          <button className="mt-4 px-8 md:px-10 py-3 md:py-4 font-medium text-primary rounded-lg hidden lg:block text-center w-full">
            More Service
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3.125rem] justify-center">
          {services.map((service, i) => (
            <ServiceCard service={service} key={i} />
          ))}
        </div>
      </div>
    </div>
    <div className="lg:flex justify-end hidden">
          <img src={dot} alt="" />
    </div>
    <Link className="mt-4 px-8 md:px-10 py-3 md:py-4 font-medium text-primary rounded-lg block lg:hidden text-center w-full">
            More Service
          </Link>
    </div>

  );
};
export default Service;
