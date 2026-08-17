"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

interface ProjectItem {
  title: string;
  description: string;
  demoType?: "video" | "site";
  videoUrl?: string;
  siteUrl?: string;
}

export default function Projects() {
  const { translations } = useLanguage();
  const [projectData, setProjectData] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<{ url: string; title: string } | null>(null);

  useEffect(() => {
    setLoading(true);
    if (translations.projects && translations.projects.length > 0) {
      setTimeout(() => {
        setProjectData(translations.projects[0].principal || []);
        setLoading(false);
      });
    }
  }, [translations]);

  const closeModal = () => setModal(null);

  return (
    <div>
      <div className="font-[family-name:var(--font-geist-mono)] text-[13px] font-medium text-[var(--fg-muted)] uppercase tracking-[0.06em] mb-5">
        {translations.projectsTitle || "Proprietary Projects"}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array(3)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-[var(--card-projects-bg)] border border-[var(--border-color)] rounded-2xl p-6 animate-pulse h-56 flex flex-col justify-between"
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
                className="bg-[var(--card-projects-bg)] border border-[var(--border-color)] rounded-2xl p-[26px] flex flex-col gap-3.5 hover:border-[var(--foreground)] transition-colors"
              >
                <h3 className="text-[19px] font-bold">{project.title}</h3>
                <p className="text-[var(--fg-muted)] leading-[1.6] text-[15px] flex-1">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 pt-3.5 border-t border-[var(--border-color)]">
                  {project.demoType === "video" && project.videoUrl && (
                    <button
                      onClick={() =>
                        setModal({ url: project.videoUrl!, title: project.title })
                      }
                      className="cursor-pointer bg-[var(--accent)] text-[var(--accent-fg)] border-none px-4 py-[9px] rounded-md font-semibold text-[13px]"
                    >
                      &#9658; {translations.watchDemo || "Watch demo"}
                    </button>
                  )}
                  {project.demoType === "site" && project.siteUrl && (
                    <a
                      href={project.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--foreground)] font-semibold text-sm border-b border-[var(--border-color)] hover:border-[var(--foreground)]"
                    >
                      {translations.visitSite || "Visit site"} &#8599;
                    </a>
                  )}
                </div>
              </div>
            ))}
      </div>

      {modal && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
          className="fixed inset-0 bg-black/[.82] backdrop-blur-[6px] flex items-center justify-center z-[1000] p-6"
        >
          <div className="w-full max-w-[880px] bg-black rounded-2xl overflow-hidden relative shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-[2] cursor-pointer w-[34px] h-[34px] rounded-full border-none bg-white/[.15] text-white text-base leading-none"
            >
              &#10005;
            </button>
            <video
              src={modal.url}
              controls
              autoPlay
              className="w-full max-h-[75vh] block bg-black"
            />
            <div className="px-5 py-4 bg-[var(--card-projects-bg)]">
              <p className="text-[15px] font-semibold">{modal.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
