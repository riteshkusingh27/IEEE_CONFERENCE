import React from 'react';

import Footer from './Footer.jsx';
const Paper = () => {
  return (
    <div className=''>
    <div className=' mt-5 ml-8 '> 
      <h1 className='font-bold text-3xl text-center text-orange-600'>CALL FOR PAPERS</h1>
      
      <h1 className='ml-10 mt-3 font-bold text-3xl text-blue-900'>Dear Researcher,</h1>
      <p className='text-lg ml-10 pr-10 mt-2'>
        On behalf of the CENTCON Organizing Committee, I take the opportunity to invite you to participate in this professionally enriching Technical Conference Centcon. Centcon is a premier interdisciplinary forum for space, aerospace, and defense experts, engineers, and researchers to come together to discuss the latest developments in designated technologies. The conference provides a platform for sharing cutting-edge research, exploring innovative approaches, and addressing the technical challenges facing the space, aerospace, and defense industries. 
      </p>
      
      <p className='text-lg ml-10 pr-10 mt-2'>
        You are invited to submit your original research work in any of the following:
      </p>
      
      
      <div className='tracks mb-4'>
        <p className='text-3xl ml-10 mt-2 font-bold text-blue-900'>Track Details</p>
        <ul className='text-lg ml-14 mt-2 list-disc'>
          <li>IEEE SPS   [AI-Driven Sensing, Signal Processing, and Edge Intelligence for Smart Systems
          ]</li>
          <li>IEEE MTS  [Emerging Nanoelectronics, RF, and Photonics Technologies for Future Systems
          ] </li>
          <li>IEEE RAS [AI-Enabled Autonomous Systems and Intelligent Automation
          ] </li>
        </ul>
      </div>
      
     
      
      <div className='topics mb-3'>
        <p className='text-3xl ml-10 mt-2 font-bold text-blue-900'>Topics</p>
        <p className='text-lg ml-10 pr-10 mt-2'>You are further requested to choose topics relevant to your paper work among the following:</p>
        <ul className='text-lg ml-14 mt-2 '>
         <li>----------to be added soon------------------ </li>
        </ul>
      </div>
      
      <p className='text-lg ml-10 pr-10 mt-2'>
        Kindly note that Papers once submitted can NOT be updated. Paper review process will immediately start as soon as it is submitted.
      </p>
     <div className="submit mt-6 flex text-center justify-center ">
     <a href="https://www.ieee.org/" className=' '>
            <button
              type="button"
              className="text-white text-xl w-sm bg-gradient-to-r from-orange-500 to-orange-600  focus:ring-4  focus:ring-indigo-300 font-bold rounded-xl px-7 py-2 mx-5 shadow-lg transition-transform duration-300 hover:scale-105 mb-6  "
            >
              SUBMIT YOUR PAPER
            </button>
          </a>
     </div>
    
      </div>
      <Footer/>
   
    </div>
  );
};

export default Paper;
