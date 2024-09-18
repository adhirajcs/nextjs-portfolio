"use client";

import { useState } from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import IconCloud from "@/components/magicui/icon-cloud";

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

  const introText = `I'm Adhiraj Saha, a postgraduate in MCA and also hold a BCA degree. I'm a passionate web developer with a keen interest in blockchain technology. With a strong foundation in ReactJS, Python, and Django, I'm focused on creating projects that make a difference.
  In my free time, I love to listen to music, surf the internet about new technologies, or play some video games. `;

  return (
    <div
      id="about"
      className="relative z-10 text-white px-8 lg:px-28 py-10 lg:pt-10 flex flex-col items-center"
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
        <div className="text-center lg:text-left lg:w-2/3 mt-4 lg:mt-0 p-4 lg:p-6 lg:pl-32">
          {/* For Desktop View */}
          <div className="hidden md:block">
            <TextGenerateEffect
              words={introText}
              filter={false}
              textSize="text-sm md:text-base"
              isHovered={isHovered}
            />
          </div>
          {/* For Mobile View */}
          <div className="block md:hidden">
            <TextGenerateEffect
              words={introText}
              filter={false}
              textSize="text-sm"
              isHovered={true} // Always animate in mobile view
            />
          </div>

          {/* Skills Section */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-center pb-4">My Skills</h2>
            <div className="flex flex-wrap gap-4 mt-2 items-center text-center justify-center">
              {/* Placeholder for now */}
              <span className="bg-slate-500 text-white px-4 py-2 rounded-lg">
                Placeholder
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-lg">
                Placeholder
              </span>
              <span className="bg-slate-500 text-white px-4 py-2 rounded-lg">
                Placeholder
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
