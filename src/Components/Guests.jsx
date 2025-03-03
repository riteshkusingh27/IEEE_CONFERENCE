import React from 'react'
// import drhemachandra from '../images/drhemachandra.jpeg'
const Guests = () => {
  return (
    <div className="relative z-1 grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 w-full">
        {[
          { name: 'Dr. D. HEMACHANDRA SAGAR', desc: 'Chancellor, DSU', img: './images/drhemachandra.jpeg' },
          { name: 'Dr. D. PREMACHANDRA SAGAR', desc: 'Pro Chancellor, DSU', img: './images/drpremachandra.jpeg' },
          { name: 'Mr. Galiswamy', desc: 'Secretary', img: './images/Secretary.jpg' },
          // { name: 'Dr. UDAYA KUMAR REDDY K.R.', desc: 'Dean-School of Engineering', img: './images/udk.jpg' }, { name: 'Dr. Ramesh R Galigekere', desc: 'Professor & Dean Academics', img: './images/drramesh.jpeg' },
          //  { name: 'Dr Puttamadappa C', desc: 'Professor and Registrar', img: './images/drputtamadappa.jpeg' },
        ].map((person, index) => (
          <div key={index} className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
            <img src={person.img} alt={person.name} className="w-42 h-42 mx-auto rounded-full mb-4" />
            <h3 className="text-md font-semibold text-gray-800 mb-2">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.desc}</p>
          </div>
        ))}
      </div>
  )
}

export default Guests