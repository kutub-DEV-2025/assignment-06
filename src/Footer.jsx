import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white px-6 md:px-16 py-10 mt-10">
      <div className="grid md:grid-cols-5 gap-8">

        
        <div>
          <h1 className="font-bold text-2xl mb-3">DigiTools</h1>
          <p className="text-gray-400 text-sm">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h1 className="font-semibold text-lg mb-3">Product</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        
        <div>
          <h1 className="font-semibold text-lg mb-3">Company</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        
        <div>
          <h1 className="font-semibold text-lg mb-3">Resources</h1>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h1 className="font-semibold text-lg mb-3">Social Links</h1>

          <div className="flex gap-3">
            <img src="/square-instagram-brands-solid.png" className="w-10 h-10 bg-purple-100 p-2 rounded-full" />
            <img src="/facebook-brands-solid.png" className="w-10 h-10 bg-purple-100 p-2 rounded-full" />
            <img src="/x-twitter-brands-solid.png" className="w-10 h-10 bg-purple-100 p-2 rounded-full" />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2026 DigiTools. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;