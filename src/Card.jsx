import React from 'react';

const Card = () => {
  return (
    <>
      <div className=" mx-auto p-6 bg-gray-100 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">
          Get Started in 3 Steps
        </h1>
        <p className="text-center text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
        <div className=" mx-auto p-6 grid md:grid-cols-3 gap-6 mt-10">
        <div className="text-center shadow mx-auto bg-white p-6 rounded-2xl hover:shadow-xl transition duration-300">
            <button className="bg-purple-600 text-white px-5 py-3 rounded-full ml-auto block">
            1
          </button>
          <img src="../public/user.png" alt="User Icon" className="mx-auto mb-4 bg-purple-100 text-purple-600 px-3 py-3 rounded-full text-xs" />
          <h2 className="text-xl font-semibold mb-2">Create Account</h2>
          <p className="text-[#627382]">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="text-center shadow max-w-xl mx-auto bg-white p-6 rounded-2xl hover:shadow-xl transition duration-300">
            <button className="bg-purple-600 text-white px-5 py-3 rounded-full ml-auto block">
            2
          </button>
          <img src="../public/package.png" alt="User Icon" className="mx-auto mb-4 bg-purple-100 text-purple-600 px-3 py-3 rounded-full text-xs" />
          <h2 className="text-xl font-semibold mb-2">Choose Products</h2>
          <p className="text-[#627382]">
           Browse our catalog and select the tools
            that fit your needs.    
          </p>
        </div>
        <div className="text-center shadow max-w-xl mx-auto bg-white p-6 rounded-2xl hover:shadow-xl transition duration-300">
            <button className="bg-purple-600 text-white px-5 py-3 rounded-full ml-auto block">
            3
          </button>
          <img src="../public/rocket.png" alt="User Icon" className="mx-auto mb-4 bg-purple-100 text-purple-600 px-3 py-3 rounded-full text-xs" />
          <h2 className="text-xl font-semibold mb-2">Start Creating</h2>
          <p className="text-[#627382]">
            Download and start using your premium 
            tools immediately.
          </p>
        </div>
      </div>
      </div>

      
    </>
  );
};

export default Card;