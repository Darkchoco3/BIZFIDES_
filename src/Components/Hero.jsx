import React from 'react'
import Polygon1 from '../assets/Polygon 1.png'
import Polygon2 from '../assets/Polygon 2.png'
import People from '../assets/male and female hero.svg'
import Animation from '../assets/Animatiion.svg'
import Rectangle from '../assets/Group 2008.svg'

import CircularAnimae from './CircularAnimae'


const Hero = () => {
  return (
    <div className=' lg:container relative flex flex-col-reverse md:flex-row justify-between md:min-h-[544px] bg-primary pt-[6.6rem] md:pt-[7rem]'>
       <div className=" space-y-8  md:w-[25rem] lg:w-1/2  flex flex-col justify-center items-center md:items-start px-4 md:pl-10 lg:pl-12 h-[30rem] md:h-auto">
        <h3 className='font-roboto font-medium text-xl text-white  lg:text-[1.75rem]'>Small Business. Big Impact.</h3>
        <h1 className='font-roboto font-bold text-2xl text-primary-light lg:text-6xl text-center md:text-start'>Build Your Online Presence Today.</h1>
        <button className='font-inter w-60 py-3.5 px-16 bg-secondary rounded-[10px] font-medium text-center hover:bg-primary-dark'>Get Started</button>
        
       </div>
        <div className="relative h-[26.5rem] md:h-auto md:w-[50%] lg:w-auto lg:-right-7">
            <div className="">
            <img src={Polygon2} className="h-full w-full" alt="" />
            </div>
            <div className="absolute z-10 top-[4.5rem] md:top-[4.3rem] lg:top-[3.4rem] md:-right-1">
            <img src={Polygon1} className="h-full w-full" alt="" />
        </div>
        <div className="absolute z-10 md:top-[4.5rem] lg:top-[4rem] -left-6 hidden md:block">
        <img src={Animation} className="h-[20rem] lg:h-full" alt="" />
        </div>
        <div className='absolute z-10 top-[4.5rem] md:top-[14.7rem] lg:top-[17.5rem] -left-1 md:-left-24 lg:-left-28'>
            <img src={People} className="h-[22rem] md:h-[12.5rem] lg:h-full" alt="" />
        </div>
        </div>
        <div className='absolute md:top-[29.3rem] lg:top-[36.3rem] md:left-12 lg:left-20'>
        <img src={Rectangle} className="" alt="" />
        </div>
        {/* <CircularAnimae/> */}
       
    </div>
  );
};

export default Hero;
