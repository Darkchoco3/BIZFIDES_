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
      duration: 1.2,
      ease: "easeIn",
    },
  },
};
const WhatWedoCard = ({what, i}) => {
  return (
    <motion.div className='min-h-[474px] rounded-[55px] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.03)] p-4 font-inter flex flex-col gap-[24px] border border-neutral-grey-100' key={i}
    initial="hidden"
    whileInView="visible"
        viewport={{ once: true }}
    variants={slideInVariants}>
      <img src={what.img} alt={what.title} className='rounded-[35px]'/>
      <div className="flex flex-col gap-[7px]">
      <h3 className='text-secondary text-center text-xl font-semibold'>{what.title}</h3>
      <p className='text-sm text-neutral-grey-300 text-center'>{what.desc}</p>
      </div>
    </motion.div>
  )
}

export default WhatWedoCard
