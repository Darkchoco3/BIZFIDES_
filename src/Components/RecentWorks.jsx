import React from "react";
import { Link } from "react-router-dom";
import RecentsCard from "./RecentsCard";
import Button from "../Components/Button";
import toystoreimage from "../assets/toy store.svg";
import webstoreimage from "../assets/fashion store.svg";
import gadgetstoreimage from "../assets/gadget store.svg";
import foodstoreimage from "../assets/food delivery.svg";

const RecentWorks = () => {
  // Array of our works
  const ourWorks = [
    {
      id: 1,
      image: toystoreimage,
      altText: "FitZone Mobile App",
      title: "Mobile App",
      type: "Toy Store",
      name: "FitZOne",
      features: "Product Catalog, Interactive features for kids",
      outcome:
        " 4.5-star rating on the app store, 50,000 downloads in the first month",
    },
    {
      id: 2,
      image: webstoreimage,
      altText: "StyleHub Web store",
      title: "Web Store",
      type: "Fashion Store",
      name: "StyleHub",
      features: "User accounts, product reviews, promo codes",
      outcome: "30% increase in online sales, 25% growth in customer base",
    },
    {
      id: 3,
      image: gadgetstoreimage,
      altText: "TechTove web store",
      title: "Web Design",
      type: "Gadget Store",
      name: "TechTrove",
      features: "Product Comparison tool, trade in Program",
      outcome: "40% increase in website traffic, 25% rise in Sales of Gadgets",
    },
    {
      id: 4,
      image: foodstoreimage,
      altText: "Food delivery Mobile App",
      title: "Mobile App",
      type: "Food Store",
      name: "Fortune Food",
      features: "Restaurant listings, menu ordering, real-time tracking",
      outcome:
        "4.5-star rating on the app store,20,000 downloads in the first month",
    },
  ];

  return (
    <>
      <div className="container py-8 grid gap-8 lg:gap-12 w-[92%]">
        <div className="text-center">
          <h5 className="text-xl md:text-xl text-primary font-inter font-semibold">
            OUR WORK
          </h5>
          <h3 className="text-[1.8rem] md:text-[2.5rem] text-primary-dark font-roboto font-bold">
            Our Recent Works
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mapping through the array */}
          {ourWorks.map((work) => (
            <RecentsCard
              key={work.id}
              image={work.image}
              altText={work.altText}
              title={work.title}
              type={work.type}
              name={work.name}
              features={work.features}
              outcome={work.outcome}
            />
          ))}
        </div>

        <div className="grid lg:flex place-content-center justify-center items-center">

          {/* Anchor tags will be changed to react-router dom Link tags when we set up App.jsx */}
          <a
            href="./portfolio"
            className="bg-primary font-inter hover:bg-primary-dark focus:ring transition ease-in-out duration-150 text-white py-[.813rem] px-[4.063rem] text-center rounded-[.625rem]"
          >
            View More Works
          </a>
        </div>
      </div>
    </>
  );
};

export default RecentWorks;
