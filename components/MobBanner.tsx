"use client";

export default function MobBanner() {

  const icons = [
    {
      imgSrc: "/expand.png",
      text: "Expanding the Market",
    },
    {
      imgSrc: "/cost.png",
      text: "Cost-Effective",
    },
    {
      imgSrc: "/professional.png",
      text: "More Professional",
    },
    {
      imgSrc: "/client.png",
      text: "Attract Client",
    }
  ];

  
  return (
    <div>
      {/* Card Container */}
      <div className="relative h-screen bg-no-repeat bg-center p-4 bg-[url('/MobBanner.png')]">
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <p className="text-center font-semibold text-gray-800">Benefits of improving your business</p>

          <div className="w-full overflow-hidden relative">
            <div
              className="flex transition-transform duration-700 ease-in-out"
            >
              {icons.map((icon, index) => (
                <div key={index} className="flex-shrink-0 w-full flex flex-col items-center justify-center">
                  <img src={icon.imgSrc} alt={icon.text} className="w-[75px] h-[75px] mb-2" />
                  <p>{icon.text}</p>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}
