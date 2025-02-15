import React from 'react';

const Countdown = ({ timeLeft }) => {
  return (
    <div className="counter bg-gradient-to-r from-blue-500 to-cyan-400 shadow-lg rounded-2xl h-[108px] w-[320px] flex items-center justify-center p-4"> 
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white drop-shadow-md">Conference Starts In:</h2>
        <p className="text-3xl text-yellow-300 font-semibold mt-2 drop-shadow-lg">{timeLeft}</p>
      </div>
    </div>
  );
};

export default Countdown;
