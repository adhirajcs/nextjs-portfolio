"use client";

import LetterPullup from "@/components/magicui/letter-pullup";
import ContactForm from "@/components/contact-form";
import { Playpen_Sans, Comfortaa, Dancing_Script } from "next/font/google";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

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
      className="relative z-10 text-white px-8 lg:px-28 py-10 lg:pt-8 flex flex-col items-center pb-24"
    >
      {/* Heading */}
      <h1
        className={`${heading.className} text-4xl font-bold text-center mb-16`}
      >
        Contact Me
      </h1>

      {/* Main content with flex-row layout */}
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-start md:items-center w-full min-h-[400px]">
        {/* Contact Form on the Left */}
        <div
          className={`${body.className} w-full md:w-full lg:w-3/5 pr-0 lg:pr-8 flex justify-center`}
        >
          <ContactForm />
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block lg:w-[1px] lg:bg-slate-600 lg:h-80 mx-8"></div>

        {/* Animation on the Right */}
        <div className="w-full h-full pt-8 lg:pt-0 lg:pl-4 lg:w-1/2 flex flex-col items-center justify-start lg:justify-between min-h-[250px] lg:min-h-[400px]">
          {/* Thank You Animation */}
          <div className="mt-8 lg:mt-0 lg:flex-1 flex items-center mb-12 lg:mb-0">
            <LetterPullup
              words={`Thank You
for visiting.`}
              delay={0.05}
              className={`${dancingScript.className}`}
            />
          </div>

          {/* Social Media and Sponsor Section */}
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Buttons */}
            <div className="flex items-center space-x-4">
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

            {/* Github Sponsorship */}
            <div className="flex items-center justify-center">
              <iframe
                src="https://github.com/sponsors/adhirajcs/button"
                title="Sponsor adhirajcs"
                className="h-[32px] w-[114px] border-0 rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
