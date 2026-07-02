'use client';
import type { Project } from '@/data/portfolio';
import { aboutMe, projects } from '@/data/portfolio';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';

const ImageCarousel = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className='relative aspect-video overflow-hidden bg-[#191f2f] group'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className='absolute inset-0'
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} screenshot ${currentIndex + 1}`}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-500'
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-[#0c1322]/80 to-transparent pointer-events-none' />

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className='absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/75'
            aria-label='Previous image'
          >
            ‹
          </button>
          <button
            onClick={next}
            className='absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/75'
            aria-label='Next image'
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className='absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5'>
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                i === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const td = t as unknown as (
    key: string,
    opts?: Record<string, unknown>,
  ) => unknown;
  const [images, setImages] = useState<string[]>([]);

  const title = td(`portfolio:projects.${project.id}.title`, {
    defaultValue: project.title,
  }) as string;
  const description = td(`portfolio:projects.${project.id}.description`, {
    defaultValue: project.description,
  }) as string;

  useEffect(() => {
    if (!project.imageFolder) return;
    fetch(`/api/project-images/${project.imageFolder}`)
      .then((res) => res.json())
      .then((data: { images: string[] }) => {
        if (data.images.length > 0) setImages(data.images);
      })
      .catch(() => {});
  }, [project.imageFolder]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className='glass-panel rounded-3xl overflow-hidden flex flex-col'
    >
      {/* Image */}
      <div className='relative'>
        {images.length > 0 ? (
          <ImageCarousel images={images} title={title} />
        ) : (
          <div className='aspect-video bg-gradient-to-br from-[#6d3bd7]/40 to-[#3131c0]/40 flex items-center justify-center text-5xl relative overflow-hidden group'>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              💻
            </motion.div>
            <div className='absolute inset-0 bg-gradient-to-t from-[#0c1322]/80 to-transparent' />
          </div>
        )}
        {project.discontinued && (
          <span className='absolute top-2.5 right-2.5 z-20 bg-[#374151]/90 text-[#9CA3AF] text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide'>
            Discontinued
          </span>
        )}
      </div>

      <div className='p-4 flex flex-col flex-1'>
        <h3 className='text-lg font-bold text-[#dce2f7] mb-2'>{title}</h3>
        <p className='text-[#9CA3AF] text-sm leading-relaxed mb-4 flex-1'>
          {description}
        </p>

        {/* Tech pills */}
        <div className='flex flex-wrap gap-1.5 mb-5'>
          {project.technologies.slice(2).map((tech) => (
            <span
              key={tech}
              className='bg-[#2e3545]/60 text-[#dce2f7] px-2.5 py-1 rounded-md text-xs font-medium'
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className='flex gap-3'>
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              className='flex-1 glass-panel text-[#dce2f7] py-2 px-4 rounded-lg text-center font-medium text-sm hover:border-[#d0bcff]/30 transition-colors flex items-center justify-center gap-2'
            >
              <FaGithub size={14} /> {t('projects.code')}
            </motion.a>
          )}
          {project.liveUrl && (
            project.discontinued ? (
              <span className='flex-1 btn-primary py-2 px-4 rounded-lg text-center font-medium text-sm flex items-center justify-center gap-2 opacity-40 cursor-not-allowed pointer-events-none'>
                🚀 {t('projects.live')}
              </span>
            ) : (
              <motion.a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                className='flex-1 btn-primary py-2 px-4 rounded-lg text-center font-medium text-sm flex items-center justify-center gap-2'
              >
                🚀 {t('projects.live')}
              </motion.a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const emailLink = aboutMe.getEmailLink();

  return (
    <section id='projects' className='py-24 px-5 md:px-20 bg-[#0c1322]'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-[#dce2f7] mb-3'>
              {t('projects.heading').split(' ')[0]}{' '}
              <span className='text-[#eac33e]'>
                {t('projects.heading').split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className='text-[#9CA3AF] max-w-xl'>{t('projects.subtitle')}</p>
          </div>
          <motion.a
            href={emailLink}
            whileHover={{ x: 4 }}
            className='text-[#d0bcff] font-bold hover:underline flex items-center gap-2 text-sm shrink-0'
          >
            {t('projects.cta')} →
          </motion.a>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
