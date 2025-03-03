import React from 'react';
import { Mail } from "lucide-react";
import linkdein from '../Images/icons/linkdein.svg';
import instagram from '../Images/icons/instagram.svg';
import fb from '../Images/icons/fb.svg';
import xcom from '../Images/icons/xcom.svg';

const ContactUsButton = () => {
  return (
  <a href="mailto:riteshkusingh27@gmail.com">
      <button className="flex items-center gap-2 px-4 py-2 bg-black text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all transform hover:scale-105 active:scale-95">
      <Mail size={20} /> Contact Us
    </button>
  </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r h-100px from-blue-900 to-blue-600 text-white py-6">
      <div className="w-full px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">IEEE CENTCON 2025</h3>
          <p className="text-sm">Organized by Dayananda Sagar University</p>
          <a href="https://www.dsu.edu.in/">
            <span className="text-sm text-yellow-500 hover:text-black">School Of Engineering Harohalli</span>
          </a>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p>&copy; 2025 IEEE  Centcon-2025. All rights reserved. <br/> <b className='text-pink-100'>IEEE SPS, IEEE MTTS, IEEE CEDA & IEEE RAS</b></p>
        </div>
        <div className="flex space-x-3 justify-center md:justify-end items-center">
          <a href="#"><img src={linkdein} alt="LinkedIn" className="w-6 h-6" /></a>
          <a href="#"><img src={instagram} alt="Instagram" className="w-6 h-6" /></a>
          <a href="#"><img src={fb} alt="Facebook" className="w-6 h-6" /></a>
          <a href="#"><img src={xcom} alt="X" className="w-6 h-6 mr-2" /></a>
          <ContactUsButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
