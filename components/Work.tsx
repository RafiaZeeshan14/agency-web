import React from "react";
import Tab from "./Common/Tab";
import CompanyList from "./Common/CompanyList";
import MobTab from "./Common/MobTab";

const Work = () => {
  return (
    <div className=" bg-no-repeat bg-center p-1 w-full rounded  bg-cover md:p-4 bg-[url('/MobileBg.png')]  sm:bg-[url('/Work.png')]">
      <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-center text-white mt-24">
        Our Projects Have Been{" "}
        <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] text-transparent bg-clip-text">
          Done
        </span>
      </h2>
      <p className="text-gray-200  text-md text-center px-2 sm:px-0">
        Take a look at some of our recent projects and see how we&apos;ve helped{" "}
        <br /> other businesses elevate their brand and drive business growth.
      </p>
      <Tab />
      <MobTab/>
      <p className=" border-b-[1px] border-gray-600"/>
      <CompanyList/>
    </div>
  );
};

export default Work;
