import React from "react";

const RecentsCard = ({
  image,
  altText,
  title,
  type,
  name,
  features,
  outcome,
}) => {
  return (
    <>
      <div className="w-full min-h-[22rem] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.02)] border border-neutral-grey-100 rounded-[3.5rem] xl:rounded-[6.25rem] p-8 lg:p-0 lg:px-5 flex flex-col lg:grid lg:grid-cols-2 gap-[1.813rem] items-center"> 
        
          {/* Anchor tags will be changed to react-router-dom Link when we set up App.jsx */}
          <a href="">
            <img
              src={image}
              alt={altText}
              className="h-auto rounded-[3.5rem] xl:rounded-[6.25rem] "
            />
          </a>
        <div className="text-center lg:text-start flex-1 lg:py-[2.469rem]">
          <p className="text-lg md:text-lg lg:text-2xl text-neutral-black font-inter">
            {title}
          </p>
          <div className="grid gap-2">
            <p className=" text-lg md:text-xl lg:text-2xl text-neutral-black font-inter font-bold">
              {type}
            </p>
            <p className="text-secondary text-sm md:text-base lg:text-sm font-inter font-bold pt-1">
              {name}
            </p>
            <p className="text-secondary text-sm md:text-base lg:text-sm font-inter max-w-[25ch]">
              Features-
              <span className="text-neutral-grey-300">{features}</span>
            </p>
            <p className="text-secondary text-sm md:text-base lg:text-sm font-inter max-w-[25ch] mb-8">
              Outcome-
              <span className="text-neutral-grey-300">{outcome}</span>
            </p>
          </div>

          <a href="./portfolio" className="grid place-items-center lg:place-content-start">
          <div className="group text-primary border border-primary rounded-xl hover:border-secondary focus:ring transition ease-in-out duration-150 py-[.844rem] px-[.625rem] w-36 ">
            <span
              className="font-inter text-sm text-center flex items-center gap-[.688rem] group-hover:text-secondary"
            >
              View Project
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </span>
          </div>
          </a>  
        </div>
       
      </div>
    </>
  );
};

export default RecentsCard;