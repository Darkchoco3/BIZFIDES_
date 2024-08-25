import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import web from "../assets/web dev.svg";
import seo from "../assets/seo.svg";
import social from "../assets/social media.svg";
import mobile from "../assets/mobile app.svg";
import dot from '../assets/Group 2010.png'

const Service = () => {
  const services = [
    {
      Image: web,
      title: "Web Development",
      content:
        "Crafting visually stunning and user-friendly websites that elevate your online presence and drive business growth.",
    },
    {
      Image: mobile,
      title: "Mobile Application",
      content:
        "Designing and developing intuitive and engaging mobile apps that connect you with your audience and enhance your brand experience.",
    },
    {
      Image: social,
      title: "Social Media Management",
      content:
        "Expertly managing your social media presence to build brand awareness, engage your audience, and drive website traffic and sales.",
    },
    {
      Image: seo,
      title: "SEO Optimization",
      content:
        "Crafting visually stunning and user-friendly websites that elevate your online presence and drive business growth",
    },
  ];

  return (
    <div className="container mx-auto"> 
    <div className="min-h-[756px] w-full flex justify-center px-4 md:px-8 lg:px-16 ">
      <div className="border-t border-[#F8F8F8] w-full max-w-[95%] flex flex-col">
        <div className="text-center py- md:py-0 md:pb-12">
          <h4 className="text-lg md:text-xl font-semibold text-primary">
            OUR SERVICES
          </h4>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-primary">
            Our Key Services
          </h2>
          <p className="text-sm md:text-base text-neutral-grey-300 mt-2">
            Unlocking business potential with our key services:
          </p>
          <button className="mt-4 px-8 md:px-10 py-3 md:py-4 font-medium text-primary rounded-lg">
            More Service
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 justify-center">
          {services.map((service, i) => (
            <div
              className="w-full sm:w-[277px] min-h-[480px] shadow-xl rounded-full py-4 px-2 flex flex-col justify-between items-center"
             style={{  boxShadow: `0px 0px 12px 8px rgba(0, 0, 0, 0.02)`
             }} key={i}
            >
              <div className="min-h-[150px] min-w-[150px] sm:min-h-[200px] sm:min-w-[200px] rounded-full">
                <img
                  src={service.Image}
                  alt="services"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-lg md:text-xl font-semibold font-inter">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-grey-300 mt-2">
                  {service.content}
                </p>
              </div>
              <button className="font-extrabold rounded-full p-3 text-white bg-primary mt-4 hover:bg-primary-dark">
                <IoIosArrowForward />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="lg:flex justify-end hidden">
          <img src={dot} alt="" />
    </div>
    </div>

  );
};
export default Service;
