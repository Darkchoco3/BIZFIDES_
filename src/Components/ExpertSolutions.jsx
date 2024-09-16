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
        className="flex bg-cover lg:mt-[6.5rem] xl:mt-[10rem] lg:h-[20.063rem] 2xl:h-[23rem]"
        style={{ backgroundImage: `url(${officeimage})` }}
      >
        <div className="container w-11/12 grid lg:grid-cols-2">
          <div>
            <img src={smilingmanimage} alt="smiling man" className="hidden lg:block h-full 2xl:h-[480px] -translate-y-[114px]"/>
          </div>
          <motion.div
          className="text-white py-8 md:pt-[2.625rem] xl:h-[237px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Ensures the animation only runs once
        >
          {/* Heading */}
          <motion.h3
            className="font-inter pb-4 lg:pb-0 text-sm md:text-xl lg:text-[1.25rem] 2xl:text-xl font-semibold text-center lg:text-start text-primary-light"
            variants={textVariants}
          >
            EXPERT SOLUTIONS FOR ENTREPRENEURS
          </motion.h3>

          <motion.h5
            className="font-roboto text-xl md:text-[2rem] lg:text-[1.5rem] xl:text-[2.5rem] 2xl:text-[3rem] text-center lg:text-start lg:max-w-[30ch] font-bold lg:leading-tight pb-1 md:pb-2 lg:pb-[.7rem] xl:pb-[.5rem]"
            variants={textVariants}
          >
            Empowering Your Business Growth
          </motion.h5>

        {/* Paragraph */}
          <motion.p
            className="font-inter text-sm md:text-xl lg:text-xl 2xl:text-2xl text-center lg:text-start lg:max-w-[40ch] lg:leading-tight 2xl:leading-normal pb-[3.125rem]"
            variants={textVariants}
          >
            Become part of a nationwide network of <br className="block lg:hidden"/> successful businesses that trust Bizfides!
          </motion.p>

          {/* Button */}
          <motion.div
            variants={textVariants}
            className="w-full flex justify-center lg:justify-start"
          >
            <Link
              to="/register"
              className="font-inter text-sm md:text-base 2xl:text-2xl py-3.5 px-16 xl:px-[4.063rem] 2xl:px-[5rem] bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white transition ease-in-out"
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
