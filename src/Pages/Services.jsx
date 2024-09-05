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
import LazyLoad from "react-lazy-load";

const ServiceDetails = ({ image, title, description, titleImg }) => {
  return (
    <div className="bg-white shadow-lg h-[530px] rounded-[303px] overflow-hidden p-6 text-center flex flex-col justify-center items-center">
      <img src={image} alt={titleImg} className="w-[204px]" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-base text-neutral-grey-300 mt-2">
        {description}
      </p>
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
    <div>
      <ExternalHero
        heading={"Our Services"}
        paragraph={
          "Discover how our digital services can help your buisness Shine online.Explore Our services."
        }
        image={HeroImage}
        altText={"Service Image"}
      />

      <section className="py-12 container pt-[25px] lgpt-[50px] my-[80px] w-11/12">
        <div className="text-center mb-8">
          <p className=" font-bold text-primary">GUARANTED SUCCESS</p>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold mt-[5px] mb-[10px]  text-primary">
            What We Offer
          </h2>

          <p className="text-neutral-grey-300">
            Unlocking potential with creative solutions
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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

      <div className="w-full bg-[#E8E9F1]">
        <div className="container  border-t w-11/12 border-[#F8F8F8] h-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-[109px] px-6 md:px-12 lg:px-auto py-4 lg:py-[50px] font-inter">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
            <div className="w-full max-h-[284px] max-w-[284px] lg:max-h-[628px] lg:max-w-[630px]">
              {/* <lazyLoader> */}
                <img src={myImage} alt="" loading="lazy"/>
              {/* </lazyLoader> */}
            </div>
          </div>
          <div className="about-content w-full lg:w-1/2 max-w-[497px] space-y-4 mt-8 lg:mt-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-primary">
              WHY CHOOSE US ?{" "}
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              Trusted Results{" "}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B] w-[100%] lg:w-[100%]">
              With years of proven experience, we deliver tailored digital
              solutions that align perfectly with your unique business needs.
              Our comprehensive services, from web design to SEO, are designed
              to drive measurable growth and elevate your online presence.
            </p>
            <Button className="px-8 sm:px-14 ">Know More</Button>
          </div>
        </div>{" "}
      </div>

      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Services;
