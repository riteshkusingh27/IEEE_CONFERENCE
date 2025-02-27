import React from "react";

const committeeSections = [
  {
    title: "Steering Committee",
    members: [
      {
        name: "K V S Hari",
        role: "Chair",
        institution: "IISc",
        image: "https://example.com/kvs_hari.jpg",
      },
      {
        name: "Chandrakanta Kumar",
        role: "Co-Chair",
        institution: "ISRO",
        image: "https://example.com/chandrakanta_kumar.jpg",
      },
      {
        name: "Aloknath De",
        role: "National Coordination",
        institution: "IISc",
        image: "https://example.com/aloknath_de.jpg",
      },
      {
        name: "Debabrata Das",
        role: "International Coordination",
        institution: "IIITB",
        image: "https://example.com/debabrata_das.jpg",
      },
    ],
  },
];

const CommitteeSection = ({ title, members }) => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center px-4">
        {members.map((member, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden bg-white">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500 font-medium">{member.institution}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Committees = () => {
  return (
    <div>
      {committeeSections.map((section, index) => (
        <CommitteeSection key={index} title={section.title} members={section.members} />
      ))}
    </div>
  );
};

export default Committees;
