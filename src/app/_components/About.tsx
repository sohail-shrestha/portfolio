'use client';
import { aboutMe } from '@/data/portfolio';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const STATS = [
  { number: '8+', labelKey: 'about.stats.yearsExperience', borderColor: '#d0bcff' },
  { number: '6+', labelKey: 'about.stats.projectsCompleted', borderColor: '#c0c1ff' },
  { number: '20+', labelKey: 'about.stats.technologies', borderColor: '#eac33e' },
  { number: '100%', labelKey: 'about.stats.clientSatisfaction', borderColor: '#4F46E5' },
];

const About = () => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const td = t as unknown as (key: string, opts?: Record<string, unknown>) => string;

  return (
    <>
      {/* Stats Row */}
      <section className='py-12 px-5 md:px-20 bg-[#0c1322]'>
        <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6'>
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='glass-panel p-6 rounded-2xl text-center'
              style={{ borderBottom: `4px solid ${stat.borderColor}40` }}
            >
              <div
                className='text-3xl font-extrabold mb-1'
                style={{ color: stat.borderColor }}
              >
                {stat.number}
              </div>
              <div className='text-xs font-bold text-[#9CA3AF] uppercase tracking-wide'>
                {td(stat.labelKey)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-24 px-5 md:px-20 bg-[#0c1322]'
      >
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center'>
          {/* Photo / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='aspect-square rounded-3xl overflow-hidden glass-panel p-3'>
              <div className='w-full h-full rounded-2xl relative group overflow-hidden'>
                <Image
                  src='/images/profile-picture.png'
                  alt='Sohail Shrestha'
                  fill
                  className='object-cover object-top'
                  priority
                />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-40' />
              </div>
            </div>
            {/* Quote badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='absolute -bottom-6 -right-4 md:-right-6 glass-panel px-5 py-3 rounded-2xl border border-[#d0bcff]/20 hidden sm:block max-w-[220px]'
            >
              <p className='font-mono text-[#d0bcff] text-xs italic'>
                "{t('about.quote')}"
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <h2 className='text-3xl md:text-4xl font-bold text-[#dce2f7]'>
              {t('about.heading').split(' ')[0]}{' '}
              <span className='text-[#d0bcff]'>
                {t('about.heading').split(' ').slice(1).join(' ')}
              </span>
            </h2>

            <div className='space-y-4 text-[#9CA3AF] text-base leading-relaxed'>
              <p>{t('portfolio:about.description')}</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex flex-wrap gap-4 pt-2'
            >
              <motion.a
                href={aboutMe.github}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='glass-panel text-[#dce2f7] px-5 py-2.5 rounded-lg font-semibold text-sm hover:border-[#d0bcff]/30 transition-colors flex items-center gap-2'
              >
                <FaGithub size={16} /> {t('about.github')}
              </motion.a>
              <motion.a
                href={aboutMe.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='glass-panel text-[#dce2f7] px-5 py-2.5 rounded-lg font-semibold text-sm hover:border-[#c0c1ff]/30 transition-colors flex items-center gap-2'
              >
                <FaLinkedin size={16} /> {t('about.linkedin')}
              </motion.a>
              <motion.a
                href={aboutMe.resume}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='btn-primary px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2'
              >
                📄 {t('about.resume')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export { About };
