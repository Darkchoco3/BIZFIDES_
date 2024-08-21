import React from "react";
import amb1 from "../assets/archer.svg";
import amb2 from "../assets/my business.svg";
import amb3 from "../assets/riseup.svg";
import amb4 from "../assets/glycon.svg";
import amb5 from "../assets/sponsor1.svg";

const Ambassadors = () => {
  const sponsor = [
    { img: amb5 },
    { img: amb4 },
    { img: amb3 },
    { img: amb1 },
    { img: amb2 },
  ];

  return (
    <div className="">
      <div className="flex flex-wrap justify-center gap-8">
        {sponsor.map((a, i) => (
          <img
            src={a.img}
            key={i}
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
            alt={`Sponsor ${i + 1}`}
          />
        ))}
      </div>
      <div className="">
        <div className="hidden lg:flex flex-col gap-[2px] items-end -rotate-[4deg] px-24 scale-100">
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
        </div>
        <div className="hidden lg:flex flex-col gap-[2px] w-full items-end -rotate-2 px-8">
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
          <DottedPattern />
        </div>
      </div>
    </div>
  );
};

export default Ambassadors;

const DottedPattern = () => {
  return (
    <>
      <div className="border-t-[3px] border-dotted border-black w-20"></div>
    </>
  );
};
