import Image from "next/image";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NavBar from "@/components/NavBar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Contact } from "lucide-react";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <div className="h-screen max-h-screen dark">
        <Background />
        <Hero />
        <About />
        <Projects />
        <Education />
        <Contact />
        <BackgroundBeams />
        <NavBar />
      </div>
    </>
  );
}
