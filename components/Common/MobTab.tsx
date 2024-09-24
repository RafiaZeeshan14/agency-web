"use client"

import React, { useState } from 'react';
import Card from './Card';

const MobTab = () => {
  const [activeMobTab, setActiveMobTab] = useState('UI/UX'); 

  const Mobtabs = ['UI/UX', 'Digital', 'SMM', 'Dev'];

  const renderMobCards = () => {
    if (activeMobTab === 'UI/UX') {
      return (
        <div className=" flex flex-col justify-center items-center gap-10">
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
    } else if (activeMobTab === 'Digital') {
      return (
        <div className="flex flex-col justify-center items-center gap-10">
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
    } else if (activeMobTab === 'SMM') {
        return (
          <div className="flex flex-col justify-center items-center gap-10">
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
      }else if (activeMobTab === 'Dev') {
        return (
          <div className="flex flex-col justify-center items-center gap-10">
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
        <div className="flex gap-8 bg-gray-50 rounded-full py-2  px-5 text-sm justify-center items-center mx-auto">
          {Mobtabs.map((tabs) => (
            <p
              key={tabs}
              onClick={() => setActiveMobTab(tabs)}
              className={` p-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeMobTab === tabs
                  ? 'bg-gradient-to-r from-[#38C682] to-[#00796D] text-white px-2'
                  : 'text-black'
              }`}
            >
              {tabs}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-12 sm:hidden">
        {renderMobCards()}
      </div>
    </div>
  );
};

export default MobTab;
