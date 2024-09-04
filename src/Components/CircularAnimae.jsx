import React, {useState, useEffect} from 'react';
import styles from '../Styles/CircularAnimae.module.css'
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
  { top: '50%', left: '-5%' },  // Position for Apex 9
  { top: '10%', left: '50%' },  // Position for Grow 10x
  { top: '50%', left: '100%' },  // Position for Flux 9
  { top: '90%', left: '50%' },  // Position for Boost 360
];

const labels = ['Apex 9', 'Grow 10x', 'Boost 360', 'Flux 9'];

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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-[350px] h-[350px] rotate">
        {/* Central Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-secondary rounded-full"></div>
        </div>

        {/* Concentric Circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[350px] border-2 border-secondary rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[280px] h-[280px] border-2 border-secondary rounded-full"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[200px] h-[200px] border-8 border-secondary rounded-full"></div>
        </div>

        {/* Labels */}
        <div className="relative w-full h-full">
      {labels.map((label, index) => (
        <motion.div
          key={index}
          className="absolute bg-white text-black px-2 py-1 rounded shadow-md"
          animate={positions[index]}
          transition={{ ...spring, delay: index * 0.001 }} // 1ms delay for each
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {label}
        </motion.div>
      ))}
    </div>

      </div>
    </div>
  );
};

export default CircularDiagram;
