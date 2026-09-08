/**
 * EDITABLE PORTFOLIO CONTENT
 *
 * This is the main content file for the portfolio.
 *
 * You can safely edit the arrays/strings below to update the deployed site:
 * - Add a hackathon by adding another object to `hackathons`.
 * - Add skills by adding a skill to an existing category or creating a new category.
 * - Add a completely new simple section with `customSections`.
 * - Update experience, projects, education, contact links, etc. here.
 *
 * After editing locally:
 *   npm run dev       -> preview your changes
 *   npm run build     -> verify the production build
 *   npm start         -> preview the production build
 *
 * The public website has NO editing/admin interface. Visitors can only view it.
 * Changes only happen when you, the site owner, edit this file and redeploy.
 */

export const nav = [
  ['work', 'Work'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['skills', 'Skills'],
  ['hackathons', 'Hackathons'],
  ['contact', 'Contact'],
] as const;

export const projects = [
  {
    name: 'Noor',
    kicker: 'Safety · Community · Full Stack',
    intro: 'A women-exclusive platform built around trusted identity verification, community support, learning, and safer networking.',
    problem: 'Safety is often bolted onto community products after the fact.',
    solution: 'Noor puts verification and a calm, modern experience at the center so women can connect without the interface feeling clinical or fear-driven.',
    role: 'Product designer + developer',
    stack: ['React', 'JavaScript', 'Python', 'HTML/CSS'],
  },
  {
    name: 'SkillIssu',
    kicker: 'EdTech · Gamification · Exchange',
    intro: 'A skill-swapping ecosystem where students trade knowledge using credits instead of money.',
    problem: 'A lot of peer learning platforms assume a cash economy.',
    solution: 'Teach a skill, earn credits. Spend those credits to learn something else. The product turns knowledge into its own currency.',
    role: 'Developer + product thinker',
    stack: ['React', 'JavaScript', 'SQL'],
  },
  {
    name: 'NorthStar',
    kicker: 'AI · Data · Analytics',
    intro: 'An AI-assisted dataset analysis platform that makes the first pass through messy data dramatically easier.',
    problem: 'Useful signals can stay hidden behind a wall of technical setup.',
    solution: 'Upload a dataset, detect column types, surface trends, and highlight potential risks without requiring a data analyst for every first look.',
    role: 'Builder of the analysis pipeline',
    stack: ['Python', 'Data Analysis'],
  },
  {
    name: 'EngiQuest',
    kicker: 'EdTech · Galaxy · Career Guidance',
    intro: 'A galaxy-themed guide helping students discover engineering domains, roadmaps, skills, difficulty, and career paths.',
    problem: 'Students often choose a domain without seeing what the journey actually looks like.',
    solution: 'An explorable career map that makes dense information feel like discovery rather than a spreadsheet.',
    role: 'Product designer + developer',
    stack: ['React', 'JavaScript', 'Python'],
  },
  {
    name: 'SideNote',
    kicker: 'Productivity · Collaboration · Notes',
    intro: 'A collaborative note-taking space for organizing, managing, and sharing academic knowledge.',
    problem: 'Group notes often become a pile of disconnected tools and duplicate files.',
    solution: 'One productivity-focused space for notes, sharing, and collaboration with a deliberately lightweight interface.',
    role: 'Designer + developer',
    stack: ['React', 'JavaScript', 'SQL'],
  },
] as const;

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  link?: string;
  text: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: 'Fortune Investment Services',
    role: 'AI Automation Engineer',
    period: 'Aug 2026 — Present',
    link: 'https://www.fortuneinvestment.in/',
    text: 'Developing AI-driven automation solutions for financial-services workflows.',
    bullets: [
      'Develop and support AI-driven automation solutions for financial-services workflows',
    ],
  },
  {
    company: 'Flowcialize',
    role: 'Automation & UI/UX Developer',
    period: '2026 — Present',
    link: 'https://flowcialize.vercel.app/',
    text: 'Building the design-and-automation layer of a studio that ships websites, AI-powered workflows, and business systems.',
    bullets: [
      'Responsive websites tailored to client requirements',
      'AI chatbots, automated messaging and AI voice receptionist systems',
      'Figma UI/UX, prototypes and interaction design',
      'Business automation and API integrations',
      'Client communication, deployment and solution design',
    ],
  },
  {
    company: 'Big Bucks Innovation Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'June 2026 — Present',
    link: 'https://bigbucksinnovation.com/',
    text: 'Working across frontend, backend and deployment inside a collaborative product development team.',
    bullets: [
      'Full-stack web application development',
      'Feature implementation and application improvements',
      'Product development from design through deployment',
      'Git-based collaboration and cloud deployment workflows',
    ],
  },
];

export const skills = {
  Engineering: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'React', 'REST APIs'],
  Automation: ['n8n', 'AI Chatbots', 'Business Automation', 'API Integrations', 'Prompt Engineering'],
  Design: ['Figma', 'Wireframing', 'Prototyping', 'Design Systems', 'UX Design'],
  Tools: ['Git', 'GitHub', 'Vercel', 'Linux', 'Windows', 'Oracle (Basics)'],
} as const;

export const hackathons = [
  { medal: '02', name: 'RIT Hackathon', result: '2nd Place', role: 'Team Lead' },
  { medal: '02', name: 'VIT Hackathon', result: '2nd Place', role: 'Frontend Developer' },
  { medal: '03', name: 'CIT Hackathon', result: '3rd Place', role: 'Pitch Presenter' },
] as const;

export const education = [
  {
    title: 'B.Tech, Information Technology',
    institution: "St. Joseph's Institute of Technology · 2025–2029",
    detail: 'CGPA 8.3 / 10',
    tone: 'gold',
  },
  {
    title: 'B.S. in Data Science and Applications',
    institution: 'IIT Madras · Diploma level, ongoing',
    detail: '',
    tone: 'sky',
  },
  {
    title: 'Padma Seshadri Bala Bhavan Senior Secondary School',
    institution: '2010–2025',
    detail: '',
    tone: 'violet',
  },
] as const;

export const contact = {
  email: 'joshiyaaaarjun@gmail.com',
  github: 'https://github.com/joshiyaaarjun-source',
  linkedin: 'https://www.linkedin.com/in/joshiyaa-arjun-b4a3442a9/',
  resume: '/resume.pdf',
} as const;

/**
 * Optional simple sections you can add without touching page.tsx.
 *
 * Example:
 * {
 *   id: 'leadership',
 *   label: 'Leadership',
 *   title: 'Building teams as carefully as products.',
 *   body: '...',
 *   items: ['Team Lead – National Hackathons', '...']
 * }
 */
export const customSections: Array<{
  id: string;
  label: string;
  title: string;
  accent?: string;
  body?: string;
  items?: string[];
}> = [];
