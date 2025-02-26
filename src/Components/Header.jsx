import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Images/organizermain.png";
import ieebangalore from "../Images/ieebangalore.png";


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 relative top-0 z-20 w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center align-middle space-x-2 mb-4 md:mb-0">
        <a href="https://www.dsu.edu.in/" className="dsu">  <img src={logo} className="h-16 object-contain" alt="Logo" /></a>
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
            <img src={ieebangalore} className="h-13 w-45 " alt="IEEE Logo" />
          </a>
          <span className="text-xl font-bold text-amber-700 ml-2">CENTCON2025</span>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 flex justify-center">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <li>
              <NavLink to="/" className="text-indigo-700 hover:text-black text-lg font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-indigo-700 hover:text-black text-lg font-semibold">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/speakers" className="text-indigo-700 hover:text-black text-lg font-semibold">
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink to="/committee" className="text-indigo-700 hover:text-black text-lg font-semibold">
               Committee
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="text-indigo-700 hover:text-black text-lg font-semibold">
                Register
              </NavLink>
            </li>

          
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-indigo-700 hover:text-black text-lg font-semibold flex items-center focus:outline-none"
              >
                Authors ▾
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0  w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-20 ">
                  <li>
                    <NavLink
                      to="/call-for-papers"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Call for Papers
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/author-guidelines"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Submission Guidelines
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dates"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Important Dates
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        {/* Register Button */}
        <div className="flex items-center mt-4 md:mt-0">
          <a href="https://www.ieee.org/">
            <button
              type="button"
              className="text-white text-sm bg-gradient-to-r  from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-bold rounded-xl px-7 py-2 mx-5 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              JOIN IEEE
            </button>
          </a>
        </div>
        <div className="submit flex text-center justify-center mt-4 md:mt-0">
    <a href="https://www.ieee.org/" className=' '>
           <button
             type="button"
             className="text-white text-sm bg-gradient-to-r from-orange-500 to-orange-600   focus:ring-indigo-300 font-bold rounded-xl px-7 py-2 mx-5shadow-lg transition-transform duration-300 hover:scale-105  "
           >
             SUBMIT
           </button> 
         </a>
    </div>
        
      </div>
    </nav>
  );
};

export default Header;
