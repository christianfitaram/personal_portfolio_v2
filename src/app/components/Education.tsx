"use client";
import { useLanguage } from "@/context/LanguageContext";
import Certifications from "./Certifications";

export default function Education() {
  const { translations } = useLanguage();

  return (
    <div id="#projects" className="w-full mx-auto">
      <div className="flex flex-col gap-4 w-full mx-auto lg:flex-row">
        <div className="bg-[var(--card-education-bg)] py-10 px-5 md:px-20 w-full flex flex-row rounded">
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl font-bold mb-6 ">
              {translations.educationTitle || "Education"}
            </h2>
            <div className="space-y-6">
              {translations.education?.map((edu: any, index: number) => (
                <div
                  key={index}
                  className="bg-[var(--card-education-element-bg)] p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold ">{edu.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {edu.institution} · {edu.periodTime}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">{edu.location}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.technologies.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-sm px-3 py-1 text-gray-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 bg-[var(--card-certification-bg)] items-center rounded py-10 px-5">
          <Certifications />
        </div>
      </div>
    </div>
  );
}
