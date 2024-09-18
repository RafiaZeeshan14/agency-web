import React from "react";
import Tab from "./Common/Tab";

const Work = () => {
  return (
    <div className=" bg-[url('/Work.png')] bg-no-repeat p-2  bg-cover bg-center">
      <h2 className="text-5xl font-bold mb-6 text-center text-white mt-24">
        Our Projects Have Been{" "}
        <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] text-transparent bg-clip-text">
          Done
        </span>
      </h2>
      <p className="text-gray-200  text-md text-center">
        Take a look at some of our recent projects and see how weve helped{" "}
        <br /> other businesses elevate their brand and drive business growth.
      </p>
      <Tab />
    </div>
  );
};

export default Work;
