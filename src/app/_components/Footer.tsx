'use client';
import { aboutMe } from '@/data/portfolio';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const currentYear = new Date().getFullYear();

  const subject = t('portfolio:emailTemplate.subject');
  const body = t('portfolio:emailTemplate.body');
  const emailLink = `mailto:${aboutMe.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className='w-full border-t border-[#494454]/20 bg-[#070e1d] py-8 px-5 md:px-20'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col md:flex-row justify-between items-center gap-6'
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className='font-extrabold text-lg text-[#dce2f7] tracking-tighter hover:text-[#d0bcff] transition-colors'
          >
            SOHAIL SHRESTHA
          </button>

          {/* Social links */}
          <div className='flex items-center gap-6'>
            {[
              {
                url: aboutMe.github,
                icon: <FaGithub size={18} />,
                label: 'GitHub',
              },
              {
                url: aboutMe.linkedin,
                icon: <FaLinkedin size={18} />,
                label: 'LinkedIn',
              },
              { url: emailLink, icon: <SiGmail size={18} />, label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className='text-[#9CA3AF] hover:text-[#d0bcff] transition-colors duration-300'
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className='text-[#9CA3AF] text-xs text-center md:text-right'>
            {t('footer.copyright', { year: currentYear, name: aboutMe.name })}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };
