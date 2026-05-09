import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("about")}
          </p>
        </div>
        <p className="text-xl">{t("about_text")}</p>
        <br />
        <p className="text-2xl border-b-4 inline w-[130px]">
          {t("experience")}
        </p>
        <p className="text-xl pt-8">{t("experience_text1")}</p>
        <br />
        <p className="text-xl">{t("experience_text2")}</p>
        <br />
        <p className="text-xl">{t("experience_text3")}</p>
        <br />
        <p className="text-xl">{t("experience_text4")}</p>
        <br />
        <p className="text-xl">{t("experience_text5")}</p>
      </div>
    </div>
  );
};

export default About;
