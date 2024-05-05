// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend"; // Importar backend para cargar los archivos JSON
import LanguageDetector from "i18next-browser-languagedetector"; // Opcional, para detectar el idioma del navegador

i18n
  .use(Backend) // Usar el backend para cargar los archivos de traducción
  .use(LanguageDetector) // Detectar el idioma del navegador automáticamente
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Camino para cargar los archivos de traducción
    },
  });

export default i18n;
