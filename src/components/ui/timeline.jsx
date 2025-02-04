"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils"; // Import cn function

export const Timeline = ({ data, className }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className={cn(
        "w-full bg-white/50 dark:bg-slate-900/50 font-sans md:px-10 pt-0 md:pt-10 rounded-2xl overflow-visible",
        className
      )}
      ref={containerRef}
    >
      {/* <div className={cn("max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10")}>
        <h2 className={cn("text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl")}>
          Changelog from my journey
        </h2>
        <p className={cn("text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm")}>
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s a timeline of my journey.
        </p>
      </div> */}

      <div ref={ref} className={cn("relative max-w-7xl mx-auto pb-20")}>
        {data.map((item, index) => (
          <div
            key={index}
            className={cn("flex justify-start pt-10 md:pt-10 md:gap-10")}
          >
            <div
              className={cn(
                "sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full"
              )}
            >
              <div
                className={cn(
                  "h-8 w-8 md:h-10 md:w-10 absolute left-4 md:left-3 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center"
                )}
              >
                <div
                  className={cn(
                    "h-3 w-3 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-1 md:p-2"
                  )}
                />
              </div>
              <h3
                className={cn(
                  "hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-neutral-500 dark:text-neutral-500"
                )}
              >
                {item.title}
              </h3>
            </div>

            <div className={cn("relative pl-20 pr-4 md:pl-4 w-full")}>
              <div
                className={cn(
                  "md:hidden block text-base mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500"
                )}
              >
                {item.title}
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className={cn(
            "absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          )}
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className={cn(
              "absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            )}
          />
        </div>
      </div>
    </div>
  );
};
