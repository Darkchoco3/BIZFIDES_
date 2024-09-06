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
  const { auth, logout} = useAuth()

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const openDropdown = () => {
    setIsOpen(!isOpen);
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
      {auth.user != null ? <div className='hidden lg:block'>
        <div className="flex font-semibold items-center py-4 px-[18px] bg-neutral-grey-100 rounded-full gap-2" onClick={openDropdown}>
          <span className='bg-primary text-white text-xl rounded-full py-2.5 px-2.5'>{auth?.user?.firstName?.charAt(0).toUpperCase()}{auth?.user?.lastName?.charAt(0).toUpperCase()}</span>
          <p className='text-base text-neutral-grey-300 text-center'>{auth?.user?.firstName?.toUpperCase()} {auth?.user?.lastName?.toUpperCase()}</p>
        </div> 
        {isOpen && (
              <div
                className="z-10 absolute bg-white mt-3 shadow w-56 h-28 p-5 "
              >
                <ul className="flex flex-col gap-3" >
                  
                  <li>
                    <button className="flex gap-3" disabled>
                      <img src={Dashboard}/> <span className="text-base">Dashboard</span>
                    </button>
                  </li>
                  <li>
                  <button onClick={openModal} className="flex gap-3 cursor-pointer" >
                  <img src={Logout}/> <span className="text-error-red font-medium text-base">Logout</span>
                </button>
                  </li>
                </ul>
              </div>
            )}
      </div> : 
      <div className="flex items-center gap-6 h-9">
        <Link className="hidden lg:block bg-primary text-white px-8 py-2.5 rounded-lg hover:bg-secondary font-medium text-sm" to='/register'>
          Sign Up
        </Link>
        <Link className="hidden lg:block text-primary px-8 py-2.5 rounded-lg  hover:text-secondary font-medium text-sm" to='/login'>
          Log In
        </Link> 
      </div>
      }
     
      
      <div onClick={onToggleMenu} className="text-4xl cursor-pointer lg:hidden text-primary">
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
    </nav>
  </header>
  {/* Modal */}
  <Modal isOpen={isModalOpen} onClose={closeModal} closeOnClickOutside={false}>
          <div className='w-full text-center py-8 font-roboto space-y-4'>
            <h2 className='text-black font-semibold text-2xl'>Are you sure you want to log out of your account?
            </h2>
            <p className='text-xl text-neutral-grey-300'>You will be signed out and any unsaved changes will be lost.</p>
            <div className="flex flex-col space-y-3 justify-center items-center">
            <button onClick={handleLogout} className='bg-primary w-[237px] h-9 rounded-[10px] text-sm text-white hover:bg-primary-dark ' >Logout</button>
            <button  onClick={closeModal} className='text-primary w-[237px] h-9 text-sm' >Cancel</button>
            </div>
          </div>
      </Modal>
  </>
  );
};

export default Navbar;
