'use client';
import { aboutMe } from '@/data/portfolio';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation(['ui', 'portfolio']);

  const emailLink = aboutMe.getEmailLink();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id='home'
      className='relative min-h-screen bg-[#0c1322] flex items-center justify-center pt-24 overflow-hidden px-5 md:px-20'
    >
      {/* Subtle background glow */}
      <div className='absolute inset-0 pointer-events-none'>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6d3bd7] blur-[120px]'
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className='absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#3131c0] blur-[120px]'
        />
      </div>

      <div className='relative z-10 text-center max-w-4xl mx-auto'>
        {/* Available for hire badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-6'
        >
          <span className='inline-block px-4 py-1 rounded-full bg-[#d0bcff]/10 border border-[#d0bcff]/20 text-[#d0bcff] text-xs font-bold uppercase tracking-widest font-mono'>
            Available for hire
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-4xl xs:text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6'
        >
          {t('hero.greeting')}{' '}
          <span className='text-gradient'>{aboutMe.name}</span>
          <br />
          <span className='text-[#dce2f7]'>{t('portfolio:about.title')}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed'
        >
          {t('hero.tagline')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col xs:flex-row items-center justify-center gap-4'
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ y: -2, boxShadow: '0 10px 20px -10px rgba(109,59,215,0.5)' }}
            whileTap={{ scale: 0.95 }}
            className='btn-primary w-full xs:w-auto px-10 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2'
          >
            🚀 {t('hero.viewWork')}
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='w-full xs:w-auto px-10 py-4 rounded-xl border border-[#494454] text-[#dce2f7] font-semibold text-base hover:bg-[#191f2f] transition-all flex items-center justify-center gap-2'
          >
            👨‍💻 {t('hero.aboutMe')}
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className='flex justify-center gap-5 mt-12'
        >
          {[
            { url: aboutMe.github, icon: <FaGithub size={20} />, label: 'GitHub' },
            { url: aboutMe.linkedin, icon: <FaLinkedin size={20} />, label: 'LinkedIn' },
            { url: emailLink, icon: <SiGmail size={20} />, label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className='w-11 h-11 glass-panel rounded-full flex items-center justify-center text-[#9CA3AF] hover:text-[#d0bcff] transition-colors duration-300'
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2'
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='text-[#9CA3AF] hover:text-[#d0bcff] transition-colors duration-300'
          >
            <div className='flex flex-col items-center gap-1'>
              <span className='text-xs'>{t('hero.scrollDown')}</span>
              <span className='text-xl'>↓</span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
