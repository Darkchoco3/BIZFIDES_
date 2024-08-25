
import React from "react";
import Logo from "../assets/footer logo.svg";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
// import email from "../assets/messages.svg"
// import location from "../assets/location.svg"
// import phone from "../assets/phone.svg"
const Footer = () => {
  return (
    <div className="bg-primary text-white py-8  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex  justify-between gap-8">
        <div className="  grid grid-cols-1 md:grid-cols-4 gap-8   ">
          {/* Logo and Description */}
          <div className=" mt-2  mb-3 flex-col md:flex-row items-start md:items-center gap-4">
            <img className="w-24 h-auto mt-10" src={Logo} alt="BizFides Logo" />
            <p className=" md:text-base font-inter font-normal text-sm  mt-8">
              © 2024 BizFides. Passionate about helping small businesses shine online. We’re here to guide you every step of the way, from building your digital presence to engaging with your audience. Let’s work together to turn your business goals into reality.
            </p>
          </div>
        <div className="grid grid-cols-3 gap-10">
        <div>
            <h3 className="font-bold text-base mb-2 font-inter leading-6">Pages</h3>
            {["Home", "About Us", "Services", "Resources", "Support"].map((page) => (
              <p key={page} className="hover:text-blue-200 cursor-pointer mb-1 text-sm font-inter font-normal ">
                {page}
              </p>
            ))}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="  mb-2 font-inter font-bold text-base  leading-6">Company</h3>
            {["Pricing", "Security", "Privacy Policy", "Terms of Use"].map((company) => (
              <p key={company} className="hover:text-blue-200 cursor-pointer mb-1 text-sm  font-inter font-normal ">
                {company}
              </p>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-4 ">
            <h3 className="font-bold text-base mb-2 font-inter leading-6 ">Contact</h3>
            <p className="flex items-center mb-6 text-sm md:text-base font-inter font-normal">
              <IoIosCall className="inline mr-1 font-bold w-5" /> (406) 555-0120
              {/* <img src={phone} alt="" />
              <span>(406) 555-0120</span> */}
            </p>

            <p className="flex items-center mb-6 text-sm md:text-base font-inter font-normal ">
              <IoMdMail className="inline mr-1" /> BizFides@gmail.com
              {/* <img src={email} alt="" />
              <span>BizFides@gmail.com</span> */}
            </p>
            <p className="flex items-center mb-6 text-sm md:text-base font-inter font-normal">
              {/* <img src={location} alt="" /> */}
              <MdLocationOn className="inline mr-1" /> 1, Ogunlesi Street, Onipanu Lagos
              {/* <span>1, Ogunlesi Street, Onipanu Lagos</span> */}
            </p>
            {/* <div className="flex items-center">
              <FaFacebook className="text-blue-500 mr-2" />
              <FaTwitter className="text-blue-400 mr-2" />
              <FaLinkedin className="text-blue-600 mr-2" />
              <FaInstagram className="text-pink-500" />
            </div> */}


        </div>
          {/* Pages Links */}

          </div>
        </div>
      </div>

              {/* <div className="flex    justify-center items-center bg-primary-dark  h-[3.25rem] mt-4">
              <FaFacebook className="text-blue-500 mx-2" />
              <FaTwitter className="text-blue-400 mx-2" />
              <FaLinkedin className="text-blue-600 mx-2" />
              <FaInstagram className="text-blue-500 mx-2" />
            </div> */}


<div className="flex justify-center items-center mt-4">
  {/* Left Half */}
  <div className="bg-primary-dark w-1/2 h-16"></div>
  
  {/* Middle Icons */}
  <div className="bg-primary-normal w-16 flex justify-center items-center h-16">
    <FaFacebook className="text-blue-500 mx-1" />
    <FaTwitter className="text-blue-400 mx-1" />
    <FaLinkedin className="text-blue-600 mx-1" />
    <FaInstagram className="text-pink-500 mx-1" />
  </div>

  {/* Right Half */}
  <div className="bg-primary-dark w-1/2 h-16"></div>
</div>
    </div>
    
  );
};

export default Footer;
