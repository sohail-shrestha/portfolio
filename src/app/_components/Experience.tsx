'use client';
import type { Experience as ExperienceType } from '@/data/portfolio';
import { experiences } from '@/data/portfolio';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

interface ExperienceModalProps {
  experience: ExperienceType;
  isOpen: boolean;
  onClose: () => void;
}

const ExperienceModal = ({
  experience,
  isOpen,
  onClose,
}: ExperienceModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4'
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ duration: 0.3 }}
          className='bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className='sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-xl'>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='text-2xl font-bold text-violet-600 mb-1'>
                  {experience.title}
                </h3>
                <p className='text-gray-600 font-medium'>
                  {experience.company} • {experience.location}
                </p>
                <span className='inline-block bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-medium mt-2'>
                  {experience.startDate} - {experience.endDate}
                </span>
              </div>
              <button
                onClick={onClose}
                className='text-gray-400 hover:text-gray-600 transition-colors duration-200 text-2xl font-bold'
              >
                ×
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className='p-6'>
            {/* All Accomplishments */}
            <div className='mb-6'>
              <h4 className='text-lg font-semibold text-gray-800 mb-4'>
                Key Accomplishments
              </h4>
              <div className='space-y-3'>
                {experience.description.map((desc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className='flex items-start gap-3'
                  >
                    <span className='text-violet-500 mt-1 text-sm'>•</span>
                    <p className='text-gray-600 leading-relaxed'>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className='text-lg font-semibold text-gray-800 mb-4'>
                Technologies & Tools
              </h4>
              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={`${tech}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className='bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 px-3 py-2 rounded-lg text-sm font-medium border border-violet-200'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: ExperienceType;
  index: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showMoreThreshold = 4;
  const shouldShowMore = experience.description.length > showMoreThreshold;
  const displayedDescriptions = shouldShowMore
    ? experience.description.slice(0, showMoreThreshold)
    : experience.description;
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
            {displayedDescriptions.map((desc, descIndex) => (
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

            {shouldShowMore && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className='text-violet-600 hover:text-violet-700 font-medium text-sm flex items-center gap-1 mt-2 transition-colors duration-200'
              >
                <span>
                  Show {experience.description.length - showMoreThreshold} more
                  accomplishments
                </span>
                <span className='text-xs'>→</span>
              </motion.button>
            )}
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
                key={`${tech}-${techIndex}`}
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

      {/* Experience Modal */}
      <ExperienceModal
        experience={experience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
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
              href='/Sohail_Shresth_CV.pdf'
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
