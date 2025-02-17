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
      <section className="container w-11/12 py-0 xl:pt-[3.125rem]">
        <div className="pb-[2.5rem] lg:pb-[4.875rem] ">
          <div className="grid gap-1 md:gap-3 lg:gap-4 place-content-center">
            <h5 className="text-xl 2xl:text-3xl font-inter text-primary font-semibold text-center">
              OUR TEAM
            </h5>
            <h3 className="text-[1.6rem] md:text-[2rem] xl:text-[2.5rem] 2xl:text-[3rem] font-roboto text-primary-dark font-bold text-center">
              Meet Our Professional Team
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14 lg:gap-16">

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
      </section>
    </>
  );
};

export default OurTeam;