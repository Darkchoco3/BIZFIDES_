import React from 'react';
import Polygon1 from '../assets/Group 3387.png';
import People from '../assets/male and female hero.svg';
import Animation from '../assets/Animatiion.svg';
import Rectangle from '../assets/Group 2008.svg';
import { Link} from 'react-router-dom';
import CircularAnimae from './CircularAnimae'; 
import CircularDiagram from './CircularAnimae'; 

const Hero = () => {
  return (
    <div className='bg-primary pt-[5rem] md:pt-24 lg:pt-[7rem] relative'>
      <div className="relative flex justify-between items-center min-h-[384px] md:min-h-[484px] lg:min-h-[476px] xl:min-h-[490px]">
        {/* Polygon Div */}
        <div className="absolute top-0 right-0 h-[25rem] md:h-[30.25rem] lg:h-auto w-[70%] md:w-[50%] lg:w-[60%] xl:w-[50%]">
          <img src={Polygon1} className="h-full w-full" alt="Polygon Decoration" />
        </div>
        
        {/* Content Div */}
        <div className="relative w-11/12 container flex flex-col lg:flex-row justify-center lg:justify-between items-center z-20">
          <div className="space-y-8 lg:w-1/2 flex flex-col justify-center items-center lg:items-start h-[25rem] lg:h-auto">
            <h3 className='font-medium font-roboto text-xl md:text-2xl xl:text-[1.75rem] text-white'>
              Small Business. Big Impact.
            </h3>
            <h1 className='font-bold font-roboto text-4xl md:text-5xl xl:text-6xl text-center lg:text-start text-primary-light'>
              Build Your Online Presence Today.
            </h1>
            <button className='font-inter w-60 py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl'>
              <Link to='/register'>
              Get Started
              </Link>
            </button>
          </div>

          <div className="relative lg:w-1/2 flex justify-end">
            <div className="relative z-10  hidden lg:block -top-3">
              <img src={Animation} className="h-full w-full" alt="Animation" />
              <div className='hidden absolute lg:block z-10 lg:top-[11.4rem] xl:top-[12.1rem] -left-20'>
                <img src={People} className="w-full h-full" alt="People" />
              </div>
            </div>
          </div>
        </div>

        {/* Rectangle Decoration */}
        <div className='absolute bottom-0 left-4 md:left-4 lg:left-[3rem] xl:left-[53px] '>
          <img src={Rectangle} className="h-full w-full" alt="Rectangle Decoration" />
        </div>
      </div>

      {/* Uncomment this if you want to use CircularDiagram */}
      {/* <CircularDiagram /> */}
    </div>
  );
};

export default Hero;
