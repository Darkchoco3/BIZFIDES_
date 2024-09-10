import React, {useEffect} from "react";
import errorImage from "../assets/errorimage.svg";
import logo from "../assets/Bizfides logo.svg"

const Error = () => {
  useEffect(() => {
    document.title = "404 Page Not Found";
  }, []);
  return (
    <>
    <div className="container pt-4 px-4 lg:pt-8 ">
    <img src={logo} alt="" className="xl:w-32 2xl:w-44" />
    </div>
     
      <div className="grid place-items-center text-center gap-2 lg:gap-[2.125rem] container h-screen ">
        <div className="grid gap-1 lg:gap-3">
        <h1 className="font-inter font-semibold text-base md:text-lg lg:text-[1.75rem] xl:text-[2.3rem] text-neutral-black">
          PAGE NOT FOUND !
        </h1>
        <p className="font-inter text-neutral-grey-300 text-xs md:text-base lg:text-xl 2xl:text-3xl">
          Sorry! The page you are looking for is broken or does not exist
        </p>
        </div>
        
        <img src={errorImage} alt="" className="hidden md:block md:w-1/3 lg:w-auto"/>

        <a href="/" className="grid place-items-center lg:place-content-start">
          <div className="group text-primary border border-primary rounded-xl hover:border-secondary focus:ring transition ease-in-out duration-150 py-[.5rem] md:py-[.844rem] md:px-[.625rem] pl-4 md:pl-5 lg:pl-4 min-w-36">
            <span className="font-inter text-sm 2xl:text-2xl text-center flex items-center gap-[.688rem] group-hover:text-secondary">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 transition ease-in-out duration-150 group-hover:color-[hsla(180,100%,32%,1)]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
              <span className="font-inter text-sm lg:text-base 2xl:text-2xl text-center flex items-center gap-[.688rem] group-hover:text-secondary">
                Go Home
              </span>
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Error;
