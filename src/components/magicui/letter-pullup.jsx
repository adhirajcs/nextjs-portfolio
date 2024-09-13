"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LetterPullup({
  className,
  words,
  delay,
  isHovered
}) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: isHovered ? 1 : 0, // Show animation on hover
      transition: {
        delay: i * (delay ? delay : 0.05),
      },
    }),
  };

  return (
    <div className="flex justify-center">
      <div className={cn("text-center text-4xl font-bold", className)}>
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
