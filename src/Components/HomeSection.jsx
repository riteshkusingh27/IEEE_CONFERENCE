import React, { useEffect, useState } from 'react';
import Guests from './Guests';
import Countdown from './Countdown'
import EventCarousel from './EventCarousel';
import Footer from '../Components/Footer.jsx'
import News from './News.jsx';
import { NavLink, useNavigate} from 'react-router-dom'

const HomeSection = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const navigate = useNavigate();
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
    <div>
       <EventCarousel/>
         <section className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 py-10">
  
  {/* Content */}
  <div className="relative z-10 text-center mb-10">
    <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-4">
      Welcome to <span className="text-orange-500"> IEEE Centcon-2025</span>
    </h1>
    <p className="text-lg md:text-xl text-black mb-6">
      Join us at Dayananda Sagar University to explore cutting-edge innovations and research.
    </p>
    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all" onClick={() => navigate('/register')}>  {/*used navigate  */}
    Register Now
    </button>
  </div>

  {/* welcome note  */}
  <div className="relative z-10 grid grid-cols-3 gap-6 w-full mb-7">
    <div className="col-span-2 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Note</h2>
      <p className="text-gray-700 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reiciendis modi consequuntur earum provident, quasi veniam atque nihil ducimus? Laborum magnam sunt ducimus aspernatur, numquam officiis, vero cum nisi eum perferendis ipsa necessitatibus in itaque possimus doloribus eius aliquam nobis delectus corporis quod quos? Porro veritatis quas provident neque excepturi maxime nisi omnis esse est! Voluptatem necessitatibus qui, distinctio omnis vitae dolorum sequi, nihil incidunt natus a itaque eum deserunt beatae, cum quasi quis dolore rerum at voluptas consequuntur?
      </p>
    </div>
    <div className="col-span-1">
      <News />
    </div>
  </div>
    <h2 className="text-3xl font-bold text-gray-800 mb-4"> Speakers/Dignitary</h2>
  <Guests />   
  <Countdown timeLeft={timeLeft}  /> 

</section>
<Footer/>
    </div>
  );
};

export default HomeSection;
