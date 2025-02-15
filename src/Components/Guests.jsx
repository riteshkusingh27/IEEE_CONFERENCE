import React from 'react'

const Guests = () => {
  return (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {[
          { name: 'A', desc: 'Des 1', img: 'https://via.placeholder.com/150' },
          { name: 'B', desc: 'Des 2', img: 'https://via.placeholder.com/150' },
          { name: 'C', desc: 'dkfjskladjfklsadjfklajsdfkl 3', img: 'https://via.placeholder.com/150' },
          { name: 'D', desc: 'Des 4', img: 'https://via.placeholder.com/150' },
        ].map((person, index) => (
          <div key={index} className="p-6 bg-white bg-opacity-80 rounded-xl shadow-md text-center hover:shadow-xl transition-all">
            <img src={person.img} alt={person.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.desc}</p>
          </div>
        ))}
      </div>
  )
}

export default Guests