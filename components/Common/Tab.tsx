"use client"

import React, { useState } from 'react';
import Card from './Card';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('UI/UX Design'); 

  const tabs = ['UI/UX Design', 'Digital Marketing', 'Management', 'Development'];

  const renderCards = () => {
    if (activeTab === 'UI/UX Design') {
      return (
        <div className=" flex justify-center gap-10">
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
    } else if (activeTab === 'Digital Marketing') {
      return (
        <div className="flex justify-center gap-10">
          <Card
            image="/CardImg1.png"
            title="Marketing Card 1"
            desc="This is a description for Marketing card 1."
             link='/'
          />
          <Card
            image="/CardImg1.png"
            title="Marketing Card 2"
            desc="This is a description for Marketing card 2."
             link='/'
          />
        </div>
      );
    } else if (activeTab === 'Management') {
        return (
          <div className="flex justify-center gap-10">
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
      }else if (activeTab === 'Development') {
        return (
          <div className="flex justify-center gap-10">
            <Card
              image="/CardImg1.png"
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
      <div className="py-6 flex justify-center">
        <div className="flex gap-10 bg-gray-50 rounded-full py-1.5 pl-1 pr-5 text-sm justify-center items-center mx-auto">
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#38C682] to-[#00796D] text-white'
                  : 'text-black'
              }`}
            >
              {tab}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-12">
        {renderCards()}
      </div>
    </div>
  );
};

export default Tab;
