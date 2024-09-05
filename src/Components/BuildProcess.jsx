import React from "react";
import image1 from "../assets/Group 2008.svg";
import arrow from "../assets/arrow.svg";
import arrowMobile from "../assets/arrow mobile.svg";

const BuildProcess = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="container w-11/12">
          <div className="grid place-items-center gap-4 text-white py-[2.25rem]">
            <h5 className="font-inter font-medium text-base lg:text-xl">BUILD PROCESS</h5>
            <h3 className="font-roboto font-bold text-lg lg:text-[2.5rem]">How It Works</h3>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7 place-items-center pt-4 gap-8 xl:gap-0">
              <div className="flex flex-col items-center gap-4">
                <div className=" border-[.8rem] lg:border-[1.2rem]  rounded-full flex items-center justify-center border-secondary">
                  <div className= "text-sm lg:text-xl text-primary-medium w-12 h-12 lg:w-16 lg:h-16 border-[0.4rem] lg:border-8 border-primary-medium bg-primary-light rounded-full flex items-center justify-center font-semibold">
                    01
                  </div>
                </div>

                <div className="font-inter text-white text-center lg:min-w-[12.5rem]">
                <p className="text-[1rem] lg:text-base font-bold">SELECT SERVICE</p>
                <p className="text-sm max-w-[20ch] lg:max-w-[30ch] text-pretty">Choose the specific service(s) you need.</p>
              </div>
              </div>
              

              <img src={arrow} alt="" className="hidden md:block -translate-y-10"/>
              <img src={arrowMobile} alt="" className="block md:hidden"/>

              <div className="flex flex-col items-center gap-4">
                <div className=" border-[.8rem] lg:border-[1.2rem]  rounded-full flex items-center justify-center border-secondary">
                  <div className=" text-sm lg:text-xl text-primary-medium w-12 h-12 lg:w-16 lg:h-16 border-[0.4rem] lg:border-8 border-primary-medium bg-primary-light rounded-full flex items-center justify-center font-semibold">
                    02
                  </div>
                </div>
                <div className="font-inter text-white text-center lg:min-w-[12.5rem]">
                <p className="text-[1rem] lg:text-base font-bold">CONSULT & PLAN</p>
                <p className="text-sm  max-w-[20ch] lg:max-w-[30ch] text-pretty">Discuss needs, set goals, and outline project scope.</p>
              </div>
              </div>
              

              <img src={arrow} alt="" className="hidden md:hidden xl:block -translate-y-10"/>
              <img src={arrowMobile} alt="" className="block md:hidden xl:hidden"/>

              <div className="flex flex-col items-center gap-4">
                <div className=" border-[.8rem] lg:border-[1.2rem]  rounded-full flex items-center justify-center border-secondary">
                  <div className=" text-sm lg:text-xl text-primary-medium w-12 h-12 lg:w-16 lg:h-16 border-[0.4rem] lg:border-8 border-primary-medium bg-primary-light rounded-full flex items-center justify-center font-semibold">
                    03
                  </div>
                </div>
                <div className="font-inter text-white text-center lg:min-w-[12.5rem]">
                <p className="text-[1rem] lg:text-base font-bold">ONBOARD & EXECUTE</p>
                <p className="text-sm  max-w-[20ch] lg:max-w-[30ch] text-pretty">Discuss needs, set goals, and outline project scope.</p>
              </div>
              </div>
              

              <img src={arrow} alt="" className="hidden md:block -translate-y-10"/>
              <img src={arrowMobile} alt="" className="block md:hidden"/>

              <div className="flex flex-col items-center gap-4">
                <div className=" border-[.8rem] lg:border-[1.2rem]  rounded-full flex items-center justify-center border-secondary">
                  <div className=" text-sm lg:text-xl text-primary-medium w-12 h-12 lg:w-16 lg:h-16 border-[0.4rem] lg:border-8 border-primary-medium bg-primary-light rounded-full flex items-center justify-center font-semibold">
                    04
                  </div>
                </div>
                <div className="font-inter text-white text-center lg:min-w-[12.5rem]">
                <p className="text-[1rem] lg:text-base font-bold">DELIVER & SUPPORT</p>
                <p className="text-sm max-w-[20ch] lg:max-w-[30ch] xl:text-pretty ">Final delivery, and continuous support.</p>
              </div>
              </div>
              

            </div>
          
          </div>
          <div className="mt-16 md:mt-4 animate-pulse">
          <img src={image1} alt="" className="" />
        </div>
        </div>
      </div>
    </>
  );
};

export default BuildProcess;
