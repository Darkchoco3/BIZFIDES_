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
      title: "Contact Us",
      link: "contact",
    },
  ];

  return (
    <>
      <div className="bg-primary text-white mt-[2rem] xl:mt-[3.125rem] py-[1.25rem] xl:py-[2.5rem]">
        <div className="container w-11/12">
          <div className="grid gap-[1.625rem] xl:flex xl:gap-[10rem]">
            {/* Logo and Description */}
            <div className="grid gap-[.75rem] xl:flex xl:flex-col">
              <Link to="/">
                <img
                  className="w-[4.058rem] md:w-[4.5rem] lg:w-[4.75rem] xl:w-[5.25rem] 2xl:w-[7rem]"
                  src={Logo}
                  alt="BizFides Logo"
                />
              </Link>
              <p className="text-sm md:text-base 2xl:text-xl font-inter max-w-[43ch] md:max-w-[100ch] xl:max-w-[41ch] 2xl:max-w-[50ch]">
                © 2024 BizFides. Passionate about helping small businesses shine
                online.
              </p>
            </div>

            <div className="xl:flex xl:gap-[6.625rem]">
              <div className="grid grid-cols-2 xl:gap-[6.625rem]">
                {/* Pages Links */}
                <div className="">
                  <h3 className="font-bold text-base md:text-lg lg:text-lg 2xl:text-2xl font-inter pb-[.75rem] lg:pb-[1.25rem]">
                    Pages
                  </h3>
                  <div className="grid gap-[.579rem] xl:gap-[1rem]">
                    {pagelink.map((page, i) => (
                      <Link to={`/${page.link}`} key={i}>
                        <p className="hover:text-blue-200 cursor-pointer text-sm lg:text-base 2xl:text-xl  font-inter grid gap-[.579rem]">
                          {page.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Company Links */}
                <div className="">
                  <h3 className="font-bold text-base md:text-lg lg:text-lg 2xl:text-2xl font-inter pb-[.75rem] lg:pb-[1.25rem]">
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
                        className=" cursor-not-allowed text-sm lg:text-base 2xl:text-xl font-inter"
                      >
                        {company}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              {/* Contact Information Desktop*/}
              <div className="hidden lg:block">
                <h3 className="font-bold text-sm lg:text-base 2xl:text-2xl font-inter pb-[.75rem] lg:pb-[1.25rem]">
                  Contact
                </h3>
                <div className="grid gap-[.579rem] lg:gap-[1rem]">
                  <p className="flex items-center text-sm md:text-base 2xl:text-xl  font-inter gap-3">
                    <IoIosCall className="w-5 lg:h-5" /> (+234) 855-012-009
                  </p>
                  <p className="flex items-center text-sm md:text-base 2xl:text-xl  font-inter gap-3">
                    <IoMdMail className="w-5 lg:h-5" /> bizfides7@gmail.com
                  </p>
                  <p className="flex items-center text-sm md:text-base 2xl:text-xl font-inter gap-3">
                    <MdLocationOn className="w-5 lg:h-5" /> 1, Ogunlesi Street,
                    Onipanu Lagos
                  </p>
                </div>
              </div>
            </div>
            {/* Contact Information Mobile*/}
            <div className="block lg:hidden">
              <h3 className="font-bold text-base md:text-lg font-inter pb-[.75rem]">
                Contact
              </h3>
              <div className="grid gap-[.579rem]">
                <p className="flex items-center text-sm font-inter">
                  <IoIosCall className="w-5" /> (406) 555-0120
                </p>
                <p className="flex items-center text-sm font-inter">
                  <IoMdMail className="w-5" /> bizfides7@gmail.com
                </p>
                <p className="flex items-center text-sm font-inter">
                  <MdLocationOn className="w-5" /> 1, Ogunlesi Street, Onipanu
                  Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Social Media Links */}
      <div className="flex justify-center items-center bg-primary c">
        <div className="bg-primary-dark flex-grow h-4 lg:h-[3.25rem] rounded-se-full "></div>
        <div className="bg-primary-normal text-white flex justify-center items-center space-x-3 px-4 lg:space-x-6 lg:px-[3.875rem] cursor-not-allowed">
          <FaFacebook className="h-5 w-5 xs:h-8 xs:w-8 lg:h-6 lg:w-6" />
          <FaTwitter className="h-5 w-5 xs:h-8 xs:w-8 lg:h-6 lg:w-6" />
          <FaLinkedin className="h-5 w-5 xs:h-8 xs:w-8 lg:h-6 lg:w-6" />
          <FaInstagram className="h-5 w-5 xs:h-8 xs:w-8 lg:h-6 lg:w-6" />
        </div>
        <div className="bg-primary-dark flex-grow h-4 lg:h-[3.25rem] rounded-ss-full "></div>
      </div>
    </>
  );
};

export default Footer;
