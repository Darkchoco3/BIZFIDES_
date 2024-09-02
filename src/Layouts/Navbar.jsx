import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from '../assets/Bizfides logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (

    <header className="bg-white fixed top-0 left-0 right-0  z-50 font-inter">
    <nav className="flex justify-between items-center h-24 md:h-[7rem] container w-11/12">
      <Link to='/'>
        <img
          className="w-[84px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </Link>
      <div
        className={`duration-500 lg:static absolute bg-white top-0 left-0 w-full ${
          menuOpen ? 'block top-[100%]' : 'hidden top-[12%]' 
        } lg:flex lg:items-center lg:w-auto min-h-fit flex-col lg:flex-row`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 xl:gap-10 font-bold text-neutral-grey-300 py-2 pl-4 lg:pl-0">
          <li>
            <Link className="hover:border-b hover:text-primary border-b-primary py-2" to=''>
              About Us
            </Link>
          </li>
          <li>
            <Link className="hover:border-b hover:text-primary border-b-primary py-2" to='/services'>
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:border-b hover:text-primary border-b-primary py-2 " to='/portfolio'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:border-b hover:text-primary border-b-primary py-2" to='/contact'>
              Contact Us
            </Link>
          </li>
          <div className="lg:hidden flex gap-5 mb-8">
          <Link className=" bg-primary text-white px-12 md:px-8 py-2.5 rounded-lg hover:bg-secondary font-medium text-sm" to='/register'>
          Sign Up
        </Link>
        <Link className="text-primary px-12 md:px-8 py-2.5 hover:text-secondary font-medium text-sm" to='/login'>
          Log In
        </Link>
          </div>
        </ul>
      </div>
      <div className="flex items-center gap-6 h-9">
        <Link className="hidden lg:block bg-primary text-white px-8 py-2.5 rounded-lg hover:bg-secondary font-medium text-sm" to='/register'>
          Sign Up
        </Link>
        <Link className="hidden lg:block text-primary px-8 py-2.5 rounded-lg  hover:text-secondary font-medium text-sm" to='/login'>
          Log In
        </Link>
        <div onClick={onToggleMenu} className="text-3xl cursor-pointer lg:hidden">
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  </header>
  
  );
};

export default Navbar;
