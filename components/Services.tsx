"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="w-full max-w-3xl sm:max-w-5xl p-4 mx-auto">
      <h2 className="text-5xl font-extrabold mb-8 text-center py-4 tracking-tight">
        The Services We Offer{" "}
        <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] text-transparent bg-clip-text">
          For You
        </span>
      </h2>

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
              maxHeight: activeIndex === index ? '500px' : '0', 
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
