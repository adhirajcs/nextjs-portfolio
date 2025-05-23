import Image from "next/image";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import { Experience } from "@/components/Experience";


export default function Home() {
  return (
    <>
      <Background />
      <BackgroundBeams />
      <div className="dark flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <NavBar />
      </div>
    </>
  );
}
