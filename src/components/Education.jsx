"use client";

// import Link from "next/link";
// import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import data from "@/data/education-data";

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
      className="relative z-10 text-white px-8 lg:px-28 py-10 lg:pt-12 flex flex-col items-center"
    >
      {/* Heading */}
      <h1
        className={`${heading.className} text-4xl font-bold text-center mb-20`}
      >
        Education
      </h1>

      <div className="w-full">
        <Timeline data={data} className={`${body.className}`} />
      </div>
    </div>
  );
};

export default Education;
