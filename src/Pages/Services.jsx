import React from "react";
import HeroImage from "../assets/Group 2009.svg";
import ExternalHero from "../Components/ExternalHero.jsx";
import Testimonials from "../Components/Testimonial.jsx";
import Subscribe from "../Components/Subscribe.jsx";
import web from "../assets/web dev.svg";
import seo from "../assets/seo.svg";
import social from "../assets/social media.svg";
import mobile from "../assets/mobile app.svg";
import branding from "../assets/Frame 58.svg";
import commerce from "../assets/Frame 59.svg";
import Footer from "../Layouts/Footer.jsx";
import About from "../Components/About.jsx";
import Button from "../Components/Button.jsx";
import myImage from "../assets/Group 1.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Starts off-screen (below)
    },
    visible: {
      opacity: 1,
      y: 0, // Moves to its normal position
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

const ServiceDetails = ({ image, title, description, titleImg }) => {
  return (
    <div className="shadow-[0px_0px_12px_8px_rgba(0,0,0,0.03)] border border-neutral-grey-100 rounded-[18.938rem] min-h-[35rem] overflow-hidden py-[2.75rem] px-[2.063rem] xl:px-[3rem] 2xl:py-[3.5rem] 2xl:px-[3rem] text-center flex flex-col justify-center items-center gap-6 2xl:gap-12">
      <img src={image} alt={titleImg} className="min-w-[16rem]" />
      <div className="font-inter">
        <h3 className="text-base md:text-xl lg:text-[1.75rem] 2xl:text-2xl font-semibold text-neutral-black">{title}</h3>
        <p className="text-sm md:text-base 2xl:text-xl text-neutral-grey-300 mt-2 text-pretty">
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Crafting visually stunning and user-friendly websites that elevate your online presence and drive business growth.",
      image: web,
    },
    {
      title: "Mobile Application",
      description:
        "Designing intuitive, engaging mobile apps that connect with your audience and enhance your brand experience.",
      image: mobile,
    },
    {
      title: "Social Media",
      description:
        "Expertly managing your social media presence to build brand awareness, engage your audience, and drive website traffic and sales.",
      image: social,
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your website’s visibility with our SEO services, using proven strategies to increase organic traffic and improve rankings.",
      image: seo,
    },
    {
      title: "Branding & Identity",
      description:
        "Create a strong, cohesive brand identity that stands out with our logo design and brand guidelines.",
      image: branding,
    },
    {
      title: "E-commerce Page Creation",
      description:
        "Launch a seamless online store with our e-commerce solutions. We design secure, user-friendly pages built to convert.",
      image: commerce,
    },
  ];

  return (
    <div className="grid gap-10 lg:gap-20">
      <ExternalHero
        heading={"Our Services"}
        paragraph={
          "Discover how our digital services can help your business Shine online. Explore Our services."
        }
        image={HeroImage}
        altText={"Service Image"}
      />

      <section className="container w-11/12">
        <div className="text-center mb-[3.375rem]">
          <p className=" font-bold text-primary font-inter text-sm md:text-base 2xl:text-2xl">GUARANTEED SUCCESS</p>
          <h2 className="font-roboto text-2xl md:text-3xl lg:text-[2.5rem] 2xl:text-5xl font-bold mt-[5px] mb-[10px]  text-primary">
            What We Offer
          </h2>

          <p className="text-neutral-grey-300 font-inter text-sm md:text-base 2xl:text-2xl">
            Unlocking potential with creative solutions
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <ServiceDetails
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us and Testimonials Section */}
      <section>
        <section className="bg-primary-light">
          <div className=" container w-11/12 flex flex-col items-center md:flex-row md:gap-[3rem] lg:gap-[7rem] xl:gap-[7.094rem]">
            <img
              src={myImage}
              alt="Why choose us image"
              className="md:w-1/2 lg:w-1/3 flex-1 h-auto hidden md:block py-8"
            />
            <div className="flex-1 py-[3rem] md:py-[5.813rem] flex flex-col text-center md:text-start">
              <motion.h3 className="text-primary font-inter font-semibold text-base lg:text-xl 2xl:text-[1.8rem] leading-none pb-[1rem] lg:pb-[2rem]"
               variants={textVariants}>
                WHY CHOOSE US
              </motion.h3>
              <motion.div className="grid gap-[2rem]"
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}>
                <motion.p className="text-primary-dark font-roboto font-bold text-[1.4rem] md:text-2xl lg:text-3xl xl:text-[2.5rem] 2xl:text-[3rem] leading-none"
                 variants={textVariants}>
                  Trusted Results
                </motion.p>
                <motion.p className="text-primary-medium text-sm lg:text-base xl:text-xl 2xl:text-2xl font-inter lg:max-w-[40ch]"
                 variants={textVariants}>
                  Our comprehensive services, from web design to SEO, are
                  designed to drive measurable growth and elevate your online
                  presence.
                </motion.p>
                <motion.div  variants={textVariants}>
                <Link
                  to="./register"
                  className="grid place-items-center md:place-content-start"
                >
                  <div className="w-full lg:w-auto grid place-items-center group text-white border bg-primary rounded-xl hover:bg-secondary hover:text-white focus:ring transition ease-in-out duration-150 py-[.844rem] px-[.625rem] pl-4 min-w-36">
                    <span className="font-inter text-sm lg:text-base xl:text-lg 2xl:text-2xl text-center flex items-center gap-[.688rem] group-hover:text-white">
                      Get Started
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
                    </span>
                  </div>
                </Link>
                </motion.div>
               
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />
      </section>

      <Subscribe />
    </div>
  );
};

export default Services;
