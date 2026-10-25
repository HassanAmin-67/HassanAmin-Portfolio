export const roles = [
  'Software Engineer',
  'React.js & Node.js',
  'Full-Stack Development',
  'AI-Assisted Development',
]

export const siteConfig = {
  name: 'Hassan Amin',
  title: 'Software Engineer',
  tagline: 'React.js & Node.js',
  pitch: 'I build full-stack products and AI agents, from React interfaces to Express APIs.',
  email: 'hassanamin.6007@gmail.com',
  phone: '+92 325 8083296', // resume number; the old site showed a different one
  location: 'Lahore, Pakistan',
  education: 'BS Computer Science — FAST-NU Lahore',
  status: 'Open to work',
  resume: '/resume.pdf', // put your PDF in the public/ folder with this name
  bio: 'CS graduate from FAST-NU Lahore with a strong foundation in OOP, data structures and algorithms, plus hands-on full-stack experience. Sole frontend engineer on a 5-person founding team at a US-based EdTech startup, shipping real features to real users in a fast-moving remote environment.',
  about:
  "I'm a CS graduate from FAST-NU Lahore who likes building things end to end: the React interface, the Express API and the database underneath. At Groqify I was the only frontend engineer on a five-person founding team, which taught me to ship fast, talk to real users and own what I build. Lately I've also been exploring AI-assisted development and automation, from Cursor in my workflow to an agent I built with n8n and Gemini. I'm looking for a full-stack or frontend role where I can keep learning and shipping.",
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
    role: 'Junior Software Developer',
    company: 'Groqify Inc.',
    period: 'Aug 2026 — Sep 2026',
    location: 'Remote (United States)',
    // Junior Software Developer, Groqify Inc.
    tags: ['Full-stack testing', 'Bug triage'],
    highlights: [
      "Ran end-to-end testing across the platform's frontend and backend to find bugs and usability gaps.",
      'Worked across the full stack — frontend, backend and database — to investigate and resolve issues found in testing.',
      'Collaborated with the founding team on technical fixes and cross-functional growth initiatives.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Groqify Inc.',
    period: 'Jun 2025 — Aug 2025',
    location: 'Remote (United States)',
    // Software Engineering Intern, Groqify Inc.
    tags: ['Sole frontend engineer', '30+ user tests', '~30% faster delivery'],

    highlights: [
      'Sole frontend engineer in a 5-person founding team, working with the co-founders to architect and ship a corporate training platform from the ground up.',
      'Built responsive interfaces with React.js and Tailwind CSS, delivering interactive learning modules for multi-user training sessions.',
      'Led 30+ participant user testing sessions and turned the feedback into UI/UX improvements that shaped the production product.',
      'Implemented Redux with the lead engineer for global state management across complex concurrent sessions.',
      'Integrated Cursor AI into the sprint workflow, estimating a ~30% reduction in feature delivery time.',
    ],
  },
  {
    role: 'Product Engineering Intern',
    company: 'Edkasa',
    period: 'Jun 2024 — Jul 2024',
    location: 'Lahore, Pakistan',
    // Product Engineering Intern, Edkasa
    tags: ['EdTech research', 'LUMS partnership meeting'],
    highlights: [
      "Researched 5 emerging EdTech tools for platform integration; findings shaped the team's adoption decision and 1 tool was shortlisted for production.",
      'Independently prepared research and presentation materials for a partnership meeting at LUMS, attending alongside company CEOs as the sole intern.',
    ],
  },
]

export const skills = [
  { category: 'Core Fundamentals', items: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'C++', 'Java'] },
  { category: 'Languages & Frameworks', items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'Python', 'HTML5', 'Tailwind CSS'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'Supabase', 'NoSQL'] },
  { category: 'AI & Automation', items: ['n8n', 'Google Gemini API', 'Cursor AI', 'LLM-Assisted Development', 'Prompt Engineering'] },
  { category: 'State & Testing', items: ['Redux', 'React Testing Library', 'Unit Testing'] },
  { category: 'Design & Workflow', items: ['Figma', 'Git', 'GitHub', 'Agile/Scrum', 'Remote Collaboration'] },
]

// Replace the whole `export const projects = [...]` in src/data/site.ts with this.
export const projects = [
  {
    title: 'Job Fit Analyzer',
    subtitle: 'AI Agent',
    kind: 'flow',
    flow: ['Public form: paste a job posting', 'n8n workflow', 'Gemini API compares it to my background', 'Fit score, skill gaps and a draft outreach message'],
    description:
      'An AI agent built with n8n and the Gemini API. It checks a job posting against my technical background and returns a fit score, honest skill gaps and a draft outreach message. I used it throughout my own job search.',
    tags: ['n8n', 'Gemini API', 'Prompt Engineering', 'Automation'],
    github: null,
    live: null,
  },
  {
    title: 'Movie Search',
    subtitle: 'Full-Stack Web App',
    kind: 'web',
    images: [
      '/projects/movie-search/home.png',
      '/projects/movie-search/search.png',
      '/projects/movie-search/view-details.png',
      '/projects/movie-search/favourites.png',
    ],
    description:
      'Movie discovery app with a React/Vite frontend and a Node.js/Express REST API using the TMDB API for live search and details. PostgreSQL schema on Supabase with foreign-key constraints for persistent favorites, and an MVC-style backend with environment-based secrets.',
    tags: ['React', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Supabase'],
    github: 'https://github.com/HassanAmin-67/Movies_Search_FullStack',
    live: null,
  },
  {
    title: 'Prayer Tracker',
    subtitle: 'Android App',
    kind: 'phone',
    images: [
      '/projects/prayer-tracker/home-screen.png',
      '/projects/prayer-tracker/reminder-setting.png',
      '/projects/prayer-tracker/widget.png',
    ],
    description:
      'Flutter app with a month calendar and daily prayer tracking. It calculates prayer times on-device and locks prayers that are not yet due, with a home-screen widget, scheduled notifications and azaan audio reminders that persist across restarts.',
    tags: ['Flutter', 'Dart', 'Kotlin', 'Android'],
    github: 'https://github.com/HassanAmin-67/Prayer-Tracker',
    live: null,
  },
  {
    title: 'SmartSwitch',
    subtitle: 'Final Year Project',
    kind: 'flow',
    flow: ['Flutter app / web interface on the phone', 'ESP8266 as a self-hosted WiFi access point', 'Relay modules', 'Home appliances, no internet needed'],
    description:
      'Home automation system that controls appliances from a phone with no internet connection. An ESP8266 acts as its own WiFi access point and drives relay modules, controlled through a Flutter app and a web interface.',
    tags: ['ESP8266', 'Flutter', 'IoT', 'Embedded Systems'],
    github: null,
    live: null,
  },
]

export const certifications = [
  { name: 'CS50x: Introduction to Computer Science', issuer: 'Harvard University, via edX', date: 'Jan 2025' },
  { name: 'FSPC Coding Competition', issuer: 'FAST-NUCES Lahore', date: 'Apr 2024' },
]

export const stats = [
  { label: 'User Testing Sessions', value: '30+' },
  { label: 'Projects Built', value: '4' },
  { label: 'Roles & Internships', value: '3' },
]