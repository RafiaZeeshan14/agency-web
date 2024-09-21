"use client";

import Button from "./Common/Button";
import BlurIn from "./magicui/blur-in";
import GradualSpacing from "./magicui/gradual-spacing";
import WordFadeIn from "./magicui/word-fade-in";

export default function Hero() {
  return (
    <section className="relative mt-36 text-white flex flex-col items-center justify-center text-center px-2 sm:px-4">
      {/* Top Small Text */}
      <p className="uppercase tracking-widest text-[10px] min-[400px]:text-xs px-4 mb-4  p-3 bg-white/20 rounded-full">
        <span className="text-white z-10">
          {" "}
          Number One Creative Digital Agency
        </span>
      </p>

      {/* Main Heading */}

      <span className="text-[32px] min-[400px]:text-[43px] sm:text-6xl leading-tight mb-4 font-extrabold">
        <GradualSpacing
          className="text-center font-extrabold text-white text-[35px] min-[400px]:text-[36px] sm:text-6xl md:text-7xl tracking-[-0.02em] bg-gradient-to-r from-[#38C682] to-[#00796D] text-transparent bg-clip-text overflow-visible"
          text="Smart Choices"
        />
        {/* <TypingAnimation text="Smart Choices"/> */}
        <BlurIn word="For Your Business Growth" />
      </span>
      <span className="sm:text-lg max-w-2xl mb-8 text-sm  ">
        <WordFadeIn
          words=" Were a team of experienced designers, developers, and marketers,
        passionate about delivering exceptional digital solutions."
        />
      </span>
      <Button text="Contact Us" showIcon={true} />
    </section>
  );
}
