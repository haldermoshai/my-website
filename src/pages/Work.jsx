// Work.jsx

import { workItems } from "../components/siteData";

const Work = () => {
  return (
    <>
      <div className="mx-auto p-8 w-full justify-center flex flex-col items-center">
        <h1 className="text-xl font-semibold">Welcome to my Stories of India. Here you’ll find a selection of my work.</h1>
        <h1 className="text-xl font-semibold">Explore my frames to know more about my work.</h1>
      </div>
      <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mt-2 px-8 xl:px-0">
        {workItems.map((item, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={item.src}
              alt={item.alt}
              className="z-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left pr-4">
              <h1 className="text-md font-semibold text-white">{item.title}</h1>
              <p className="mt-2 text-xs text-gray-300">
                {item.description}
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Work &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Work;