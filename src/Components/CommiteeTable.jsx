import React from 'react';

const committees = [
  
  {
    title: "Conference Chair",
    members: [
      { name: "Dr. Arun Balodi", role: "Chairman-ECE, DSU" },
    ]
  },
  {
    title: "Conference Co-Chairs",
    members: [
      { name: "Dr. BM Ashwin Desai", role: "Associate Professor, DSU" },
      { name: "Dr. Gaythri KM", role: "Associate Professor, DSU" },
    ]
  },
  {
    title: "Finance Chair",
    members: [
      { name: "Dr. Sneha Sharma", role: "Assistant Professor, DSU" }
    ]
  },
  {
    title: "Publication Committee",
    members: [
       { name: "Dr. Owais Ahmad Shah       [Publication Chair]", role: "Assistant Professor, DSU" },
      { name: "Dr. Pushpamala", role: "Associate Professor, DSU" },
      { name: "Dr. Sneha Sharma", role: "Assistant Professor, DSU" },
      
    ]
  },
  {
    title: "Technical Program Committee",
    members: [
      { name: "Dr. Theodre Chandra [Track-1 Chair]", role: "Associate Professor, DSU" },
      { name: "Dr. Gayathri K M  [Track-2 Chair]", role: "Associate Professor, DSU" },
     
      { name: "Dr. Shirshendu Roy  [[Track-3 Chair]]", role: "Assistant Professor, DSU" },
      { name: "Dr. Godfrey  [Track-4 Chair]", role: "Assistant Professor, DSU" },
       { name: "Dr. BM Ashwin Desai [Track-5 Chair]", role: "Associate Professor, DSU" },
      { name: "Dr. Ambar Bajpai", role: "IEEE Bangalore Section Execom Member 2025" },
      { name: "Dr. Mahesh A", role: "Treasurer, IEEE Bangalore Section 2025" },
      { name: "Dr. Anandi Giridharan", role: "IEEE Bangalore Section Execom Membe 2025" },
      { name: "Dr. Manoj Tolani", role: "Assistant Professor, MIT, MAHE, Manipal, India" },
      { name: "Dr. Karan Verma", role: "Assistant Professor, NIT Delhi, India" },
      { name: "Dr. Yogesh Saria", role: "Assistant Professor, SGSITS Indore, India" },
      { name: "Dr. KSH Milan", role: "Assistant Professor, NIT Manipur, India" },
      { name: "Dr. Vrince Vimal", role: "Professor, GEHU Dehradun, India" },
      { name: "Dr. Arvind R Yadav", role: "Professor, Parul University, Vadodara, India" },
      { name: "Dr. Lunchakorn Wuttisittikulkij", role: "Associate Professor, Chulalongkorn University, Thailand" },
      { name: "Dr. Deepika Koundal", role: "Senior Researcher, University of Eastern Finland, Finland" },
      { name: "Dr. Anuj Tiwari ", role: "Senior Research Associate, University of Illinois System, Chicago" },
      { name: "Wen Cheng Lai", role: "Professor , National Taiwan University of Science and Technology, Taiwan" },
      { name: "Dr. Debabrata Samanta", role: "Assistant Professor, Rochester Institute of Technology, Kosovo" },
    ]
  },
  {
    title: "Publicity Committee",
    members: [
      { name: "Dr. Navya R", role: "Associate Professor, DSU" },
      { name: "Mrs. Manasa K R", role: "Assistant Professor, DSU" },
      { name: "Mr. Puneeth S", role: "Assistant Professor, DSU" },
      { name: "Mr. Nadeem Pasha", role: "Assitant Professor, DSU" }
    ]
  },
  {
    title: "Organizing committee",
    members: [
      { name: "Dr. Arungalai Vendan", role: "Associate Professor, DSU" },
      { name: "Dr. Vinu R", role: "Associate Professor, DSU" },
      { name: "Dr. Arun Ananthanarayanan", role: "Associate Professor, DSU" },
      { name: "Dr. Mukti Chaturvedi", role: "Assistant Professor, DSU" },
      { name: "Dr. Divyashree H B", role: "Assistant Professor, DSU" },
      { name: "Dr. Rashmita Sahoo", role: "Assistant Professor, DSU" },
      { name: "Dr. Deepthi Chamkur V", role: "Assistant Professor, DSU" },
      { name: "Dr. G Santhosh", role: "Assistant Professor, DSU" },
      { name: "Mrs. Kanmani B.S", role: "Assistant Professor, DSU" },
      { name: "Mr. Abhinav Karan", role: "Assistant Professor, DSU" },
      { name: "Mrs. Kokila S", role: "Assistant Professor, DSU" },
      { name: "Mr. Sharanabasavaraj", role: "Assistant Professor, DSU" },
      { name: "Mrs. Shwetha M P", role: "Assistant Professor, DSU" },
      { name: "Ms. Jaishree Ramadevaru", role: "Assistant Professor, DSU" },
      { name: "Ms. Jisy N K", role: "Assistant Professor, DSU" },
      { name: "Mr. V Sudharsan", role: "Assistant Professor, DSU" },
      { name: "Dr. Supraja Eduru", role: "Assistant Professor, DSU" }
    ]
  }
];

const student =[
      {
    title : "Web Master",
    members:[
          { name: "Dr. BM Ashwin Desai", role: "Associate Professor, DSU" },
        {name : "Mr. Ritesh Kumar ", role : "Student Volunteer"},
        {name : "Mr. Prokshith J.S", role : "Student Volunteer"},
    ]
  }
]
const CommitteeTables = () => {
  return (
    <div className="mb-2.5">
      <div className="space-y-8 p-4 px-20">
        {committees.map((committee, idx) => (
          <div key={idx}>
            <h2 className="text-2xl font-bold mb-2 text-orange-500">{committee.title}</h2>
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className=" w-1/2 border px-4 py-2 text-left">Name</th>
                  <th className=" w-1/2 border px-4 py-2 text-left">Designation</th>
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
            <h2 className="text-2xl font-bold mb-2 text-orange-500">{stu.title}</h2>
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className=" w-1/2 border px-4 py-2 text-left">Name</th>
                  <th className=" border px-4 py-2 text-left">Role</th>
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
