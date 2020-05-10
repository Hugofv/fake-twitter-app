import LanguageDetector from 'i18next-browser-languagedetector';
import enUS from './translations/en-us';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './translations/pt-br';

const resources = {
  ptBR: { translation: ptBR },
  enUS: { translation: enUS },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ptBR',
    fallbackLng: 'ptBR',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
