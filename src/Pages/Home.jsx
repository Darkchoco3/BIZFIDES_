import React from "react";
import About from "../Components/About";
import Service from "../Components/Service";
import Hero from "../Components/Hero.jsx";
import OurTeam from "../Components/OurTeam.jsx";
import Ambassadors from "../Components/Ambassadors";
import Testimonials from "../Components/Testimonial";
import Footer from "../Layouts/Footer";
import RecentWorks from "../Components/RecentWorks.jsx";
import Subscribe from "../Components/Subscribe";
import BuildProcess from "../Components/BuildProcess.jsx";
import {motion } from 'framer-motion'
const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Ambassadors />
        <div className="grid gap-[1rem] lg:gap-[1.6rem]">
          <About />
          <motion.div
            initial={{ opacity: 0.3, y: 90 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
          <Service />
          </motion.div>
        </div>
      </div>
      <BuildProcess/>
      <div className="grid gap-[2rem] lg:gap-[3.125rem]">
      <motion.div
            initial={{ opacity: 0.3, y: 90 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
        <RecentWorks />
        </motion.div>
        <motion.div
            initial={{ opacity: 0.3, y: 90 }}  
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
        <OurTeam />
        </motion.div>
        <Testimonials />
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
