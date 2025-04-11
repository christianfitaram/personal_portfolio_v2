"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { translations } = useLanguage();

  return (
    <div className=" bg-[var(--card-experience-bg)] py-10 px-5 md:px-20 rounded  shadow-md hover:shadow-lg transition-all ">
      <h2 className="text-3xl font-bold mb-6">{translations.experienceTitle || "Experience"}</h2>
      <div className="space-y-6">
        {translations.experience?.map((exp: any, index: number) => (
          <div key={index} className="p-6 bg-[var(--card-experience-element-bg)] rounded-lg shadow-lg flex flex-col md:flex-row items-start">
            <img src={exp.companyLogo} key={index} alt={exp.company} className="w-16 h-16 rounded-lg object-cover mr-4" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{exp.title} <span className="">at {exp.company}</span></h3>
              <p className="text-sm">{exp.contractType} · {exp.periodTime}</p>
              <p className="text-sm">{exp.location}</p>
              <p className="mt-2">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech: string, i: number) => (
                  <span key={i} className="bg-gray-700 text-gray-100 text-sm px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
