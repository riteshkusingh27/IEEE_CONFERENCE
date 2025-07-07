import React from "react";
import Footer from "./Footer.jsx";

const registrationData = [
  {
    particulars: "Delegates from Industry",
    indiandelegates: "₹10000",
    indianDelegateIeee: "₹8500",
  },
  {
    particulars:
      "Delegates from Academia (Academicians / Graduate Students / Post Graduate Students / Research Scholars)",
    indiandelegates: "₹8500",
    indianDelegateIeee: "₹7000",
  },
  {
    particulars: "Accompanying Person",
    indiandelegates: "₹2000",
    indianDelegateIeee: "₹1000",
  },
  {
    particulars: "Foreign Delegates",
    indiandelegates: "$250",
    indianDelegateIeee: "$150",
  },
];

const Register = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <div className="px-10 mt-4 mb-5">
        <p className="text-3xl font-bold mb-7 text-center text-orange-500">
          Instructions for Registration
        </p>
        <ul className="list-decimal px-8 mt-2 font-bold text-lg text-justify">
          <li>At least one author per accepted paper has to register.</li>
          <li>
            At least one author must present their accepted paper in the
            conference for consideration of publication.
          </li>
          <li>
            Registration fee for the paper (with authorship) includes access to
            the pre conference tutorial, conference proceedings, all technical
            sessions and presenter certificate.
          </li>
          <li>
            Registration fee for the conference participation without
            authorship-attendee is not entitled for paper publication, however
            participation certificate will be provided.
          </li>
        </ul>
      </div>

      <div className="flex-grow space-y-8 p-4 px-10">
        <h2 className="text-3xl font-bold mb-7 text-center text-orange-500">
          Registration Fees
        </h2>
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
                <td className="border px-4 py-2">
                  {member.indianDelegateIeee}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className=" mt-4 pb-10">
          <p className="text-xl font-extrabold mb-3 px-2 text-red-700">
            Note :
          </p>
          <ul className="list-decimal px-8 mt-2 font-medium text-lg text-justify">
            <li>
              Registration category should be chosen appropriately from the
              aforementioned table.
            </li>
            <li>
              Registration fees are not refundable or non-transferable.
              CENTCON-2026 organizing committee will not be responsible for any
              financial loss caused by improper transactions during registration
              process.
            </li>
            <li>
              The submission of invalid proofs will lead to the cancellation of
              participation in the conference.
            </li>
          </ul>

          <div className="text-center mt-9 w-full ">
            <button
              className=" border-gray-500 rounded-full px-5 py-1 bg-gradient-to-r from-amber-500 to-orange-500 
            hover:from-orange-500 hover:to-amber-500 text-white outline-none hover:scale-105 transition-all shadow hover:shadow-gray-600 font-medium"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
