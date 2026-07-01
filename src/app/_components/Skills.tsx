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

const Skills = () => {
  const { t } = useTranslation(['ui', 'portfolio']);
  const td = t as unknown as (key: string, opts?: Record<string, unknown>) => unknown;

  return (
    <section
      id='skills'
      className='bg-gradient-to-br from-indigo-100 to-violet-50 py-16 px-4 xs:px-6 sm:px-8'
    >
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-10'
        >
          <h2 className='text-4xl xs:text-5xl sm:text-6xl font-bold text-gradient mb-6'>
            {t('skills.heading')}
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mb-6' />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className='text-gray-600 max-w-2xl mx-auto text-base xs:text-lg'
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='bg-white rounded-2xl shadow-lg overflow-hidden'
        >
          {skills.map((skill, index) => {
            const categoryKey = CATEGORY_KEYS[skill.category] ?? skill.category;
            const categoryLabel = td(`portfolio:skills.categories.${categoryKey}`, {
              defaultValue: skill.category,
            }) as string;

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`flex items-start gap-4 px-5 py-3.5 ${
                  index < skills.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                {/* Category label */}
                <div className='w-36 shrink-0 pt-0.5'>
                  <span className='text-xs font-semibold text-violet-600 leading-snug uppercase tracking-wide'>
                    {categoryLabel}
                  </span>
                </div>

                {/* Vertical divider */}
                <div className='w-px self-stretch bg-violet-100 shrink-0' />

                {/* Skill pills */}
                <div className='flex flex-wrap gap-1.5 flex-1'>
                  {skill.skills.map((skillItem, skillIndex) => (
                    <motion.span
                      key={skillItem}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.08 + skillIndex * 0.03,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className='bg-gradient-to-r from-violet-50 to-indigo-50 text-violet-700 px-2.5 py-1 rounded-md text-xs font-medium border border-violet-200 hover:border-violet-400 hover:from-violet-100 hover:to-indigo-100 transition-all duration-200 cursor-default'
                    >
                      {skillItem}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export { Skills };
