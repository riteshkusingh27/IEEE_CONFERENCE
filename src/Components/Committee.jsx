import React from "react";

const committeeSections = [
  {
    title: "Steering Committee",
    members: [
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
    ],
  
  },
  {
    title: "General Chair ",
    members: [
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      }
    ],
  
  },
  {
    title: "Steering Committee",
    members: [
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
    ],
  
  },
  {
    title: "Technical Program Committee",
    members: [
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
    ],
  
  }
  ,
  {
    title: "Organizing Committee",
    members: [
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
    ],
  
  },{
    title: "Finance Committee",
    members: [
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      },
      {
        name: "Name",
        role: "Role",
        institution: "Institution",
        image: "",
      }
    ],
  
  }
];
    //    displaying memebers image 
const CommitteeSection = ({ title, members }) => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold mb-8 text-orange-600">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center px-10">
        {members.map((member, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden bg-white">
            <img
              src={member.image}
              className="w-full  object-fill"
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
