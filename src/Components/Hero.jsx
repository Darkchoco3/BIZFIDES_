import React from 'react'
import Polygon1 from '../assets/Polygon 1.png'
import Polygon2 from '../assets/Polygon 2.png'
import People from '../assets/male and female hero.svg'
import Animation from '../assets/Animatiion.svg'
import Rectangle from '../assets/Group 2008.svg'

import CircularAnimae from './CircularAnimae'


const Hero = () => {
  return (
    <div className='bg-primary  pt-[6rem] md:pt-28 lg:pt-[7rem]'>
       <div className="lg:container max-w-[77.5rem] min-h-[384px] md:min-h-[444px]  lg:min-h-[544px] relative flex flex-row justify-center lg:justify-between  items-center">
       <div className="absolute lg:static z-20 space-y-8  lg:w-1/2  flex flex-col justify-center items-center lg:items-start h-[25rem] lg:h-auto px-2">
        <h3 className=' font-medium font-roboto text-xl md:text-2xl lg:text-[1.75rem] text-white'>Small Business. Big Impact.</h3>
        <h1 className='font-bold font-roboto text-2xl md:text-4xl lg:text-6xl text-center lg:text-start text-primary-light'>Build Your Online Presence Today.</h1>
        <button className='font-inter w-60 py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl'>Get Started</button>
       
       </div>
        <div className="relative h-[24rem] w-[60%] md:h-[30rem] lg:h-auto   md:w-[50%] lg:w-auto -right-[4.7rem] md:-right-48 lg:-right-7">
           
            <img src={Polygon2} className="h-full w-full" alt="" />
          
            <div className="absolute z-10 top-[4rem] md:top-[4rem] lg:top-[3.4rem] -right-[1px] md:-right-0 lg:-right-1 w-[97%] md:w-[100%] lg:w-auto h-[20rem] md:h-[26rem] lg:h-auto">
            <img src={Polygon1} className="h-full w-full" alt="" />
        </div>
        <div className="absolute z-10 md:top-[3rem] lg:top-[4rem] lg:-left-5 md:left-1  hidden lg:block md:w-[70%] lg:w-auto">
        <img src={Animation} className="h-full w-full" alt="" />
        </div>
        <div className='hidden lg:block absolute z-10 top-[4.5rem] md:top-[14.7rem] lg:top-[17.5rem] -left-1 md:-left-24 lg:-left-28'>
            <img src={People} className="h-[22rem] md:h-[12.5rem] lg:h-full" alt="" />
        </div>
        </div>
        <div className='absolute bottom-0 left-3 md:left-4 lg:left-8'>
        <img src={Rectangle} className="h-full w-full" alt="" />
        </div>
       </div>
        {/* <CircularAnimae/> */}
       
    </div>
  );
};

export default Hero;
