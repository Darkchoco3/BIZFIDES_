import React, { useEffect, useState } from 'react';

const Label = ({ text, angle, radius }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    setStyle({
      transform: `translate(${x}px, ${y}px)`,
      transformOrigin: 'center center'
    });
  }, [angle, radius]);

  return (
    <div className="absolute" style={style}>
      <div className="bg-white text-black px-2 py-1 rounded shadow-md">
        {text}
      </div>
    </div>
  );
};

const RotatingLabels = () => {
  const [angle, setAngle] = useState(0);
  const radius = 100; // Radius of the circle

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + 0.01); // Slowed down speed
    }, 16); // About 60 frames per second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 ">
      <div className="absolute inset-2 flex items-center justify-center">
        <div className="relative w-full h-full rotate">
          <Label text="Apex 9" angle={angle} radius={radius} className='top-0 left-1/2'/>
          <Label text="Grow 10x" angle={angle + Math.PI / 2} radius={radius} />
          <Label text="Boost 360" angle={angle + Math.PI} radius={radius} />
          <Label text="Flux 9" angle={angle + (3 * Math.PI) / 2} radius={radius} />
        </div>
      </div>
    </div>
  );
};

export default RotatingLabels;
