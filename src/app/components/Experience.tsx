"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { translations } = useLanguage();

  return (
    <div className="bg-gray-900 text-white py-10 px-5 md:px-20">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">{translations.experienceTitle || "Experience"}</h2>
      <div className="space-y-6">
        {translations.experience?.map((exp: any, index: number) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-start">
            <img src={exp.companyLogo} alt={exp.company} className="w-16 h-16 rounded-lg object-cover mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{exp.title} <span className="text-gray-400">at {exp.company}</span></h3>
              <p className="text-sm text-gray-400">{exp.contractType} · {exp.periodTime}</p>
              <p className="text-sm text-gray-400">{exp.location}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech: string, i: number) => (
                  <span key={i} className="bg-gray-700 text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
