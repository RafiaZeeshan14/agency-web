'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex justify-between items-center p-4">
      <div>
        <Image width={185} height={200} src="/Logo.png" alt="Logo" />
      </div>

      {/* Links (Desktop View) */}
      <ul className="hidden md:flex space-x-10 text-white">
        <li className="relative group">
          <Link href="/" className="hover:text-teal-400">Home</Link>
          <span className="absolute left-0 mt-1 right-0 bottom-[-4px] h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li>
        <li className="relative group">
          <Link href="#services" className="hover:text-teal-400">Services</Link>
          <span className="absolute left-0 mt-1 right-0 bottom-[-4px] h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li>
        <li className="relative group">
          <Link href="#work" className="hover:text-teal-400">Projects</Link>
          <span className="absolute left-0 mt-1 right-0 bottom-[-4px] h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li>
        <li className="relative group">
          <Link href="#reviews" className="hover:text-teal-400">Reviews</Link>
          <span className="absolute left-0 mt-1 right-0 bottom-[-4px] h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </li>
      </ul>

      <div className="hidden md:block">
      <Button text="Contact Us" showIcon={false} />
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden    z-50">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? (
            <svg
              className="w-6 h-6 text-white fixed right-4 top-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="bg-black bg-opacity-60 fixed inset-0 pt-16 text-sm left-0 z-40 flex flex-col items-center">
          <li className="py-3">
            <Link href="/" className="text-white hover:text-teal-400">Home</Link>
          </li>
          <li className="py-3">
            <Link href="#services" className="text-white hover:text-teal-400">Services</Link>
          </li>
          <li className="py-3">
            <Link href="#work" className="text-white hover:text-teal-400">Projects</Link>
          </li>
          <li className="py-3">
            <Link href="#reviews" className="text-white hover:text-teal-400">Reviews</Link>
          </li>
          <li className="py-3">
          <Button text="Contact Us" showIcon={false} />
          </li>
        </ul>
      )}
    </nav>
  );
}
