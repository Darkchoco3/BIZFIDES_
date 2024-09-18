import { IoIosArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: {
    opacity: 0,
    x: -100, // Start 100px off-screen to the left
  },
  visible: {
    opacity: 1,
    x: 0, // End at its original position
    transition: {
      duration: 1.5,
      ease: "easeIn",
    },
  },
};

const ServiceCard = ({ service, i }) => {
  return (
    <motion.div
      className="font-inter w-full sm:max-w-[277px] min-h-[480px] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.03)] rounded-full py-6 px-3 flex flex-col justify-center items-center border border-neutral-grey-100 "
      key={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={slideInVariants}
    >
      <div className="min-h-[150px] min-w-[150px] sm:min-h-[200px] sm:min-w-[200px] rounded-full">
        <img
          src={service.Image}
          alt="services"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg md:text-xl 2xl:text-2xl font-semibold font-inter">
          {service.title}
        </h3>
        <p className="text-sm md:text-base 2xl:text-xl text-neutral-grey-300 mt-2 text-pretty">
          {service.content}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
