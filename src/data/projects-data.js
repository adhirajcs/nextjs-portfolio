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
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFwcHxlbnwwfHx8fDE2ODI1MTg1Nzc&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["Next.js", "TailwindCSS", "Framer Motion"],
    githubLink: "https://github.com/adhirajcs/nextjs-portfolio",
    liveLink: "https://adhiraj-saha-portfolio.vercel.app",
  },
  {
    id: 2,
    name: "Bhabna",
    description: "A thought-sharing platform.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGFwcHxlbnwwfHx8fDE2ODI1MTg1Nzc&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["Next.js", "TailwindCSS", "MongoDB"],
    githubLink: "https://github.com/adhirajcs/bhabna",
    liveLink: "https://bhabna-adhirajcs-projects.vercel.app",
  },
  {
    id: 3,
    name: "MovieHub",
    description: "A movie information website.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["React", "TailwindCSS"],
    githubLink: "https://github.com/adhirajcs/MovieHub",
    liveLink: "https://movie-hub-wine-three.vercel.app",
  },
  {
    id: 4,
    name: "Helpify",
    description: "A platform for helping people in need.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
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
    id: 5,
    name: "Django To Do",
    description: "A simple To-Do application using Django.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Django", "SQLite"],
    githubLink: "https://github.com/adhirajcs/django-to-do",
    liveLink: "https://adhiraj.pythonanywhere.com",
  },
  {
    id: 6,
    name: "HappyHolidayHome",
    description: "A holiday home booking system.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    githubLink: "https://github.com/adhirajcs/HappyHolidayHome",
    liveLink: null, // No live link for this one
  },
  {
    id: 7,
    name: "Tic Tac Toe",
    description: "A simple Tic Tac Toe game using React.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["React", "TailwindCSS"],
    githubLink: "https://github.com/adhirajcs/tic-tac-toe",
    liveLink: "https://tic-tac-toe-gamma-sooty.vercel.app",
  },
  {
    id: 8,
    name: "WoofBot",
    description: "A Discord bot that fetches random dog images.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["Python"],
    githubLink: "https://github.com/adhirajcs/WoofBot",
    liveLink: null, // No live link for this one
  },
  {
    id: 9,
    name: "E-commerce Single-Vendor Website",
    description: "A single-vendor e-commerce website built using Angular.",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGVjb21tZXJjZXxlbnwwfHx8fDE2ODI1MTg2NTY&ixlib=rb-4.0.3&q=80&w=400",
    tools: ["Angular", "Bootstrap", "PHP", "MySQL"],
    githubLink: "https://github.com/adhirajcs/E-commerce-Single-Vendor-Website",
    liveLink: null, // No live link for this one
  },
];

export { projectslist, toolIcons };
