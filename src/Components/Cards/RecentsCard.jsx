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
    {/* xl:p-5  */}
      <div className="w-full min-h-[22rem] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.02)] border border-neutral-grey-100 rounded-[2.688rem] lg:rounded-[6.25rem] p-[2.125rem] lg:p-0 lg:px-5 flex flex-col lg:grid lg:grid-cols-2 gap-[1.813rem] items-center"> 
        
          {/* Anchor tags will be changed to react-router-dom Link when we set up App.jsx */}
          <a href="">
            <img
              src={image}
              alt={altText}
              className="h-auto rounded-[2.688rem] lg:rounded-[5.625rem]"
            />
          </a>
        <div className="text-center lg:text-start xl:py-[4.656rem] flex-1">
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
            <p className="text-secondary text-sm md:text-base lg:text-sm font-inter xl:max-w-[25ch]">
              Features-
              <span className="text-neutral-grey-300">{features}</span>
            </p>
            <p className="text-secondary text-sm md:text-base lg:text-sm font-inter xl:max-w-[25ch]">
              Outcome-
              <span className="text-neutral-grey-300">{outcome}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentsCard;
