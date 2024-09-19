"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  textSize = "text-sm md:text-lg",
}) => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Monitor when the component is in view

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      // Animate only when in view
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration,
          delay: stagger(0.2),
        }
      );
    } else {
      // Reset the animation when out of view
      animate("span", {
        opacity: 0,
        filter: filter ? "blur(10px)" : "none",
      });
    }
  }, [isInView, scope.current]); // Depend on isInView

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)} ref={ref}>
      <div className="mt-4">
        <div
          className={`dark:text-white text-black leading-snug tracking-wide ${textSize}`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
