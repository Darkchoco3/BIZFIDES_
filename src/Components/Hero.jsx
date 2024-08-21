import React from 'react'
import Polygon1 from '../assets/Polygon 1.png'
import Polygon2 from '../assets/Polygon 2.png'
import People from '../assets/male and female hero.svg'
import Animation from '../assets/Animatiion.svg'
import CircularAnimae from './CircularAnimae'


const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-between md:max-h-[90vh] bg-primary '>
       <div className="space-y-8 w-[31.5rem] md:w-[25rem] lg:w-[31.5rem] min-h-[60vh] md:h-auto md:ml-8 lg:ml-20 text-white flex flex-col justify-center items-center md:items-start">
        <h3 className=' font-medium text-[1.75rem] md:text-2xl lg:text-[1.75rem]'>Small Business. Big Impact.</h3>
        <h1 className='font-bold text-3xl lg:text-6xl text-center md:text-start'>Build Your Online Presence Today.</h1>
        <button className='w-60 py-3.5 px-16 bg-secondary rounded-[10px] font-medium text-center hover:bg-primary-dark'>Get Started</button>
       </div>
        <div className="relative min-h-[72vh] md:h-auto ">
            <img src={Polygon2} className="w-full h-full" alt="" />
            <div className="absolute z-10 top-[5.3rem] md:top-9 lg:top-11">
            <img src={Polygon1} className="h-full" alt="" />
        </div>
        <div className="absolute z-10 top-[3.5rem] -left-8 hidden md:block">
        <img src={Animation} className="h-[20rem] lg:h-full" alt="" />
        </div>
        <div className='absolute z-10 top-[9.5rem] md:top-[15.3rem] lg:top-[17rem] -left-1 md:-left-16 lg:-left-32'>
            <img src={People} className="h-[24rem] md:h-[12rem] lg:h-full" alt="" />
        </div>
        </div>
        
        {/* <CircularAnimae/> */}

    </div>
  )
}

export default Hero