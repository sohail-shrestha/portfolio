import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import dePortfolio from './locales/de/portfolio.json';
import deUi from './locales/de/ui.json';
import enPortfolio from './locales/en/portfolio.json';
import enUi from './locales/en/ui.json';
import esPortfolio from './locales/es/portfolio.json';
import esUi from './locales/es/ui.json';
import frPortfolio from './locales/fr/portfolio.json';
import frUi from './locales/fr/ui.json';
import jaPortfolio from './locales/ja/portfolio.json';
import jaUi from './locales/ja/ui.json';
import nePortfolio from './locales/ne/portfolio.json';
import neUi from './locales/ne/ui.json';
import ruPortfolio from './locales/ru/portfolio.json';
import ruUi from './locales/ru/ui.json';
import ukPortfolio from './locales/uk/portfolio.json';
import ukUi from './locales/uk/ui.json';
import zhPortfolio from './locales/zh/portfolio.json';
import zhUi from './locales/zh/ui.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { ui: enUi, portfolio: enPortfolio },
    ne: { ui: neUi, portfolio: nePortfolio },
    ja: { ui: jaUi, portfolio: jaPortfolio },
    es: { ui: esUi, portfolio: esPortfolio },
    de: { ui: deUi, portfolio: dePortfolio },
    zh: { ui: zhUi, portfolio: zhPortfolio },
    uk: { ui: ukUi, portfolio: ukPortfolio },
    fr: { ui: frUi, portfolio: frPortfolio },
    ru: { ui: ruUi, portfolio: ruPortfolio },
  },
  lng: 'en',
  fallbackLng: 'en',
  ns: ['ui', 'portfolio'],
  defaultNS: 'ui',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
