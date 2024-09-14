"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TextHoverEffect } from "./ui/text-hover-effect";

const About = () => {
  const introText = `I'm Adhiraj Saha, a postgraduate in MCA and also hold a BCA degree. I'm a passionate web developer with a keen interest in blockchain technology. With a strong foundation in ReactJS, Python, and Django, I'm focused on creating projects that make a difference.
  In my free time, I love to listen to music, surf the internet about new technologies, or play some video games. `;

  return (
    <div
      id="about"
      className="relative z-10 text-white h-screen px-8 lg:px-56 py-10 lg:pt-10"
    >
      {/* Heading */}
      {/* <h1 className="text-4xl font-bold text-center mb-10">About Me</h1> */}
      <div className="flex justify-center items-center">
        <TextHoverEffect text="About Me" width="300" />
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around space-y-8 lg:space-y-0">
        {/* Left Side - Profile Image */}
        <div className="mb-6 lg:mb-0 flex-shrink-0">
          <img
            src="/assets/profile-picture.png"
            alt="Profile Picture"
            className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg"
          />
        </div>

        {/* Right Side - Introduction Text */}
        <div className="text-left space-y-4 lg:w-2/3">
          <TextGenerateEffect words={introText} filter={false} />
        </div>
      </div>
    </div>
  );
};

export default About;
