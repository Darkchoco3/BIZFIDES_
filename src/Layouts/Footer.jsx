import React from "react";
import Logo from "../assets/footer logo.svg";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const pagelink = [
    {
      title: "Home",
      link: "",
    },
    {
      title: "About Us",
      link: "about",
    },
    {
      title: "Services",
      link: "services",
    },
    {
      title: "Support",
      link: "support",
    },
  ];

  return (
    <>
      <div className="bg-primary text-white mt-[2rem] xl:mt-[3.125rem] py-[1.25rem] xl:py-[2.5rem]">
        <div className="container w-11/12">
          <div className="grid gap-[1.625rem] xl:flex xl:gap-[16.6rem]">
            {/* Logo and Description */}
            <div className="grid gap-[.75rem] xl:gap-[1.938rem]">
              <img
                className="w-[4.058rem] xl:w-[5.25rem]"
                src={Logo}
                alt="BizFides Logo"
              />
              <p className="text-xs md:text-sm 2xl:text-xl font-inter max-w-[43ch] md:max-w-[100ch] xl:max-w-[41ch] 2xl:max-w-[55ch]">
                © 2024 BizFides. Passionate about helping small businesses shine
                online. We’re here to guide you every step of the way, from
                building your digital presence to engaging with your audience.
                Let’s work together to turn your business goals into reality.
              </p>
            </div>

            <div className="xl:flex xl:gap-[6.625rem]">            
              <div className="grid grid-cols-2 xl:gap-[6.625rem]">
                 {/* Pages Links */}
                <div className="">
                  <h3 className="font-bold text-sm lg:text-base font-inter pb-[.75rem] lg:pb-[1.25rem]">
                    Pages
                  </h3>
                  <div className="grid gap-[.579rem] xl:gap-[1rem]">
                    {pagelink.map((page, i) => (
                      <Link to={`/${page.link}`}
                      key={i}
                      >
                        <p
                          className="hover:text-blue-200 cursor-pointer text-xs lg:text-sm 2xl:text-lg  font-inter grid gap-[.579rem]"
                        >
                          {page.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Company Links */}
                <div className="">
                  <h3 className="font-bold text-sm lg:text-base  font-inter pb-[.75rem] lg:pb-[1.25rem]">
                    Company
                  </h3>
                  <div className="grid gap-[.579rem] lg:gap-[1rem]">
                    {[
                      "Pricing",
                      "Security",
                      "Privacy Policy",
                      "Terms of Use",
                    ].map((company, i) => (
                      <p
                        key={i}
                        className="hover:text-blue-200 cursor-pointer text-xs lg:text-sm 2xl:text-lg  font-inter"
                      >
                        {company}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/* Contact Information Desktop*/}
              <div className="hidden lg:block">
                <h3 className="font-bold text-sm lg:text-base 2xl:text-base font-inter pb-[.75rem] lg:pb-[1.25rem]">
                  Contact
                </h3>
                <div className="grid gap-[.579rem] lg:gap-[1rem]">
                  <p className="flex items-center text-sm md:text-base lg:text-sm 2xl:text-xl  font-inter gap-3">
                    <IoIosCall className="w-5 lg:h-5" /> (406) 555-0120
                  </p>
                  <p className="flex items-center text-sm md:text-base lg:text-sm 2xl:text-xl  font-inter gap-3">
                    <IoMdMail className="w-5 lg:h-5" /> BizFides@gmail.com
                  </p>
                  <p className="flex items-center text-sm md:text-base lg:text-sm 2xl:text-xl font-inter gap-3">
                    <MdLocationOn className="w-5 lg:h-5" /> 1, Ogunlesi Street, Onipanu
                    Lagos
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Information Mobile*/}
            <div className="block lg:hidden">
              <h3 className="font-bold text-sm font-inter pb-[.75rem]">
                Contact
              </h3>
              <div className="grid gap-[.579rem]">
                <p className="flex items-center text-xs font-inter">
                  <IoIosCall className="w-5" /> (406) 555-0120
                </p>
                <p className="flex items-center text-xs font-inter">
                  <IoMdMail className="w-5" /> BizFides@gmail.com
                </p>
                <p className="flex items-center text-xs font-inter">
                  <MdLocationOn className="w-5" /> 1, Ogunlesi Street, Onipanu
                  Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex justify-center items-center bg-primary">
        <div className="bg-primary-dark flex-grow h-4 lg:h-[3.25rem] rounded-se-full "></div>
        <div className="bg-primary-normal text-white flex justify-center items-center space-x-1 lg:space-x-6 lg:px-[3.875rem]">
          <FaFacebook className="h-3 lg:h-6" />
          <FaTwitter className="h-3 lg:h-6" />
          <FaLinkedin className="h-3 lg:h-6" />
          <FaInstagram className="h-3 lg:h-6" />
        </div>
        <div className="bg-primary-dark flex-grow h-4 lg:h-[3.25rem] rounded-ss-full "></div>
      </div>
    </>
  );
};

export default Footer;
