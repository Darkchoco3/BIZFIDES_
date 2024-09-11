import React from "react";
import {Link} from 'react-router-dom'
import { ourWorks } from "../DB/data.js";
import RecentsCard from "./Cards/RecentsCard.jsx";

const RecentWorks = () => {
  const currentItems = ourWorks.slice(0,4);
  return (
    <>
      <section className="container w-11/12 grid gap-8 pt-[2rem] lg:pt-0 lg:gap-12">
        <div className="text-center">
          <h5 className="text-xl md:text-xl text-primary font-inter font-semibold">
            OUR WORKS
          </h5>
          <h3 className="text-[1.8rem] md:text-[2.5rem] text-primary-dark font-roboto font-bold">
            Our Recent Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Mapping through the array */}
          {currentItems.map((work) => (
            <RecentsCard
              key={work?.id}
              image={work?.image}
              altText={work?.altText}
              title={work?.title}
              type={work?.type}
              name={work?.name}
              features={work?.features}
              outcome={work?.outcome}
            />
          ))}
        </div>

        <div className="grid lg:flex place-content-center justify-center items-center">
          <div className="group text-primary focus:ring transition ease-in-out duration-150 hover:scale-110">
            <Link
              to="./portfolio"
              className="font-inter text-sm md:text-xl lg:text-base xl:text-base 2xl:text-2xl text-center py-[.813rem] px-[4.063rem] rounded-[.625rem] flex items-center gap-[0.688rem] group-hover:text-secondary "
            >
              View More Works
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
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentWorks;