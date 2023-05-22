import React from "react";
import Oasis from "../assets/portfolio/Oasis.JPG";
import DogApp from "../assets/portfolio/DogApp.JPG"
import MyPortfolio from "../assets/portfolio/Myportfolio.JPG"



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: DogApp,
      demo: "https://pi-dogs-fuj6.vercel.app/",
      code: "https://github.com/Dota43ver/PI-Dogs"
    },
    {
      id: 2,
      src: Oasis,
      demo: "https://oasis-library.vercel.app/",
      code: "https://github.com/Dota43ver/OasisLibrary"
    },
    {
      id: 3,
      src: MyPortfolio,
      demo: "https://oasis-library.vercel.app/",
      code: "https://github.com/Dota43ver/my-portfolio"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-[100px]"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-[500px] h-[200px] "
              />
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
                  Demo
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;