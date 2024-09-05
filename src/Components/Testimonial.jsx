import React, { useState, useEffect, useRef } from "react";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import quote from "../assets/Group 2008.svg";
import bolajismage from "../assets/Frame 1171277920.svg";
import lisasimage from "../assets/lisasimage.svg";
import sarahimage from "../assets/Sarah.svg";
import LazyLoad from "react-lazy-load";

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
    image: bolajismage,
  },
  {
    id: 3,
    text: "Bizfides' website design services exceeded our expectations. Their attention to detail and creativity has resulted in a stunning website that reflects our brand perfectly.",
    name: "Sarah Tail",
    title: "DIRECTOR",
    company: "Tailing's Designs",
    image: sarahimage,
  },
  {
    id: 4,
    text: "BizFides transformed our online presence, elevating our brand and driving engagement. Their expertise took our business to the next level!",
    name: "Michael. B.",
    title: "OPERATIONS MANAGER",
    company: "QuickLogistics",
    image: bolajismage,
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
    image: sarahimage,
  },
];

// Testimonial component
const Quote = ({ text, name, title, company, image, isVisible }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 w-full sm:w-auto transition-transform duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="relative bg-white shadow-lg h-48 max-w-[30rem] rounded-[1.081rem] flex flex-col items-center justify-center px-8 ">
        <FaQuoteLeft className="absolute top-4 left-4 text-primary h-6 w-6" />
        <FaQuoteRight className="absolute bottom-4 right-4 text-primary h-6 w-6" />
        <p className="text-center text-sm lg:text-base leading-[1.3rem] text-neutral-grey-300 font-inter">
          {text}
        </p>
      </div>
      <div className="mt-8">
        <LazyLoad>
          <img
            src={image}
            alt="Client"
            className="mx-auto w-12 sm:w-16 md:w-20"
          />
        </LazyLoad>
        <p className="font-bold text-center text-sm sm:text-base">{name}</p>
        <p className="text-center text-sm sm:text-base">{title}</p>
        <p className="text-center text-sm sm:text-base">{company}</p>
      </div>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibilityMap, setVisibilityMap] = useState(
    Array(testimonialsData.length).fill(false)
  );
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementsRef.current.indexOf(entry.target);
          if (entry.isIntersecting) {
            setVisibilityMap((prevVisibilityMap) => {
              const newMap = [...prevVisibilityMap];
              newMap[index] = true;
              return newMap;
            });
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value to determine when to trigger visibility
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

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
          <h5 className="text-center font-semibold text-xl font-inter lg:text-2xl">
            OUR TESTIMONIALS
          </h5>
          <h3 className="text-center text-2xl lg:text-[2.5rem] font-bold font-roboto pt-8">
            Hear From Our Satisfied Clients
          </h3>
          <p className="text-center text-base lg:text-lg mb-6 sm:mb-12 lg:mb-16 max-w-[45ch] pt-3">
            Authentic feedback, tangible impact. Discover why we're the trusted
            choice.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 lg:gap-16 justify-evenly pb-[3.375rem]">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              ref={(el) => (elementsRef.current[index] = el)}
              key={testimonial.id}
            >
              <Quote
                text={testimonial.text}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                image={testimonial.image}
                isVisible={visibilityMap[index]}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 lg:mt-8">
          <div className="h-12 w-12 bg-white hover:bg-secondary rounded-full flex justify-center items-center">
            <FaChevronLeft
              size={25}
              className="text-primary cursor-pointer transition"
              onClick={prevSlide}
            />
          </div>
          <div className="h-12 w-12 bg-white hover:bg-secondary rounded-full flex justify-center items-center">
            <FaChevronRight
              size={25}
              className="text-primary cursor-pointer transition"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
