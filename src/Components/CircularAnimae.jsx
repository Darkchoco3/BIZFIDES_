import React from 'react';

const CircularAnimae = () => {
  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Main Circle */}
      <div className="absolute w-16 h-16 bg-teal-400 rounded-full"></div>

      {/* Rotating Circles */}
      <div className="absolute w-full h-full animate-spin-slow">
        {/* Circle 1 */}
        <div className="bg-secondary absolute inset-0 flex justify-center items-start">
          <div className="bg-white p-2 rounded-md shadow-md animate-slide-left">
            Apex 9
          </div>
        </div>
        {/* Circle 2 */}
        <div className="bg-primary absolute inset-0 flex justify-end items-center">
          <div className="bg-white p-2 rounded-md shadow-md animate-slide-right">
            Grow 10x
          </div>
        </div>
        {/* Circle 3 */}
        <div className="absolute inset-0 flex justify-center items-end">
          <div className="bg-white p-2 rounded-md shadow-md animate-slide-left">
            Flux 9
          </div>
        </div>
        {/* Circle 4 */}
        <div className="absolute inset-0 flex justify-start items-center">
          <div className="bg-white p-2 rounded-md shadow-md animate-slide-right">
            Boost 360
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularAnimae;
