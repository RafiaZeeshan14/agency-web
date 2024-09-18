import React from "react";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}
const Card: React.FC<CardProps> = ({ image, title, desc, link }) => {
  return (
    <div className="max-w-sm  bg-[#111827] rounded-lg shadow-lg p-6 hover:bg-gray-800 cursor-pointer">
      <div className="relative group">
        <img
          className="rounded-lg w-full h-auto"
          src={image}
          alt="Card Image"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#38C682]/[0.4] to-[#00796D]/[0.4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex justify-center items-center">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src="/Icon.png"
              alt="Special Icon"
              className="h-16 w-16 cursor-pointer opacity-100"
            />
          </a>
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
