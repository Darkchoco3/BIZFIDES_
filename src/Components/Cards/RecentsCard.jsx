import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentsCard = ({
  image,
  altText,
  title,
  type,
  name,
  features,
  outcome,
}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-full min-h-[22rem] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.03)] border border-neutral-grey-100 rounded-[3.5rem] xl:rounded-[6.25rem] p-8 lg:p-0 lg:px-5 flex flex-col lg:flex lg:flex-row-reverse lg:gap-4 xl:grid xl:grid-cols-2 gap-[1.813rem] items-center"
    >
      {/* Image Section */}
      <img
        src={isMobile ? image?.mobile : image?.desktop}
        alt={altText}
        className="h-auto w-full md:w-5/6 lg:w-1/3 xl:w-full rounded-none md:rounded-[6.25rem] lg:rounded-[4rem] xl:rounded-[6.25rem] flex-1"
      />

      {/* Text and Link Section */}
      <div className="text-center lg:text-start flex-1 lg:py-[2.469rem]">
        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-neutral-black font-inter">
          {title}
        </p>
        <div className="grid gap-2">
          <p className="text-lg md:text-2xl xl:text-2xl 2xl:text-3xl text-neutral-black font-inter font-bold">
            {type}
          </p>
          <p className="text-secondary text-sm md:text-base 2xl:text-2xl font-inter font-bold pt-1">
            {name}
          </p>
          <p className="text-secondary text-sm md:text-base 2xl:text-2xl font-inter max-w-[25ch] text-pretty">
            Features-
            <span className="text-neutral-grey-300">{features}</span>
          </p>
          <p className="text-secondary text-sm md:text-base 2xl:text-2xl font-inter max-w-[25ch] mb-8 text-pretty">
            Outcome-
            <span className="text-neutral-grey-300">{outcome}</span>
          </p>
        </div>

        {/* Button */}
        <Link to="./portfolio" className="grid place-items-center lg:place-content-start">
          <div className="group text-sm md:text-base 2xl:text-2xl text-primary border border-primary rounded-xl hover:border-secondary focus:ring transition ease-in-out py-[.844rem] px-[.625rem] pl-4 min-w-36 hover:scale-110">
            <span className="font-inter text-center flex items-center gap-[.688rem] group-hover:text-secondary">
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
        </Link>
      </div>
    </div>
  );
};

export default RecentsCard;
