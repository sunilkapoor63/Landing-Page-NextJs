import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 lg:mb-0">
          <Image src="/logo.png" alt="Company Logo" width={50} height={50} className="mr-2" />
          <div>
            <h3 className="text-lg font-bold">My Company</h3>
            <p className="text-sm">DEMO COMPANY</p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <span>📞</span>
            <span>+91 0000000000</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>✉️</span>
            <span>demo@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📍</span>
            <span>Mumbai, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>📝</span>
            <span>Leave a request</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>We work throughout the world</p>
      </div>
    </footer>
  );
};

export default Footer;
