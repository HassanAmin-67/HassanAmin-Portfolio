export const siteConfig = {
  name: 'Hassan Amin',
  title: 'Full-Stack Software Engineer',
  tagline: 'React.js & Node.js',
  email: 'hassanamin.6007@gmail.com',
  phone: '+92 314 4222505',
  location: 'Lahore, Pakistan',
  education: 'BS Computer Science — FAST-NU Lahore',
  status: 'Junior Developer @ Groqify Inc.',
  bio: 'CS graduate from FAST-NU Lahore with hands-on experience building full-stack applications end to end — from responsive React.js interfaces to Node.js/Express REST APIs and relational database design. Production experience as the sole frontend engineer on a 5-person founding team at a US-based EdTech startup.',
  social: {
    github: 'https://github.com/HassanAmin-67',
    linkedin: 'https://www.linkedin.com/in/hassan-amin-b09319246/',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
}

export const experience = [
  {
    role: 'Junior Software Developer (Contract)',
    company: 'Groqify Inc.',
    period: 'Aug 2026 — Present',
    location: 'Remote (United States)',
    highlights: [
      'Conducting end-to-end testing across the platform\'s frontend and backend to identify bugs and usability improvements ahead of release.',
      'Working across the full stack — frontend, backend, and database — to investigate and resolve issues surfaced during testing.',
      'Collaborating with the founding team on both technical fixes and cross-functional growth initiatives as needed.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Groqify',
    period: 'Jun 2025 — Aug 2025',
    location: 'Remote (United States)',
    highlights: [
      'Served as the sole frontend engineer in a 5-person founding team, architecting and shipping a corporate training platform from the ground up.',
      'Built responsive interfaces using React.js and Tailwind CSS, delivering interactive learning modules across multi-user training sessions.',
      'Led 30+ participant user testing sessions, translating feedback into iterative UI/UX improvements that shaped the production product.',
      'Collaborated with the lead engineer to implement Redux for global state management across complex concurrent training sessions.',
      'Integrated Cursor AI into the sprint workflow, estimating a ~30% reduction in feature delivery time.',
    ],
  },
  {
    role: 'Product Engineering Intern',
    company: 'Edkasa',
    period: 'Jun 2024 — Jul 2024',
    location: 'Lahore, Pakistan',
    highlights: [
      'Researched 5 emerging EdTech tools for potential platform integration; findings directly influenced adoption decisions.',
      'Independently led research and prepared presentation materials for a partnership meeting at LUMS, attending alongside company CEOs.',
    ],
  },
]

export const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'Python', 'Java', 'C/C++', 'HTML5', 'Tailwind CSS'],
  },
  {
    category: 'Databases & State',
    items: ['PostgreSQL', 'MySQL', 'Redux', 'React Testing Library', 'Unit Testing'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Cursor AI', 'Figma', 'Agile/Scrum', 'Remote Collaboration'],
  },
]

export const projects = [
  {
    title: 'Movie Search',
    subtitle: 'Full-Stack Web App',
    description:
      'Full-stack movie discovery app with a React/Vite frontend and Node.js/Express REST API, integrating the TMDB API for live search and detail views. PostgreSQL schema on Supabase with foreign-key constraints for persistent favorites.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'TMDB API'],
    github: 'https://github.com/HassanAmin-67',
    live: null,
    featured: true,
  },
  {
    title: 'SmartSwitch',
    subtitle: 'Final Year Project',
    description:
      'Home automation system allowing users to control appliances from their phone without internet connectivity, using an ESP8266 microcontroller as a self-hosted WiFi access point with relay modules controlled via Flutter and a web interface.',
    tags: ['ESP8266', 'Flutter', 'IoT', 'Home Automation', 'Embedded Systems'],
    github: 'https://github.com/HassanAmin-67',
    live: null,
    featured: true,
  },
]

export const certifications = [
  {
    name: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University, via edX',
    date: 'Jan 2025',
  },
  {
    name: 'FSPC Coding Competition',
    issuer: 'FAST-NUCES Lahore',
    date: 'Apr 2024',
  },
]

export const stats = [
  { label: 'User Testing Sessions', value: '30+' },
  { label: 'Degree', value: 'BS CS' },
  { label: 'Tech Stack', value: '15+' },
]
