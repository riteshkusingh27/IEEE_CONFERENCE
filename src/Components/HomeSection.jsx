import React, { useEffect, useState } from 'react';


const HomeSection = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2025-03-01T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft('Conference has started!');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 py-10">
         {/* background image  */}
      

      {/* Content */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to IEEE Conference 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Join us at Dayananda Sagar University to explore cutting-edge innovations and research.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
          Register Now
        </button>
      </div>

      {/* welcome note */}
      <div className="relative z-10 max-w-2xl text-center my-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome </h2>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia vero distinctio harum quis sit eius, ab, possimus reprehenderit reiciendis et natus pariatur, sunt assumenda blanditiis quos non accusantium porro.
        </p>
      </div>

      {/* Speakers and Guests Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { name: 'A', desc: 'Des 1', img: 'https://via.placeholder.com/150' },
          { name: 'B', desc: 'Des 2', img: 'https://via.placeholder.com/150' },
          { name: 'C', desc: 'Des 3', img: 'https://via.placeholder.com/150' },
          { name: 'D', desc: 'Des 4', img: 'https://via.placeholder.com/150' },
        ].map((person, index) => (
          <div key={index} className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
            <img src={person.img} alt={person.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.desc}</p>
          </div>
        ))}
      </div>

      {/* Countdown Timer */}
      <div className="relative z-10 text-center mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Conference Starts In:</h2>
        <p className="text-3xl  text-orange-700 mt-2">{timeLeft}</p>
      </div>
    </section>
  );
};

export default HomeSection;
