'use client';
import { aboutMe } from '@/data/portfolio';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section
      id='about'
      className='min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 py-16 px-4 xs:px-6 sm:px-8'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl xs:text-5xl sm:text-6xl font-bold text-gradient mb-6'>
            About Me
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto'></div>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex justify-center lg:justify-start'
          >
            <div className='relative'>
              <div className='w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-violet-400 to-indigo-500 rounded-full p-2'>
                <div className='w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-6xl text-gray-500'>
                  👨‍💻
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className='absolute -top-4 -right-4 w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center text-white text-2xl'
              >
                ⚡
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='absolute -bottom-2 -left-4 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl'
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className='text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-800 mb-2'
              >
                {aboutMe.name}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className='text-lg xs:text-xl text-violet-600 font-semibold mb-4'
              >
                {aboutMe.title}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className='text-gray-600 leading-relaxed text-base xs:text-lg'
            >
              {aboutMe.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className='flex flex-wrap gap-4'
            >
              <motion.a
                href={aboutMe.github}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2'
              >
                <span>🐙</span> GitHub
              </motion.a>
              <motion.a
                href={aboutMe.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2'
              >
                <span>💼</span> LinkedIn
              </motion.a>
              <motion.a
                href={aboutMe.resume}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-300 flex items-center gap-2'
              >
                <span>📄</span> Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6'
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '3+', label: 'Projects Completed' },
            { number: '10+', label: 'Technologies' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              viewport={{ once: true }}
              className='text-center p-6 bg-white rounded-xl shadow-lg card-hover'
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className='text-2xl xs:text-3xl sm:text-4xl font-bold text-gradient mb-2'
              >
                {stat.number}
              </motion.div>
              <p className='text-gray-600 text-sm xs:text-base'>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { About };
