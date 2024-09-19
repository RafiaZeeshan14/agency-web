import React from "react";
import Button from "./Common/Button";

const Footer = () => {
  return (
    <div className="bg-no-repeat bg-center min-h-screen sm:min-h-[100vh] flex flex-col justify-between pt-10 px-4 md:px-8 lg:px-16 bg-cover sm:bg-[url('/Footer.png')] bg-[url('/MobileFooter.png')] text-white">
      {/* Top Section: Let's Discuss & Button */}
      <div className="max-w-7xl flex flex-col md:flex-row justify-evenly items-center rounded-xl shadow-lg mb-8">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 p-5">
            Lets discuss and bring <br /> your vision to life.
          </h2>
        </div>
        <Button text="Let's Talk" showIcon={true} />
      </div>
      <p className="border-t border-gray-700 mb-12" />
      {/* Footer Links Section */}
       {/* Left Section */}
       <div className="space-y-4 sm:hidden">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>
          <p className="text-gray-300 text-sm">
            We&apos;re a team of experienced designers, developers, and marketers,
            passionate about delivering exceptional digital solutions.
          </p>
          <a
            href="mailto:hello@agenone.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            hello@agenone.com
          </a>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {/* Left Section */}
        <div className="space-y-4 hidden sm:block">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>
          <p className="text-gray-300 text-sm">
          We&apos;re a team of experienced designers, developers, and marketers,
            passionate about delivering exceptional digital solutions.
          </p>
          <a
            href="mailto:hello@agenone.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            hello@agenone.com
          </a>
        </div>

        {/* Menu Links */}
        <div>
          <h3 className="font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-4">Social Media</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Dribbble
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Behance
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <p className="border-t border-gray-700 mt-12" />
      <div className="text-center py-10">
        <p className="text-gray-500 text-sm">
          Copyright © 2024 by Agenone. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
