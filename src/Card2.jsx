import React from "react";

const Card2 = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <h1 className="text-3xl font-bold text-center mb-4">
        Simple, Transparent Pricing
      </h1>
      <p className="text-center text-[#627382]">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        
       
        <div className="text-center shadow bg-gray-100 p-6 rounded-2xl hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Starter</h2>
          <p className="text-[#627382]">Perfect for getting started</p>

          <h1 className="mt-2">
            <span className="font-bold text-2xl">$0</span>/month
          </h1>

          <ul className="text-sm mt-3 space-y-1 text-gray-600 text-left">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="w-full mt-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium hover:opacity-90 transition">
            Get Started Free
          </button>
        </div>

        
        <div className="text-center shadow p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p>Best for professionals</p>

          <h1 className="mt-2">
            <span className="font-bold text-2xl">$29</span>/month
          </h1>

          <ul className="text-sm mt-3 space-y-1 text-left">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          
          <button className="bg-white text-purple-600 w-full mt-5 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Get Started Free
          </button>
        </div>

       
        <div className="text-center shadow bg-gray-100 p-6 rounded-2xl hover:shadow-xl transition">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p className="text-[#627382]">For teams and businesses</p>

          <h1 className="mt-2">
            <span className="font-bold text-2xl">$99</span>/month
          </h1>

          <ul className="text-sm mt-3 space-y-1 text-gray-600 text-left">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Dedicated support</li>
            <li>✔ Custom integrations</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="w-full mt-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-medium hover:opacity-90 transition">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card2;