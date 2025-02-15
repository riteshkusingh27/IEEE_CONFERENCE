import React from 'react'

const Countdown = ({timeLeft}) => {
  return (
    <div className="counter bg-cyan-200  rounded-2xl h-[108px] w-[300px] justify-center"> 
      <div className="relative z-10 text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Conference Starts In:</h2>
        <p className="text-3xl  text-orange-700 mt-2">{timeLeft}</p>
      </div>
    </div>
  )
}

export default Countdown