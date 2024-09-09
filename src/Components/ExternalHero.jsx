import React from "react";
import Rectangle from "../assets/Group 2008.svg";
import LazyLoad from "react-lazy-load";

const ExternalHero = ({ heading, paragraph, image, altText }) => {
  return (
    <>
      <div className="bg-primary pt-28">
        <div className="container w-11/12 flex flex-col lg:flex-row items-center gap-[4.438rem]">
          <div className="font-montserrat text-white flex-1 py-14 md:py-16 lg:p-0">
            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[6rem] font-bold text-center lg:text-start pb-4">
              {heading}
            </h1>
            <p className="text-sm md:text-[1rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2.5rem] text-center lg:text-start lg:max-w-[30ch] font-medium lg:leading-tight">
              {paragraph}
            </p>
          </div>

            <img
              src={image}
              alt={altText}
              className="hidden lg:block w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4 flex-1 pt-[4rem]"
            />
        </div>
        <div className="container w-11/12">
          <img
            src={Rectangle}
            className=" object-cover animate-pulse"
            alt="Rectangle Decoration"
          />
        </div>
      </div>
    </>
  );
};

export default ExternalHero;
