import WhatWedoCard from "./Cards/WhatWedoCard";
import { whatwedo } from "../DB/data";
const WhatWedo = () => {
  return (
    <div className="container mx-auto min-h-[1214px] w-full px-4 font-inter flex flex-col items-center gap-[54px]">
      <div className="lg:w-[990px] flex flex-col gap-[10px]">
        <h3 className="text-base xl:text-lg text-primary text-center font-medium">
          GUARANTED SUCCESS
        </h3>
        <h2 className="font-roboto font-bold text-primary text-3xl sm:text-[40px] text-center">
          What We Do
        </h2>
        <p className="text-base text-neutral-grey-300 text-center">
          We specialize in elevating your business’s online presence to ensure
          you stand out in today’s digital landscape. Our comprehensive suite of
          services is designed to enhance every aspect of your online identity.
          from building a compelling brand image to driving targeted traffic and
          fostering meaningful customer engagement
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[1.5rem] lg:gap-[4.063rem] justify-center">
        {whatwedo.map((what, i) => (
          <WhatWedoCard what={what} key={i} />
        ))}
      </div>
    </div>
  );
};

export default WhatWedo;
