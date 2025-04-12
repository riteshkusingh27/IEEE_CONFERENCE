import React from "react";
<<<<<<< HEAD
import Footer from "./Footer";
=======
import ComingSoon from "./ComingSoon";
>>>>>>> development
const speakers = [
  {
    id: 1,
    name: "Name",
    position: "position",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Name",
    position: "position",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Name",
    position: "position",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Name",
    position: "position",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Name",
    position: "position",
    image: "https://via.placeholder.com/150",
  },
];

const SpeakersGrid = () => {
  return (
<<<<<<< HEAD
<div className="outer">
<div className=" mx-7 px-4 py-10 ">
      <h2 className="text-4xl font-bold text-center mb-8 text-orange-600">Meet Our Speakers</h2>
=======
    <div className=" mx-auto px-4 py-10">
      {/* <h2 className="text-4xl font-bold text-center mb-8 text-orange-600">Meet Our Speakers</h2>
>>>>>>> development
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
<<<<<<< HEAD
      </div>
   
=======
      </div> */}
      <ComingSoon/>
>>>>>>> development
    </div>
    <div className="footer">
      <Footer />
    </div>
</div>
  );
};

export default SpeakersGrid;
