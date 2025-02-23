"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { EncryptButton } from "@/components/ui/EncryptButton";
import { Playpen_Sans, Comfortaa } from "next/font/google";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

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
      text: `"Hello There"`,
    },
    {
      text: "",
    },
    {
      text: `I am Adhiraj Saha`,
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words2 = `An Aspiring Software Developer with skills in Python, Django, React, Next.js and PostgreSQL.`;

  return (
    <div
      id="home"
      className="relative z-10 text-white px-8 lg:px-48 py-10 lg:pt-36 flex flex-col items-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full">
        {/* Left Side Content */}
        <div className="text-left space-y-4 pb-8 lg:pb-0">
          <TypewriterEffectSmooth
            words={words1}
            className={`${words1Font.className}`}
          />
          <TextGenerateEffect
            words={words2}
            filter={false}
            className={`${words2Font.className} text-center lg:text-left lg:w-2/3`}
            isHovered={true}
          />
        </div>

        {/* Normal Profile Picture for all devices */}
        <div className="mb-6 lg:mb-0 flex-shrink-0">
          <img
            src="/assets/profile-picture.png"
            alt="Profile Picture"
            className="w-32 h-32 object-cover rounded-full shadow-lg md:w-36 md:h-52 md:rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8 lg:mt-4 flex items-center justify-center lg:justify-start w-full space-x-4">
        {/* Cool Mode Button */}
        <EncryptButton />
        
        {/* X/Twitter Button */}
        <a
          href="https://x.com/theadhirajsaha"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 shadow-[0_4px_14px_0_rgb(64,64,64,39%)] hover:shadow-[0_6px_20px_rgba(64,64,64,23%)] hover:bg-[rgba(31,41,55,0.95)] bg-[#000] rounded-md text-white font-light transition duration-200 ease-linear flex items-center justify-center"
        >
          <RiTwitterXLine size={20} className="text-[#dfdfdf]" />
        </a>

        {/* Linkedin Button */}
        <a
          href="https://www.linkedin.com/in/adhirajsaha"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(30,58,138,0.9)] bg-[#18559b] rounded-md text-white font-light transition duration-200 ease-linear flex items-center justify-center"
        >
          <SiLinkedin size={20} className="text-[#dfdfdf]" />
        </a>

        {/* Github Button */}
        <a
          href="https://github.com/adhirajcs"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 shadow-[0_4px_14px_0_rgb(64,64,64,39%)] hover:shadow-[0_6px_20px_rgba(64,64,64,23%)] hover:bg-[rgba(31,41,55,0.95)] bg-[#000] rounded-md text-white font-light transition duration-200 ease-linear flex items-center justify-center"
        >
          <SiGithub size={20} className="text-[#dfdfdf]" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
