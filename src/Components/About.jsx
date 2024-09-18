import React from "react";
import { Link } from "react-router-dom";
import about from "../assets/AboutGroup.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 100, // Starts off-screen (below)
  },
  visible: {
    opacity: 1,
    y: 0, // Moves to its normal position
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <div className="container border-t w-11/12 lg:pt-[50px] border-[#F8F8F8] h-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-[109px]  py-4 lg:py-[30px] font-inter">
      <div className="w-full lg:w-1/2 flex">
        <div className="hidden md:block md:w-full">
          <img src={about} className="max-h-full w-auto" />
        </div>
      </div>
      <motion.div
        className="about-content w-full lg:w-1/2 max-w-[497px] space-y-4 flex flex-col justify-center items-center md:items-start text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-lg sm:text-xl 2xl:text-3xl font-semibold text-primary"
          variants={textVariants}
        >
          ABOUT US
        </motion.h3>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-primary"
          variants={textVariants}
        >
          No 1. Business Expert
        </motion.h2>
        <motion.p
          className="text-sm lg:text-base 2xl:text-2xl text-[#6B6B6B] w-full lg:w-full text-pretty"
          variants={textVariants}
        >
          <span className="text-primary">Bizfides</span> was established with a
          mission to empower every business to build a strong and impactful
          online presence. We believe that visibility and influence in the
          digital space are key to success. Let us partner with you to reach
          your business goals.
        </motion.p>

        {/* Button */}
        <motion.div variants={textVariants} className="pt-6">
          <Link
            to="/about"
            className="w-full lg:w-auto px-[4.063rem] py-[.813rem] bg-primary hover:bg-secondary text-white rounded-[.625rem] text-sm lg:text-base 2xl:text-2xl"
          >
            Know More
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
