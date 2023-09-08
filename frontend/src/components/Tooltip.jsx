import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="hidden group-hover:block absolute z-10 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-xl shadow-xl">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;

// absolute z-10 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800 text-white rounded-md shadow-lg