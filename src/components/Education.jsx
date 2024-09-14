"use client";

import { TextHoverEffect } from "./ui/text-hover-effect";

const Education = () => {
  return (
    <div
      id="education"
      className="relative z-10 text-white h-screen px-8 lg:px-56 py-10 lg:pt-10"
    >
      {/* Heading */}
      <div className="flex justify-center items-center">
        <TextHoverEffect text="Education" width="300" />
      </div>
    </div>
  );
};

export default Education;
