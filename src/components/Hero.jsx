"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { GlareCard } from "@/components/ui/glare-card";
import { EncryptButton } from "@/components/ui/EncryptButton";
import { Playpen_Sans, Comfortaa } from "next/font/google";

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

  const words2 = `An Aspiring Software Developer with skills in ReactJS, Next.js, Python, and Django.`;

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

      {/* Cool Mode Button */}
      <div className="mt-8 lg:mt-4 flex justify-center lg:justify-start w-full">
        <EncryptButton />
      </div>
    </div>
  );
};

export default Hero;
