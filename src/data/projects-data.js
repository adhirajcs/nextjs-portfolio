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
};

const projectslist = [
  {
    id: 1,
    name: "Next.js Portfolio",
    description: "A sleek portfolio showcasing my skills and projects.",
    image:
      "/Projects-images/Portfolio.png",
    tools: ["Next.js", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/adhirajcs/nextjs-portfolio",
    liveLink: "https://adhiraj-saha-portfolio.vercel.app",
  },
  {
    id: 2,
    name: "Bhabna",
    description: "A platform where people can share their thoughts or be creative.",
    image:
      "/Projects-images/Bhabna.png",
    tools: ["Next.js", "TailwindCSS", "MongoDB"],
    githubLink: "https://github.com/adhirajcs/bhabna",
    liveLink: "https://bhabna-adhirajcs-projects.vercel.app",
  },
  {
    id: 3,
    name: "Tic Tac Toe",
    description: "A simple Tic Tac Toe game using React.",
    image:
      "/Projects-images/tic-tac-toe.png",
    tools: ["React", "TailwindCSS"],
    githubLink: "https://github.com/adhirajcs/tic-tac-toe",
    liveLink: "https://tic-tac-toe-gamma-sooty.vercel.app",
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
    id: 5,
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
    id: 6,
    name: "Django To Do",
    description: "A simple To-Do application using Django.",
    image:
      "/Projects-images/todo.png",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "SQLite"],
    githubLink: "https://github.com/adhirajcs/django-to-do",
    liveLink: "https://adhiraj.pythonanywhere.com",
  },
  {
    id: 7,
    name: "HappyHolidayHome",
    description: "A holiday home booking system.",
    image:
      "/Projects-images/HappyHolidayHome.png",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    githubLink: "https://github.com/adhirajcs/HappyHolidayHome",
    liveLink: null, // No live link for this one
  },
  {
    id: 8,
    name: "WoofBot",
    description: "A Discord bot that provides various commands to enhance your Discord server experience.",
    image:
      "/Projects-images/WoofBot.png",
    tools: ["Python"],
    githubLink: "https://github.com/adhirajcs/WoofBot",
    liveLink: null, // No live link for this one
  },
  {
    id: 9,
    name: "E-commerce Single-Vendor Website",
    description: "A single-vendor e-commerce website.",
    image:
      "/Projects-images/e-commerce.png",
    tools: ["Angular", "Bootstrap", "PHP", "MySQL"],
    githubLink: "https://github.com/adhirajcs/E-commerce-Single-Vendor-Website",
    liveLink: null, // No live link for this one
  },
];

export { projectslist, toolIcons };
