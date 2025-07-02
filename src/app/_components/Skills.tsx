'use client';
import type { Skill } from '@/data/portfolio';
import { skills } from '@/data/portfolio';
import { motion } from 'motion/react';

const SkillCategory = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-white rounded-xl shadow-lg p-6 xs:p-8 card-hover'
    >
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className='text-xl xs:text-2xl font-bold text-violet-600 mb-4 flex items-center gap-2'
      >
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          {index === 0 ? '🎨' : index === 1 ? '⚙️' : index === 2 ? '🚀' : '💻'}
        </motion.span>
        {skill.category}
      </motion.h3>

      <div className='grid grid-cols-2 gap-3'>
        {skill.skills.map((skillItem, skillIndex) => (
          <motion.div
            key={skillItem}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 0.3 + skillIndex * 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -2 }}
            className='bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-3 py-2 rounded-lg text-xs xs:text-sm font-medium text-center cursor-pointer border border-violet-200 hover:border-violet-300 transition-all duration-300'
          >
            {skillItem}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id='skills'
      className='min-h-screen bg-gradient-to-br from-indigo-100 to-violet-50 py-16 px-4 xs:px-6 sm:px-8'
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
            Skills & Technologies
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-gray-600 max-w-2xl mx-auto text-base xs:text-lg'
          >
            A comprehensive overview of my technical expertise and the tools I
            use to bring ideas to life.
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 mb-16'>
          {skills.map((skill, index) => (
            <SkillCategory key={skill.category} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='bg-white rounded-xl shadow-lg p-6 xs:p-8'
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className='text-xl xs:text-2xl font-bold text-gray-800 mb-6 text-center'
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className='inline-block mr-2'
            >
              ⭐
            </motion.span>
            Additional Expertise
          </motion.h3>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {[
              'Agile/Scrum',
              'Code Review',
              'Mentoring',
              'Team Leadership',
              'CI/CD',
              'Testing',
              'Performance Optimization',
              'Security Best Practices',
            ].map((expertise, index) => (
              <motion.div
                key={expertise}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className='bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-3 rounded-lg text-xs xs:text-sm font-medium text-center hover:from-violet-100 hover:to-indigo-100 hover:text-violet-700 transition-all duration-300 cursor-pointer'
              >
                {expertise}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bars Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className='mt-8 bg-white rounded-xl shadow-lg p-6 xs:p-8'
        >
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className='text-xl xs:text-2xl font-bold text-gray-800 mb-6 text-center'
          >
            🎯 Core Competencies
          </motion.h3>

          <div className='space-y-6'>
            {[
              { skill: 'Frontend Development', level: 95 },
              { skill: 'Backend Development', level: 90 },
              { skill: 'System Design', level: 85 },
              { skill: 'Problem Solving', level: 98 },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className='flex justify-between mb-2'>
                  <span className='text-gray-700 font-medium text-sm xs:text-base'>
                    {item.skill}
                  </span>
                  <span className='text-violet-600 font-bold text-sm xs:text-base'>
                    {item.level}%
                  </span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-3'>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 1.3 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    viewport={{ once: true }}
                    className='bg-gradient-to-r from-violet-500 to-indigo-500 h-3 rounded-full'
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { Skills };
