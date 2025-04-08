"use client";
import { useLanguage } from "@/context/LanguageContext";
import Certifications from "./Certifications";

export default function Education() {
  const { translations } = useLanguage();

  return (
    <div id="#projects" className="w-full mx-auto">
      <div className="flex flex-col gap-4 w-full mx-auto md:flex-row">
        <div className="bg-gray-900 text-white py-10 px-5 md:px-20 w-full flex flex-row">
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">
              {translations.educationTitle || "Education"}
            </h2>
            <div className="space-y-6">
              {translations.education?.map((edu: any, index: number) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{edu.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {edu.institution} · {edu.periodTime}
                  </p>
                  <p className="text-gray-400 text-sm">{edu.location}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {edu.technologies.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-sm px-3 py-1 rounded-full"
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
        <div className="flex flex-col flex-1 bg-purple-gradient rounded-lg py-10 px-5">
          <Certifications />
        </div>
      </div>
    </div>
  );
}
