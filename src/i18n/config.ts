import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/en.json';
import translationES from './es/es.json';

export const defaultNS = 'en';

i18next.use(initReactI18next).init({
  debug: true,
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
