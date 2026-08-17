"use client";
import { useLanguage } from "@/context/LanguageContext";
import Certifications from "./Certifications";

export default function Education() {
  const { translations } = useLanguage();

  return (
    <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div>
        <h2 className="text-[28px] font-extrabold mb-5">
          {translations.educationTitle || "Education"}
        </h2>
        <div className="flex flex-col gap-4">
          {translations.education?.map((edu: any, index: number) => (
            <div
              key={index}
              className="bg-[var(--card-education-bg)] border border-[var(--border-color)] rounded-2xl p-[22px]"
            >
              <h3 className="text-base font-bold mb-1.5">{edu.title}</h3>
              <p className="text-[13px] text-[var(--fg-muted)]">
                {edu.institution} &middot; {edu.periodTime}
              </p>
              <p className="text-[13px] text-[var(--fg-muted)] mt-0.5">{edu.location}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {edu.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="bg-[var(--bg-alt2)] text-[var(--fg-muted)] text-xs px-[11px] py-[5px] rounded-full font-[family-name:var(--font-geist-mono)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-[28px] font-extrabold mb-5">
          {translations.certificationsTitle || "Certificates"}
        </h2>
        <Certifications />
      </div>
    </div>
  );
}
