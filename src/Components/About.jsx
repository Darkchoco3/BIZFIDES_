import React from "react";
import Button from "./Button";
import about from "../assets/AboutGroup.png";


const About = () => {
  return (
    <div className="container border-t w-11/12 border-[#F8F8F8] h-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-[109px] px-6 md:px-12 lg:px-auto py-4 lg:py-[50px] font-inter">
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
        <div className="w-full max-h-[284px] max-w-[284px] lg:max-h-[628px] lg:max-w-[630px]">
          <img src={about} />
        </div>
      </div>
      <div className="about-content w-full lg:w-1/2 max-w-[497px] space-y-4 mt-8 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-primary">
          ABOUT US
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
          No 1. Business Expert
        </h2>
        <p className="text-xs sm:text-sm text-[#6B6B6B] w-[100%] lg:w-[100%]">
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
