import React, { useState, useEffect, useRef } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from '../assets/Bizfides logo.svg'
import { Link, useLocation  } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (

    <header className="bg-white fixed top-0 left-0 right-0  z-50 font-inter">
    <nav className="flex justify-between items-center h-16 md:h-24 lg:h-[6.5rem] container w-11/12">
      <Link to='/'>
        <img
          className="lg:w-[84px] cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </Link>
    <ul 
    ref={menuRef}
    className={`lg:static absolute bg-white top-0 left-0 w-full transition-all duration-500 ease-in ${
    menuOpen ? 'opacity-100 top-full' : 'opacity-0 top-[90%]'
  } lg:opacity-100 lg:transition-none lg:flex lg:items-center lg:w-auto min-h-fit flex-col lg:flex-row flex lg:gap-[4vw] gap-8 xl:gap-16 font-bold text-neutral-grey-300 py-4 pl-4 md:pl-8 lg:pl-0 z-50`} 
 > 

          <li className=''>
            <Link className={`lg:hover:border-b hover:text-primary lg:hover:border-b-primary py-2  ${isActive('/about') ? 'active-link' : ''}`} to='/about' onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link className={`lg:hover:border-b hover:text-primary lg:hover:border-b-primary py-2  ${isActive('/services') ? 'active-link' : ''}`} to='/services' onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className={`lg:hover:border-b lg:hover:text-primary lg:hover:border-b-primary py-2 ${isActive('/portfolio') ? 'active-link' : ''}`} onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className={`lg:hover:border-b lg:hover:text-primary lg:hover:border-b-primary py-2 ${isActive('/contact') ? 'active-link' : ''}`} to='/contact' onClick={closeMenu}>
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
      <div className="flex items-center gap-6 h-9">
        <Link className="hidden lg:block bg-primary text-white px-8 py-2.5 rounded-lg hover:bg-secondary font-medium text-sm" to='/register'>
          Sign Up
        </Link>
        <Link className="hidden lg:block text-primary px-8 py-2.5 rounded-lg  hover:text-secondary font-medium text-sm" to='/login'>
          Log In
        </Link>
        <div onClick={onToggleMenu} className="text-4xl cursor-pointer lg:hidden text-primary">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  </header>
  
  );
};

export default Navbar;
