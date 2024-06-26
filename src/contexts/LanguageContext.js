import React, { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    console.log("Idioma cambiado a:", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
