import React from 'react';

import Footer from './Footer.jsx';
const Paper = () => {
  return (
    <div className=''>
    <div className=' mt-5 ml-8 '> 
      <h1 className='font-bold text-3xl text-center text-orange-600'>CALL FOR PAPERS</h1>
      
      <h1 className='ml-10 mt-3 font-bold text-3xl text-blue-900'>Dear Researcher,</h1>
      <p className='text-lg ml-10 pr-10 mt-2 text-justify'>
      You are invited to submit your original research work to CENTCON 2025 –  Bridging AI, Sensing, and Embedded Intelligence for a Smarter, Safer, and Sustainable World, to be held on December 4-5, 2025, at Dayananda Sagar University (DSU), Bengaluru, India. The conference provides a platform for academicians, researchers, industry professionals, and students to present their novel contributions in Artificial Intelligence (AI), Sensing Technologies, Embedded Systems, and Automation. Submissions are encouraged in the key focus areas, including but not limited to AI-driven signal/Image processing, intelligent sensing, nanoelectronics, RF technologies, secure computing, cyber-physical systems, embedded intelligence, and autonomous systems. Accepted papers will undergo rigorous peer review, and selected works will be considered for publication in IEEE Xplore. We look forward to your contributions to drive innovation and shape the future of intelligent sensing, computing and automation.

      </p>
      
      <p className='text-lg ml-10 pr-10 mt-2'>
        You are invited to submit your original research work in any of the following:
      </p>
      
      
      <div className='tracks mb-4'>
  <p className='text-3xl ml-10 mt-4 font-bold text-blue-900'>Track Details</p>
  <ul className='text-lg ml-14 mt-2 '>
    <li>
      <span className='font-bold'>IEEE SPS [AI-Driven Sensing, Signal Processing, and Edge Intelligence for Smart Systems] </span>
      <ul className='list-disc ml-6 text-justify'>
        <li>AI and ML in Signal Processing: Deep learning for signal enhancement, AI-driven denoising, speech and audio processing, biomedical signal interpretation.</li>
        <li>Edge AI and Distributed Computing: Low-power AI for edge devices, federated learning, real-time inference, neuromorphic computing.</li>
        <li>Multimodal Sensing and Fusion: Sensor fusion for autonomous systems, multimodal signal integration, heterogeneous data processing.</li>
        <li>Wireless and Optical Signal Processing: AI for 5G/6G communications, photonic signal processing, AI-driven spectrum sensing.</li>
        <li>Biomedical Signal and Image Processing: AI in medical imaging, bio-signal analytics (EEG, ECG, EMG), wearable AI.</li>
        <li>Intelligent Audio and Speech Processing: AI-powered speech recognition, real-time language processing, voice authentication.</li>
        <li>Security and Privacy in AI-Enabled Signal Processing: Adversarial robustness, privacy-preserving AI, secure biometric authentication.</li>
        <li>Applications: Autonomous vehicles, remote sensing, IoT-enabled smart environments, financial signal analytics.</li>
      </ul>
    </li>

    <li className='mt-5'>
      <span className='font-bold'>IEEE MTTS [Emerging Nanoelectronics, RF, and Photonics Technologies for Future Systems] </span>
      <ul className='list-disc ml-6'>
        <li>RF and Microwave Innovations: mmWave, THz devices, RF filters, AI-driven RF design.</li>
        <li>Nanoelectronics and Semiconductor Devices: Quantum dots, 2D materials (Graphene, MoS₂), carbon nanotube transistors.</li>
        <li>Photonics and Optoelectronics: Integrated photonics, plasmonic sensors, AI-powered photonic computing.</li>
        <li>Neuromorphic and Quantum Computing: Nano-scale AI accelerators, memristors, superconducting circuits.</li>
        <li>Advanced Materials for Electronics: Next-gen flexible electronics, self-powered nanodevices, bioelectronics.</li>
        <li>Nano-scale Sensors and Actuators: NEMS/MEMS, lab-on-chip sensors, bio-inspired nanosystems.</li>
        <li>Wireless Power Transfer and Energy Harvesting: RF energy harvesting, triboelectric nanogenerators, wireless charging.</li>
        <li>Applications: AI-enabled RF design, smart antennas, biomedical nano-devices, aerospace electronics.</li>
      </ul>
    </li>

    <li className='mt-5'>
      <span className='font-bold'>IEEE CEDA [AI-Enabled Consumer Electronics, Healthcare, and Human-Centric Systems]</span>
      <ul className='list-disc ml-6'>
        <li>AI-Powered Consumer Electronics: AI for smart homes, adaptive entertainment, wearable computing.</li>
        <li>Embedded AI for Personalized Healthcare: AI-driven diagnostics, health monitoring, AI in prosthetics and assistive tech.</li>
        <li>Intelligent Human-Computer Interaction (HCI): AR/VR interfaces, gesture recognition, natural language interaction.</li>
        <li>AI-Driven Multimedia Processing: AI for video streaming, smart content recommendation, immersive media analytics.</li>
        <li>Wearable and Ubiquitous Computing: Smart textiles, AI-powered wearables, bio-feedback systems.</li>
        <li>Edge and Embedded AI Systems: On-device ML, hardware acceleration for AI, AI-powered IoT.</li>
        <li>AI in Education and Learning Technologies: Personalized learning, AI tutors, gamification in education.</li>
        <li>Applications: Smart cities, AI in personal assistants, cognitive AI in entertainment.</li>
      </ul>
    </li>

    <li className='mt-5'>
      <span className='font-bold'>IEEE RAS [AI-Enabled Autonomous Systems and Intelligent Automation] </span>
      <ul className='list-disc ml-6'>
        <li>Autonomous Robotics and AI: Reinforcement learning for robotics, multi-agent systems, robot perception and navigation.</li>
        <li>Intelligent Transportation and Smart Mobility: AI in self-driving cars, UAVs, AI-powered logistics.</li>
        <li>AI for Industrial Automation: AI-driven predictive maintenance, intelligent manufacturing, AI in robotics for Industry 4.0.</li>
        <li>Human-Robot Collaboration (HRC): AI in human-robot interaction, adaptive control, AI for exoskeletons.</li>
        <li>Swarm Intelligence and Multi-Agent Systems: AI-driven swarm robotics, decentralized control, multi-agent reinforcement learning.</li>
        <li>Edge AI in Autonomous Systems: Federated learning for autonomous systems, AI-driven decision-making at the edge.</li>
        <li>Energy Efficiency in AI-Enabled Automation: AI-powered optimization, smart grid integration, sustainable automation.</li>
        <li>Applications: AI in space exploration, agricultural robotics, disaster response automation.</li>
      </ul>
    </li>
  </ul>
</div>

     
      
      {/* <div className='topics mb-3'>
        <p className='text-3xl ml-10 mt-2 font-bold text-blue-900'>Topics</p>
        <p className='text-lg ml-10 pr-10 mt-2'>You are further requested to choose topics relevant to your paper work among the following:</p>
        <ul className='text-lg ml-14 mt-2 '>
         <li>----------to be added soon------------------ </li>
        </ul>
      </div> */}
      
      <p className='text-lg ml-10 pr-10 mt-2 font-bold'>
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
