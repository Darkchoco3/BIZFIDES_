import React from "react";
import officeimage from "../assets/linear gradient Office.svg";
import smilingmanimage from "../assets/smiling man.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const ExpertSolutions = () => {
  return (
    <>
      <section
        className="flex bg-cover xl:mt-[10rem] min-h-[400px]"
        style={{ backgroundImage: `url(${officeimage})` }}
      >
        <div className="container w-11/12 grid lg:grid-cols-2">
          <div>
            <img src={smilingmanimage} alt="smiling man" className="hidden lg:block h-full"/>
          </div>
          <motion.div
          className="text-white py-14 md:py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Ensures the animation only runs once
        >
          {/* Heading */}
          <motion.h3
            className="font-inter text-[1.5rem] md:text-[2rem] lg:text-[1.25rem] 2xl:text-[2rem] font-semibold text-center lg:text-start pb-4 text-primary-light"
            variants={textVariants}
          >
            EXPERT SOLUTIONS FOR ENTREPRENEURS
          </motion.h3>

          <motion.h5
            className="font-roboto text-[1rem] md:text-[1.2rem] lg:text-[1.5rem] xl:text-[2.5rem] 2xl:text-[3rem] text-center lg:text-start lg:max-w-[30ch] font-bold lg:leading-tight pb-5 xl:pb-7"
            variants={textVariants}
          >
            Empowering Your Business Growth
          </motion.h5>

        {/* Paragraph */}
          <motion.p
            className="font-inter text-[1rem] md:text-[1rem] lg:text-[1.5rem] xl:text-xl 2xl:text-[2.5rem] text-center lg:text-start lg:max-w-[40ch] lg:leading-tight 2xl:leading-normal pb-20"
            variants={textVariants}
          >
            Become part of a worldwide network of successful businesses that trust Bizfides!
          </motion.p>

          {/* Button */}
          <motion.div
            variants={textVariants}
            className="w-full flex justify-center lg:justify-start"
          >
            <Link
              to="/register"
              className="font-inter w-60 py-3.5 px-16 xl:px-[4.063rem] 2xl:px-[5rem] bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-sm lg:text-base 2xl:text-2xl transition ease-in-out"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default ExpertSolutions;
