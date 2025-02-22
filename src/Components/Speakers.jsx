import React from "react";

const speakers = [
  {
    id: 1,
    name: "Dr. John Doe",
    position: "Professor, XYZ University",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CEO, ABC Corp",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dr. Alex Brown",
    position: "Research Scientist, Tech Labs",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily White",
    position: "CTO, Startup Inc.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily White",
    position: "CTO, Startup Inc.",
    image: "https://via.placeholder.com/150",
  },
];

const SpeakersGrid = () => {
  return (
    <div className=" mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Meet Our Speakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="bg-white p-4 shadow-md rounded-lg text-center">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{speaker.name}</h3>
            <p className="text-gray-600">{speaker.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersGrid;
