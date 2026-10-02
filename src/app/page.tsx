'use client';
import {
  About,
  AiChat,
  Experience,
  Footer,
  Hero,
  Navigation,
  Projects,
  Skills,
} from './_components';

export default function Home() {
  return (
    <div className='relative'>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
      <AiChat />
    </div>
  );
}
