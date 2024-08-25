import React from "react";
import quote from "../assets/dot rectngle.svg";
import image from "../assets/Frame 1171277920.svg";

const Quote = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
      <div className="bg-white w-[90%] sm:w-[340px] h-auto rounded mx-auto">
        <p className="text-[#000] p-4 text-center py-6 sm:py-8 text-sm sm:text-base">
          {text}
        </p>
      </div>
      <div>
        <img src={image} alt="Client" className="mx-auto w-12 sm:w-16 md:w-20" />
        <p className="font-bold text-center text-sm sm:text-base">David K</p>
        <p className="text-center text-sm sm:text-base">CEO</p>
        <p className="text-center text-sm sm:text-base">DK Construction</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="relative bg-primary text-white py-8 sm:py-12 lg:py-16">
      <h1 className="text-center font-bold text-lg sm:text-xl lg:text-2xl">OUR Testimonials</h1>
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
        Hear From Our Satisfied Clients
      </h2>
      <p className="text-center text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 lg:mb-16">
        Authentic feedback, tangible impact. Discover why we're the trusted choice.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-evenly overflow-auto">
        <Quote
          text="BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!"
        />
        <Quote
          text="BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!"
        />
        <Quote
          text="BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!"
        />
      </div>

      <div className="text-center mt-8">
        <button className="text-white px-8 sm:px-11 py-2 rounded-lg shadow-lg border-2 border-white text-sm sm:text-base lg:text-lg hover:bg-white hover:text-primary transition">
          Get it Done
        </button>
      </div>

      <div className="flex justify-center mt-8 sm:absolute sm:bottom-0 sm:left-0 sm:ml-8">
        <img src={quote} alt="Decorative Quote" className="w-10 sm:w-16 md:w-20 lg:w-24" />
      </div>
    </div>
  );
};

export default Testimonials;
