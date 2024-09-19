import React from 'react';

const Banner = () => {
  return (
    <div className="text-white relative bg-[url('/banner.png')] bg-no-repeat min-h-[70vh]  bg-center flex flex-col items-center justify-center">
        <h1 className='text-3xl font-semibold mb-16'>
          Benefits of improving your Business
        </h1>
      <div className="text-center">
        <div className='flex flex-wrap gap-16 justify-center'>
          <div className="flex flex-col items-center">
            <img src="/expand.png" alt="Expand Market" className="w-[75px] h-[75px] mb-2"/>
            <p>Expanding the Market</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/cost.png" alt="Cost Effective" className="w-[75px] h-[75px] mb-2"/>
            <p>Cost-Effective</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/professional.png" alt="More Professional" className="w-[75px] h-[75px] mb-2"/>
            <p>More Professional</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/client.png" alt="Attract Client" className="w-[75px] h-[75px] mb-2"/>
            <p>Attract Client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
