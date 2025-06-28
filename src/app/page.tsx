'use client';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const experienceRef = useRef(null);

  return (
    <div>
      <div className='w-full flex flex-col items-center justify-center  h-screen text-white  bg-gradient-to-b from-violet-400 to-violet-200 via-violet-400 gap-1'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <h1 className='text-4xl font-bold'>Hi, I&apos;m Sohail</h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I&apos;m a software developer with a passion for creating beautiful
          and functional web applications.
        </motion.p>
      </div>
      <div
        ref={experienceRef}
        className='h-screen w-screen bg-violet-200 flex flex-col'
      >
        <motion.div
          className='text-4xl font-bold text-violet-800 '
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Experience
        </motion.div>
      </div>
    </div>
  );
}
