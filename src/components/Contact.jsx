import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div
      name="contact"
      className="w-full md:min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white ">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto md:h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            {t("contact")}
          </p>
          <p className="py-6">{t("contact_text")}</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/f1e3cefd-49bf-4b37-aaee-d73d59b4663b"
            method="POST"
            className=" flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder={t("input_contact_1")}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder={t("input_contact_2")}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder={t("input_contact_3")}
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              {t("button_contact")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
