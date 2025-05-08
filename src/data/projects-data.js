import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiFramer,
  SiRedux,
  SiMongodb,
  SiDjango,
  SiBootstrap,
  SiAngular,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiShadcnui,
  SiPostgresql,
  SiSupabase,
  SiTypescript
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

const toolIcons = {
  "Next.js": <SiNextdotjs />,
  React: <SiReact />,
  TailwindCSS: <SiTailwindcss />,
  Firebase: <SiFirebase />,
  "Framer Motion": <SiFramer />,
  Redux: <SiRedux />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  "Node.js": <SiNodedotjs />,
  SQLite: <SiSqlite />,
  PHP: <SiPhp />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  JavaScript: <SiJavascript />,
  Bootstrap: <SiBootstrap />,
  Django: <SiDjango />,
  Angular: <SiAngular />,
  MySQL: <DiMysql />,
  Python: <SiPython />,
  ShadCNUI: <SiShadcnui />,
  PostgreSQL: <SiPostgresql />,
  Supabase: <SiSupabase />,
  TypeScript: <SiTypescript />
};

const projectslist = [
  {
    id: 8,
    name: "Zen Guy",
    description: "Zen Guy is an AI-powered Twitter bot that posts zen quotes and responds to comments.",
    image: "/Projects-images/zen-guy.jpg",
    tools: ["TypeScript"],
    githubLink: "https://github.com/adhirajcs/Zen-Guy",
    liveLink: null,
  },
  {
    id: 7,
    name: "HR System",
    description: "A backend API for Human Resource Management System.",
    image: "/Projects-images/hr-system.png",
    tools: ["Django", "PostgreSQL", "Supabase"],
    githubLink: "https://github.com/adhirajcs/HR-System",
    liveLink: null, // No live link for this one
  },
  {
    id: 6,
    name: "Next.js Portfolio",
    description: "A sleek portfolio showcasing my skills and projects.",
    image:
      "/Projects-images/Portfolio.png",
    tools: ["Next.js", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/adhirajcs/nextjs-portfolio",
    liveLink: "https://adhiraj-saha-portfolio.vercel.app",
  },
  {
    id: 5,
    name: "Bhabna",
    description: "A platform where people can share their thoughts or be creative.",
    image:
      "/Projects-images/Bhabna.png",
    tools: ["Next.js", "TailwindCSS", "MongoDB"],
    githubLink: "https://github.com/adhirajcs/bhabna",
    liveLink: "https://bhabna-adhirajcs-projects.vercel.app",
  },
  
  {
    id: 4,
    name: "MovieHub",
    description: "A movie information website.",
    image:
      "/Projects-images/MovieHub.png",
    tools: ["React", "TailwindCSS"],
    githubLink: "https://github.com/adhirajcs/MovieHub",
    liveLink: "https://movie-hub-wine-three.vercel.app",
  },
  {
    id: 3,
    name: "Helpify",
    description: "A location-based community service platform.",
    image:
      "/Projects-images/helpify.png",
    tools: [
      "React",
      "TailwindCSS",
      "Express",
      "Node.js",
      "MongoDB",
      "Firebase",
    ],
    githubLink: "https://github.com/adhirajcs/helpify",
    liveLink: null, // No live link for this one
  },
  {
    id: 2,
    name: "Django To Do",
    description: "A simple To-Do app using Django.",
    image:
      "/Projects-images/todo.png",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "SQLite"],
    githubLink: "https://github.com/adhirajcs/django-to-do",
    liveLink: "https://adhiraj.pythonanywhere.com",
  },
  
  {
    id: 1,
    name: "WoofBot",
    description: "A Discord bot that provides various commands to enhance your Discord server experience.",
    image:
      "/Projects-images/WoofBot.png",
    tools: ["Python"],
    githubLink: "https://github.com/adhirajcs/WoofBot",
    liveLink: null, // No live link for this one
  },
  
];

export { projectslist, toolIcons };
