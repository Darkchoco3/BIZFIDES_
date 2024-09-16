import React from "react";
import Rectangle from "../assets/Group 2008.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Adds delay between each child animation
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

const ExternalHero = ({ heading, paragraph, image, altText }) => {
  return (
    <div className="bg-primary pt-28">
      <div className="container w-11/12 flex flex-col lg:flex-row items-center gap-[4.438rem]">
        {/* Text Section */}
        <motion.div
          className="font-montserrat text-white flex-1 md:py-16 lg:p-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers the animation when in view
          viewport={{ once: true }} // Ensures the animation only runs once
        >
          {/* Heading */}
          <motion.h1
            className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[6rem] font-bold text-center lg:text-start pb-4"
            variants={textVariants}
          >
            {heading}
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="text-sm md:text-[1rem] lg:text-[1.5rem] xl:text-[1.75rem] 2xl:text-[2.5rem] text-center lg:text-start lg:max-w-[30ch] font-medium lg:leading-tight"
            variants={textVariants}
          >
            {paragraph}
          </motion.p>

          {/* Button
          <motion.div
            variants={textVariants}
            className="w-full flex justify-center lg:justify-start"
          >
            <Link
              to="/register"
              className="font-inter w-60 py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl transition ease-in-out"
            >
              Get Started
            </Link>
          </motion.div> */}
        </motion.div>

        {/* Image Section */}
        <img
          src={image}
          alt={altText}
          className="hidden lg:block w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4 flex-1 pt-[4rem]"
        />
      </div>

      {/* Decorative Rectangle */}
      <div className="container w-11/12">
        <img
          src={Rectangle}
          className="object-cover animate-pulse"
          alt="Rectangle Decoration"
        />
      </div>
    </div>
  );
};

export default ExternalHero;
