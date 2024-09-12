"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

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
  // const words2 = [
  //   {
  //     text: `I am Adhiraj Saha`,
  //     className: "text-blue-500 dark:text-blue-500",
  //   },
  // ];

  const words3 = `I'm passionate about web development, blockchain technology, and building cool projects that make a difference. I love experimenting with the latest technologies and crafting experiences that are intuitive and engaging. My skills include ReactJS, Python, and Django.`;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-evenly relative z-10 text-white px-8 lg:px-56 py-10 h-screen">
      {/* Left Side Content */}
      <div className="text-left space-y-4">
        <TypewriterEffectSmooth words={words1} />
        {/* <TypewriterEffectSmooth words={words2} /> */}
        <TextGenerateEffect words={words3} className="w-2/3" />
      </div>

      {/* Right Side Profile Picture */}
      <div className="mb-6 lg:mb-0 flex-shrink-0">
        <img
          src="/assets/profile-picture.png"
          alt="Profile Picture"
          className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
