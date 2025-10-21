import Navbar from "@/app/components/Navbar";
import Carrousel from "@/app/components/Carrousel";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Socials from "./components/Socials";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex items-start justify-center min-h-screen">
      <div className="grid grid-cols-1 items-start justify-items-start p-8 pb-20 gap-16 sm:p-20  w-full max-w-7xl">
        <Navbar />
        <Hero/>
        <Socials />
        <Carrousel />
        <Projects />
        <Experience />
        <Education />
      </div>
    </div>
  );
}
