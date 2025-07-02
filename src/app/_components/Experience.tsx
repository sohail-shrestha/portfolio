'use client';
import type { Experience as ExperienceType } from '@/data/portfolio';
import { experiences } from '@/data/portfolio';
import { motion } from 'motion/react';

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className='relative'
    >
      {/* Timeline line */}
      <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-violet-400 to-indigo-500 hidden lg:block'></div>

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2 + 0.4,
          type: 'spring',
          stiffness: 200,
        }}
        viewport={{ once: true }}
        className='absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-violet-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block'
      ></motion.div>

      <div
        className={`lg:w-1/2 ${
          index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:ml-auto'
        }`}
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className='bg-white rounded-xl shadow-lg p-6 xs:p-8 card-hover'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col xs:flex-row xs:justify-between xs:items-start mb-4'
          >
            <div>
              <h3 className='text-xl xs:text-2xl font-bold text-violet-600 mb-1'>
                {experience.title}
              </h3>
              <p className='text-gray-600 font-medium text-sm xs:text-base'>
                {experience.company} • {experience.location}
              </p>
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 + 0.4 }}
              viewport={{ once: true }}
              className='bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs xs:text-sm font-medium mt-2 xs:mt-0 self-start'
            >
              {experience.startDate} - {experience.endDate}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true }}
            className='space-y-3 mb-4'
          >
            {experience.description.map((desc, descIndex) => (
              <motion.div
                key={descIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.4 + descIndex * 0.1,
                }}
                viewport={{ once: true }}
                className='flex items-start gap-3'
              >
                <span className='text-violet-500 mt-1 text-sm'>•</span>
                <p className='text-gray-600 text-sm xs:text-base leading-relaxed'>
                  {desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            viewport={{ once: true }}
            className='flex flex-wrap gap-2'
          >
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + 0.6 + techIndex * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className='bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs xs:text-sm font-medium'
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id='experience'
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
            Professional Experience
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-gray-600 max-w-2xl mx-auto text-base xs:text-lg'
          >
            My journey as a software engineer, building scalable applications
            and leading development teams.
          </motion.p>
        </motion.div>

        <div className='relative space-y-12'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block'
          >
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <span className='mr-2'>📄</span>
              Download Full Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Experience };
