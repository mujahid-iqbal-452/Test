import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Footer Logo/Title */}
        <div className="text-xl font-bold">
          Parking System
        </div>

        {/* Footer Links */}
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/contact" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Parking System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
