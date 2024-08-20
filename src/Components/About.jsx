import React from "react";
import Button from "./Button";
import about from "../assets/aboutimage1.jpeg";

const About = () => {
  return (
    <div className="container border-t border-[#F8F8F8] h-auto lg:min-h-[45rem] w-full flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-0 px-6 md:px-12 lg:px-24 py-8 lg:py-0 font-inter">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
        <div className="w-full max-w-[20rem] sm:max-w-[27rem] relative h-[20rem] sm:h-[29rem]">
          <div className="h-full w-2/3 bg-[#E6F6F6] absolute rounded-[40%] left-0"></div>
          <div className="h-full w-2/3 bg-neutral-grey-300 absolute rounded-[40%] right-0 border-4 border-primary">
            <img
              src={about}
              alt="about"
              className="h-full w-full object-cover rounded-[40%]"
            />
            <span className="absolute bg-primary opacity-60 h-full w-full top-0 rounded-[40%]"></span>
          </div>
          <div className="h-full w-2/3 border-secondary border-8 absolute rounded-[40%] left-16">
            <img
              src={about}
              alt="about"
              className="h-full w-full object-cover rounded-[40%]"
            />
          </div>
        </div>
      </div>
      <div className="about-content w-full lg:w-1/2 space-y-4 mt-8 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-primary">
          ABOUT US
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
          No 1. Business Expert
        </h2>
        <p className="text-xs sm:text-sm  text-[#6B6B6B] w-[100%] lg:w-[80%]">
          <span className="text-primary">Bizfides</span> was founded on the
          belief that every business deserves a strong online presence. Our team
          of experts is dedicated to helping you succeed in the digital
          landscape. It was founded on the belief that every business deserves a
          strong online presence. Our team of experts is dedicated to helping
          you succeed in the digital landscape. It was founded on the belief
          that every business deserves a strong online presence. Our team of
          experts is dedicated to helping you succeed in the digital landscape.
        </p>
        <Button className="px-8 sm:px-14 ">Know More</Button>
      </div>
    </div>
  );
};

export default About;
