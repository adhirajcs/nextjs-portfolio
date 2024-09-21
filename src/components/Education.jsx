"use client";

import { Playpen_Sans, Comfortaa } from "next/font/google";

// Import the fonts using next/font/google
const body = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});
const heading = Playpen_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Education = () => {
  return (
    <div
      id="education"
      className="relative z-10 text-white h-screen px-8 lg:px-56 py-10 lg:pt-20"
    >
      {/* Heading */}
      <h1 className={`${heading.className} text-4xl font-bold text-center mb-10`}>Education</h1>
    </div>
  );
};

export default Education;
