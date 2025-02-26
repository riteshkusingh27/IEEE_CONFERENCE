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
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg">
       
We are thrilled to invite you to the IEEE Centcon-2025 Conference, hosted by Dayananda Sagar University. This premier event brings together researchers, educators, students, practitioners, technologists, and policymakers from around the globe. The conference serves as a dynamic platform for exchanging ideas, showcasing achievements, and promoting advances in electrical engineering, electronics, computer engineering, and information technology. <br />
<div className='m-2'>
  
</div>
Our program features keynote speeches and invited talks by distinguished speakers, offering insights into emerging trends and cutting-edge innovations. Attendees will have the opportunity to participate in technical sessions, panel discussions, and exhibits highlighting current research and applications.

Join us at IEEE Centcon-2025 at Dayananda Sagar University to be part of this vibrant community, where you can engage in meaningful discussions, network with industry leaders, and contribute to the future of technology.

We look forward to welcoming you to an inspiring and impactful conference experience!

Warm regards, The IEEE Centcon-2025 Organizing Committee
      </p>
    </div>
    <div className="col-span-1">
      <News />
    </div>
  </div>
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Chief Patreon</h2>
  <Guests />   
  <Countdown timeLeft={timeLeft}  /> 

</section>
<Footer/>
    </div>
  );
};

export default HomeSection;
