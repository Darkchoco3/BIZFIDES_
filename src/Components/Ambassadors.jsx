import React from "react";
import amb1 from "../assets/archer.svg";
import amb2 from "../assets/my business.svg";
import amb3 from "../assets/riseup.svg";
import amb4 from "../assets/glycon.svg";
import amb5 from "../assets/sponsor1.svg";
import dot from '../assets/Group 2008.png'

const Ambassadors = () => {
  const sponsor = [
    { img: amb5 },
    { img: amb4 },
    { img: amb3 },
    { img: amb1 },
    { img: amb5 },
    { img: amb3 },
  ];

  return (
    <div className="pt-[0.8125rem] container w-11/12 ">
      <div className="flex  justify-center gap-[25px] max-h-[51px] md:max-h-[197px]">
        {sponsor.map((a, i) => (
          <img
            src={a.img}
            key={i}
            className="min-w-[2rem] md:min-w-[4rem] lg:min-w-[9rem]"
            alt={`Sponsor ${i + 1}`}
          />
        ))}
      </div>
      <div className="lg:flex justify-end hidden ">
       <img src={dot} alt="" />
      </div>
    </div>
  );
};

export default Ambassadors;

