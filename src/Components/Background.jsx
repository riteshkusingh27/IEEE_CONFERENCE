import React from 'react';
import background from '../Images/background.jpg';

const Background = ({ children }) => {
  return (
    <div className="fixed inset-0 min-h-screen bg-cover bg-center bg-fixed z-0  "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
