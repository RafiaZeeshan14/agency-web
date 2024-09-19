import React from 'react';

const CompanyList = () => {
  return (
    <div className='flex justify-center p-4'>
      <div className='grid grid-cols-2 sm:gap-x-16 md:flex gap-8 md:gap-7 lg:gap-[61px] items-center'>
        <img src="/slack.png" alt="Slack" className='w-32 md:w-24 lg:w-32' />
        <img src="/google.png" alt="Google" className='w-32 md:w-24 lg:w-32' />
        <img src="/netflix.png" alt="Netflix" className='w-32 md:w-24 lg:w-32 ' />
        <img src="/airbnb.png" alt="Airbnb" className='w-32 md:w-24 lg:w-32' />
        <img src="/adobe.png" alt="Adobe" className='w-32 md:w-24 lg:w-32' />
        <img src="/microsoft.png" alt="Microsoft" className='w-32 md:w-24 lg:w-32' />
      </div>
    </div>
  );
}

export default CompanyList;
