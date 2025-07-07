'use client';
import { aboutMe } from '@/data/portfolio';
import { motion } from 'motion/react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='home'
      className='min-h-screen bg-gradient-to-br from-violet-400 via-violet-500 to-indigo-600 flex items-center justify-center relative overflow-hidden'
    >
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl'
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute top-1/3 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl'
        />
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='absolute bottom-20 left-1/4 w-16 h-16 bg-white/8 rounded-full blur-xl'
        />
      </div>

      <div className='container mx-auto px-4 xs:px-6 sm:px-8 text-center text-white relative z-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-8'
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className='text-6xl xs:text-7xl sm:text-8xl md:text-9xl mb-4'
          >
            👋
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='space-y-4'
        >
          <motion.h1
            className='text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, I&apos;m{' '}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent'
            >
              {aboutMe.name.split(' ')[0]}
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='text-xl xs:text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-100 mb-6'
          >
            {aboutMe.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className='text-base xs:text-lg sm:text-xl text-violet-100 max-w-2xl mx-auto leading-relaxed mb-8'
          >
            I create beautiful, functional, and scalable web applications that
            make a difference.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className='flex flex-col xs:flex-row gap-4 justify-center items-center'
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-violet-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2'
          >
            <span>🚀</span>
            View My Work
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 flex items-center gap-2'
          >
            <span>👨‍💻</span>
            About Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className='flex justify-center gap-6 mt-12'
        >
          {[
            { url: aboutMe.github, icon: '🐙', label: 'GitHub' },
            { url: aboutMe.linkedin, icon: '💼', label: 'LinkedIn' },
            { url: aboutMe.getEmailLink(), icon: '📧', label: 'Email' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl hover:bg-white/30 transition-all duration-300'
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='text-white/70 hover:text-white transition-colors duration-300'
          >
            <div className='flex flex-col items-center gap-2'>
              <span className='text-sm'>Scroll Down</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className='text-2xl'
              >
                ↓
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
