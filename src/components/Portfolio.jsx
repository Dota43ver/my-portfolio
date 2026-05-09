import React from "react";
import Oasis from "../assets/portfolio/Oasis.JPG";
import SmartStyle from "../assets/portfolio/SmartStyle.JPG";
import Facushop from "../assets/portfolio/facushop.PNG"; 
import Clinic from "../assets/portfolio/clinic.JPG";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  
  const portfolios = [
    {
      id: 1,
      src: Facushop,
      demo: "https://facushop.facudev.xyz/",
      code: "https://github.com/Dota43ver/facushop",
    },
    {
      id: 2,
      src: Oasis,
      demo: "https://oasis.facudev.xyz/",
      code: "https://github.com/Dota43ver/OasisLibrary",
    },
    {
      id: 3,
      src: SmartStyle,
      demo: "https://c14-26-m-java-react.vercel.app/",
      code: "https://github.com/No-Country/c14-26-m-java-react",
    },
    {
      id: 4,
      src: Clinic,
      demo: "https://salud.facudev.xyz/",
      code: "https://github.com/Dota43ver/clinicapi-BACK",
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("projects")}
          </p>
          <p className="py-6">{t("projects_text")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-[500px] h-[200px] object-cover"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
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