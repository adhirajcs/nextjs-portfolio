"use client";

import LetterPullup from "@/components/magicui/letter-pullup";
import ContactForm from "@/components/contact-form";
import { Playpen_Sans, Comfortaa, Dancing_Script } from "next/font/google";

// Import the fonts using next/font/google
const body = Comfortaa({
  subsets: ["latin"],
  weight: "400",
});
const heading = Playpen_Sans({
  subsets: ["latin"],
  weight: "400",
});
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative z-10 text-white px-8 lg:px-56 py-10 lg:pt-8 flex flex-col items-center pb-24"
    >
      {/* Heading */}
      <h1
        className={`${heading.className} text-4xl font-bold text-center mb-16`}
      >
        Contact Me
      </h1>

      {/* Main content with flex-row layout */}
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-start md:items-center w-full">
        {/* Contact Form on the Left */}
        <div
          className={`${body.className} w-full md:w-5/6 lg:w-1/2 pr-0 lg:pr-8 flex justify-center`}
        >
          <ContactForm />
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block lg:w-[1px] lg:bg-slate-600 lg:h-80 mx-8"></div>

        {/* Animation on the Right */}
        <div className="w-auto pt-6 lg:pt-0 lg:pl-4 lg:w-1/2 flex justify-center">
          <LetterPullup
            words={`Thank You
for visiting.`}
            delay={0.05}
            className={`${dancingScript.className}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
