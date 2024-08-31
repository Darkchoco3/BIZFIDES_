import React from "react";
import HeroImage from "../assets/PortfolioHeroImage.svg";
import Rectangle from '../assets/Group 2008.png';

const ExternalHero = ({heading,paragraph,image,altText}) => {
  return (
    <>
      <div className="bg-primary relative">
        <div className="container w-11/12 flex flex-col md:flex-row items-center gap-[4.438rem]">
          <div className="font-montserrat  text-white flex-1">
            <h1 className="text-[3.75rem] font-bold">{heading}</h1>
            <p className="text-[1.75rem] max-w-[30ch] font-medium leading-tight">
             {paragraph}
            </p>
          </div>

          <img src={image} alt={altText} className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4" />
        </div>
        <div className='absolute bottom-0 left-3 md:left-4 lg:left-12'>
          <img src={Rectangle} className=" object-cover" alt="Rectangle Decoration" />
        </div>
      </div>
    </>
  );
};

export default ExternalHero;
