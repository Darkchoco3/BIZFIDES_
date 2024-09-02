import React from "react";
import TeamsCard from "./Cards/TeamCard";
import teammemberOne from "../assets/Team 1.svg";
import teammemberTwo from "../assets/Team 2.svg";
import teammemberThree from "../assets/Team 3.svg";
import teammemberFour from "../assets/Team 4.svg";

const OurTeam = () => {
  // Array of Team members
  const teamMembers = [
    {
      id: 1,
      name: "Bolaji Victor.O",
      role: "Digital Marketer",
      image: teammemberOne,
      number: "01",
    },
    {
      id: 2,
      name: "Okeke Chioma",
      role: "Product Designer",
      image: teammemberTwo,
      number: "02",
    },
    {
      id: 3,
      name: "Ozagae. A",
      role: "Software Engineer",
      image: teammemberThree,
      number: "03",
    },
    {
      id: 4,
      name: "Stephanie",
      role: "Project Manager",
      image: teammemberFour,
      number: "04",
    },
  ];

  return (
    <>
      <section className="container w-11/12 py-[3.125rem]">
        <div className="pb-[4.875rem] ">
          <div className="grid gap-1 md:gap-3 lg:gap-4 place-content-center">
            <h5 className="text-xl font-inter text-primary font-semibold text-center">
              OUR TEAM
            </h5>
            <h3 className="text-2xl md:text-[2.5rem] font-roboto text-primary-dark font-bold text-center">
              Meet Our Professional Team
            </h3>
            {/* <p className="text-base font-inter text-neutral-grey-300 text-center leading-snug md:text-xl lg:text-base lg:max-w-[45ch]">
              Empowering businesses with innovative solutions, our recent works
              include
            </p> */}
          </div>

          {/* <div className="hidden lg:flex gap-8"> */}

            {/* Anchor tags will be changed to react-router-dom Link when we set up App.jsx */}
            {/* <a
              href="/signup"
              className="font-inter bg-primary text-white text-center text-xl lg:text-base hover:bg-secondary focus:ring transition ease-in-out rounded-[.625rem] py-[.813rem] px-[2.188rem]"
            >
              Start With Us
            </a>
            <a
              href="/about-us"
              className="font-inter border border-primary outline-primary text-primary text-xl lg:text-base font-medium hover:border-secondary hover:text-secondary focus:ring transition ease-in-out rounded-[.625rem] py-[.813rem] px-[2.188rem]"
            >
              View All Team
            </a>
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-14 lg:gap-16 md:w-11/12 lg:w-full xl:w-full">

          {/* Mapping through the array */}
          {teamMembers.map((member) => (
            <TeamsCard
            key={member.id}
            image={member.image}
            name={member.name}
            number={member.number}
            role={member.role}
            />
          ))}
        </div>

        {/* <div className="grid md:flex md:items-center md:justify-center lg:hidden pt-8 md:pt-10">

          Anchor tags will be changed to react-router-dom Link when we set up App.jsx
          <a
            href="/signup"
            className="font-inter bg-primary text-white text-center text-sm md:text-xl hover:bg-secondary focus:ring transition ease-in-out rounded-[.625rem] py-[0.813rem] px-[2.188rem] md:px-24"
          >
            Start With Us
          </a>
        </div> */}
      </section>
    </>
  );
};

export default OurTeam;