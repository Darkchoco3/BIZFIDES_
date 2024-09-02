import React from 'react';

const CircularDiagram = () => {
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
        <div className="absolute top-2/4 left-4 transform -translate-y-1/2 fade-out">
    <div className="bg-white text-black px-2 py-1 rounded shadow-md">
      Apex 9
    </div>
  </div>
  <div className="absolute top-4 left-2/4 transform -translate-x-1/2">
    <div className="bg-white text-black px-2 py-1 rounded shadow-md">
      Grow 10x
    </div>
  </div>
  <div className="absolute bottom-4 left-2/4 transform -translate-x-1/2">
    <div className="bg-white text-black px-2 py-1 rounded shadow-md">
      Boost 360
    </div>
  </div>
  <div className="absolute top-2/4 right-4 transform -translate-y-1/2">
    <div className="bg-white text-black px-2 py-1 rounded shadow-md">
      Flux 9
    </div>
  </div>

      </div>
    </div>
  );
};

export default CircularDiagram;
