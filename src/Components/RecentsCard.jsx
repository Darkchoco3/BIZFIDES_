import React from "react";
import fitZoneApp from "../assets/toy store.svg";

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
      <div className="w-full min-h-[24.375rem] shadow rounded-[6.25rem] p-4 flex flex-col lg:flex-row gap-2 items-center">
        <div className="flex-1">
          <a href="">
            <img
              src={image}
              alt={altText}
              className="h-auto rounded-[5.625rem]"
            />
          </a>
        </div>
        <div className="text-center lg:text-start p-4 flex-1 lg:grid lg:gap-2">
          <p className="text-lg lg:text-2xl text-neutral-black font-inter">
            {title}
          </p>
          <p className="text-xl lg:text-2xl text-neutral-black font-inter font-bold">
            {type}
          </p>
          <p className="text-secondary lg:text-sm font-inter font-bold">
            {name}
          </p>
          <p className="text-secondary lg:text-sm font-inter">
            Features-
            <span className="text-neutral-grey-300">{features}</span>
          </p>
          <p className="text-secondary lg:text-sm font-inter">
            Outcome-
            <span className="text-neutral-grey-300">{outcome}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RecentsCard;
