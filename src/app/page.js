import Image from "next/image";
import Background from "@/components/Background";

export default function Home() {
  return (
    <>
      <div className="h-screen max-h-screen">
        <Background />
        <div className="relative z-10 text-white p-10 h-screen">
          <h1 className="text-4xl">Welcome to My Portfolio</h1>
          <p className="mt-4">Check out my work below.</p>
        </div>
      </div>
    </>
  );
}
