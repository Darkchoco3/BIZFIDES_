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
import ExpertSolutions from "../Components/ExpertSolutions.jsx";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Ambassadors />
        <div className="grid gap-[2rem] md:gap-[3.125rem]">
          <About />
          <Service />
        </div>
      </div>

      <BuildProcess/>
      <div className="grid gap-[2rem] md:gap-[3.125rem]">
        <RecentWorks />
        <ExpertSolutions/>
        <OurTeam />
        <Testimonials />
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
