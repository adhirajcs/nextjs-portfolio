"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function LetterPullup({ className, words, delay }) {
  const letters = words.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Trigger animation both ways (entering and leaving)

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: isInView ? 0 : 100, // Return to initial position when out of view
      opacity: isInView ? 1 : 0, // Hide letters when out of view
      transition: {
        delay: i * (delay ? delay : 0.05),
      },
    }),
  };

  return (
    <div className="flex justify-center">
      <div ref={ref} className={cn("text-center text-5xl font-bold", className)}>
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            variants={pullupVariant}
            initial="initial"
            animate="animate"
            custom={i}
            className={cn("inline", className)}
          >
            {letter === " " ? <span>&nbsp;</span> : letter}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
