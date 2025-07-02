'use client';
import type { Project } from '@/data/portfolio';
import { projects } from '@/data/portfolio';
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
      <div className='h-48 bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-6xl text-white relative overflow-hidden'>
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          💻
        </motion.div>
        <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
      </div>

      <div className='p-6'>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className='text-xl xs:text-2xl font-bold text-gray-800 mb-3 group-hover:text-violet-600 transition-colors duration-300'
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 mb-4 text-sm xs:text-base'
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          viewport={{ once: true }}
          className='flex flex-wrap gap-2 mb-4'
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
              className='bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-xs xs:text-sm font-medium'
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
          className='flex gap-3'
        >
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex-1 bg-gray-800 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 transition-colors duration-300 text-sm xs:text-base'
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
              className='flex-1 bg-violet-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-violet-700 transition-colors duration-300 text-sm xs:text-base'
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
          className='text-center mb-16'
        >
          <h2 className='text-4xl xs:text-5xl sm:text-6xl font-bold text-gradient mb-6'>
            Featured Projects
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-6'></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-gray-600 max-w-2xl mx-auto text-base xs:text-lg'
          >
            Here are some of my recent projects that showcase my skills in
            full-stack development, modern frameworks, and creative
            problem-solving.
          </motion.p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
          className='text-center mt-16'
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block'
          >
            <a
              href='https://github.com/sohailshrestha'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-violet-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              <span className='mr-2'>👀</span>
              View More Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Projects };
