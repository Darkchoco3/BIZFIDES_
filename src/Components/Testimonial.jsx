import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import quote from "../assets/Group 2008.svg";
import image from "../assets/Frame 1171277920.svg";

const testimonialsData = [
  { id: 1, text: 'BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!', name: 'David. K.', title: 'CEO', company: 'DK Construction' },
  { id: 2, text: 'Their services are top-notch! We saw a significant increase in traffic after working with them.', name: 'Jane. D.', title: 'Founder', company: 'Jane Designs' },
  { id: 3, text: 'Highly professional and results-oriented. They helped us achieve our marketing goals.', name: 'John. S.', title: 'Marketing Head', company: 'Tech Solutions' },
  { id: 4, text: 'Their strategies are innovative and effective. We’re extremely satisfied.', name: 'Emily. R.', title: 'Operations Manager', company: 'QuickLogistics' },
  { id: 5, text: 'Our sales increased by 50% thanks to their targeted approach.', name: 'Michael. B.', title: 'Sales Director', company: 'SalesPros' },
  { id: 6, text: 'The best team we’ve worked with. They understood our needs and delivered beyond expectations.', name: 'Linda. C.', title: 'Owner', company: 'Linda’s Bakery' }
];

const Quote = ({ text, name, title, company }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
      <div className="relative h-48 w-[20rem] md:w-[21rem] lg:w-[28rem] rounded-lg bg-white shadow-lg flex flex-col items-center justify-center px-8 ">
        {/* Triangle at the bottom (Chat bubble tail) */}
        <div className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-[38px] border-l-[18px] border-r-[18px] border-t-[32px] border-l-transparents border-r-transparents border-t-white"></div>

        {/* Left Quotation Mark */}
        <FaQuoteLeft className="absolute top-4 left-4 text-primary h-6 w-6" />

        {/* Right Quotation Mark */}
        <FaQuoteRight className="absolute bottom-4 right-4 text-primary h-6 w-6" />

        {/* Quote Text */}
        <p className="text-center text-base text-neutral-grey-300 mt-5">
          {text}
        </p>
      </div>
      <div className="mt-8">
        <img src={image} alt="Client" className="mx-auto w-12 sm:w-16 md:w-20" />
        <p className="font-bold text-center text-sm sm:text-base">{name}</p>
        <p className="text-center text-sm sm:text-base">{title}</p>
        <p className="text-center text-sm sm:text-base">{company}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const getVisibleTestimonials = () => {
    const slidesToShow = window.innerWidth >= 1440 ? 3 : window.innerWidth >= 1024 ? 2 : window.innerWidth > 375 ? 1 :2;
    const startIndex = currentIndex;
    return testimonialsData.slice(startIndex, startIndex + slidesToShow).concat(
      testimonialsData.slice(0, Math.max(0, startIndex + slidesToShow - testimonialsData.length))
    );
  };

  return (
    <div className="relative bg-primary text-white py-8 sm:py-12 lg:py-16 ">
      <div className="container w-11/12">
      <h1 className="text-center font-bold text-lg sm:text-xl lg:text-2xl">OUR Testimonials</h1>
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
        Hear From Our Satisfied Clients
      </h2>
      <p className="text-center text-sm sm:text-base lg:text-lg mb-6 sm:mb-12 lg:mb-16">
        Authentic feedback, tangible impact. Discover why we're the trusted choice.
      </p>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-10 justify-evenly">
        {getVisibleTestimonials().map(({ id, text, name, title, company }) => (
          <Quote key={id} text={text} name={name} title={title} company={company} />
        ))}
      </div>

      {/* Control Icons */}
      <div className="flex justify-center items-center gap-4 mt-8">
       <div className="h-12 w-12 bg-white hover:bg-secondary rounded-full flex justify-center items-center">
       <FaChevronLeft size={25} className="text-primary cursor-pointer transition " onClick={prevSlide} />
       </div>
        <div className="h-12 w-12 bg-white hover:bg-secondary rounded-full flex justify-center items-center">
        <FaChevronRight size={25} className="text-primary   cursor-pointer transition " onClick={nextSlide} />
        </div>
      </div>

      <div className="flex justify-center mt-8 absolute bottom-0 sm:left-0 sm:ml-8">
        <img src={quote} alt="Decorative Quote" className="w-10 sm:w-16 md:w-20 lg:w-24" />
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
