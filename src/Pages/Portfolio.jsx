import React, { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom'
import ExternalHero from "../Components/ExternalHero.jsx";
import heroImage from "../assets/PortfolioHeroImage.svg";
import servicesImage from "../assets/PortfolioLaptop.svg";
import styles from "../Styles/Portfolio.module.css";
import Testimonials from "../Components/Testimonial";
import Subscribe from "../Components/Subscribe.jsx";
import RecentsCard from "../Components/Cards/RecentsCard.jsx";
import { ourWorks } from "../DB/data.js";
import Pagination from "../Components/Pagination.jsx"; 
import LoadingButtonText from "../Components/utils/Loading.jsx";

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

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const smallScreen = window.matchMedia("(max-width: 767px)");
    const mediumScreen = window.matchMedia(
      "(min-width: 768px) and (max-width: 1199px)"
    );
    const largeScreen = window.matchMedia("(min-width: 1200px)");

    const updateItemsPerPage = () => {
      if (smallScreen.matches) {
        setItemsPerPage(3);
      } else if (mediumScreen.matches) {
        setItemsPerPage(4);
      } else if (largeScreen.matches) {
        setItemsPerPage(6);
      }
    };

    // Initial check
    updateItemsPerPage();

    // Listen to screen size changes
    smallScreen.addListener(updateItemsPerPage);
    mediumScreen.addListener(updateItemsPerPage);
    largeScreen.addListener(updateItemsPerPage);

    // Cleanup listeners on unmount
    return () => {
      smallScreen.removeListener(updateItemsPerPage);
      mediumScreen.removeListener(updateItemsPerPage);
      largeScreen.removeListener(updateItemsPerPage);
    };
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ourWorks.slice(indexOfFirstItem, indexOfLastItem);
  const [loading, setLoading] = useState(false);

  const handlePageChange = (pageNumber) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    }, 1000);
  };
  // Portfolio Page rendering
  return (
    <>
      <div className="grid gap-10 lg:gap-20">
        {/* Hero Section */}
        <ExternalHero
          heading={"Portfolio"}
          paragraph={
            "Discover how we’ve helped small businesses like yours grow from concept to reality"
          }
          image={heroImage}
          altText={"Portfolio Image"}
        />

        {/* Our Statistics section */}
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
                <p className="text-sm xl:text-xl 2xl:text-2xl font-inter font-medium">
                  Monthly active users
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white grid gap-1 md:gap-0 flex-1 xl:px-8 py-4 md:py-0">
                <p
                  className={`text-white text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.projects ? styles.spin : ""
                  }`}
                >
                  {stats.projects}
                  <span className="text-secondary">K+</span>
                </p>
                <p className="text-sm xl:text-xl 2xl:text-2xl font-inter font-medium">
                  Successful Projects
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white flex-1 xl:px-[2rem]">
                <p
                  className={`text-white text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.satisfaction ? styles.spin : ""
                  }`}
                >
                  {stats.satisfaction}
                  <span className="text-secondary">%</span>
                </p>
                <p className="text-sm xl:text-xl 2xl:text-2xl font-inter font-medium">
                  Customer satisfaction
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white flex-1 pt-4 md:pt-0 xl:px-8">
                <p
                  className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${
                    animate.revenue ? styles.spin : ""
                  }`}
                >
                  {stats.revenue}
                  <span className="text-secondary ">M</span>
                </p>
                <p className="text-sm xl:text-xl 2xl:text-2xl font-inter font-medium">
                  Client revenue
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Recent Works section*/}
        <section className="container w-11/12">
          <div className="grid gap-[1rem] lg:gap-[2rem] ">
            <h3 className="text-center text-primary-dark font-roboto md:text-3xl lg:text-[2.5rem] 2xl:text-[3.5rem] font-bold">
              Our Recent Works
            </h3>
            <p className="text-center text-neutral-grey-300 font-inter text-xs md:text-xl lg:text-2xl 2xl:text-4xl 2xl:leading-[1.4] max-w-[80ch] md:pb-[4.063rem]">
              Welcome to Bizfides, where innovation and customer satisfaction
              drive our success, serving thousands of customers worldwide with
              impressive results.
            </p>
          </div>

          {loading ? (
            <LoadingButtonText />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] lg:gap-[5rem]">
              {currentItems.map((work, index) => (
                <RecentsCard
                  key={work?.id}
                  image={work?.image}
                  altText={work?.altText}
                  title={work?.title}
                  type={work?.type}
                  name={work?.name}
                  features={work?.features}
                  outcome={work?.outcome}
                />
              ))}
            </div>
          )}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={ourWorks.length}
            paginate={(pageNumber) => setCurrentPage(pageNumber)}
            currentPage={currentPage}
          />
        </section>

        <section>
          {/* Our Services section*/}
          <section className="bg-primary-light">
            <div className=" container w-11/12 flex flex-col items-center md:flex-row md:gap-[3rem] lg:gap-[7rem] xl:gap-[7.094rem]">
              <img
                src={servicesImage}
                alt="Our services image"
                className="md:w-1/2 lg:w-1/3 flex-1 h-auto hidden md:block py-8"
              />
              <div className="flex-1 py-[5rem] md:py-[5.813rem] flex flex-col gap-[2rem] text-center md:text-start">
                <h3 className="text-primary-dark font-roboto font-bold text-[1.4rem] md:text-2xl lg:text-3xl xl:text-[2.5rem] 2xl:text-[3rem] leading-none">
                  Need the Right Expertise?
                </h3>
                <p className="text-primary-medium text-sm lg:text-base xl:text-xl 2xl:text-2xl font-inter lg:max-w-[40ch]">
                  Discover how our tailored solutions and services can address
                  your unique business needs and help you achieve your goals.
                </p>

                <Link
                  to="./services"
                  className="grid place-items-center md:place-content-start"
                >
                  <div className="w-full lg:w-auto grid place-items-center group text-white border bg-primary rounded-xl hover:bg-secondary hover:text-white focus:ring transition ease-in-out duration-150 py-[.844rem] px-[.625rem] pl-4 min-w-36">
                    <span className="font-inter text-sm lg:text-base xl:text-lg 2xl:text-2xl text-center flex items-center gap-[.688rem] group-hover:text-white">
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
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials section */}
          <section>
            <Testimonials />
          </section>
        </section>

        {/* Subscribe to our Newsletter section*/}
        <section>
          <Subscribe />
        </section>
      </div>
    </>
  );
};

export default Portfolio;
