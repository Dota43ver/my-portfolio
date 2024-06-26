import React from "react";
import Oasis from "../assets/portfolio/Oasis.JPG";
import Argenblog from "../assets/portfolio/argenblog.JPG";
import Ezchat from "../assets/portfolio/ezchat.JPG";
import SmartStyle from "../assets/portfolio/SmartStyle.JPG";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  const portfolios = [
    {
      id: 1,
      src: Oasis,
      demo: "https://oasis-library.vercel.app/",
      code: "https://github.com/Dota43ver/OasisLibrary",
    },

    {
      id: 2,
      src: Argenblog,
      demo: "https://argen-blog.vercel.app/",
      code: "https://github.com/Dota43ver/Argen-blog",
    },

    {
      id: 3,
      src: Ezchat,
      demo: "https://ez-chat-mocha.vercel.app/",
      code: "https://github.com/Dota43ver/ez-chat",
    },
    {
      id: 4,
      src: SmartStyle,
      demo: "https://c14-26-m-java-react.vercel.app/",
      code: "https://github.com/No-Country/c14-26-m-java-react",
    },
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
                className="rounded-md duration-200 hover:scale-105 w-[500px] h-[200px] "
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
