import React from 'react';
import linkdein from '../Images/icons/linkdein.svg' 
import instagram from '../Images/icons/instagram.svg' 
import fb from '../Images/icons/fb.svg' 
import xcom from '../Images/icons/xcom.svg' 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r h-100px from-blue-900 to-blue-600 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">IEEE Conference 2025</h3>
          <p className="text-sm">Organized by Dayananda Sagar University</p>
        <a href="https://www.dsu.edu.in/"><span className="text-sm text-yellow-500 hover:text-black">
            School Of Engineering Harohalli </span></a>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p>&copy; 2025 IEEE Conference. All rights reserved some more information here</p>
        </div>
        <div className="flex space-x-4 justify-center md:justify-end">
          <a href="#" ><img src={linkdein} alt="gf" className = 'w-6 h-6' /> </a>
          <a href="#" ><img src={instagram} alt="gf" className = 'w-6 h-6' /> </a>
          <a href="#" ><img src={fb} alt="gf" className = 'w-6 h-6' /> </a>
          <a href="#" ><img src={xcom} alt="gf" className = 'w-6 h-6' /> </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;