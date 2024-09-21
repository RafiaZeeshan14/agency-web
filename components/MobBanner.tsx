"use client";
import { SetStateAction, useState } from "react";

export default function MobBanner() {
  const icons = [
    {
      imgSrc: "/expand.png",
      text: "Expanding the Market",
    },
    {
      imgSrc: "/cost.png",
      text: "Cost-Effective",
    },
    {
      imgSrc: "/professional.png",
      text: "More Professional",
    },
    {
      imgSrc: "/client.png",
      text: "Attract Client",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="text-white relative min-h-[80vh] bg-no-repeat bg-center p-4 bg-[url('/MobBanner.png')] sm:hidden flex flex-col items-center justify-center text-center">
      {/* Header Text */}
      <h1 className="text-xl font-medium mb-5 ">
        Benefits of improving <br/> your Business
      </h1>

      {/* Slider Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {icons.map((icon, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center justify-center space-y-4"
            >
              <img
                src={icon.imgSrc}
                alt={icon.text}
                className="w-[90px] h-[90px] mb-5 my-10"
              />
              <p className="text-lg font-medium">{icon.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-6">
        {icons.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
