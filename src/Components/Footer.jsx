import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r h-100px from-blue-900 to-blue-600 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">IEEE Conference 2025</h3>
          <p className="text-sm">Organized by Dayananda Sagar University</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <p>&copy; 2025 IEEE Conference. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Facebook</a>
          <a href="#" className="hover:text-gray-300">Twitter</a>
          <a href="#" className="hover:text-gray-300">Instagram</a>
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;