import React, { useState, useEffect, useRef } from 'react';
import { IoClose, IoMenu } from "react-icons/io5";
import Logo from '../assets/Bizfides logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Notify from '../assets/notification-bing.svg';
import Arrow from '../assets/arrow-up.svg'
import Logout from '../assets/logout.svg'
import Dashboard from '../assets/element-3.svg'
import { useAuth } from '../Contexts/Auth';
import Modal from '../Components/utils/Modal';


const Navbar = () => {
  const navigate  = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  // const dropdownRef = useRef(null);
  const { auth, logout} = useAuth()

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDropdown = () => {
     setIsOpen((prev) => !prev);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset()
  };
  const handleLogout = () => {
    logout();
    console.log(auth); // This will help you check if auth is reset after logout
    navigate("/login");
  };
  
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
      setIsOpen(false); // Close dropdown when clicking outside
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
    <>
    <header className="bg-white fixed top-0 left-0 right-0  z-50 font-inter">
    <nav className="flex justify-between items-center h-16 md:h-24 lg:h-[7rem] container w-11/12">
      <Link to='/'>
        <img
          className="lg:w-24 2xl:w-28 cursor-pointer"
          src={Logo}
          alt="Logo"
        />
      </Link>
    <div 
    ref={menuRef}
    className={`lg:static absolute bg-white top-0 left-0 w-full transform transition-all duration-500 ease-in ${
      menuOpen ? 'block opacity-100  top-full h-auto  lg:h-0 pt-0 lg:pt-4 px-4 md:px-8 ' : 'hidden opacity-0 top-[90%] '
    } lg:opacity-100  lg:transition-none lg:flex lg:items-center lg:w-auto min-h-fit font-bold text-neutral-grey-300 z-50 text-base 2xl:text-[20px] lg:gap-24 xl:gap-44 2xl:gap-64`} >
    <ul className='flex-col lg:flex-row flex lg:space-x-12 xl:space-x-16 space-y-10  lg:space-y-0  py-5'> 
          <li className=''>
            <Link className={`lg:hover:border-b hover:text-primary lg:hover:border-b-primary lg:py-2  ${isActive('/about') ? 'active-link' : ''}`} to='/about' onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link className={`lg:hover:border-b hover:text-primary lg:hover:border-b-primary lg:py-2  ${isActive('/services') ? 'active-link' : ''}`} to='/services' onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className={`lg:hover:border-b lg:hover:text-primary lg:hover:border-b-primary lg:py-2 ${isActive('/portfolio') ? 'active-link' : ''}`} onClick={closeMenu}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className={`lg:hover:border-b lg:hover:text-primary lg:hover:border-b-primary lg:py-2 ${isActive('/contact') ? 'active-link' : ''}`} to='/contact' onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
         
      </ul>
      {auth.user != null ? <div className='mt-4 mb-10 lg:mb-0 lg:mt-0'>
        <div className="flex font-semibold items-center w-[240px] lg:w-auto py-4 px-[18px] bg-neutral-grey-100 rounded-full gap-2 cursor-pointer" onClick={toggleDropdown}>
          <span className='bg-primary text-white text-xl rounded-full py-2.5 px-2.5'>{auth?.user?.firstName?.charAt(0).toUpperCase()}{auth?.user?.lastName?.charAt(0).toUpperCase()}</span>
          <p className='text-base text-neutral-grey-300 text-center hover:text-primary'>{auth?.user?.firstName?.toUpperCase()} {auth?.user?.lastName?.toUpperCase()}</p>
        </div> 
        {isOpen && (
              <div
              
                className="z-10 absolute bg-white mt-3 shadow w-56 h-28 p-5 " 
              >
                <ul className="flex flex-col gap-3" >
                  
                  <li>
                    <button className="flex gap-3 cursor-not-allowed" disabled>
                      <img src={Dashboard}/> <span className="text-base" >Dashboard</span>
                    </button>
                  </li>
                  <li>
                  <button onClick={ () => {openModal(); setIsOpen(false)}}   className="flex gap-3 cursor-pointer" >
                  <img src={Logout}/> <span className="text-error-red font-medium text-base">Logout</span>
                </button>
                  </li>
                </ul>
              </div>
            )}
      </div> : 
      <div className="flex items-center gap-6 h-9 mt-4 mb-10 lg:mb-0 lg:mt-0">
        <Link className="bg-primary text-white px-8 py-2.5 rounded-lg hover:bg-secondary font-medium text-sm" to='/register'>
          Sign Up
        </Link>
        <Link className="text-primary px-8 py-2.5 rounded-lg  hover:text-secondary font-medium text-sm" to='/login'>
          Log In
        </Link> 
      </div>
      }
    </div>
    
      
      <div onClick={onToggleMenu} className="text-4xl cursor-pointer lg:hidden text-primary">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
        
    </nav>
    
    {/* Modal */}
  <Modal isOpen={isModalOpen} onClose={closeModal} closeOnClickOutside={false}>
          <div className='w-full text-center py-10 font-roboto space-y-8 lg:space-y-[44px]'>
            <h2 className='text-primary font-semibold text-xl lg:text-2xl'>Are you sure you want to log out?
            </h2>
            <div className="flex flex-col space-y-3 justify-center items-start">
            <button onClick={handleLogout} className='bg-primary w-full h-9 rounded-[10px] text-base text-white hover:bg-secondary ' >Logout</button>
            <button  onClick={closeModal} className='text-primary w-full h-9 text-base' >Cancel</button>
            </div>
          </div>
      </Modal>
  </header>
      {/* Overlay when the menu is open */}
    {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black opacity-50 -z-10 lg:hidden"
        ></div>
      )}
  </>
  );
};

export default Navbar;