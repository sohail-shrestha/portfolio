'use client';
import { aboutMe } from '@/data/portfolio';
import { motion } from 'motion/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-white py-12 px-4 xs:px-6 sm:px-8'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex justify-center items-center space-x-2 mb-6'
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className='w-8 h-8 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold'
            >
              S
            </motion.div>
            <span className='text-xl font-bold'>{aboutMe.name}</span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-gray-400 max-w-md mx-auto mb-8 text-sm xs:text-base'
          >
            Building the future with code, one line at a time. Let&apos;s create
            something amazing together.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className='flex justify-center gap-6 mb-8'
          >
            {[
              { url: aboutMe.github, icon: '🐙', label: 'GitHub' },
              { url: aboutMe.linkedin, icon: '💼', label: 'LinkedIn' },
              { url: `mailto:${aboutMe.email}`, icon: '📧', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className='w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-violet-600 transition-all duration-300'
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className='mb-8'
          >
            <motion.a
              href={`mailto:${aboutMe.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <span className='mr-2'>💬</span>
              Let&apos;s Work Together
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className='w-full h-px bg-gray-700 mb-6'
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className='text-gray-500 text-xs xs:text-sm'
          >
            © {currentYear} {aboutMe.name}. All rights reserved. Built with ❤️
            and lots of ☕
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export { Footer };
