// src/config/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Archivos de traducción
const resources = {
  es: {
    translation: {
      welcome: '¡Bienvenido a la página!',
      changeLanguage: 'Cambiar idioma',
      home: 'Inicio',
      about: 'Acerca de',
    },
  },
  en: {
    translation: {
      welcome: 'Welcome to the page!',
      changeLanguage: 'Change language',
      home: 'Home',
      about: 'About',
    },
  },
  // Agrega más idiomas según sea necesario
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Integra con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;