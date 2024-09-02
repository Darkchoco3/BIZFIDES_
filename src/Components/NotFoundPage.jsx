import React from 'react'
import image from '../assets/cuate.svg'
import { PiLessThanBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='min-h-screen container mx-auto flex flex-col justify-center items-center w-full font-inter gap-4 text-center'>
      <h2 className='font-semibold text-[28px] text-primary'>PAGE NOT FOUND !</h2>
      <p className='text-neutral-grey-300'>Sorry! the page you are looking for is broken or does not exist</p>
      <img src={image} alt="404 Image" />
      <Link to='/'>
      <button className='flex items-center text-primary min-w-[159px] min-h-[50px] font-medium gap-4 border-primary p-3 border rounded-[10px] hover:border-secondary hover:text-secondary'><PiLessThanBold/> Go To Home</button>  
      </Link>
    </div>
  )
}

export default NotFoundPage
