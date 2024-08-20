import React from "react";
import Button from "./Button";
import about from '../assets/aboutimage1.jpeg'

const About = () => {
  return (
    <div className="container bg-yellow-300 h-[728px] w-full flex items-center gap-10 px-20">
      <div className="about-image w-1/2">
        <img src={about} alt="about" />
      </div>
      <div className="about-content w-1/2">
        <h3>ABOUT US</h3>
        <h2 className="">No 1. Business Expert</h2>
        <p>
          Bizfides was founded on the belief that every business deserves a
          strong online presence. Our team of experts is dedicated to helping
          you succeed in the digital landscape. It was founded on the belief
          that every business deserves a strong online presence. Our team of
          experts is dedicated to helping you succeed in the digital landscape.
          It was founded on the belief that every business deserves a strong
          online presence. Our team of experts is dedicated to helping you
          succeed in the digital landscape.
        </p>
        <Button>Know More</Button>
      </div>
    </div>
  );
};

export default About;
