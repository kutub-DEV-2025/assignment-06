import React from 'react';

const Workflow = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-white py-10  text-center">
      
        <div>
            <h2 className="text-3xl font-bold">Ready to Transform Your Workflow?</h2>
            <p>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
        </div>
            <div className="gap-10 flex justify-center ">
                <button className="bg-white text-purple-600 mt-5 px-3 py-2 rounded-full  font-medium hover:bg-gray-100 transition">
                Explore Products
                </button>
                <button className="bg-white text-transparent bg-clip-text mt-5 px-3 py-2 rounded-full border border-gray-200 hover:bg-purple-600 hover:text-white transition">
                View Pricing
                </button>
            </div>
         <p>
            14-day free trial • No credit card required • Cancel anytime
         </p>
    </div>
  );
};

export default Workflow;