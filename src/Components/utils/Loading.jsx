import React from 'react';

const LoadingButtonText = ({ color = 'text-white', text = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`inline-block h-4 w-4 animate-spin rounded-full border-t-2 border-b-2 ${color}`}
        role="status"
      >
        <span className="sr-only">{text}</span>
      </div>
      <span className={`ml-2 ${color}`}>{text}</span>
    </div>
  );
};

export default LoadingButtonText;