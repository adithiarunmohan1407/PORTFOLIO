export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  keyFeatures?: string[];
  technologies: string[];
  category: 'AI / ML' | 'Web App' | 'Full Stack';
  image: string;
  color: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  color: string;
  tags: string[];
  features: string[];
}

export interface TimelineItem {
  role: string;
  organization: string;
  period?: string;
  description: string;
  highlights?: string[];
  category: 'Leadership' | 'Education';
  badge?: string;
}

export const HERO_DATA = {
  name: "Adithi A M",
  titles: [
    "Python Developer",
    "Web Developer",
    "AI Enthusiast",
    "Computer Science Student",
    "Future Software Engineer"
  ],
  introduction: "I'm Adithi A M, a Computer Science and Engineering student with a strong passion for web development, artificial intelligence, machine learning, and software development. I enjoy building practical, user-focused projects that combine creativity with problem-solving while continuously learning new technologies. My goal is to grow as a software engineer by contributing to impactful products, and I'm currently seeking opportunities where I can learn, innovate, and make meaningful contributions.",
  socials: {
    github: "https://github.com/adithiarunmohan1407",
    linkedin: "https://www.linkedin.com/in/adithi-a-m-045b6b36a",
    email: "adithiarunmohan1407@gmail.com"
  }
};

export const ABOUT_DATA = {
  heading: "About Me",
  subheading: "Passionate Engineer & Problem Solver",
  highlightsText: [
    "Third-year B.Tech CSE student at NSS College of Engineering",
    "Deep passion for Artificial Intelligence, Web Development, and Python",
    "Dedicated to clean, efficient Software Engineering principles",
    "Continuous learning mindset fueled by insatiable curiosity",
    "Strong analytical problem-solving approach to real-world challenges",
    "Keen interest in building impactful, user-focused software products"
  ],
  academicCard: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "NSS College of Engineering",
    year: "Third Year",
    cgpa: "8.75",
    honors: "Excellent Academic Standing"
  },
  quickFacts: [
    { label: "Degree", value: "B.Tech CSE (3rd Year)" },
    { label: "Current CGPA", value: "8.75 / 10" },
    { label: "Core Expertise", value: "Python, AI & Web Dev" },
    { label: "Location", value: "Palakkad, Kerala, India" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    color: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Python", level: 95, highlight: true },
      { name: "C", level: 85 },
      { name: "SQL", level: 90, highlight: true }
    ]
  },
  {
    title: "Web Development",
    iconName: "Globe",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Django", level: 92, highlight: true },
      { name: "JavaScript", level: 88 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 }
    ]
  },
  {
    title: "Databases",
    iconName: "Database",
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "PostgreSQL", level: 90, highlight: true },
      { name: "MySQL", level: 88 },
      { name: "SQLite", level: 92 }
    ]
  },
  {
    title: "Tools & Environments",
    iconName: "Wrench",
    color: "from-amber-500 to-orange-600",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "VS Code", level: 96 }
    ]
  },
  {
    title: "Soft Skills",
    iconName: "Users",
    color: "from-rose-500 to-red-600",
    skills: [
      { name: "Problem Solving", level: 95, highlight: true },
      { name: "Leadership", level: 92 },
      { name: "Teamwork", level: 94 },
      { name: "Public Speaking", level: 88 }
    ]
  }
];

export const TECHNICAL_INDICATORS = [
  { name: "Python Development", level: 95, color: "#6366f1" },
  { name: "Django Web Framework", level: 92, color: "#10b981" },
  { name: "AI / ML Integration", level: 88, color: "#ec4899" },
  { name: "Database Architecture", level: 90, color: "#8b5cf6" },
  { name: "Analytical Problem Solving", level: 96, color: "#f59e0b" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "python-dev",
    title: "Python Development",
    iconName: "FileCode2",
    description: "Develop efficient, scalable, and maintainable Python applications with clean coding practices.",
    color: "indigo",
    tags: ["Algorithms", "Automation", "Data Processing", "Backend APIs"],
    features: [
      "Custom python scripts & workflow automation",
      "Robust backend logic and API creation",
      "Data analysis pipelines and structured data parsing",
      "Optimized object-oriented and functional code structures"
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    iconName: "Layout",
    description: "Design and develop responsive, modern, and user-friendly websites with clean UI and optimized performance.",
    color: "emerald",
    tags: ["Django Framework", "Responsive UI", "Full Stack", "Database Prep"],
    features: [
      "Full-stack web application development using Django",
      "Modern, interactive frontend user interfaces with JS/CSS",
      "Secure user authentication and workspace portals",
      "Speed optimization and mobile-first adaptive layouts"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI & Machine Learning Solutions",
    iconName: "Cpu",
    description: "Build intelligent prediction models, automated data terminals, and personalized AI guidance platforms.",
    color: "violet",
    tags: ["Predictive ML", "Recommendation Engines", "AI Mentorship", "Analytics"],
    features: [
      "Intelligent recommendation algorithms (Collaborative / Content)",
      "Predictive machine learning models for resource optimization",
      "Integration of AI services for personalized mentorship",
      "Data cleaning, exploratory data analysis, and model deployment"
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "careergo",
    title: "CareerGo",
    subtitle: "AI Career Mentor Platform",
    description: "An AI-powered career guidance platform that helps users identify suitable career paths, analyze skill gaps, generate personalized learning roadmaps, and recommend learning resources using modern AI technologies.",
    extendedDescription: "CareerGo solves the overwhelming challenge of modern career selection by harnessing intelligent AI algorithms. Users undertake an interactive skill and interest diagnostic, after which the platform evaluates market trends to generate tailored career roadmaps. It details exact learning milestones, recommended certifications, and curated open-source study materials.",
    keyFeatures: [
      "Interactive Skill & Interest Gap Analyzer",
      "Automated Personalized Learning Roadmap Generation",
      "Resource matching with curated online courses and tutorials",
      "Secure user dashboard for tracking skill acquisition milestones"
    ],
    technologies: ["Python", "Django", "AI", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    color: "from-indigo-500 to-blue-600",
    githubUrl: "https://github.com/adithiarunmohan1407",
    liveUrl: "https://careergo-adithi.vercel.app" // representative preview link
  },
  {
    id: "cineverse",
    title: "CineVerse AI",
    subtitle: "Movie Recommendation System",
    description: "A movie recommendation web application that suggests films based on user preferences. It provides personalized recommendations, detailed movie information, and an intuitive interface for discovering movies.",
    extendedDescription: "CineVerse AI elevates movie night by utilizing sophisticated machine learning recommendation algorithms. By analyzing user viewing histories, genre affinities, and rating patterns, CineVerse provides highly accurate movie picks. Features include high-fidelity movie synopsis cards, interactive cast lists, trailers, and personal watchlists.",
    keyFeatures: [
      "Hybrid ML recommendation engine (Content-based & Collaborative)",
      "Rich movie discovery catalog with advanced search filters",
      "Dynamic personalized user watchlists & rating bookmarks",
      "High-performance SQLite database optimized for fast retrieval"
    ],
    technologies: ["Python", "Django", "Machine Learning", "SQLite", "HTML", "CSS", "JavaScript"],
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop",
    color: "from-purple-500 to-pink-600",
    githubUrl: "https://github.com/adithiarunmohan1407"
  },
  {
    id: "medicore",
    title: "MediCore",
    subtitle: "Pharmacy Management System",
    description: "MediCore AI is a next-generation healthcare pharmacy management terminal that solves inventory management and planning challenges through intelligent POS automation, secure role-based workspaces, and predictive machine learning models for inventory optimization.",
    extendedDescription: "MediCore was built to tackle pharmaceutical stockouts and expiry waste. The system combines an intuitive point-of-sale checkout with an advanced predictive inventory engine that forecasts demand for vital medications based on seasonal health trends. Secure role-based access separates administrator controls from pharmacist daily counters.",
    keyFeatures: [
      "Predictive Machine Learning models to minimize drug stockouts & expiry",
      "Intelligent POS automation for rapid prescription checkout",
      "Strict role-based authenticated workspaces (Admin, Pharmacist, Auditor)",
      "Real-time PostgreSQL analytics dashboard with batch expiry alerts"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Machine Learning"],
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1200&auto=format&fit=crop",
    color: "from-emerald-500 to-teal-600",
    githubUrl: "https://github.com/adithiarunmohan1407"
  }
];

export const LEADERSHIP_DATA: TimelineItem[] = [
  {
    role: "Documentation Head",
    organization: "IEDC",
    period: "2026",
    description: "Responsible for maintaining official documentation, meeting records, and event reports.",
    highlights: [
      "Streamlined institutional documentation workflows for 20+ major events",
      "Authored comprehensive annual activity reports submitted to state startup missions",
      "Led workshops on effective technical writing and formal archiving"
    ],
    category: "Leadership",
    badge: "Key Leadership"
  },
  {
    role: "Content Lead",
    organization: "STACS",
    period: "2026",
    description: "Created engaging technical content and promotional materials for student activities.",
    highlights: [
      "Spearheaded technical newsletters, symposium brochures, and web copy",
      "Boosted student community engagement by 45% through high-impact social campaigns",
      "Mentored junior members in digital storytelling and technical editing"
    ],
    category: "Leadership",
    badge: "Creative Lead"
  },
  {
    role: "Events & Activities Coordinator",
    organization: "FOSS",
    period: "2026",
    description: "Planned, organized, and coordinated technical events and community activities.",
    highlights: [
      "Successfully executed open-source coding hackathons and Linux install fests",
      "Coordinated with guest speakers, sponsors, and campus logistics teams",
      "Cultivated a collaborative culture of free software advocacy on campus"
    ],
    category: "Leadership",
    badge: "Organizer"
  },
  {
    role: "ACM Member",
    organization: "Association for Computing Machinery",
    period: "2026",
    description: "Participated in technical sessions, workshops, and collaborative learning initiatives.",
    highlights: [
      "Actively competed in ACM collaborative algorithmic problem-solving contests",
      "Engaged in expert research talks and peer code-review seminars"
    ],
    category: "Leadership",
    badge: "Active Member"
  }
];

export const EDUCATION_DATA: TimelineItem[] = [
  {
    role: "B.Tech in Computer Science and Engineering",
    organization: "NSS College of Engineering",
    period: "Third Year (2022 - 2026)",
    description: "Currently pursuing Bachelor of Technology in Computer Science and Engineering with focus on Software Engineering, Data Structures, Algorithms, AI, and Database Systems.",
    highlights: [
      "Outstanding CGPA: 8.75 / 10",
      "Active participant in technical symposiums and campus developer bodies",
      "Specialized electives: Advanced Machine Learning, Web Engineering"
    ],
    category: "Education",
    badge: "Current Degree"
  }
];

export const CONTACT_INFO = {
  location: "Palakkad, Kerala, India",
  email: "adithiarunmohan1407@gmail.com",
  github: "https://github.com/adithiarunmohan1407",
  linkedin: "https://www.linkedin.com/in/adithi-a-m-045b6b36a",
  whatsapp: "+91 9000000000" // Optional direct trigger if needed
};
