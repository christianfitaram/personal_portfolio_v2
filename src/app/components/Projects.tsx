"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  title: string;
  description: string;
  repository: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const { translations } = useLanguage();
  const [projectData, setProjectData] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Start loading
    if (translations.projects && translations.projects.length > 0) {
      setTimeout(() => {
        setProjectData(translations.projects[0].principal || []);
        setLoading(false); // Stop loading once data is set
      }); // Simulate loading delay
    }
  }, [translations]);

  return (
    <div id="#projects" className="w-full mx-auto">
      <div className="mb-4">
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
          {translations.projectsTitle || "Projects"}
        </code>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {loading ? (
          Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-md animate-pulse h-56 flex flex-col justify-between"
              >
                <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6 mt-2"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6 mt-2"></div>
                <div className="h-6 bg-gray-700 rounded w-full mt-auto"></div>
              </div>
            ))
        ) : projectData.length > 0 ? (
          projectData.map((project, index) => (
            <div
              key={index}
              className=" bg-[var(--card-projects-bg)] rounded-lg p-6 shadow-md hover:shadow-lg transition-all 
                   w-full max-w-full overflow-hidden break-words h-full flex flex-col justify-between"
            >
              <h3 className="text-xl">{project.title}</h3>
              <div className="flex flex-col items-start h-full">
                <p className="mt-2 break-words">{project.description}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded-md break-words"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-4 flex justify-between items-center border-t border-gray-600">
                {project.repository && (
                  <div className="flex flex-row items-center gap-2">
                    <FaGithub className="transition duration-300" />
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {translations.repository || "Repository"}
                    </a>
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline break-words"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No projects available.</p>
        )}
      </div>
    </div>
  );
}
