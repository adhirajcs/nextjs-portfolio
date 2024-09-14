"use client";

import { useState } from "react";
import LetterPullup from "./magicui/letter-pullup";
import { TextHoverEffect } from "./ui/text-hover-effect";

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="contact"
      className="relative z-10 text-white h-screen px-8 lg:px-56 py-10 lg:pt-10"
      onMouseEnter={() => setIsHovered(true)} // Trigger animation on hover
      onMouseLeave={() => setIsHovered(false)} // Reset when not hovering
    >
      {/* Heading */}
      <div className="flex justify-center items-center">
        <TextHoverEffect text="Contact Me" width="300" />
      </div>

      {/* Main content with flex-row layout */}
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
        {/* Contact Form on the Left */}
        <div className="w-full lg:w-1/2 lg:pr-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-lg text-black"
                rows={5}
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Vertical Line */}
        <div className="hidden lg:block lg:w-[1px] lg:bg-slate-600 lg:h-80 mx-8"></div>

        {/* Animation on the Right */}
        <div className="w-auto pt-24 lg:pt-0 md:pl-4 lg:w-1/2 flex justify-center">
          <LetterPullup
            words={`Thank You for visiting ;)`}
            delay={0.05}
            isHovered={isHovered} // Pass hover state as prop
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
