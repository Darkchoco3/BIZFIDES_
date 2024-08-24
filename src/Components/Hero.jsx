import React from 'react';
import Polygon1 from '../assets/Polygon 1.png';
import Polygon2 from '../assets/Polygon 2.png';
import People from '../assets/male and female hero.svg';
import Animation from '../assets/Animatiion.svg';
import Rectangle from '../assets/Group 2008.svg';

const Hero = () => {
  return (
    <div className="bg-primary min-h-[544px] pt-[6.6rem] lg:pt-[7rem]">
      <div className="lg:container max-w-[77.5rem] relative flex flex-col lg:flex-row justify-between ">
        <div className="space-y-6 md:space-y-8 lg:w-1/2 text-white flex flex-col items-center lg:items-start h-[25rem] lg:h-auto text-center lg:text-start mt-36">
          <h3 className="font-medium text-xl lg:text-[1.75rem]">Small Business. Big Impact.</h3>
          <h1 className="font-bold text-2xl lg:text-6xl">Build Your Online Presence Today.</h1>
          <button className="w-48 md:w-60 py-3.5 px-8 md:px-16 bg-secondary rounded-[10px] font-medium text-center hover:bg-primary-dark mb-[45px]">
            Get Started
          </button>
        </div>
        <div className="relative h-[26.5rem] lg:h-auto md:w-[80%] lg:w-auto mt-8 lg:mt-0 lg:-right-7">
          <img src={Polygon2} className="h-full w-full" alt="Polygon 2" />
          <div className="absolute z-10 top-[4.5rem] md:top-[4.3rem] lg:top-[3.4rem] md:-right-1">
            <img src={Polygon1} className="h-full w-full" alt="Polygon 1" />
          </div>
          <div className="absolute z-10 hidden md:block md:top-[4.5rem] lg:top-[4rem] -left-5">
            <img src={Animation} className="h-[18rem] lg:h-full" alt="Animation" />
          </div>
          <div className="absolute z-10 top-[4.5rem] md:top-[12.7rem] lg:top-[15.5rem] -left-1 md:-left-20 lg:-left-28">
            <img src={People} className="h-[20rem] md:h-[12.5rem] lg:h-full" alt="People" />
          </div>
        </div>
        <div className="absolute md:top-[27.3rem] lg:top-[27.3rem] md:left-8 lg:left-8">
          <img src={Rectangle} className="h-auto w-auto" alt="Rectangle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
