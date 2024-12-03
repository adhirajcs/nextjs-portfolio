"use client";
import React, { useState } from "react";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === item.id && (
            <div
              className="absolute -top-10 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              style={{ whiteSpace: "nowrap" }}
            >
              <div className="absolute w-[60%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
              <div className="absolute w-[80%] -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
              <div className="font-bold text-white relative z-30 text-xs">
                {item.name}
              </div>
              {/* <div className="text-white text-xs">{item.designation}</div> */}
            </div>
          )}
          <div
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 group-hover:scale-105 group-hover:z-30 relative transition duration-500 flex items-center justify-center text-4xl"
          >
            {item.icon} {/* Use icon instead of image */}
          </div>
        </div>
      ))}
    </>
  );
};
