import React from "react";
import dot from "../assets/Group 2010.png";
import { services } from "../DB/data";
import ServiceCard from "./Cards/ServiceCard";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="container pb-[2rem] lg:pb-0 lg:pt-[50px] w-11/12 ">
      <div className="w-full flex justify-center px-4 md:px-8 lg:px-0 ">
        <div className="border-t border-[#F8F8F8] flex flex-col">
          <div className="text-center pb-6 lg:pb-0">
            <div className="grid gap-2 lg:gap-4">
              <h4 className="text-lg md:text-xl font-semibold text-primary">
                OUR SERVICES
              </h4>
              <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary">
                Our Key Services
              </h2>
            </div>

            <p className="text-sm md:text-base text-neutral-grey-300 mt-2">
              Unlocking business potential with our key services:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-[3.125rem] justify-center py-3 md:py-[3rem]">
            {services.map((service, i) => (
              <ServiceCard service={service} key={i} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid lg:flex place-content-center justify-center items-center">
          <div className="group text-primary font-medium focus:ring transition ease-in-out duration-150 hover:text-secondary hover:scale-110">
            <Link
              to="./services"
              className="font-inter text-sm md:text-xl lg:text-base xl:text-base 2xl:text-2xl text-center py-[.813rem] px-[4.063rem] rounded-[.625rem] flex items-center gap-[0.688rem] group-hover:text-secondary "
            >
              More Services
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 transition ease-in-out duration-150 group-hover:color-[hsla(180,100%,32%,1)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      <div className="justify-end hidden lg:flex translate-y-5">
        <img src={dot} alt="" />
      </div>
      
    </div>
  );
};
export default Service;
