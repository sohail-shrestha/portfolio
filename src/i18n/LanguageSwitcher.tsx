'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { type Locale, useLocale } from './I18nProvider';

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ne', label: 'नेपाली', flag: '🇳🇵' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export default function LanguageSwitcher({
  isScrolled = false,
}: {
  isScrolled?: boolean;
}) {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <div className='relative'>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
          isScrolled
            ? 'text-gray-700 hover:bg-violet-100 hover:text-violet-600'
            : 'text-white hover:bg-white/20'
        }`}
        title='Change language'
      >
        <span className='text-base leading-none'>{current.flag}</span>
        <span className='text-sm'>🌐</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className='fixed inset-0 z-10'
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.15 }}
              className='absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-20 min-w-[150px]'
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-4 py-2.5 text-sm transition-colors duration-150 ${
                    locale === lang.code
                      ? 'bg-violet-100 text-violet-700 font-semibold'
                      : 'text-gray-700 hover:bg-violet-50 hover:text-violet-600'
                  }`}
                >
                  <span className='text-base'>{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
