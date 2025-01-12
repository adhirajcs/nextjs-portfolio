"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import PulsatingButton from "@/components/ui/pulsating-button";
import { Playpen_Sans, Comfortaa } from "next/font/google";
import { projectslist, toolIcons } from "@/data/projects-data";

// Import the fonts using next/font/google
const body = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});
const heading = Playpen_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative z-10 text-white px-8 lg:px-20 py-10 lg:pt-12 flex flex-col items-center"
    >
      {/* Heading */}
      <h1
        className={`${heading.className} text-4xl font-bold text-center mb-20`}
      >
        Projects
      </h1>

      <div
        className={`${body.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}
      >
        {projectslist.map((project) => (
          <CardContainer key={project.id} className="inter-var w-80">
            <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl group-hover/card:shadow-xl"
                    alt={project.name}
                  />
                </div>
              </CardItem>

              {/* Display Tools */}
              <CardItem translateZ="80" className="flex gap-2 mt-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-2xl dark:text-white text-black"
                  >
                    {toolIcons[tool]}
                  </span>
                ))}
              </CardItem>

              {/* Links */}
              <div className="flex justify-between items-center mt-4">
                {project.liveLink && (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={project.liveLink}
                    target="_blank"
                    className="px-3 py-1 rounded-xl text-sm font-normal dark:text-white"
                  >
                    Live Demo →
                  </CardItem>
                )}
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.githubLink}
                  target="_blank"
                  className="px-3 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                >
                  GitHub
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-6">
        <a
          href="https://github.com/adhirajcs?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PulsatingButton className={`${body.className}`}>View More...</PulsatingButton>
        </a>
      </div>
    </div>
  );
};

export default Projects;
