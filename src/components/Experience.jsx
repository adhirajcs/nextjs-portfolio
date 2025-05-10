"use client";

import { ExperienceCard } from "@/components/ui/experience-card";
import experienceData from "@/data/experience-data";
import { Playpen_Sans, Comfortaa } from "next/font/google";
const body = Comfortaa({ subsets: ["latin"], weight: "400" });
const heading = Playpen_Sans({ subsets: ["latin"], weight: "400" });

export function Experience() {
  return (
    <div
      id="experience"
      className="relative z-10 text-white px-8 lg:px-28 py-10 lg:pt-12 flex flex-col items-center"
    >
      <h1 className={`${heading.className} text-4xl font-bold text-center mb-20`}>
        Experience
      </h1>

      {/* Experience Cards */}
      <div className={`w-full ${body.className} text-start flex flex-wrap justify-center gap-6`}>
        {experienceData.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
