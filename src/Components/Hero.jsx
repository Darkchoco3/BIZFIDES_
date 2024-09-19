import React from "react";
import Polygon1 from "../assets/Group 3387.png";
import Man from "../assets/Man.png";
import Rectangle from "../assets/Group 2008.svg";
import { Link } from "react-router-dom";
import CircularDiagram from "./CircularAnimae";
import { useAuth } from "../Contexts/Auth";
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
      ease: "easeIn",
    },
  },
};

const Hero = () => {
  const { auth } = useAuth();
  return (
    <div className="bg-primary pt-[4rem] md:pt-24 lg:pt-[6.5rem] relative">
      <div className="relative flex justify-between items-center min-h-[21.5rem] md:min-h-[28.625rem] lg:min-h-[30rem] xl:min-h-[33.75rem] ">
        {/* Polygon Div */}
        <div className="absolute top-0 right-0 h-[25rem] md:h-[28.6rem] lg:h-[30rem] xl:h-[33.7rem] w-[60%] lg:w-[57%] xl:w-auto">
          <img
            src={Polygon1}
            className="h-full w-full"
            alt="Polygon Decoration"
          />
        </div>

        {/* Content Div */}
        <div
          className="relative w-11/12 container flex flex-col lg:flex-row justify-center lg:justify-between items-center z-20">
          {/* Mobile left section with animation */}
          <motion.div className="lg:hidden space-y-8 lg:w-[40%] xl:w-1/2 flex flex-col justify-center items-center lg:items-start h-[25rem] lg:h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>
            <motion.h3
              className="font-medium font-roboto text-xl md:text-2xl lg:text-[1.5rem] xl:text-[1.75rem] text-white"
              variants={textVariants}
            >
              Small Business. Big Impact.
            </motion.h3>
            <motion.h1
              className="font-bold font-roboto text-4xl md:text-4xl  xl:text-6xl text-center lg:text-start text-primary-light"
              variants={textVariants}
            >
              Build Your Online Presence Today.
            </motion.h1>
            {auth.user != null ? (
              <motion.button
                className="font-inter  py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl transition ease-in-out"
                variants={textVariants}
              >
                <Link to="/contact">Contact Us</Link>
              </motion.button>
            ) : (
              <motion.button
                className="font-inter py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl transition ease-in-out"
                variants={textVariants}
              >
                <Link to="/register">Get Started</Link>
              </motion.button>
            )}
          </motion.div>

          {/* Desktop Left section with no aniamtion */}
          <div className="hidden space-y-8 lg:w-[40%] xl:w-1/2 lg:flex flex-col justify-center items-center lg:items-start h-[25rem] lg:h-auto"
         >
            <h3
              className="font-medium font-roboto text-xl md:text-2xl lg:text-[1.5rem] xl:text-[1.75rem] text-white"
              
            >
              Small Business. Big Impact.
            </h3>
            <h1
              className="font-bold font-roboto text-4xl md:text-4xl  xl:text-6xl text-center lg:text-start text-primary-light"
              
            >
              Build Your Online Presence Today.
            </h1>
            {auth.user != null ? (
              <button
                className="font-inter  py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl transition ease-in-out"
                
              >
                <Link to="/contact">Contact Us</Link>
              </button>
            ) : (
              <button
                className="font-inter py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl transition ease-in-out"
                
              >
                <Link to="/register">Get Started</Link>
              </button>
            )}
          </div>

          <div className="relative lg:w-1/2 flex justify-end">
            <div className="relative z-10  hidden lg:block lg:-top-8 xl:-top-10">
              <CircularDiagram />
              <div className="hidden absolute lg:block z-10 lg:top-[11.53rem] xl:top-[12.2rem] lg:-left-52 xl:-left-[17.5rem] 2xl:-left-72">
                <img
                  src={Man}
                  className="w-[85%] xl:w-full h-full"
                  alt="People"
                />
              </div>
            </div>
          </div>
          {/* Rectangle Decoration */}
        <div className="absolute top-[20.3rem] md:top-[22.2rem] lg:top-[21.7rem] xl:top-[24.7rem] left-0">
          <img
            src={Rectangle}
            className="h-full w-full animate-pulse"
            alt="Rectangle Decoration"
          />
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
