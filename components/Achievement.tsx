import React from "react";
import NumberTicker from "./magicui/number-ticker";

const Achievement = () => {
  return (
    <div className=" bg-no-repeat bg-center p-1 w-full rounded-2xl  bg-cover md:p-4 bg-[url('/MobileAc.png')]  sm:bg-[url('/Achievement.png')]">
      <div className="flex flex-col py-6">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-medium text-center mb-8 px-2">
          We are passionate about helping businesses grow and succeed in the
          digital age. <br /> We take pride in our work and strive to exceed{" "}
          <br /> your expectations every time.
        </h1>
        <div className="flex flex-col sm:flex-row text-center gap-10 md:gap-20 justify-center bg-gradient-to-r from-[#38C682] to-[#00796D] rounded-3xl p-5">
          <span>
            <p className="whitespace-pre-wrap text-5xl lg:text-7xl font-semibold tracking-tighter">
              <NumberTicker value={100} />
            </p>
            <h3 className="font-normal text-md md:text-lg text-[#F3F3F3] ">Years Of Experience</h3>
          </span>
          <span>
            <p className="whitespace-pre-wrap text-5xl lg:text-7xl font-semibold tracking-tighter ">
              <NumberTicker value={666} />
            </p>
            <h3 className="font-normal text-md md:text-lg text-[#F3F3F3] ">Project Completed</h3>
          </span>
          <span>
            <p className="whitespace-pre-wrap text-5xl lg:text-7xl font-semibold tracking-tighter">
              <NumberTicker value={555} />
            </p>
            <h3 className="font-normal text-md md:text-lg text-[#F3F3F3] ">Satisfied Client</h3>
          </span>
          <span>
            <p className="whitespace-pre-wrap text-5xl lg:text-7xl font-semibold tracking-tighter ">
              <NumberTicker value={10} />
            </p>
            <h3 className="font-normal text-md md:text-lg text-[#F3F3F3] ">Awards Achieved</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
