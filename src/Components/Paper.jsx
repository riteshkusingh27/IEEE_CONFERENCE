import React from 'react';
import EarlySubmission from './EarlySubmission.jsx';
import Footer from './Footer.jsx';
const Paper = () => {
  return (
    <div className=''>
    <div className=' mt-5 ml-8'> 
      <h1 className='font-bold text-4xl text-center '>CALL <span className='text-orange-500'> FOR PAPERS</span></h1>
      
      <h1 className='ml-10 mt-3 font-bold text-3xl text-blue-900'>Dear Researcher,</h1>
      <p className='text-lg ml-10 pr-10 mt-2'>
        On behalf of the CENTCON Organizing Committee, I take the opportunity to invite you to participate in this professionally enriching Technical Conference Centcon. Centcon is a premier interdisciplinary forum for space, aerospace, and defense experts, engineers, and researchers to come together to discuss the latest developments in designated technologies. The conference provides a platform for sharing cutting-edge research, exploring innovative approaches, and addressing the technical challenges facing the space, aerospace, and defense industries. 
      </p>
      
      <p className='text-lg ml-10 pr-10 mt-2'>
        You are invited to submit your original research work in any of the following:
      </p>
      
      <div className='tracks'>
        <p className='text-3xl ml-10 mt-2 font-bold text-blue-900'>Tracks</p>
        <ul className='text-lg ml-14 mt-2 list-disc'>
          <li>Aerospace Systems Technologies</li>
          <li>Defence Systems Technologies</li>
          <li>Space Systems Technologies</li>
        </ul>
      </div>
      
      <div className='tracks'>
        <p className='text-3xl ml-10 mt-2 font-bold text-blue-900'>Special Sessions</p>
        <ul className='text-lg ml-14 mt-2 '>
          {/* <li>Special Session on AI/ML for SPACE</li>
          <li>Special Session on Quantum Technologies for SPACE</li>
          <li>Special Session on Software Defined Radio Technologies for SPACE</li>
          <li>Women-led Technology Developments for SPACE</li>
          <li>Special Session on Advances in Measurements for SPACE Systems</li>
          <li>Special Session on Bhartiya Antriksh Station</li> */}
          <li>--------------------- to be added soon -----------------------------------------</li>
        </ul>
      </div>
      
      <div className='topics'>
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
              className="text-white text-xl w-sm bg-gradient-to-r from-orange-500 to-orange-600  focus:ring-4  focus:ring-indigo-300 font-bold rounded-xl px-7 py-2 mx-5 shadow-lg transition-transform duration-300 hover:scale-105  "
            >
              SUBMIT YOUR PAPER
            </button>
          </a>
     </div>
      <EarlySubmission />
      </div>
      <Footer/>
   
    </div>
  );
};

export default Paper;
