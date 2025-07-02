export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  category: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with React, Node.js, and PostgreSQL',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    githubUrl: 'https://github.com/username/project1',
    liveUrl: 'https://project1.demo.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Real-time collaborative task management application',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'WebSocket'],
    githubUrl: 'https://github.com/username/project2',
    liveUrl: 'https://project2.demo.com',
  },
  {
    id: '3',
    title: 'AI Chat Bot',
    description:
      'Intelligent chatbot using machine learning and natural language processing',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
    githubUrl: 'https://github.com/username/project3',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with product teams to deliver features on time',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'StartupXYZ',
    location: 'Remote',
    startDate: 'Jun 2020',
    endDate: 'Dec 2021',
    description: [
      'Built scalable web applications using modern JavaScript frameworks',
      'Optimized database queries resulting in 40% performance improvement',
      'Integrated third-party APIs and payment systems',
      'Participated in agile development processes',
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'AWS'],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    startDate: 'Jan 2019',
    endDate: 'May 2020',
    description: [
      'Developed responsive websites for Fortune 500 clients',
      'Collaborated with designers to implement pixel-perfect UIs',
      'Improved website performance and SEO rankings',
      'Maintained and updated existing client websites',
    ],
    technologies: ['React', 'TypeScript', 'SCSS', 'Webpack', 'Jest'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Vue.js',
      'Tailwind CSS',
      'SCSS',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js',
      'Python',
      'Express.js',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Git', 'Jenkins', 'Terraform'],
  },
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL', 'HTML/CSS'],
  },
];

export const aboutMe = {
  name: 'Sohail Shrestha',
  title: 'Senior Software Engineer',
  description: `I'm a passionate senior software engineer with over 5 years of experience building scalable web applications and leading development teams. I specialize in full-stack development with a focus on modern JavaScript frameworks and cloud technologies.`,
  email: 'sohail@example.com',
  github: 'https://github.com/sohailshrestha',
  linkedin: 'https://linkedin.com/in/sohailshrestha',
  resume: '/resume.pdf',
};
