import Navbar from "@/app/components/Navbar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Hero from "./components/Hero";
import ProjectsOS from "./components/ProjectsOS";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-start justify-center">
        <div className="grid grid-cols-1 items-start justify-items-start p-8 pb-20 gap-16 sm:p-20 w-full max-w-7xl">
          <div id="home" className="w-full">
            <Hero />
          </div>
          <div id="projects" className="w-full flex flex-col gap-16">
            <Projects />
            <ProjectsOS />
          </div>
          <div id="experience" className="w-full">
            <Experience />
          </div>
          <div id="education" className="w-full">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
