import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div
      name="home"
      className="pt-20 min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center min-h-screen">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            {t("home_text1")}
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            {t("home_text3")}
            {t("home_text2")}
          </p>
          <div>
            <Link
              to={"portfolio"}
              smooth
              duration={500}
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowNarrowRight className="ml-2" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
