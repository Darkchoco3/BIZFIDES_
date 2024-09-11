import WhatWedoCard from "./Cards/WhatWedoCard";
import { whatwedo } from "../DB/data";
const WhatWedo = () => {
  return (
    <div className="container min-h-[1214px] w-11/12 font-inter flex flex-col gap-[54px]">
      <div className="flex flex-col gap-[10px] justify-center items-center">
        <h3 className="text-sm md:text-base xl:text-lg text-primary text-center font-medium">
          GUARANTED SUCCESS
        </h3>
        <h2 className="font-roboto font-bold text-primary text-xl md:text-2xl lg:text-3xl text-center">
          What We Do
        </h2>
        <p className="text-base text-neutral-grey-300 text-center lg:text-2xl 2xl:text-4xl 2xl:leading-[1.4] max-w-[80ch]">
          We specialize in elevating your business’s online presence to ensure
          you stand out in today’s digital landscape. Our comprehensive suite of
          services is designed to enhance every aspect of your online identity.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[1.5rem] lg:gap-[4.063rem] justify-center">
        {whatwedo.map((what, i) => (
          <WhatWedoCard what={what} key={i} />
        ))}
      </div>
    </div>
  );
};

export default WhatWedo;
