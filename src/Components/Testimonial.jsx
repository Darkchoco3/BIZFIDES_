  import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import quote from "../assets/Group 2008.svg";
import bolajisimage from "../assets/Frame 1171277920.svg";
import lisasimage from "../assets/lisasimage.svg";
import sarahsimage from "../assets/sarah.svg";

const testimonialsData = [
  {
    id: 1,
    text: 'Bizfides has helped us to establish a strong online presence. Their expertise in SEO and content creation has increased our website traffic by 50% and boosted our sales."',
    name: "Lisa Flow",
    title: "CEO",
    company: "Lisa's Kitchen",
    image: lisasimage,
  },
  {
    id: 2,
    text: "BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!.",
    name: "David. K.",
    title: "CEO",
    company: "DK Construction",
    image: bolajisimage,
  },
  {
    id: 3,
    text: "Bizfides' website design services exceeded our expectations. Their attention to detail and creativity has resulted in a stunning website that reflects our brand perfectly.",
    name: "Sarah Tail",
    title: "DIRECTOR",
    company: "Tailing's Designs",
    image: sarahsimage,
  },
  {
    id: 4,
    text: "BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!",
    name: "Michael. B.",
    title: "OPERATIONS MANAGER",
    company: "QuickLogistics",
    image: bolajisimage,
  },
  {
    id: 5,
    text: 'Bizfides has helped us to establish a strong online presence. Their expertise in SEO and content creation has increased our website traffic by 50% and boosted our sales."',
    name: "Emily R.",
    title: "SALES DIRECTOR",
    company: "SalesPros",
    image: lisasimage,
  },
  {
    id: 6,
    text: "Bizfides' website design services exceeded our expectations. Their attention to detail and creativity has resulted in a stunning website that reflects our brand perfectly.",
    name: "Linda. C.",
    title: "CEO",
    company: "Linda’s Bakery",
    image: sarahsimage,
  },
];

const Quote = ({ text, name, title, company, image, isMiddle }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 w-full sm:w-auto transition-transform duration-300 ${
        isMiddle ? "scale-110" : ""
      }`}
    >
      <div
        className={`relative ${
          isMiddle ? " bg-secondary max-w-[35rem] pb-8" : "bg-white shadow-lg"
        } h-48 max-w-[30rem] rounded-[1.081rem]  flex flex-col items-center justify-center px-8 `}
      >
        {/* Triangle at the bottom (Chat bubble tail) */}
        <div
          className={`absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0 h-[38px] border-l-[18px] border-r-[18px] border-t-[32px] border-l-transparents border-r-transparents  ${
            isMiddle ? "border-t-secondary" : "border-t-white"
          } `}
        ></div>

        {/* Left Quotation Mark */}
        <FaQuoteLeft
          className={`absolute top-4 left-4 ${
            isMiddle ? "text-white" : ""
          } text-primary h-6 w-6`}
        />

        {/* Right Quotation Mark */}
        <FaQuoteRight
          className={`absolute bottom-4 right-4 ${
            isMiddle ? "text-white" : ""
          } text-primary h-6 w-6`}
        />

        {/* Quote Text */}
        <p
          className={`text-center 2xl:text-xl leading-[1.3rem] ${
            isMiddle ? "text-white max-w-[50ch] pt-4 text-base 2xl:text-2xl" : "text-sm"
          } text-neutral-grey-300 font-inter`}
        >
          {text}
        </p>
      </div>
      <div className="mt-8">
          <img
            src={image}
            alt="Client"
            className="mx-auto w-12 sm:w-16 md:w-20 mb-2"
          />
        <p className="font-bold text-center text-sm 2xl:text-xl font-inter">{name}</p>
        <p className="text-center text-sm 2xl:text-xl font-inter">{title}</p>
        <p className="text-center text-sm 2xl:text-xl font-inter">{company}</p>
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
    const slidesToShow =
      window.innerWidth >= 1280
        ? 3
        : window.innerWidth >= 1024
        ? 2
        : window.innerWidth < 768
        ? 1
        : 2;
    const startIndex = currentIndex;
    return testimonialsData
      .slice(startIndex, startIndex + slidesToShow)
      .concat(
        testimonialsData.slice(
          0,
          Math.max(0, startIndex + slidesToShow - testimonialsData.length)
        )
      );
  };

  return (
    <div className="relative bg-primary text-white py-8 sm:py-12 lg:py-16">
      <div className="container w-11/12">
        <div className="grid place-items-center">
          <h5 className="text-center font-semibold text-[1rem] md:text-xl font-inter lg:text-2xl">
            OUR TESTIMONIALS
          </h5>
          <h3 className="text-center text-2xl lg:text-[2.5rem] font-bold font-roboto pt-0 md:pt-8">
            Hear From Our Satisfied Clients
          </h3>
          <p className="text-center text-xs md:text-base lg:text-lg 2xl:text-2xl font-inter mb-6 sm:mb-12 lg:mb-16 max-w-[40ch] pt-3">
            Authentic feedback, tangible impact. Discover why we're the trusted
            choice.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-16 justify-evenly pb-[3.375rem]">
          {getVisibleTestimonials().map(
            ({ id, text, name, title, company, image }, index) => (
              <Quote
                key={id}
                text={text}
                name={name}
                title={title}
                company={company}
                image={image}
                isMiddle={index === 1 && window.innerWidth >= 1280}
              />
            )
          )}
        </div>

        {/* Control Icons */}
        <div className="flex justify-center items-center gap-4 lg:mt-8">
          <div className="h-12 w-12 bg-white hover:bg-secondary rounded-full flex justify-center items-center">
            <FaChevronLeft
              size={25}
              className="text-primary cursor-pointer transition "
              onClick={prevSlide}
            />
          </div>
          <div className="h-12 w-12 bg-white hover:bg-secondary rounded-full flex justify-center items-center">
            <FaChevronRight
              size={25}
              className="text-primary cursor-pointer transition "
              onClick={nextSlide}
            />
          </div>
        </div>


        {/* <div className="flex justify-center mt-8 absolute bottom-0 sm:left-0 sm:ml-8">
        <img src={quote} alt="Decorative Quote" className="w-10 sm:w-16 md:w-20 lg:w-24" />
      </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
