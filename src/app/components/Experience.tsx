"use client";
import { useLanguage } from "@/context/LanguageContext";
import { withBasePath } from "@/lib/withBasePath";

export default function Experience() {
  const { translations } = useLanguage();

  return (
    <div>
      <h2 className="text-[28px] font-extrabold mb-6">
        {translations.experienceTitle || "Experience"}
      </h2>
      <div className="flex flex-col gap-[18px]">
        {translations.experience?.map((exp: any, index: number) => (
          <div
            key={index}
            className="bg-[var(--card-experience-bg)] border border-[var(--border-color)] rounded-2xl p-[26px] flex gap-5 items-start flex-wrap"
          >
            <img
              src={withBasePath(exp.companyLogo)}
              alt={exp.company}
              style={{ backgroundColor: exp.logoBg || "#ffffff" }}
              className="w-14 h-14 rounded-xl object-contain p-2 flex-shrink-0"
            />
            <div className="flex-1 min-w-[240px] flex flex-col gap-2">
              <h3 className="text-lg font-bold">
                {exp.title}{" "}
                <span className="text-[var(--fg-muted)] font-medium">
                  &middot; {exp.company}
                </span>
              </h3>
              <p className="text-[13px] text-[var(--fg-muted)] font-[family-name:var(--font-geist-mono)]">
                {exp.contractType} &middot; {exp.periodTime} &middot; {exp.location}
              </p>
              <p className="mt-1 text-[15px] leading-[1.6]">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="bg-[var(--bg-alt2)] text-[var(--fg-muted)] text-xs px-[11px] py-[5px] rounded-full font-[family-name:var(--font-geist-mono)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
