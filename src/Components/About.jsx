import React from 'react';
import Footer from './Footer';
import organizermain from '../Images/organizermain.png'

const About = () => {
  return (
    <section className=" w-full h-full bg-gradient-to-r bg-white from-blue-50 to-blue-100   " id="about">
      <div className="max-w-5xl mx-auto pt-5">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 ">About the Conference</h2>
        <p className="text-xl text-black mb-4 font-semibold">
        The IEEE Circuits and Systems Society is the leading organization that promotes the advancement of the theory, analysis, design, tools, and implementation of circuits and systems.The field spans their theoretical foundations, applications, and architectures, as well as circuits and systems implementation of algorithms for signal and information processing. <br />

The Society brings engineers, researchers, scientists and others involved in circuits and systems applications access to the industry’s most essential technical information, networking opportunities, career development tools and many other exclusive benefits. <br />


        </p>
        <div className="grid md:grid-cols-1 gap-6 text-left mt-6 mb-10 ">
          <div className="shadow-lg rounded-2xl p-6 hover:shadow-xl transition bg-green-300 ">
            <h3 className="text-2xl font-bold text-blue-800 mb-3"> Objectives</h3>
            <ul className="list-none  text-black text-xl">
             
The purposes of the Society are scientific, literary and educational in character, directed toward the advancement of the theory and practice of electrical, electronics, and allied branches of engineering or the related arts and science, in order to increase the professional standing of the Members and Affiliates. <br /> <br />

The Society shall aid in promoting close cooperation and exchange of technical information among its Members and Affiliates, and as means to these ends shall hold public meetings for the reading and discussion of periodical and special works of literature, science and art pertaining thereto, the initiation and development of engineering standards, and any other activities necessary, suitable and proper for the fulfillment of these objectives. Through its Committees the Society shall study and provide for the needs of its Members and Affiliates.
            </ul>
          </div>

  

          <div className="bg-none shadow-lg rounded-2xl p-6 hover:shadow-xl transition bg-white">
            <h3 className="text-2xl font-bold text-blue-800 mb-3 flex justify-center">Organizers</h3>
           <div className="parts flex flex-grow justify-start ">
           <div className="ul">
           <ul className=" text-black">
              <li className ='text-xl font-semibold '>Department of Electronics And Communication </li>
              <li className ='text-2xl font-semibold '>Dayananda Sagar University SOE Harohalli </li>
              <li>Chief Patreon <br/><span className='font-bold'>Dr. Arun Balodi </span> <br />Head of Deapartment </li>
            </ul>
           </div>
           <div className="logos ml-30">
               <img src={organizermain} alt="" className='h-30' />
           </div>
            
           </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
