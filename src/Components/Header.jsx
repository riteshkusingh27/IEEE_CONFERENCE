import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import iee from '../Images/iee.png';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200  relative z-20 w-full ">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src={logo} className="h-16" alt="Logo" />
          <a href="https://www.ieee.org/" target="_blank"> 
            <img src={iee} className="h-14" alt="IEE Logo" />
          </a>
          <span className="text-xl font-bold  text-amber-700 ml-2">CENTCON 2025</span>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <NavLink to="/" className="text-indigo-700 hover:text-black  text-lg font-semibold">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-indigo-700 hover:text-black text-lg font-semibold">About</NavLink>
            </li>
             <li>
             <NavLink  className="text-indigo-700 hover:text-black text-lg font-semibold" to="/dsu"> 
                Speakers
             </NavLink>
             </li>
            <li>
              <NavLink to="/gallery" className="text-indigo-700 hover:text-black   text-lg font-semibold">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/events" className="text-indigo-700 hover:text-black   text-lg font-semibold">Events</NavLink>
            </li>
            <li>
              <NavLink to="/iee" className="text-indigo-700 hover:text-black text-lg font-semibold">Authors</NavLink>
            </li>
          </ul>
        </div>

        {/* Register Button */}
        <div className="flex items-center mt-4 md:mt-0">
          <button type="button" className="text-white text-sm bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold rounded-xl  px-7 py-2 mx-5 -shadow-lg transform transition-all duration-300 hover:scale-100">
            <a href="https://www.ieee.org/">JOIN IEEE</a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
