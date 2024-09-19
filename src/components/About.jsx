"use client";

import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import IconCloud from "@/components/magicui/icon-cloud";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

import {
  SiNextdotjs,
  SiReact,
  SiPython,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinux,
} from "react-icons/si";

const About = () => {
  const [isHovered, setIsHovered] = useState(false); // State for hover

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const introText = `I'm a postgraduate in MCA and also hold a BCA degree. I'm a passionate web developer with a keen interest in blockchain technology. With a strong foundation in ReactJS, Python, and Django, I'm focused on creating projects that make a difference.
  In my free time, I love to listen to music, surf the internet about new technologies, or play some video games. `;

  const skills = [
    {
      id: 1,
      name: "Next.js",
      icon: <SiNextdotjs size={40} className="text-[#0070f3]" />,
    },
    {
      id: 2,
      name: "React",
      icon: <SiReact size={40} className="text-[#61dafb]" />,
    },
    {
      id: 3,
      name: "Python",
      icon: <SiPython size={40} className="text-[#306998]" />,
    },
    {
      id: 4,
      name: "Django",
      icon: <SiDjango size={40} className="text-[#092e20]" />,
    },
    {
      id: 5,
      name: "MongoDB",
      icon: <SiMongodb size={40} className="text-[#47a248]" />,
    },
    {
      id: 6,
      name: "MySQL",
      icon: <SiMysql size={40} className="text-[#00758f]" />,
    },
    {
      id: 7,
      name: "TailwindCSS",
      icon: <SiTailwindcss size={40} className="text-[#38b2ac]" />,
    },
    {
      id: 8,
      name: "Git",
      icon: <SiGit size={40} className="text-[#f05032]" />,
    },
    {
      id: 9,
      name: "GitHub",
      icon: <SiGithub size={40} className="text-[#181717]" />,
    },
    {
      id: 10,
      name: "Linux",
      icon: <SiLinux size={40} className="text-[#fcc624]" />,
    },
  ];

  return (
    <div
      id="about"
      className="relative z-10 text-white px-8 lg:px-28 py-10 lg:pt-16 flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)} // Trigger animation on hover
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center pb-8">About Me</h1>

      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
        {/* Left Side - Icon Cloud */}
        <div className="flex-shrink-0 mb-6 lg:mb-0 flex items-center justify-center">
          <div className="h-48 w-48 sm:h-60 sm:w-60 lg:h-80 lg:w-80">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>

        {/* Right Side - Introduction Text and Skills */}
        <div className="text-center lg:text-justify lg:w-2/3 mt-4 lg:mt-0 p-4 lg:p-6 lg:pl-24">
          {/* For Desktop View */}
          <div className="hidden lg:block">
            <TextGenerateEffect
              words={introText}
              filter={false}
              textSize="text-sm md:text-base"
              isHovered={isHovered}
            />
          </div>
          {/* For Mobile View */}
          <div className="block lg:hidden">
            <TextGenerateEffect
              words={introText}
              filter={false}
              textSize="text-sm"
              isHovered={true} // Always animate in mobile view
            />
          </div>

          {/* Skills Section */}
          <div className="mt-12">
            <h2 className="text-lg font-semibold text-center pb-4">
              My Skills
            </h2>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-2 items-center text-center justify-center w-full">
              <AnimatedTooltip items={skills} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
