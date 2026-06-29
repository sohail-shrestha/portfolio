import 'i18next';
import type enPortfolio from './locales/en/portfolio.json';
import type enUi from './locales/en/ui.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'ui';
    resources: {
      ui: typeof enUi;
      portfolio: typeof enPortfolio;
    };
  }
}
