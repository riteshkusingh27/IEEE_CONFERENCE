import React, { useEffect, useState } from "react";
import Guests from "./Guests"; // updated to chief Patron
import Patron from "./Patron";
import Countdown from "./Countdown";
import GeneralChair from "./GeneralChair";
import ConfChair from "./ConfChair";
import map from "/images/map.png";
import EventCarousel from "./EventCarousel";
import Footer from "../Components/Footer.jsx";
import News from "./News.jsx";
import { NavLink, useNavigate } from "react-router-dom";

const HomeSection = () => {
  const [timeLeft, setTimeLeft] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const targetDate = new Date("2026-01-23").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("Conference has started!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="fixed bottom-34 right-3 z-50">
        <NavLink to="https://maps.app.goo.gl/n1AvmHUBrhZgc1Lx5" target="_blank">
          <img
            src={map}
            alt="Map Icon"
            className="h-10 w-12 md:h-13 md:w-15 object-contain"
          />
        </NavLink>
      </div>

      <EventCarousel />
      <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-5">
        {/* Content */}
        <div className="text-center mb-10 px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            <span className="text-orange-600  bg-clip-text md:text-4xl md:mb-3">
              International Conference on Disruptive Technologies for <br />{" "}
              Multi-Disciplinary Research and Applications
            </span>
          </h1>
          <p className="text-sm md:text-xl text-black px-2  md:mt-2 md:px-0">
            Bridging AI, Sensing, and Embedded Intelligence for a Smarter,
            Safer, and Sustainable World.
          </p>
          <p className="text-md md:text-lg bold font-bold md:mb-3 ">
            23rd & 24th January 2026
          </p>

          <button
            className="bg-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
            onClick={() => navigate("/call-for-papers")}
          >
            Call For Papers
          </button>
        </div>

        {/* About Us Section */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-7 px-4 md:px-0">
  <div className="md:col-span-2 p-4 md:p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
    <p className="text-black text-sm md:text-lg text-justify">
      Dayananda Sagar University (DSU), established in 2014, is a premier private university located in Bengaluru, Karnataka, India.
      As a proud member of the Dayananda Sagar Institutions (DSI) family, which was founded in the early 1960s by Late Sri Dayananda Sagar,
      DSU has rapidly evolved into a global educational powerhouse. The university offers a diverse range of undergraduate, postgraduate,
      and doctoral programs across various disciplines, including engineering, management, health sciences, and arts. With state-of-the-art
      campuses and a strong emphasis on research and innovation, DSU fosters an environment that encourages creativity, critical thinking,
      and entrepreneurial spirit.
      <br />
      <div className="m-2"></div>
      The Department of Electronics & Communication Engineering (ECE) at DSU is dedicated to providing high-quality technical education
      and fostering innovation in the fields of electronics and communication. The department offers undergraduate (B.Tech) and postgraduate
      (M.Tech in Embedded Systems) programs designed to equip students with the necessary skills to excel in the industry. In line with our
      commitment to advancing knowledge and fostering innovation, DSU and the Department of ECE are proud to organize{" "}
      <span className="font-bold">
        International Conference on Disruptive Technologies for Multi-Disciplinary Research and Applications
      </span>
      . This conference aims to serve as a global platform for researchers, industry experts, and academicians to exchange ideas and explore
      breakthroughs in AI, nanotechnology, embedded intelligence, and autonomous systems.
    </p>

    {/* 🔽 Key Highlights Section */}
   
  </div>

  <div className="col-span-1">
    <News />
  </div>
</div>
        <div className="flex justify-center mb-7 ">
           <div className="mt-5  rounded-lg bg-white py-7 px-4  shadow md:shadow-xl">
      <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 pl-3 pb-2">Key Highlights</h3>
      <ul className="list-disc pl-5 space-y-3 text-md md:text-lg text-justify text-black font-medium px-6">
        <li>
          <span className="font-bold text-black">Global Expertise:</span> Esteemed international speakers will deliver keynote addresses and technical sessions.
        </li>
        <li>
          <span className="font-bold text-black">Publication Opportunities:</span> All peer-reviewed, selected, and presented papers will be submitted for potential inclusion in reputed Scopus-indexed journals, ensuring global visibility for the research.
        </li>
        <li>
          <span className="font-bold text-black">Collaborative Engagement:</span> The conference provides a unique opportunity for participants to network with global experts, industry leaders, and fellow researchers, fostering collaborations that extend beyond the event.
        </li>
        <li>
          <span className="font-bold text-black">Knowledge Exchange:</span> Attendees will gain exposure to the latest advancements and trends, inspiring innovative solutions to real-world challenges.
        </li>
      </ul>
    </div>
        </div>
        {/* Chief Patron & Patron Sections */}
        <div className="patronsection">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
            Chief Patrons
          </h2>
          <div className="chiefpatron flex justify-center">
            <Guests />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center ">
            Patrons
          </h2>
          <Patron />

          <div className="gc flexgap-12 justify-center">
            <div>
             
              <GeneralChair />
            </div>

            {/* <div className="cfch">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 text-center ">
                Conference Chair
              </h2>
              <ConfChair />
            </div> */}
          </div>
        </div>

        <Countdown timeLeft={timeLeft} />
      </section>
      <Footer />
    </div>
  );
};

export default HomeSection;
