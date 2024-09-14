import React, { useEffect } from "react";
import errorImage from "../assets/errorimage.svg";
import logo from "../assets/Bizfides logo.svg";

const Error = () => {
  useEffect(() => {
    document.title = "404 Page Not Found";
  }, []);

  return (
    <>
      <img src={logo} alt="Logo" className="translate-x-3 md:translate-x-10 2xl:w-[10rem]" />

      <div className="flex flex-col justify-center items-center h-screen gap-6 text-center container mx-auto">
        <div className="space-y-4">
          <h1 className="font-inter font-semibold text-base md:text-lg lg:text-[1.75rem] 2xl:text-[2.3rem] text-neutral-black">
            PAGE NOT FOUND!
          </h1>
          <p className="font-inter text-neutral-grey-300 text-sm md:text-base lg:text-xl 2xl:text-3xl">
            Sorry! The page you are looking for is broken or does not exist.
          </p>
        </div>

        <img src={errorImage} alt="Error Illustration" className="hidden md:block" />

        <a href="/" className="group">
          <div className="group text-primary border border-primary rounded-xl hover:border-secondary focus:ring transition ease-in-out duration-150 py-[.844rem] px-[.625rem] min-w-36">
            <span className="font-inter text-sm 2xl:text-2xl flex items-center gap-3 group-hover:text-secondary">
              <svg
                className="w-6 h-6 transition ease-in-out duration-150 group-hover:text-secondary"
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
              Go Home
            </span>
          </div>
        </a>
      </div>
    </>
  );
};

export default Error;
