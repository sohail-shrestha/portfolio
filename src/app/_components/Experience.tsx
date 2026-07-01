'use client';
import type { Experience as ExperienceType } from '@/data/portfolio';
import { experiences } from '@/data/portfolio';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Cycle through these colors for each experience timeline dot
const DOT_COLORS = [
  { dot: '#d0bcff', border: '#d0bcff40', text: '#d0bcff' }, // primary
  { dot: '#c0c1ff', border: '#c0c1ff40', text: '#c0c1ff' }, // secondary
  { dot: '#eac33e', border: '#eac33e40', text: '#eac33e' }, // tertiary
  { dot: '#4F46E5', border: '#4F46E540', text: '#a5b4fc' }, // indigo
  { dot: '#d0bcff', border: '#d0bcff40', text: '#d0bcff' },
];

interface ExperienceModalProps {
  experience: ExperienceType;
  isOpen: boolean;
  onClose: () => void;
  colorIdx: number;
}

const ExperienceModal = ({ experience, isOpen, onClose, colorIdx }: ExperienceModalProps) => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const td = t as unknown as (key: string, opts?: Record<string, unknown>) => unknown;
  const color = DOT_COLORS[colorIdx % DOT_COLORS.length];

  if (!isOpen) return null;

  const descriptions = td(
    `portfolio:experiences.${experience.id}.description`,
    { returnObjects: true }
  ) as string[];
  const title = td(`portfolio:experiences.${experience.id}.title`, {
    defaultValue: experience.title,
  }) as string;
  const company = td(`portfolio:experiences.${experience.id}.company`, {
    defaultValue: experience.company,
  }) as string;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4'
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3 }}
          className='glass-panel rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-[#494454]/40'
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div
            className='sticky top-0 border-b border-[#494454]/40 p-6 rounded-t-2xl'
            style={{ background: 'rgba(20, 27, 43, 0.95)', backdropFilter: 'blur(12px)' }}
          >
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='text-xl font-bold mb-1' style={{ color: color.text }}>
                  {title}
                </h3>
                <p className='text-[#9CA3AF] font-medium text-sm'>
                  {company} · {experience.location}
                </p>
                <span
                  className='inline-block px-3 py-1 rounded-full text-xs font-medium mt-2'
                  style={{
                    background: `${color.dot}15`,
                    color: color.text,
                    border: `1px solid ${color.border}`,
                  }}
                >
                  {experience.startDate} — {experience.endDate}
                </span>
              </div>
              <button
                onClick={onClose}
                className='text-[#9CA3AF] hover:text-[#dce2f7] transition-colors text-2xl font-bold leading-none'
              >
                ×
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className='p-6 space-y-6'>
            <div>
              <h4 className='text-sm font-bold text-[#dce2f7] uppercase tracking-wide mb-4'>
                {t('experience.keyAccomplishments')}
              </h4>
              <div className='space-y-3'>
                {descriptions.map((desc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className='flex items-start gap-3'
                  >
                    <span className='mt-1 text-sm shrink-0' style={{ color: color.text }}>•</span>
                    <p className='text-[#9CA3AF] leading-relaxed text-sm'>{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className='text-sm font-bold text-[#dce2f7] uppercase tracking-wide mb-4'>
                {t('experience.technologiesTools')}
              </h4>
              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className='px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2e3545]/60 text-[#dce2f7]'
                  >
                    {tech}
                  </span>
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
  const { t } = useTranslation(['ui', 'portfolio']);
  const td = t as unknown as (key: string, opts?: Record<string, unknown>) => unknown;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const color = DOT_COLORS[index % DOT_COLORS.length];

  const title = td(`portfolio:experiences.${experience.id}.title`, {
    defaultValue: experience.title,
  }) as string;
  const company = td(`portfolio:experiences.${experience.id}.company`, {
    defaultValue: experience.company,
  }) as string;
  const descriptions = td(
    `portfolio:experiences.${experience.id}.description`,
    { returnObjects: true }
  ) as string[];

  const showMoreThreshold = 3;
  const shouldShowMore = descriptions.length > showMoreThreshold;
  const displayedDescriptions = shouldShowMore
    ? descriptions.slice(0, showMoreThreshold)
    : descriptions;

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      viewport={{ once: true }}
      className='flex gap-6'
    >
      {/* Timeline dot + line */}
      <div className='flex-none flex flex-col items-center'>
        <div
          className='w-11 h-11 rounded-full flex items-center justify-center shrink-0 relative'
          style={{
            background: `${color.dot}20`,
            border: `1px solid ${color.border}`,
          }}
        >
          <div className='w-3 h-3 rounded-full' style={{ background: color.dot }} />
          {/* line below */}
          {index < experiences.length - 1 && (
            <div
              className='absolute top-full mt-1 w-px'
              style={{
                height: '100%',
                minHeight: '80px',
                background: `linear-gradient(to bottom, ${color.dot}40, transparent)`,
              }}
            />
          )}
        </div>
      </div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className='glass-panel p-6 rounded-2xl flex-1 mb-10 hover:border-[#d0bcff]/20 transition-colors'
      >
        <div className='flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2'>
          <div>
            <h3 className='text-lg font-bold text-[#dce2f7]'>{title}</h3>
            <p className='font-medium text-sm' style={{ color: color.text }}>{company}</p>
            <p className='text-[#9CA3AF] text-xs mt-0.5'>{experience.location}</p>
          </div>
          <span
            className='self-start md:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium shrink-0'
            style={{
              background: '#2e3545',
              color: '#9CA3AF',
            }}
          >
            {experience.startDate} — {experience.endDate}
          </span>
        </div>

        <div className='space-y-2 mb-4'>
          {displayedDescriptions.map((desc, descIndex) => (
            <div key={descIndex} className='flex items-start gap-2'>
              <span className='mt-1 text-xs shrink-0' style={{ color: color.text }}>•</span>
              <p className='text-[#9CA3AF] text-sm leading-relaxed'>{desc}</p>
            </div>
          ))}
          {shouldShowMore && (
            <button
              onClick={() => setIsModalOpen(true)}
              className='text-sm font-medium mt-1 transition-colors duration-200 flex items-center gap-1'
              style={{ color: color.text }}
            >
              {t('experience.showMore', {
                count: descriptions.length - showMoreThreshold,
              })} →
            </button>
          )}
        </div>

        <div className='flex flex-wrap gap-2'>
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={`${tech}-${techIndex}`}
              className='bg-[#2e3545]/60 text-[#dce2f7] px-2.5 py-1 rounded-md text-xs font-medium'
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <ExperienceModal
        experience={experience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        colorIdx={index}
      />
    </motion.div>
  );
};

const Experience = () => {
  const { t } = useTranslation('ui');

  return (
    <section
      id='experience'
      className='py-24 px-5 md:px-20 bg-[#070e1d]/50'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#dce2f7] mb-4'>
            Professional{' '}
            <span className='text-[#c0c1ff]'>Experience</span>
          </h2>
          <p className='text-[#9CA3AF] max-w-xl mx-auto'>{t('experience.subtitle')}</p>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-center mt-10'
        >
          <motion.a
            href='/Sohail_CV.pdf'
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base'
          >
            📄 {t('experience.downloadResume')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export { Experience };
