import React, { useEffect, useState } from 'react';
import Guests from './Guests';  // updated to chief Patron
import Patron from './Patron';
import Countdown from './Countdown'
import map from '/images/map.png'
import EventCarousel from './EventCarousel';
import Footer from '../Components/Footer.jsx'
import News from './News.jsx';
import { NavLink, useNavigate} from 'react-router-dom'

const HomeSection = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const targetDate = new Date('2025-12-4').getTime();

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
     <div className="fixed bottom-31 right-3 z-50">
        <NavLink to='https://maps.app.goo.gl/n1AvmHUBrhZgc1Lx5' target='_blank'>   <img src={map} alt="Map Icon" className="h-13 w-15 object-contain" /></NavLink>
</div>

       <EventCarousel/>
         <section className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 py-10">
  
  {/* Content */}
  <div className="relative z-10 text-center mb-10">
    <h1 className="text-3xl md:text-6xl font-bold text-gray-800 ">
      Welcome to <span className="text-orange-500"> IEEE CENTCON-2025</span>
    </h1>
    <p className="text-lg text-grey-600 mt-2 italic font-bold">December 04-05, 2025</p>
    <p className="text-md md:text-xl text-black mb-6">
    Bridging AI, Sensing, and Embedded Intelligence for a Smarter, Safer, and Sustainable World.
    </p>
    <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all" onClick={() => navigate('/call-for-papers')}>  {/*used navigate  */}
    Call For Papers
    </button>
  </div>

  {/* welcome note  */}
  <div className="relative z-10 grid grid-cols-3 gap-6  mb-7">
    <div className="col-span-2 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
      <p className="text-gray-700 text-lg">
       
      Dayananda Sagar University (DSU), established in 2014, is a premier private university located in Bengaluru, Karnataka, India. As a proud member of the Dayananda Sagar Institutions (DSI) family, which was founded in the early 1960s by Late Sri Dayananda Sagar, DSU has rapidly evolved into a global educational powerhouse. The university offers a diverse range of undergraduate, postgraduate, and doctoral programs across various disciplines, including engineering, management, health sciences, and arts. With state-of-the-art campuses and a strong emphasis on research and innovation, DSU fosters an environment that encourages creativity, critical thinking, and entrepreneurial spirit. ​
      <br />
<div className='m-2'>
  
</div>
The Department of Electronics & Communication Engineering (ECE) at DSU is dedicated to providing high-quality technical education and fostering innovation in the fields of electronics and communication. The department offers undergraduate (B.Tech) and postgraduate (M.Tech in Embedded Systems) programs designed to equip students with the necessary skills to excel in the industry.​ In line with our commitment to advancing knowledge and fostering innovation, DSU and the Department of ECE are proud to organize CENTCON 2025 – International Conference on Bridging AI, Sensing, and Embedded Intelligence for a Smarter, Safer, and Sustainable World. This conference aims to serve as a global platform for researchers, industry experts, and academicians to exchange ideas and explore breakthroughs in AI, nanotechnology, embedded intelligence, and autonomous systems.

      </p>
    </div>
    <div className="col-span-1">
      <News />
    </div>
  </div>
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Chief Patron</h2>
  <Guests /> 
  <h2 className="text-4xl font-bold text-gray-800 mb-6"> Patron</h2>
  <Patron/> 


  <Countdown timeLeft={timeLeft}  /> 

</section>
<Footer/>


    </div>
  );
};

export default HomeSection;
