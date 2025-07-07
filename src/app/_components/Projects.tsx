'use client';
import type { Project } from '@/data/portfolio';
import { aboutMe, projects } from '@/data/portfolio';
import { motion } from 'motion/react';

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='bg-white rounded-xl shadow-lg overflow-hidden card-hover group'
    >
      {/* Project Image/Icon */}
      <div className='h-32 xs:h-40 sm:h-48 bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-4xl xs:text-5xl sm:text-6xl text-white relative overflow-hidden'>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          💻
        </motion.div>
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
      </div>

      <div className='p-4 xs:p-5 sm:p-6'>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className='text-lg xs:text-xl sm:text-2xl font-bold text-gray-800 mb-2 xs:mb-3 group-hover:text-violet-600 transition-colors duration-300'
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 mb-3 xs:mb-4 text-sm leading-relaxed'
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          viewport={{ once: true }}
          className='flex flex-wrap gap-1.5 xs:gap-2 mb-3 xs:mb-4'
        >
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1 + 0.5 + techIndex * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className='bg-violet-100 text-violet-700 px-2 xs:px-3 py-1 rounded-full text-xs font-medium'
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col xs:flex-row gap-2 xs:gap-3'
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex-1 bg-gray-800 text-white py-2.5 xs:py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors duration-300 text-sm'
            >
              <span className='mr-2'>🐙</span>Code
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex-1 bg-violet-600 text-white py-2.5 xs:py-2 px-4 rounded-lg text-center font-medium hover:bg-violet-700 transition-colors duration-300 text-sm'
            >
              <span className='mr-2'>🚀</span>Live
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen bg-gradient-to-br from-indigo-50 to-violet-100 py-16 px-4 xs:px-6 sm:px-8'
    >
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12 xs:mb-16'
        >
          <h2 className='text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4 xs:mb-6'>
            Featured Projects
          </h2>
          <div className='w-20 xs:w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-4 xs:mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-gray-600 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg px-4'
          >
            Here are some of my recent projects that showcase my skills in
            full-stack development, modern frameworks, and creative
            problem-solving.
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className='text-center mt-12 xs:mt-16'
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className='text-gray-600 mb-4 xs:mb-6 text-base xs:text-lg px-4'
          >
            Have an interesting project in mind?
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block px-4'
          >
            <a
              href={aboutMe.getEmailLink()}
              className='block bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 xs:px-8 py-3 xs:py-4 rounded-lg font-semibold text-base xs:text-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center'
            >
              <span className='mr-2'>💬</span>
              Let&apos;s Work Together
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Projects };
