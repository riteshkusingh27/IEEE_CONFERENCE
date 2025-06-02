import React from "react";
import Footer from './Footer.jsx';

const registrationData = [
  {
    particulars: "Delegates from Industry",
    indiandelegates: "₹10000",
    indianDelegateIeee: "₹8500",
  },
  {
    particulars: "Delegates from Academia",
    indiandelegates: "₹8500",
    indianDelegateIeee: "₹7000",
  },
  {
    particulars: "Accompanying Person",
    indiandelegates: "₹2000",
    indianDelegateIeee: "₹1000",
  },
  {
    particulars:"Foreign Delegates",
    indiandelegates : "$250",
    indianDelegateIeee :"$150"
  }
];


const Register = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="flex-grow space-y-8 p-4 px-10">
        <h2 className="text-3xl font-bold mb-7 text-center text-orange-500">Registration Fees</h2>
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/2 border px-4 py-2 text-left">Particulars</th>
              <th className="border px-4 py-2 text-left">Non IEEE Members</th>
              <th className="border px-4 py-2 text-left">IEEE Members</th>
            </tr>
          </thead>
          <tbody>
            {registrationData.map((member, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{member.particulars}</td>
                <td className="border px-4 py-2">{member.indiandelegates}</td>
                <td className="border px-4 py-2">{member.indianDelegateIeee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
