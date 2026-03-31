import React from 'react';

const Card = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Get Started in 3 Steps
      </h1>
      <p className="text-center text-[#627382]">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full ml-auto block mb-4">
            1
          </button>

          <img
            src="/user.png"
            alt="User"
            className="mx-auto mb-4 bg-purple-100 p-3 rounded-full"
          />

          <h2 className="text-xl font-semibold mb-2 text-center">
            Create Account
          </h2>
          <p className="text-[#627382] text-center">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full ml-auto block mb-4">
            2
          </button>

          <img
            src="/package.png"
            alt="Package"
            className="mx-auto mb-4 bg-purple-100 p-3 rounded-full"
          />

          <h2 className="text-xl font-semibold mb-2 text-center">
            Choose Products
          </h2>
          <p className="text-[#627382] text-center">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full ml-auto block mb-4">
            3
          </button>

          <img
            src="/rocket.png"
            alt="Rocket"
            className="mx-auto mb-4 bg-purple-100 p-3 rounded-full"
          />

          <h2 className="text-xl font-semibold mb-2 text-center">
            Start Creating
          </h2>
          <p className="text-[#627382] text-center">
            Download and start using your premium tools immediately.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Card;