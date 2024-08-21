import React from "react";
import RecentsCard from "./RecentsCard";

const RecentWorks = ({ image,title, type, name, features, outcome }) => {
  return (
    <>
      <div className="container py-8">
        <div className="text-center">
          <h5 className="text-xl md:text-xl text-primary font-semibold">
            {" "}
            OUR WORK
          </h5>
          <h3 className="text-[1.8rem] md:text-[2.5rem] text-primary-dark font-bold">
            Our Recent Works
          </h3>
        </div>

        <RecentsCard />
      </div>
    </>
  );
};

export default RecentWorks;
