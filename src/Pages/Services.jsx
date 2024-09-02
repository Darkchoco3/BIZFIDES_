import React from "react";
import HeroImage from "../assets/Group 2009.svg";
import ExternalHero from "../Components/ExternalHero.jsx";
import Testimonials from "../Components/Testimonial.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Layouts/Footer.jsx";
import About from "../Components/About.jsx";
import Button from "../Components/Button.jsx";
import myImage from "../assets/Group 1.svg"

const Services = () => {
  return (
    <div>
      <ExternalHero
        heading={"Our Services"}
        paragraph={
          "Discover how our digital services can help your buisness Shine online.Explore Our services."
        }
        image={HeroImage}
        altText={"Service Image"}
      />
      <div className="w-full bg-[#E8E9F1]">

      <div className="container  border-t w-11/12 border-[#F8F8F8] h-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-[109px] px-6 md:px-12 lg:px-auto py-4 lg:py-[50px] font-inter">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
          <div className="w-full max-h-[284px] max-w-[284px] lg:max-h-[628px] lg:max-w-[630px]">
            <img src={myImage} alt="" />
          </div>
        </div>
        <div className="about-content w-full lg:w-1/2 max-w-[497px] space-y-4 mt-8 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-primary">
            WHY CHOOSE US ?{" "}
          </h3>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
            Trusted Results{" "}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B6B6B] w-[100%] lg:w-[100%]">
            With years of proven experience, we deliver tailored digital
            solutions that align perfectly with your unique business needs. Our
            comprehensive services, from web design to SEO, are designed to
            drive measurable growth and elevate your online presence.
          </p>
          <Button className="px-8 sm:px-14 ">Know More</Button>
        </div>
      </div>{" "}       </div>

      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Services;
