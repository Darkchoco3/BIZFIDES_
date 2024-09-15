import React, {useState, useEffect} from 'react';
import Apex from '../assets/status-up.svg';
import Grow from '../assets/chart.svg'
import Flux from '../assets/lifebuoy.svg';
import Boost from '../assets/cardano-(ada).svg'
// React
import { motion } from "framer-motion"

// React Server Components

const spring = {
  type: "spring",
  mass: 1,
  stiffness: 100,
  damping: 15
};

const labelPositions = [
  { top: '50%', left: '5%' },  // Position for Apex 9
  { top: '18%', left: '50%' },  // Position for Grow 10x
  { top: '50%', left: '95%' },  // Position for Flux 9
  { top: '82%', left: '50%' },  // Position for Boost 360
];

const labels = [
  {text:'Apex 9', image: Apex},
  {text:'Grow 10x', image: Grow},
  {text:'Boost 360', image: Boost},
  {text:'Flux 9', image: Flux},
];
 
const CircularDiagram = () => {
  
  const [positions, setPositions] = useState(labelPositions);

  
    useEffect(() => {
      const interval = setInterval(() => {
        setPositions(prevPositions => {
          // Rotate positions anticlockwise
          return [
            prevPositions[1], // Grow 10x moves to Apex 9's position
            prevPositions[2], // Flux 9 moves to Grow 10x's position
            prevPositions[3], // Boost 360 moves to Flux 9's position
            prevPositions[0], // Apex 9 moves to Boost 360's position
          ];
        });
      }, 2000); // Adjust the interval time for speed of rotation
  
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="flex items-center justify-center ">
      <div className="relative lg:w-[28.5rem] lg:h-[22.625rem] xl:w-[29.875rem] xl:h-[25rem] rotate">
        {/* Central Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="lg:w-[6.563rem] lg:h-[6.563rem] xl:w-[8.313rem] xl:h-[8.313rem] bg-transparent rounded-full"></div>
        </div>

        {/* Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="lg:w-[24.125rem] lg:h-[23.25rem] xl:w-[25.875rem] xl:h-[25rem] border-[3px] border-secondary-light rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="lg:w-[15.75rem] lg:h-[15.75rem] xl:w-[17.5rem] xl:h-[17.5rem] border-[3px] border-secondary-light rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="lg:w-[9.688rem] lg:h-[9.688rem] xl:w-[11.4375rem] xl:h-[11.4375rem]  rounded-full border-[1.6rem] border-secondary-light"></div>
        </div>

        {/* Labels */}
        <div className="relative w-full h-full">
      {labels.map((label, index) => (
        <motion.div
          key={index}
          className="absolute bg-white text-black w-[6.5rem] h-[2.5625rem] rounded-[10px] flex justify-center items-center"
          animate={positions[index]}
          transition={{ ...spring, delay: index * 0.001 }} // 1ms delay for each
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <div className='flex font-inter items-center'><img src={label.image}/> <p className='text-sm font-semibold'>{label.text}</p></div>
        </motion.div>
      ))}
    </div>

      </div>
    </div>
  );
};

export default CircularDiagram;
