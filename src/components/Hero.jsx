"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { GlareCard } from "./ui/glare-card";
import { CoolMode } from "./magicui/cool-mode";

const Hero = () => {
  const words1 = [
    {
      text: `"Hello There"`,
    },
    {
      text: `I am Adhiraj Saha.`,
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words2 = `I'm passionate about web development, blockchain technology, and building cool projects that make a difference. I love experimenting with the latest technologies and crafting experiences that are intuitive and engaging. My skills include ReactJS, Python, and Django.`;

  return (
    <div
      id="home"
      className="relative z-10 text-white h-screen px-8 lg:px-56 py-10 lg:pt-36"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-evenly">
        {/* Left Side Content */}
        <div className="text-justify lg:text-left space-y-4 pb-8 lg:pb-0">
          <TypewriterEffectSmooth words={words1} />
          <TextGenerateEffect words={words2} className="w-11/12 lg:w-2/3" />
        </div>

        {/* Right Side Profile Picture with Glare (only on desktop) */}
        <div className="hidden lg:block mb-6 lg:mb-0 flex-shrink-0">
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              src="/assets/profile-picture.png"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </GlareCard>
        </div>

        {/* Profile Picture (only on mobile) */}
        <div className="lg:hidden mb-6 lg:mb-0 flex-shrink-0">
          <img
            src="/assets/profile-picture.png"
            alt="Profile Picture"
            className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Cool Mode Button */}
      <div className="flex flex-col items-start lg:pt-4">
        <CoolMode>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Click For Fun!
          </button>
        </CoolMode>
      </div>
    </div>
  );
};

export default Hero;
