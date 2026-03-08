// All portfolio data in one place — easy to swap with a database later.

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "web",
    name: "Web Development",
    description: "Full-stack web applications and websites",
    icon: "Globe",
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    description: "iOS and Android mobile applications",
    icon: "Smartphone",
  },
  {
    id: "design",
    name: "UI/UX Design",
    description: "User interface and experience design projects",
    icon: "Palette",
  },
  {
    id: "ai",
    name: "AI & ML",
    description: "Artificial intelligence and machine learning projects",
    icon: "Brain",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment integration, product management, and real-time inventory tracking.",
    category: "web",
    image: "",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: "2",
    title: "Health Tracker App",
    description:
      "Cross-platform mobile app for tracking daily health metrics, exercise routines, and nutrition.",
    category: "mobile",
    image: "",
    tags: ["React Native", "Firebase", "TypeScript"],
    link: "#",
  },
  {
    id: "3",
    title: "SaaS Dashboard Redesign",
    description:
      "Complete redesign of an analytics dashboard improving user engagement by 40%.",
    category: "design",
    image: "",
    tags: ["Figma", "Design System", "Prototyping"],
    link: "#",
  },
  {
    id: "4",
    title: "Chatbot Engine",
    description:
      "NLP-powered chatbot engine for customer support automation with multi-language support.",
    category: "ai",
    image: "",
    tags: ["Python", "TensorFlow", "NLP"],
    link: "#",
  },
  {
    id: "5",
    title: "Portfolio CMS",
    description:
      "Content management system designed for creative portfolios with drag-and-drop page builder.",
    category: "web",
    image: "",
    tags: ["Next.js", "Prisma", "Tailwind"],
    link: "#",
  },
  {
    id: "6",
    title: "Fitness Social App",
    description:
      "Social fitness app with workout sharing, challenges, and community leaderboards.",
    category: "mobile",
    image: "",
    tags: ["Flutter", "Supabase", "Dart"],
    link: "#",
  },
];

export const profileData = {
  name: "Pasindu Kandamby",
  title: "Network & System Administrator",
  bio: "I craft secure network infrastructures and manage enterprise systems. Passionate about cybersecurity, firewall management, and building resilient IT environments.",
  email: "hello@example.com",
  location: "San Francisco, CA",
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  skills: ["React", "TypeScript", "Node.js", "Python", "Figma", "PostgreSQL", "AWS", "Docker"],
  experience: [
    {
      role: "Senior Developer",
      company: "Tech Company",
      period: "2022 – Present",
      description: "Leading frontend architecture and design system development.",
    },
    {
      role: "Full-Stack Developer",
      company: "Startup Inc.",
      period: "2020 – 2022",
      description: "Built and shipped multiple products from concept to production.",
    },
  ],
};
