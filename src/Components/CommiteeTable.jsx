import React from "react";

const committees = [
  // {
  //   title: "Conference Chair",
  //   members: [
  //     { name: "Dr. Arun Balodi", role: "Chairman-ECE, DSU" },
  //   ]
  // },
  // {
  //   title: "Conference Co-Chairs",
  //   members: [
  //     { name: "Dr. BM Ashwin Desai", role: "Associate Professor, DSU" },
  //     { name: "Dr. Gaythri KM", role: "Associate Professor, DSU" },
  //   ]
  // },
  {
    title: "Finance Committee",
    members: [
      // { name: "Dr. Vinu R", role: "Associate Professor, DSU" },
      // { name: "Dr. Navya R", role: "Assistant Professor, DSU" },
      {
        name: "Dr. Shirshendu Roy ",
        role: "Assistant Professor, DSU",
      },
    ],
  },
  {
    title: "Publication Committee",
    members: [
      {
        name: "Dr. Sneha Sharma",
        role: "Assistant Professor, DSU",
      },
      { name: "Dr. Owais Ahmad Shah       ", role: "Assistant Professor, DSU" },
      // { name: "Dr. Pushpamala", role: "Associate Professor, DSU" },

      { name: "Dr. Godfrey", role: "Assistant Professor, DSU" },
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      // {
      //   name: "Dr. Theodre Chandra [Track-1 Chair]",
      //   role: "Associate Professor, DSU",
      // },
      // {
      //   name: "Dr. Gayathri K M  [Track-2 Chair]",
      //   role: "Associate Professor, DSU",
      // },

      // {
      //   name: "Dr. Vinu R [Track-3 Chair]",
      //   role: "Associate Professor, DSU",
      // },
      // {
      //   name: "Dr. Arungalai [Track-4 Chair]",
      //   role: "Professor, DSU",
      // },
      // {
      //   name: "Dr. BM Ashwin Desai [Track-5 Chair]",
      //   role: "Associate Professor, DSU",
      // },
      {
        name: "Dr. Lunchakorn Wuttisittikulkij",
        role: "Associate Professor, Chulalongkorn University, Thailand",
      },
      {
        name: "Dr. Deepika Koundal",
        role: "Senior Researcher, University of Eastern Finland, Finland",
      },
      {
        name: "Dr. Anuj Tiwari ",
        role: "Senior Research Associate, University of Illinois System, Chicago",
      },
      {
        name: "Dr. Wen Cheng Lai",
        role: "Professor , National Taiwan University of Science and Technology, Taiwan",
      },
      {
        name: "Dr. Debabrata Samanta",
        role: "Assistant Professor, Rochester Institute of Technology, Kosovo",
      },
      { name: "Dr. Girisha G S", role: "Professor & Chairperson CSE, DSU" },
      {
        name: "Dr. Jayavrinda Vrindavanam V",
        role: "Professor and Chairperson, CSE(AI and ML), DSU",
      },
      {
        name: "Dr. Shaila S G",
        role: "Professor and Chairperson, CSE(AI and Data Science), DSU",
      },
      {
        name: "Dr. Durbadal Chattaraj",
        role: "Associate Professor and Chairperson, CSE(Cyber Security",
      },
      {
        name: "Dr. Pramod Kumar Naik",
        role: "Associate Professor and Chairperson, AI & Robotics, DSU",
      },
      {
        name: "Dr. Vinayak B Hemadri",
        role: "Professor and Chairperson, ME , DSU",
      },
      {
        name: "Dr M Shahina Parveen",
        role: "Professor and Chairperson, CST , DSU",
      },
      {
        name: "Dr. Nagaraja S R",
        role: "Professor and Chairperson, Aerospace , DSU",
      },

      {
        name: "Dr. Ambar Bajpai",
        role: "Associate Professor ,Gitam University, Bangalore, India",
      },
      {
        name: "Dr. Mahesh A",
        role: "Associate Professor ,ECE Dept ,RV College of Engineering, Banglore,India",
      },
      {
        name: "Dr. Anandi Giridharan",
        role: "Principal Research Scientist  ECE Dept, IISc, Banglore,India",
      },
      {
        name: "Dr. Manoj Tolani",
        role: "Assistant Professor, MIT, MAHE, Manipal, India",
      },
      {
        name: "Dr. Karan Verma",
        role: "Assistant Professor, NIT Delhi, India",
      },
      {
        name: "Dr. Yogesh Saria",
        role: "Assistant Professor, SGSITS Indore, India",
      },
      {
        name: "Dr. KSH Milan",
        role: "Assistant Professor, NIT Manipur, India",
      },
      { name: "Dr. Vrince Vimal", role: "Professor, GEHU Dehradun, India" },
      {
        name: "Dr. Arvind R Yadav",
        role: "Nirma University, Ahmedabad, Gujarat, India",
      },
    ],
  },
  {
    title: "Publicity Committee",
    members: [
      // {
      //   name: "Dr. Navya R  [Publicity Chair]",
      //   role: "Assistant Professor, DSU",
      // },
      { name: "Mrs. Manasa K R", role: "Assistant Professor, DSU" },
      { name: "Mr. Puneeth S", role: "Assistant Professor, DSU" },
      { name: "Mr. Nadeem Pasha", role: "Assitant Professor, DSU" },
      { name: "Mrs. Kanmani B.S", role: "Assistant Professor, DSU" },
    ],
  },
  {
    title: "Organizing committee",
    members: [
      // // { name: "Dr. Arungalai Vendan", role: "Associate Professor, DSU" },
      // { name: "Dr. Vinu R", role: "Associate Professor, DSU" },
      { name: "Dr. Arun Ananthanarayanan", role: "Associate Professor, DSU" },
      { name: "Dr. Mukti Chaturvedi", role: "Assistant Professor, DSU" },
      { name: "Dr. Divyashree H B", role: "Assistant Professor, DSU" },
      { name: "Dr. Rashmita Sahoo", role: "Assistant Professor, DSU" },
      { name: "Dr. Deepthi Chamkur V", role: "Assistant Professor, DSU" },
      { name: "Dr. Supraja Eduru", role: "Assistant Professor, DSU" },
      { name: "Dr. G Santhosh", role: "Assistant Professor, DSU" },

      { name: "Mr. Abhinav Karan", role: "Assistant Professor, DSU" },
      { name: "Mrs. Kokila S", role: "Assistant Professor, DSU" },
      { name: "Mr. Sharanabasavaraj", role: "Assistant Professor, DSU" },
      { name: "Mrs. Shwetha M P", role: "Assistant Professor, DSU" },
      { name: "Ms. Jaishree Ramadevaru", role: "Assistant Professor, DSU" },
      { name: "Ms. Jisy N K", role: "Assistant Professor, DSU" },
      { name: "Mr. V Sudharsan", role: "Assistant Professor, DSU" },
      { name: "Dr. A Ramesh", role: "Assistant Professor, DSU" },
      { name: "Mr. Srinivas", role: "Assistant Professor, DSU" },
      { name: "Mr. Sahil Patil", role: "Assistant Professor, DSU" },
    ],
  },
];

const student = [
  {
    title: "Web Master",
    members: [
      { name: "Dr. BM Ashwin Desai", role: "Associate Professor, DSU" },
      { name: "Dr. Navya R", role: "Assistant Professor, DSU" },
      { name: "Mr. Ritesh Kumar ", role: "Student Volunteer" },
      { name: "Mr. Prokshith J.S", role: "Student Volunteer" },
    ],
  },
];
const CommitteeTables = () => {
  return (
    <div className="mb-2.5 bg-pink-50">
      <div className="space-y-8 p-4 px-20">
        {committees.map((committee, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              {committee.title}
            </h2>
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className=" w-1/2 border px-4 py-2 text-left">Name</th>
                  <th className=" w-1/2 border px-4 py-2 text-left">
                    Designation
                  </th>
                </tr>
              </thead>
              <tbody>
                {committee.members.map((member, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      <div className="space-y-8 p-4 px-20">
        {student.map((stu, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">
              {stu.title}
            </h2>
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className=" w-1/2 border px-4 py-2 text-left">Name</th>
                  <th className=" border px-4 py-2 text-left">Designation</th>
                </tr>
              </thead>
              <tbody>
                {stu.members.map((member, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{member.name}</td>
                    <td className="border px-4 py-2">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeTables;
