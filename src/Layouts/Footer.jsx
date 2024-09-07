import React from "react";
import Logo from "../assets/footer logo.svg";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const pagelink =[
    {
    title: "Home",
    link: ""
    },
    {
    title: "About Us",
    link: "about"
    },
    {
    title: "Services",
    link: "services"
    },
    {
    title: "Support",
    link: "support"
    },

    ]
  
  return (
    <div className="bg-primary text-white pt-8 ">
      <div className="container w-11/12">
        <div className="lg:grid flex flex-wrap lg:grid-cols-2  gap-8 lg:gap-0 ">
          {/* Logo and Description */}
          <div className="flex flex-col items-start gap-4">
            <img className="w-24 h-auto" src={Logo} alt="BizFides Logo" />
            <p className="mt-4 md:mt-0 text-sm font-inter font-normal w-[356px]">
              © 2024 BizFides. Passionate about helping small businesses shine
              online. We’re here to guide you every step of the way, from
              building your digital presence to engaging with your audience.
              Let’s work together to turn your business goals into reality.
            </p>
          </div>

          {/* Pages Links */}
          <div className="lg:grid  flex flex-wrap gap-[3.188rem]  md:gap-[5rem]  lg:gap-0 lg:grid-cols-3">
          <div className="space-y-5">
            <h3 className="font-bold text-base mb-2 font-inter">Pages</h3>
            {pagelink.map((page,i) => (
              <Link  to={`/${page.link}`}>
              <p key={i} className="hover:text-blue-200 cursor-pointer mb-1 text-sm font-inter font-normal">
                {page.title}
              </p> 
              </Link>
            ))}
          </div>

          {/* Company Links */}
          <div className="space-y-5">
            <h3 className="font-bold text-base  font-inter">Company</h3>
            {["Pricing", "Security", "Privacy Policy", "Terms of Use"].map((company) => (
              <p key={company} className="hover:text-blue-200 cursor-pointer mb-1 text-sm font-inter font-normal">
                {company}
              </p>
            ))}
          </div>

          {/* Contact Information */}
          <div className="space-y-2 xl:min-w-[300px]">
            <h3 className="font-bold text-base font-inter ">Contact</h3>
            <p className="flex items-center text-sm md:text-base font-inter font-normal">
              <IoIosCall className="mr-1 w-5" /> (406) 555-0120
            </p>
            <p className="flex items-center text-sm md:text-base font-inter font-normal">
              <IoMdMail className="mr-1 w-5" /> BizFides@gmail.com
            </p>
            <p className="flex items-center text-sm md:text-base font-inter font-normal ">
              <MdLocationOn className="mr-1 w-5" /> 1,Ogunlesi Street, Onipanu Lagos
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center items-center mt-16 ">
        <div className="bg-primary-dark flex-grow h-16 rounded-se-full "></div>
        <div className="bg-primary-normal text-white w-auto px-4 flex justify-center items-center h-16 space-x-4">
          <FaFacebook />
          <FaTwitter  />
          <FaLinkedin />
          <FaInstagram  />
        </div>
        <div className="bg-primary-dark flex-grow h-16 rounded-ss-full "></div>
      </div>
    </div>
  );
};

export default Footer;