import React from 'react';
import Polygon1 from '../assets/Group 3387.png';
import People from '../assets/male and female hero.svg';
import Animation from '../assets/Animatiion.svg';
import Rectangle from '../assets/Group 2008.svg';

import CircularAnimae from './CircularAnimae'; 
import CircularDiagram from './CircularAnimae'; 

const Hero = () => {
  return (
    <div className='bg-primary pt-[6rem] md:pt-28 lg:pt-[7rem] relative'>
      <div className="relative flex justify-between items-center min-h-[384px] md:min-h-[484px] lg:min-h-[544px]">
        {/* Polygon Div */}
        <div className="absolute top-0 right-0 h-[24rem] md:h-[30rem] lg:h-auto md:w-[50%] lg:w-auto">
          <img src={Polygon1} className="hidden md:block h-full w-full" alt="Polygon Decoration" />
        </div>
        
        {/* Content Div */}
        <div className="relative max-w-[77.5rem] container w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center z-20">
          <div className="space-y-8 lg:w-1/2 flex flex-col justify-center items-center lg:items-start h-[25rem] lg:h-auto">
            <h3 className='font-medium font-roboto text-xl md:text-2xl lg:text-[1.75rem] text-white'>
              Small Business. Big Impact.
            </h3>
            <h1 className='font-bold font-roboto text-4xl md:text-6xl text-center lg:text-start text-primary-light'>
              Build Your Online Presence Today.
            </h1>
            <button className='font-inter w-60 py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl'>
              Get Started
            </button>
          </div>

          <div className="relative lg:w-1/2 flex justify-end">
            <div className="relative z-10 -left-12 hidden lg:block -top-4">
              <img src={Animation} className="h-full w-full" alt="Animation" />
              <div className='hidden absolute lg:block z-10 top-[14rem] -left-20'>
                <img src={People} className="w-full h-full" alt="People" />
              </div>
            </div>
          </div>
        </div>

        {/* Rectangle Decoration */}
        <div className='absolute bottom-0 left-3 md:left-4 lg:left-12'>
          <img src={Rectangle} className="h-full w-full" alt="Rectangle Decoration" />
        </div>
      </div>

      {/* Uncomment this if you want to use CircularDiagram */}
      {/* <CircularDiagram /> */}
    </div>
  );
};

export default Hero;
