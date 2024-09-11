import Image from "next/image";
import Background from "@/components/Background";
import Hero from "@/components/Hero";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <div className="h-screen max-h-screen dark">
        <Background />
        <Hero />
        <BackgroundBeams />
      </div>
    </>
  );
}
