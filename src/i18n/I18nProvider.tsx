'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './config';

export const SUPPORTED_LOCALES = ['en', 'ne', 'ja', 'es', 'de', 'zh', 'uk', 'fr', 'ru'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
});

export const useLocale = () => useContext(LocaleContext);

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('portfolio-locale');
      if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
        const l = stored as Locale;
        setLocaleState(l);
        i18n.changeLanguage(l);
        document.documentElement.lang = l;
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    i18n.changeLanguage(newLocale);
    try {
      localStorage.setItem('portfolio-locale', newLocale);
    } catch {
      // localStorage unavailable
    }
    document.documentElement.lang = newLocale;
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  );
}
