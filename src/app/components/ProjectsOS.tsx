"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

interface ProjectItem {
  title: string;
  description: string;
  repository: string;
  link?: string;
}

export default function ProjectsOS() {
  const { translations } = useLanguage();
  const [projectData, setProjectData] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (translations.projects && translations.projects.length > 0) {
      setTimeout(() => {
        setProjectData(translations.projects[0].open_source || []);
        setLoading(false);
      });
    }
  }, [translations]);

  return (
    <div>
      <div className="font-[family-name:var(--font-geist-mono)] text-[13px] font-medium text-[var(--fg-muted)] uppercase tracking-[0.06em] mb-5">
        {translations.projectsTitleOS || "Open-Source Projects"}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {loading
          ? Array(4)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[var(--card-projects-bg)] border border-[var(--border-color)] rounded-2xl p-[22px] animate-pulse h-48 flex flex-col justify-between"
                >
                  <div className="h-6 bg-[var(--bg-alt2)] rounded w-3/4"></div>
                  <div className="h-4 bg-[var(--bg-alt2)] rounded w-5/6 mt-2"></div>
                  <div className="h-4 bg-[var(--bg-alt2)] rounded w-4/6 mt-2"></div>
                  <div className="h-6 bg-[var(--bg-alt2)] rounded w-full mt-auto"></div>
                </div>
              ))
          : projectData.map((project, index) => (
              <div
                key={index}
                className="bg-[var(--card-projects-bg)] border border-[var(--border-color)] rounded-2xl p-[22px] flex flex-col gap-3 hover:border-[var(--foreground)] transition-colors"
              >
                <h3 className="text-[17px] font-bold">{project.title}</h3>
                <p className="text-[var(--fg-muted)] leading-[1.55] text-sm flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-3.5 pt-3 border-t border-[var(--border-color)] flex-wrap">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--fg-muted)] hover:text-[var(--foreground)] font-semibold text-[13px]"
                  >
                    {translations.repository || "Repository"}
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] font-semibold text-[13px] ml-auto"
                    >
                      {translations.liveDemo || "Demo"} 
                    </a>
                  )}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
