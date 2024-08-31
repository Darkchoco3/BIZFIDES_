import React, { useState, useEffect, useRef } from "react";
import ExternalHero from "./ExternalHero";
import heroImage from "../assets/PortfolioHeroImage.svg";
import servicesImage from '../assets/PortfolioLaptop.svg'
import styles from '../Styles/Portfolio.module.css';

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
          <div
            className="bg-primary rounded-2xl"
            ref={statsRef}
          >
            <div className="p-[2rem] flex flex-col md:flex-row text-center justify-between">
              <div className="text-white flex-1 xl:px-8">
                <p className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${animate.users ? styles.spin : ''}`}>
                  {stats.users}<span className="text-secondary">K+</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Monthly active users
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white grid gap-1 flex-1 xl:px-8 py-4 md:py-0">
                <p className={`text-white text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${animate.projects ? styles.spin : ''}`}>
                  {stats.projects}<span className="text-secondary">K+</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Successful Projects
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white flex-1 lg:px-[2rem]">
                <p className={`text-white text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${animate.satisfaction ? styles.spin : ''}`}>
                  {stats.satisfaction}<span className="text-secondary">%</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">
                  Customer satisfaction
                </p>
              </div>

              <div className="hidden lg:block w-px bg-white my-1"></div>

              <div className="text-white flex-1 pt-4 md:pt-0 px-8">
                <p className={`text-[1.5rem] xl:text-[2.5rem] font-roboto font-bold ${animate.revenue ? styles.spin : ''}`}>
                  {stats.revenue}<span className="text-secondary ">M</span>
                </p>
                <p className="text-sm xl:text-xl font-inter font-medium">Client revenue</p>
              </div>
            </div>
            
          </div>
        </section>

        <section className="bg-primary-light">
        <div className=" container w-11/12 flex flex-col md:flex-row gap-[11.375rem]">
        <img src={servicesImage} alt="Our services image" className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-2/4 flex-1" />
          <div className="flex-1 md:py-[5.813rem]">
            <h3 className="text-primary-dark font-roboto font-bold xl:text-[2.5rem] leading-none">
            Need the Right Expertise?
            </h3>
            <p className="text-[hsla(220, 39%, 25%, 1)] lg:text-base">Discover how our tailored solutions and services can address your unique business needs and help you achieve your goals.</p>
          </div>
        </div>
      </section>
      </div>

      
    </>
  );
};

export default Portfolio;
