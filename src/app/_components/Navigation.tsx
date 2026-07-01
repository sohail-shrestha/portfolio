'use client';
import { aboutMe } from '@/data/portfolio';
import LanguageSwitcher from '@/i18n/LanguageSwitcher';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = useMemo(
    () =>
      [
        { key: 'home', href: '#home' },
        { key: 'about', href: '#about' },
        { key: 'experience', href: '#experience' },
        { key: 'projects', href: '#projects' },
        { key: 'skills', href: '#skills' },
      ] as const,
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const emailLink = aboutMe.getEmailLink();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='fixed top-0 left-0 right-0 z-50 bg-[#0c1322]/80 backdrop-blur-xl border-b border-[#494454]/20 shadow-sm'
    >
      <div className='max-w-7xl mx-auto px-5 md:px-20'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='cursor-pointer'
            onClick={() => scrollToSection('#home')}
          >
            <span className='font-extrabold text-lg text-[#d0bcff] tracking-tighter'>
              SOHAIL SHRESTHA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.key
                    ? 'text-[#d0bcff] border-b-2 border-[#d0bcff] pb-0.5'
                    : 'text-[#9CA3AF] hover:text-[#d0bcff]'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <LanguageSwitcher isScrolled={false} />
          </div>

          {/* Get in Touch CTA */}
          <div className='hidden md:block'>
            <motion.a
              href={emailLink}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='btn-primary px-6 py-2 rounded-lg text-sm font-bold'
            >
              {t('footer.cta')}
            </motion.a>
          </div>

          {/* Mobile controls */}
          <div className='md:hidden flex items-center gap-2'>
            <LanguageSwitcher isScrolled={false} />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='p-2 rounded-lg text-[#dce2f7]'
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className='md:hidden bg-[#141b2b] border-t border-[#494454]/20 overflow-hidden'
      >
        <div className='px-4 py-2 space-y-1'>
          {navItems.map((item) => (
            <motion.button
              key={item.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ duration: 0.3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === item.key
                  ? 'text-[#d0bcff] bg-[#d0bcff]/10'
                  : 'text-[#9CA3AF] hover:text-[#d0bcff] hover:bg-[#d0bcff]/5'
              }`}
            >
              {t(`nav.${item.key}`)}
            </motion.button>
          ))}
          <div className='px-4 py-2'>
            <a
              href={emailLink}
              className='btn-primary block text-center px-6 py-2 rounded-lg text-sm font-bold'
            >
              {t('footer.cta')}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export { Navigation };
