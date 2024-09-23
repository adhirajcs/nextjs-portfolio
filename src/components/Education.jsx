"use client";

import Link from "next/link";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
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
  const data = [
    {
      title: "2022-2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-3xl font-normal mb-2">
            Heritage Institute of Technology, Kolkata
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            MAKAUT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Master of Computer Applications (MCA)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            DGPA: 8.04/10
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://www.heritageit.edu.in/" target="_blank">
              <Image
                src="/Institutes/HTIK.png"
                alt="Heritage Institute of Technology"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
              />
            </Link>
            <Link href="https://makautexam.net/" target="_blank">
              <Image
                src="/Institutes/makaut.png"
                alt="MAKAUT"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "2019-2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-3xl font-normal mb-2">
            Prajnanananda Institute of Technology and Management (PITM)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            MAKAUT
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Bachelor of Computer Application (BCA)
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-8">
            CGPA: 9.46
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://pitmkol.org/" target="_blank">
              <Image
                src="/Institutes/pitm.png"
                alt="PITM"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
              />
            </Link>
            <Link href="https://makautexam.net/" target="_blank">
              <Image
                src="/Institutes/makaut.png"
                alt="MAKAUT"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
              />
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-4xl font-normal mb-2">
            A.K. Ghosh Memorial High School, India
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-normal mb-4">
            West Bengal Council of Higher Secondary Education
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-lg font-normal mb-4">
            Humanities (10+2)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="https://www.akgms.edu.in/" target="_blank">
              <Image
                src="/Institutes/akgms.png"
                alt="A.K. Ghosh Memorial High School"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
              />
            </Link>
            <Link href="https://wbchse.wb.gov.in/home/" target="_blank">
              <Image
                src="/Institutes/wbchse.png"
                alt="West Bengal Council of Higher Secondary Education"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
              />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="education"
      className="relative z-10 text-white px-8 lg:px-28 py-10 lg:pt-12 flex flex-col items-center"
    >
      {/* Heading */}
      <h1
        className={`${heading.className} text-4xl font-bold text-center mb-12`}
      >
        Education
      </h1>

      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Education;
