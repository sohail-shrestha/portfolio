import { motion } from 'motion/react';

const Experience = () => {
  return (
    <>
      <motion.div
        className='text-4xl font-bold text-violet-800 '
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.div>
      <div>
        <div>
          <div>
            <h3 className='text-2xl font-bold text-violet-600'>Job Title</h3>
            <p className='text-gray-500'>Start Date - End Date</p>
          </div>
          <p className='text-gray-600'>Company Name - Location</p>
          <p className='text-gray-500'>
            Description of the job responsibilities and achievements.
          </p>
        </div>
      </div>
    </>
  );
};

export { Experience };
