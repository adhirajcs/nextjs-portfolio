"use client";;
import React from "react";

import { cn } from "@/lib/utils";

export default function PulsatingButton({
  className,
  children,
  pulseColor = "#0066cc",
  duration = "1.5s",
  ...props
}) {
  return (
    (<button
      className={cn(
        "relative text-center cursor-pointer flex justify-center items-center rounded-lg text-white dark:text-blue-100 bg-blue-500 dark:bg-blue-800 px-4 py-2",
        className
      )}
      style={
        {
          "--pulse-color": pulseColor,
          "--duration": duration
        }
      }
      {...props}>
      <div className="relative z-10">{children}</div>
      <div
        className="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2" />
    </button>)
  );
}
