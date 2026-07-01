'use client';
import { skills } from '@/data/portfolio';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

const CATEGORY_KEYS: Record<string, string> = {
  'Frontend Development': 'frontendDevelopment',
  'Backend Development': 'backendDevelopment',
  'Databases & Storage': 'databasesAndStorage',
  'Cloud & DevOps': 'cloudAndDevOps',
  'Programming Languages': 'programmingLanguages',
  'Tools & Methodologies': 'toolsAndMethodologies',
};

// Color theme per category
const CATEGORY_STYLES: Record<string, { border: string; icon: string; text: string }> = {
  frontendDevelopment: { border: '#d0bcff', icon: '🖥️', text: '#d0bcff' },
  backendDevelopment: { border: '#c0c1ff', icon: '⚙️', text: '#c0c1ff' },
  databasesAndStorage: { border: '#eac33e', icon: '🗄️', text: '#eac33e' },
  cloudAndDevOps: { border: '#4F46E5', icon: '☁️', text: '#a5b4fc' },
  programmingLanguages: { border: '#d0bcff', icon: '💻', text: '#d0bcff' },
  toolsAndMethodologies: { border: '#c0c1ff', icon: '🔧', text: '#c0c1ff' },
};

const Skills = () => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const td = t as unknown as (key: string, opts?: Record<string, unknown>) => unknown;

  return (
    <section id='skills' className='py-24 px-5 md:px-20 bg-[#191f2f]/30'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-[#dce2f7] mb-4'>
            Technical{' '}
            <span className='text-[#d0bcff]'>Skills</span>
          </h2>
          <p className='text-[#9CA3AF] max-w-xl mx-auto'>{t('skills.subtitle')}</p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skills.map((skill, index) => {
            const categoryKey = CATEGORY_KEYS[skill.category] ?? skill.category;
            const categoryLabel = td(`portfolio:skills.categories.${categoryKey}`, {
              defaultValue: skill.category,
            }) as string;
            const style = CATEGORY_STYLES[categoryKey] ?? CATEGORY_STYLES.frontendDevelopment;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className='glass-panel p-6 rounded-3xl'
                style={{ borderTop: `4px solid ${style.border}` }}
              >
                {/* Icon */}
                <div
                  className='w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5'
                  style={{ background: `${style.border}15` }}
                >
                  {style.icon}
                </div>

                <h3 className='text-base font-bold text-[#dce2f7] mb-4'>{categoryLabel}</h3>

                <div className='flex flex-wrap gap-2'>
                  {skill.skills.map((skillItem) => (
                    <motion.span
                      key={skillItem}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className='bg-[#2e3545]/60 text-[#dce2f7] px-3 py-1.5 rounded-lg text-xs font-medium border border-[#494454]/40 hover:border-[#d0bcff]/30 transition-colors cursor-default'
                    >
                      {skillItem}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Skills };
