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
    title: 'Enterprise SaaS Dashboard',
    description:
      'Multi-tenant SaaS platform with advanced analytics, real-time notifications, and role-based access control. Built for enterprise clients with 10k+ users.',
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Stripe',
    ],
    githubUrl: 'https://github.com/sohailshrestha/enterprise-dashboard',
    liveUrl: 'https://dashboard.example.com',
  },
  {
    id: '2',
    title: 'Real-time Collaboration Tool',
    description:
      'WebRTC-based collaboration platform with video conferencing, shared whiteboard, and document editing capabilities.',
    technologies: [
      'React',
      'Node.js',
      'Socket.io',
      'WebRTC',
      'MongoDB',
      'Docker',
    ],
    githubUrl: 'https://github.com/sohailshrestha/collab-platform',
    liveUrl: 'https://collaborate.example.com',
  },
  {
    id: '3',
    title: 'AI-Powered Code Review Assistant',
    description:
      'Machine learning tool that analyzes code quality, suggests improvements, and detects potential security vulnerabilities.',
    technologies: [
      'Python',
      'TensorFlow',
      'FastAPI',
      'GitHub API',
      'Docker',
      'Kubernetes',
    ],
    githubUrl: 'https://github.com/sohailshrestha/ai-code-reviewer',
  },
  {
    id: '4',
    title: 'Microservices E-commerce Platform',
    description:
      'Scalable e-commerce solution with microservices architecture, event-driven design, and comprehensive payment integration.',
    technologies: [
      'Go',
      'gRPC',
      'PostgreSQL',
      'RabbitMQ',
      'Kubernetes',
      'Terraform',
    ],
    githubUrl: 'https://github.com/sohailshrestha/ecommerce-microservices',
  },
  {
    id: '5',
    title: 'Performance Monitoring Dashboard',
    description:
      'Real-time application performance monitoring with custom metrics, alerting, and automated scaling recommendations.',
    technologies: [
      'Vue.js',
      'InfluxDB',
      'Grafana',
      'Prometheus',
      'Go',
      'Docker',
    ],
    githubUrl: 'https://github.com/sohailshrestha/perf-monitor',
    liveUrl: 'https://monitor.example.com',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TechNova Solutions',
    location: 'San Francisco, CA (Remote)',
    startDate: 'March 2022',
    endDate: 'Present',
    description: [
      'Lead architecture and development of microservices serving 2M+ daily active users',
      'Mentored 8 junior developers and established code review best practices',
      'Implemented CI/CD pipelines and Infrastructure as Code, reducing deployment time by 75%',
      'Collaborated with product and design teams to deliver 15+ major features on schedule',
      'Optimized system performance resulting in 40% reduction in response times',
      'Designed and implemented event-driven architecture using Apache Kafka for real-time data processing',
      'Led migration from monolithic to microservices architecture serving millions of requests daily',
      'Established monitoring and alerting systems using Prometheus and Grafana, improving system reliability',
      'Implemented automated testing strategies achieving 90% code coverage across all services',
    ],
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'AWS',
      'Docker',
      'Kubernetes',
      'PostgreSQL',
      'Apache Kafka',
      'Prometheus',
      'Grafana',
      'Jest',
      'Cypress',
    ],
  },
  {
    id: '2',
    title: 'Full Stack Software Engineer',
    company: 'InnovateX Startup',
    location: 'Remote',
    startDate: 'June 2020',
    endDate: 'February 2022',
    description: [
      'Built scalable web applications from ground up serving 100k+ users',
      'Designed and implemented RESTful APIs and GraphQL endpoints',
      'Integrated payment systems (Stripe, PayPal) and third-party services',
      'Implemented real-time features using WebSocket and Server-Sent Events',
      'Established testing practices achieving 85% code coverage',
      'Led database design and optimization efforts, improving query performance by 60%',
      'Developed mobile-responsive Progressive Web Applications (PWAs)',
      'Implemented OAuth 2.0 and JWT-based authentication systems',
    ],
    technologies: [
      'Vue.js',
      'Python',
      'Django',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'GraphQL',
      'Stripe API',
      'WebSocket',
    ],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'DigitalCraft Agency',
    location: 'New York, NY',
    startDate: 'January 2019',
    endDate: 'May 2020',
    description: [
      'Developed responsive web applications for Fortune 500 clients',
      'Collaborated with UX/UI designers to implement pixel-perfect interfaces',
      'Improved website performance and Core Web Vitals scores by 60%',
      'Maintained and enhanced existing client websites and applications',
      'Conducted cross-browser testing and ensured accessibility compliance',
    ],
    technologies: ['React', 'TypeScript', 'SCSS', 'Webpack', 'Jest', 'Cypress'],
  },
  {
    id: '4',
    title: 'Junior Software Developer',
    company: 'CodeBase Solutions',
    location: 'Austin, TX',
    startDate: 'August 2017',
    endDate: 'December 2018',
    description: [
      'Developed web applications using modern JavaScript frameworks',
      'Participated in agile development processes and sprint planning',
      'Fixed bugs and implemented new features based on user feedback',
      'Collaborated with senior developers on database design and optimization',
    ],
    technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Frontend Development',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Vue.js',
      'Angular',
      'Tailwind CSS',
      'SCSS/SASS',
      'Material-UI',
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      'Node.js',
      'Python',
      'Go',
      'Express.js',
      'FastAPI',
      'Django',
      'GraphQL',
      'REST APIs',
    ],
  },
  {
    category: 'Databases & Storage',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'MySQL',
      'DynamoDB',
      'Elasticsearch',
      'InfluxDB',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Jenkins',
      'GitHub Actions',
      'Nginx',
      'Monitoring',
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      'JavaScript',
      'TypeScript',
      'Python',
      'Go',
      'Java',
      'SQL',
      'HTML/CSS',
      'Bash',
    ],
  },
  {
    category: 'Tools & Methodologies',
    skills: [
      'Git',
      'Agile/Scrum',
      'TDD/BDD',
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
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Texas at Austin',
    location: 'Austin, TX',
    graduationYear: '2017',
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

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    issueDate: 'March 2023',
    expirationDate: 'March 2026',
    credentialId: 'AWS-SAP-12345',
    verificationUrl: 'https://aws.amazon.com/verification',
  },
  {
    id: '2',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    issueDate: 'January 2023',
    expirationDate: 'January 2026',
    credentialId: 'CKA-67890',
    verificationUrl:
      'https://training.linuxfoundation.org/certification/verify/',
  },
  {
    id: '3',
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    issueDate: 'September 2022',
    credentialId: 'PSM1-54321',
    verificationUrl: 'https://www.scrum.org/certificates/verify',
  },
  {
    id: '4',
    name: 'MongoDB Certified Developer Associate',
    issuer: 'MongoDB University',
    issueDate: 'June 2022',
    expirationDate: 'June 2025',
    credentialId: 'MDB-DEV-98765',
  },
];

// Additional portfolio statistics and achievements
export const achievements = {
  yearsOfExperience: 8,
  projectsCompleted: 50,
  technologiesMastered: 25,
  teamMembersLed: 12,
  codeCommits: 5000,
  linesOfCode: 250000,
};

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    position: 'Product Manager',
    company: 'TechNova Solutions',
    testimonial:
      'Sohail is an exceptional developer and team lead. His technical expertise and ability to mentor junior developers while delivering high-quality code on time makes him invaluable to any team.',
    avatar: '👩‍💼',
  },
  {
    id: '2',
    name: 'Michael Chen',
    position: 'CTO',
    company: 'InnovateX Startup',
    testimonial:
      'Working with Sohail was a game-changer for our startup. He built our entire platform from scratch and scaled it to handle millions of users. His architectural decisions were spot-on.',
    avatar: '👨‍💻',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    position: 'Senior Software Engineer',
    company: 'DigitalCraft Agency',
    testimonial:
      'Sohail has an incredible eye for detail and performance optimization. He improved our application performance by 60% and established best practices that we still follow today.',
    avatar: '👩‍💻',
  },
];

export const aboutMe = {
  name: 'Sohail Shrestha',
  title: 'Senior Software Engineer & Tech Lead',
  description: `I'm a passionate senior software engineer with 8+ years of experience building scalable web applications and leading development teams. I specialize in full-stack development with expertise in modern JavaScript frameworks, cloud architecture, and microservices. I have a proven track record of delivering high-quality software solutions that serve millions of users while mentoring teams and driving technical excellence.`,
  email: 'sohail.shrestha.dev@gmail.com',
  github: 'https://github.com/sohailshrestha',
  linkedin: 'https://linkedin.com/in/sohailshrestha',
  resume: '/Sohail_Shresth_CV.pdf',
};
