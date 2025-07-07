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

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'G LNK',
    description:
      'A platform for hiring healthcare providers with the help of AI. ',
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'Next.js',
      'React.js',
      'MongoDB',
    ],
    githubUrl: '',
    liveUrl:
      'https://www.ycombinator.com/launches/Mx9-g-lnk-simplifying-collaboration-between-pharma-healthcare-professionals',
    image: '/images/glink.png',
  },
  {
    id: '2',
    title: 'Mynth',
    description: 'A platform for exchanging digital assets on blockchain.',
    technologies: [
      'Docker',
      'Kubernetes',
      'Python',
      'Fastify',

      'Node.js',
      'Microservices',
    ],
    liveUrl: 'https://www.mynth.ai/',
  },
  {
    id: '3',
    title: 'Tootle',
    description: "Nepal's first ride-sharing app.",
    technologies: [
      'Native Android',
      'Java',
      'Kotlin',
      'Firebase',
      'Google Maps API',
      'Retrofit',
      'RxJava',
      'Dagger',
    ],
    liveUrl: 'https://www.tootle.com.np/',
  },
  {
    id: '4',
    title: 'Husslup (No longer Active)',
    liveUrl: 'https://www.producthunt.com/products/husslup',
    description:
      "A social media platform for connecting Hollywood's top talent behind the camera.",
    technologies: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'Nest.js',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
      'OpenSearch',
      'Next.js',
      'SCSS',
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'G LNK (YC W25)',
    location: 'New York, United States (Remote)',
    startDate: 'Jun 2024',
    endDate: 'Present',
    description: [
      'Built an MVP in one week with a team of two, enabling the company to secure Y Combinator funding.',
      'Created foundational front-end and back-end architecture, which scaled across all future projects.',
      'Replaced monolithic OpenAPI SDK with microservices, eliminating request bottlenecks and improving performance by over 50%.',
      'Developed AI-powered search and Kanban board with Redis caching to handle latency, reducing loading times from 10s to 0s and significantly enhancing UX.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Open AI',
      'Node.js',
      'Typescript',
      'Next.js',
      'React.js',
      'Redux',
      'RTK Toolkit',
      'Mongo DB',
      'Redis',
      'Docker',
      'Stripe API',
      'Auth0',
      'Microservices',
    ],
  },
  {
    id: '2',
    title: 'Senior Software Engineer',
    company: 'Mynth',
    location: 'Wilmington, North Carolina, United States (Remote)',
    startDate: 'May 2023',
    endDate: 'Jun 2024',
    description: [
      'Orchestrated cloud infrastructure in Kubernetes using kustomize, demonstrating proficiency in modern infrastructure management techniques.',
      'Implemented robust data security measures leveraging Vault, showcasing expertise in safeguarding sensitive information and ensuring compliance with industry standards.',
      'Configured comprehensive logging solutions with Datadog across the entire Kubernetes cluster, enabling real-time monitoring and proactive troubleshooting for enhanced operational efficiency and reliability.',
      'Mastered Python within a day to create a Discord posting microservice, while also meticulously recording image versions for various environments, showcasing quick learning and attention to detail in a professional context.',
      'Established a streamlined Continuous Integration and Continuous Deployment (CICD) pipeline using ArgoCD, demonstrating expertise in automating software delivery and ensuring seamless deployment processes.',
      'Implemented Payload CRM with Auth0 authentication, overcoming integration challenges to ensure seamless functionality.',
      'Created an image updater with node.js, that automatically updates image on Kubernetes and monitored image version with a custom cronjob in python',
    ],
    technologies: [
      'Docker',
      'Kubernetes',
      'Python',
      'Fastify',
      'PostgreSQL',
      'Node.js',
      'Microservices',
      'Blockchain',
    ],
  },
  {
    id: '3',
    title: 'Senior Software Engineer',
    company: 'Fusemachines',
    location: 'Kathmandu, Nepal (Remote)',
    startDate: 'July 2021',
    endDate: 'March 2024',
    description: [
      'Used React Native for Mobile and Nest js for Backend and getting MVP ready from ground up within 6 months with a total of 2 developers in the team.',
      'Rapidly adopting frameworks such as Flutter, React Native and Nest js.',
      'Architect infrastructure for Opensearch, which reduced the search time on the platform from around 10 seconds to few milliseconds.',
      'Achieved 100% crash-free users with 4000 users, from July 2022 to present, as per firebase analytics, playstore analytics and app store analytics.',
      'Architecting infrastructure for Authentication and authorization and implementing it with the team, making the product more secure. We have not had any instances of our product getting hacked.',
      'Implementing and architecting more than 50% of all features in the app from the ground up.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'SCSS',

      'Jest',
      'React Native',
      'Nest.js',
      'PostgreSQL',
      'Nest.js',
      'OpenSearch',
      'Redis',
      'Docker',
      'AWS',
    ],
  },
  {
    id: '4',
    title: 'Software Engineer',
    company: 'Tootle',
    location: 'Kathmandu, Nepal',
    startDate: 'Jun 2018',
    endDate: 'Jun 2021',
    description: [
      'Increased app stability from 60% to more than 90%.',
      'Updated all the technologies used in app to make the app more easier to maintain.',
      'Reduced Google reverse geocoding billing by more than 50%.',
      'Introduced proper architecture to app, making it more easier to maintain and implement new feature.',
      'Created a very customized UI using Canvas API on native android.',
    ],
    technologies: [
      'Native Android',
      'Java',
      'Kotlin',
      'Firebase',
      'Google Maps API',
      'Retrofit',
      'RxJava',
      'Dagger',
    ],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Material-UI',
      'Redux',
      'RTK Toolkit',
      'Websockets',
      'HTML',
      'CSS',
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      'Node.js',
      'Python',
      'Express.js',
      'FastAPI',
      'Fastify',
      'REST APIs',
      'Nest.js',
    ],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'OpenSearch'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions'],
  },
  {
    category: 'Programming Languages',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      'Git',
      'Agile/Scrum',
      'TDD',
      'Microservices',
      'System Design',
      'Code Review',
      'Performance Optimization',
      'Security Best Practices',
    ],
  },
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Computer Applications',
    institution: 'Sharda University',
    location: 'Greater Noida, India',
    graduationYear: '2018',
    gpa: '3.8',
    relevantCourses: [
      'Data Structures and Algorithms',
      'Software Engineering',
      'Database Systems',
      'Computer Networks',
      'Operating Systems',
      'Web Development',
    ],
  },
];

export const certifications: Certification[] = [];

// Additional portfolio statistics and achievements
export const achievements = {
  yearsOfExperience: 8,
  projectsCompleted: 6,
  technologiesMastered: 20,
  teamMembersLed: 12,
  codeCommits: 5000,
  linesOfCode: 250000,
};

export const testimonials = [];

export const aboutMe = {
  name: 'Sohail Shrestha',
  title: 'Senior Software Engineer',
  description: `I'm a passionate senior software engineer with 8+ years of experience building scalable web applications and leading development teams. I specialize in full-stack development with expertise in modern JavaScript frameworks, cloud architecture, and microservices. I have a proven track record of delivering high-quality software solutions that serve millions of users while mentoring teams and driving technical excellence.`,
  email: 'sohailshrestha2@gmail.com',
  github: 'https://github.com/sohail-shrestha',
  linkedin: 'https://www.linkedin.com/in/sohail-shrestha-84a04a143/',
  resume: '/Sohail_Shresth_CV.pdf',
};
