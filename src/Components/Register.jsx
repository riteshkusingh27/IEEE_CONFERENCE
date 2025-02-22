import React from "react";
import Footer from './Footer.jsx';
const registrationData = [
    { title: "Early Bird IEEE Student (Indian)", price: 3500 },
    { title: "Early Bird IEEE Member (Indian)", price: 5000 },
    { title: "Early Bird Non-IEEE Student (Indian)", price: 6000 },
    { title: "Early Bird Non-IEEE Member (Indian)", price: 8000 },
    { title: "Regular IEEE Student (Indian)", price: 4500 },
    { title: "Regular IEEE Member (Indian)", price: 6500 },
    { title: "Regular Non-IEEE Student (Indian)", price: 7500 },
    { title: "Regular Non-IEEE Member (Indian)", price: 9500 },
  ];
    //  div grid for the the registercoloumn 
  const Register = () => {
    return (
      <div className="main">
        <div className=" text-black py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Registrations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {registrationData.map((item, index) => (
            <div key={index} className="border border-black p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <p className="text-2xl font-bold mb-4">₹ {item.price}</p>
              <button className="text-balck border border-black px-4 py-2 rounded-3xl hover:bg-white hover:text-blue-900">
                REGISTER NOW
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default Register;
  