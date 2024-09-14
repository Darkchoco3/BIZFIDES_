import React from "react";
import { Link } from 'react-router-dom';
import about from "../assets/AboutGroup.png";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="container border-t w-11/12 border-[#F8F8F8] h-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[109px]  py-4 lg:py-[30px] font-inter">
      <motion.div
       initial={{ opacity: 0.3, x: -90 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{
         duration: 0.5,
         ease: "easeInOut",
       }}
      className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <div className="hidden md:block md:w-[80%]  lg:w-full">
          <img src={about} className="max-h-full w-auto" />
        </div>
      </motion.div>
      <motion.div
             initial={{ opacity: 0.3, x: 90 }}  
             whileInView={{ opacity: 1, x: 0 }}
             transition={{
               duration: 0.5,
               ease: "easeInOut",
             }}
      className="about-content w-full lg:w-1/2 max-w-[497px] space-y-4 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h3 className="text-lg sm:text-xl font-semibold text-primary">
          ABOUT US
        </h3>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
          No 1. Business Expert
        </h2>
        <p className="text-xs sm:text-sm text-[#6B6B6B] w-full lg:w-full">
          <span className="text-primary">Bizfides</span> was established with a mission to empower every business to build a strong and impactful online presence. We believe that visibility and influence in the digital space are key to success. Let us partner with you to reach your business goals.
        </p>
        <Link to='/about' className="w-full lg:w-auto px-[4.063rem] py-[.813rem] bg-primary hover:bg-secondary text-white rounded-[.625rem] text-sm">
          Know More
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
