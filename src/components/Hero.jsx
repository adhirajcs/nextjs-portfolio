"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { GlareCard } from "@/components/ui/glare-card";
import { EncryptButton } from "@/components/ui/EncryptButton";
import { Playpen_Sans, Comfortaa } from "next/font/google";

import { SiGithub, SiLinkedin } from "react-icons/si";

// Import the fonts using next/font/google

const words1Font = Playpen_Sans({
  subsets: ["latin"],
  weight: "400",
});

const words2Font = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});

const Hero = () => {
  const words1 = [
    {
      text: `"Hello There" `,
    },
    {
      text: "",
    },
    {
      text: `I am Adhiraj Saha.`,
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words2 = `An Aspiring Software Developer with skills in Python, Django, React, Next.js and PostgreSQL.`;

  return (
    <div
      id="home"
      className="relative z-10 text-white px-8 lg:px-56 py-10 lg:pt-36 flex flex-col items-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
        {/* Left Side Content */}
        <div className="text-right lg:text-left space-y-4 pb-8 lg:pb-0">
          <TypewriterEffectSmooth
            words={words1}
            className={`${words1Font.className}`}
          />
          <TextGenerateEffect
            words={words2}
            className={`${words2Font.className} w-11/12 lg:w-2/3`}
            isHovered={true}
          />
        </div>

        {/* Right Side Profile Picture with Glare (only on desktop) */}
        <div className="hidden md:block mb-6 lg:mb-0 flex-shrink-0">
          <GlareCard className="flex items-center justify-center">
            <img
              src="/assets/profile-picture.png"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </GlareCard>
        </div>

        {/* Profile Picture (only on mobile) */}
        <div className="md:hidden mb-6 flex-shrink-0">
          <img
            src="/assets/profile-picture.png"
            alt="Profile Picture"
            className="w-32 h-32 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      <div className="mt-8 lg:mt-4 flex justify-center lg:justify-start w-full space-x-4">
        {/* Cool Mode Button */}
        <EncryptButton />

        {/* Linkedin Button */}
        <a
          href="https://www.linkedin.com/in/adhirajsaha"
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-3 bg-[#18559b] rounded-md text-white font-light transition duration-200 ease-linear flex items-center justify-center"
        >
          <SiLinkedin size={20} className="text-[#dfdfdf]" />
        </a>

        {/* Github Button */}
        <a
  href="https://github.com/adhirajcs"
  target="_blank"
  rel="noopener noreferrer"
  className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-3 bg-[#000] text-[#696969] rounded-md font-light transition duration-200 ease-linear flex items-center justify-center"
>
  <SiGithub size={20} className="text-[#dfdfdf]" />
</a>
      </div>
    </div>
  );
};

export default Hero;
