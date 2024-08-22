import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/Bizfides logo.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <header className="font-inter bg-white lg:container fixed top-0 left-0 right-0 w-full z-50">
    <nav className="flex justify-between items-center w-[92%] mx-auto h-24 md:h-[7rem]">
      <div>
        <img
          className="w-[84px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </div>
      <div
        className={`duration-500 md:static absolute bg-white top-0 left-0 w-full ${
          menuOpen ? 'block top-[100%]' : 'hidden top-[12%]' 
        } md:flex md:items-center md:w-auto md:min-h-fit min-h-[40vh] flex-col md:flex-row`}
      >
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 font-bold text-neutral-grey-300 py-2 pl-4">
          <li>
            <a className="hover:border-b border-b-primary py-2" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="hover:border-b border-b-primary py-2" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="hover:border-b border-b-primary py-2" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="hover:border-b border-b-primary py-2" href="#">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6 h-9">
        <button className="hidden lg:block bg-primary text-white px-8 py-2.5 rounded-lg hover:bg-primary-dark font-medium text-sm">
          Sign Up
        </button>
        <button className="text-primary px-8 py-2.5 rounded-lg border-2 border-primary lg:border-0 lg:hover:border lg:hover:border-primary-dark font-medium text-sm">
          Log In
        </button>
        <div onClick={onToggleMenu} className="text-3xl cursor-pointer md:hidden">
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  </header>
  
  );
};

export default Navbar;
