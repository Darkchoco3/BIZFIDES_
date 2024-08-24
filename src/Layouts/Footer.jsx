import React from "react";
import Logo from "../assets/footer logo.svg";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-8">
      <div className="container mx-auto max-w-[77.5rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <img className="w-24 h-auto" src={Logo} alt="BizFides Logo" />
            <p className="text-sm md:text-base">
              © 2024 BizFides. Passionate about helping small businesses shine online. We’re here to guide you every step of the way, from building your digital presence to engaging with your audience. Let’s work together to turn your business goals into reality.
            </p>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Pages</h3>
            {["Home", "About Us", "Services", "Resources", "Support"].map((page) => (
              <p key={page} className="hover:text-blue-200 cursor-pointer mb-1 text-sm md:text-base">
                {page}
              </p>
            ))}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-2">Company</h3>
            {["Pricing", "Security", "Privacy Policy", "Terms of Use"].map((company) => (
              <p key={company} className="hover:text-blue-200 cursor-pointer mb-1 text-sm md:text-base">
                {company}
              </p>
            ))}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-lg mb-2">Contact</h3>
            <p className="flex items-center mb-2 text-sm md:text-base">
              <IoIosCall className="inline mr-1" /> (406) 555-0120
            </p>
            <p className="flex items-center mb-2 text-sm md:text-base">
              <IoMdMail className="inline mr-1" /> BizFides@gmail.com
            </p>
            <p className="flex items-center text-sm md:text-base">
              <MdLocationOn className="inline mr-1" /> 1, Ogunlesi Street, Onipanu Lagos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
