import React from 'react';
import Polygon1 from '../assets/Group 3387.png';
import Man from '../assets/image 29.svg';
import Rectangle from '../assets/Group 2008.svg';
import { Link} from 'react-router-dom';
import CircularAnimae from './CircularAnimae'; 
import CircularDiagram from './CircularAnimae';
import LazyLoad from 'react-lazy-load';



const Hero = () => {
  return (
    <div className='bg-primary pt-[4rem] md:pt-24 lg:pt-[6.5rem] relative'>
      <div className="relative flex justify-between items-center min-h-[21.5rem] md:min-h-[28.625rem] lg:min-h-[30rem] xl:min-h-[33.75rem] ">
        {/* Polygon Div */}
        <div className="absolute top-0 right-0 h-[25rem] md:h-[28.6rem] lg:h-[30rem] xl:h-[33.7rem] w-[60%] lg:w-auto">
          <img src={Polygon1} className="h-full w-full" alt="Polygon Decoration" />
        </div>
        
        
        {/* Content Div */}
        <div className="relative w-11/12 container flex flex-col lg:flex-row justify-center lg:justify-between items-center z-20">
          <div className="space-y-8 lg:w-[40%] xl:w-1/2 flex flex-col justify-center items-center lg:items-start h-[25rem] lg:h-auto">
            <h3 className='font-medium font-roboto text-xl md:text-2xl lg:text-[1.5rem] xl:text-[1.75rem] text-white'>
              Small Business. Big Impact.
            </h3>
            <h1 className='font-bold font-roboto text-4xl md:text-4xl  xl:text-6xl text-center lg:text-start text-primary-light'>
              Build Your Online Presence Today.
            </h1>
            <button className='font-inter w-60 py-3.5 px-16 bg-white text-primary rounded-[10px] font-medium text-center hover:bg-primary hover:text-white border-2 border-white text-xl transition ease-in-out'>
              <Link to='/register'>
              Get Started
              </Link>
            </button>
          </div>

          <div className="relative lg:w-1/2 flex justify-end">
            <div className="relative z-10  hidden lg:block lg:-top-10 xl:-top-10">
            <CircularDiagram />
              <div className='hidden absolute lg:block z-10 lg:top-[11.1rem] xl:top-[12.2rem] lg:-left-56 xl:-left-64 '>
                <img src={Man} className="w-[90%] xl:w-full h-full" alt="People" />
              </div>
            </div>
          </div>
        </div>

        {/* Rectangle Decoration */}
        <div className='absolute bottom-0 left-4 md:left-4 lg:left-[3rem] xl:left-[53px] '>
          <img src={Rectangle} className="h-full w-full animate-pulse" alt="Rectangle Decoration" />
        </div>
      </div>

      {/* Uncomment this if you want to use CircularDiagram */}
      
    </div>
  );
};

export default Hero;
