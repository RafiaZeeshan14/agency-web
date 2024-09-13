'use client'

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" px-4 py-2 flex justify-between items-center ">
      {/* Logo */}
      <div className="">
        <img src="/Logo.png" alt="Logo" className="" />
      </div>

      {/* Links (Desktop View) */}
      <ul className="hidden md:flex space-x-8 text-white ">
        <li>Home</li>
        <li><a href="#" className="">Services</a></li>
        <li><a href="#" className="">Project</a></li>
        <li><a href="#" className="">About Us</a></li>
      </ul>

      {/* Contact Us Button (Desktop View) */}
      <div className="hidden md:block">
        <a href="#" className="bg-gradient-to-r from-[#38C682] to-[#00796D] text-white px-4 py-2 rounded-full">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute z-10 bg-black/70 p-3 top-16 left-0 w-full flex flex-col items-center md:hidden">
          <li className="py-2"><a href="#" className="text-white hover:text-light-green">Home</a></li>
          <li className="py-2"><a href="#" className="text-white hover:text-light-green">Services</a></li>
          <li className="py-2"><a href="#" className="text-white hover:text-light-green">Project</a></li>
          <li className="py-2"><a href="#" className="text-white hover:text-light-green">About Us</a></li>
          <li className="py-2">
            <a href="#" className="bg-gradient-to-r from-[#38C682] to-[#00796D] text-white px-4 py-2 rounded-full">
              Contact Us
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
