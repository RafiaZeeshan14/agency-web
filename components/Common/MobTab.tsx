"use client"

import React, { useState } from 'react';
import Card from './Card';

const MobTab = () => {
  const [activeTab, setActiveTab] = useState('UI/UX Design'); 

  const tabs = [' UI/UX', ' Digital', 'SMM', 'Dev'];

  const renderCards = () => {
    if (activeTab === ' UI/UX') {
      return (
        <div className=" flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-10">
          <Card
            image="/CardImg1.png"
            title="UI/UX Card 1"
            desc="This is a description for UI/UX card 1."
            link='/'
          />
          <Card
            image="/CardImg2.png"
            title="UI/UX Card 2"
            desc="This is a description for UI/UX card 2."
             link='/'
          />
        </div>
      );
    } else if (activeTab === ' Digital') {
      return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <Card
            image="/CardImg2.png"
            title="Digital Card 1"
            desc="This is a description for Marketing card 1."
             link='/'
          />
          <Card
            image="/CardImg1.png"
            title="Digital Card 2"
            desc="This is a description for Marketing card 2."
             link='/'
          />
        </div>
      );
    } else if (activeTab === 'SMM') {
        return (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <Card
              image="/CardImg1.png"
              title="Management Card 1"
              desc="This is a description for Management card 1."
               link='/'
            />
            <Card
              image="/CardImg1.png"
              title="Management Card 2"
              desc="This is a description for Management card 2."
               link='/'
            />
          </div>
        );
      }else if (activeTab === 'Dev') {
        return (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <Card
              image="/CardImg2.png"
              title="Development Card 1"
              desc="This is a description for Development card 1."
               link='/'
            />
            <Card
              image="/CardImg1.png"
              title="Development Card 2"
              desc="This is a description for Development card 2."
               link='/'
            />
          </div>
        );
      }

  };

  return (
    <div>
      {/* Tab selection */}
      <div className="py-6 flex justify-center sm:hidden">
        <div className="flex sm:gap-10 gap-8 bg-gray-50 rounded-full py-2  px-5 text-sm justify-center items-center mx-auto">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`sm:p-3 p-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#38C682] to-[#00796D] text-white px-2'
                  : 'text-black'
              }`}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-12 sm:hidden">
        {renderCards()}
      </div>
    </div>
  );
};

export default MobTab;
