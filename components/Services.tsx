"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import LetterPullup from "./magicui/letter-pullup";

const servicesData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.",
    image: "/UX.png",
  },
  {
    id: 2,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.",
    image: "/digital.png",
  },
  {
    id: 3,
    title: "Social Media Management",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.",
    image: "/social.webp",
  },
  {
    id: 4,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.",
    image: "/webdev.jpg",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div id="services" className="w-full max-w-3xl sm:max-w-5xl p-4 mx-auto">
      <span className=" flex justify-center  flex-col sm:flex-row mb-8 sm:gap-4 py-4 tracking-tight">
        <LetterPullup words={"The Services We Offer"} delay={0.05} className="hidden sm:flex"/>
        <span className="sm:hidden">

        <LetterPullup words={"The Services "} delay={0.05} />
        <LetterPullup words={" We Offer"} delay={0.05} />
        </span>
        <LetterPullup
          words={"For You"}
          delay={0.08}
          className="bg-gradient-to-r from-[#38C682] to-[#00796D] text-transparent bg-clip-text "
        />
      </span>

      {servicesData.map((service, index) => (
        <div key={service.id} className="border-b-2 mb-6 pb-4">
          <button
            onClick={() => toggleAccordion(index)}
            className="flex items-center justify-between w-full text-left"
          >
            <div className="flex items-center">
              <span className="text-lg font-bold mr-2">{`0${service.id}`}</span>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-[#38C682] to-[#00796D] text-transparent bg-clip-text">
                {service.title}
              </h3>
            </div>
            <span
              className={`flex items-center justify-center w-8 h-8 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-90" : "rotate-0"
              }`}
            >
              <FaArrowRight className="text-black" />
            </span>
          </button>

          <div
            style={{
              maxHeight: activeIndex === index ? "500px" : "0",
              opacity: activeIndex === index ? 1 : 0,
            }}
            className={`transition-all duration-300 ease-in-out overflow-hidden`}
          >
            <div className="mt-4">
              <p className="text-sm mb-4">{service.description}</p>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
