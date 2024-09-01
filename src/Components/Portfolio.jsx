import React, { useState, useEffect, useRef } from "react";
import ExternalHero from "./ExternalHero";
import heroImage from "../assets/PortfolioHeroImage.svg";
import servicesImage from "../assets/PortfolioLaptop.svg";
import styles from "../Styles/Portfolio.module.css";
import Testimonials from "./Testimonial";
import Subscribe from "../Components/Subscribe.jsx";
import Footer from "../Layouts/Footer.jsx";
import RecentsCard from "./Cards/RecentsCard";
import { ourWorks } from "../DB/Recentworks.jsx";
import Pagination from "./Pagination.jsx";

const Portfolio = () => {
  const [stats, setStats] = useState({
    users: 0,
    projects: 0,
    satisfaction: 0,
    revenue: 0,
  });

  const [animate, setAnimate] = useState({
    users: false,
    projects: false,
    satisfaction: false,
    revenue: false,
  });

  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const targets = {
      users: 15,
      projects: 20,
      satisfaction: 99,
      revenue: 20,
    };

    const durations = {
      users: 1500,
      projects: 1500,
      satisfaction: 1500,
      revenue: 1500,
    };

    Object.keys(targets).forEach((key) => {
      let startValue = 0;
      const increment = targets[key] / (durations[key] / 150);

      const interval = setInterval(() => {
        startValue += Math.floor(Math.random() * (increment * 2));
        if (startValue >= targets[key]) {
          setStats((prevStats) => ({ ...prevStats, [key]: targets[key] }));
          clearInterval(interval);
        } else {
          setStats((prevStats) => ({
            ...prevStats,
            [key]: Math.min(startValue, targets[key]),
          }));
          setAnimate((prevAnimate) => ({
            ...prevAnimate,
            [key]: true,
          }));
        }
      }, 100);
    });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ourWorks.slice(indexOfFirstItem, indexOfLastItem);;
  
  return (
    <>
      <div className="grid gap-10 lg:gap-20">
        <ExternalHero
          heading={"Portfolio"}
          paragraph={
            "Discover how we’ve helped small businesses like yours grow from concept to reality"
          }
          image={heroImage}
          altText={"Portfolio Image"}
        />

        <section className="container w-11/12">
          <div className="bg-primary rounded-2xl" ref={statsRef}>
            <div className="p-[2rem] flex flex-col md:flex-row text-center justify-between">
              <div className="text-white flex-1 xl:px-8">
                <p
                  className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.users ? styles.spin : ""
                  }`}
                >
                  {stats.users}
                  <span className="text-secondary">K+</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Monthly active users
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white grid gap-1 flex-1 xl:px-8 py-4 md:py-0">
                <p
                  className={`text-white text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.projects ? styles.spin : ""
                  }`}
                >
                  {stats.projects}
                  <span className="text-secondary">K+</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Successful Projects
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white flex-1 lg:px-[2rem]">
                <p
                  className={`text-white text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.satisfaction ? styles.spin : ""
                  }`}
                >
                  {stats.satisfaction}
                  <span className="text-secondary">%</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Customer satisfaction
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white flex-1 pt-4 md:pt-0 px-8">
                <p
                  className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.revenue ? styles.spin : ""
                  }`}
                >
                  {stats.revenue}
                  <span className="text-secondary ">M</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Client revenue
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container w-11/12">
          <div className="">
            <h3 className="text-center">Our Recent Works</h3>
            <p className="text-center">
              Welcome to Bizfides, where we take pride in our impressive
              performance metrics. With a relentless commitment to innovation
              and customer satisfaction, our user base has grown exponentially,
              reaching thousands of satisfied customers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[5rem]">
          {currentItems.map((work, index) => (
              <RecentsCard  key={work.id}
              image={work.image}
              altText={work.altText}
              title={work.title}
              type={work.type}
              name={work.name}
              features={work.features}
              outcome={work.outcome} />
            
          ))}
          </div>
          <Pagination
          itemsPerPage={itemsPerPage} 
          totalItems={ourWorks.length} 
          paginate={(pageNumber) => setCurrentPage(pageNumber)} 
          currentPage={currentPage}
          />
        </section>

        <section className="bg-primary-light">
          <div className=" container w-11/12 flex flex-col md:flex-row gap-[11.375rem]">
            <img
              src={servicesImage}
              alt="Our services image"
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4 flex-1 h-auto"
            />
            <div className="flex-1 md:py-[5.813rem] flex flex-col gap-[2rem]">
              <h3 className="text-primary-dark font-roboto font-bold lg:text-3xl xl:text-[2rem] 2xl:text-[3rem] leading-none">
                Need the Right Expertise?
              </h3>
              <p className="text-primary-medium lg:text-base 2xl:text-2xl font-inter lg:max-w-[40ch]">
                Discover how our tailored solutions and services can address
                your unique business needs and help you achieve your goals.
              </p>

              <a
                href="./services"
                className="grid place-items-center lg:place-content-start"
              >
                <div className="group text-white border bg-primary rounded-xl hover:bg-secondary hover:text-white focus:ring transition ease-in-out duration-150 py-[.844rem] px-[.625rem] min-w-36">
                  <span className="font-inter text-sm lg:text-base 2xl:text-2xl text-center flex items-center gap-[.688rem] group-hover:text-white">
                    Our Services
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
              </a>
            </div>
          </div>
        </section>

        <section>
          <Testimonials />
        </section>

        <section>
          <Subscribe />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
