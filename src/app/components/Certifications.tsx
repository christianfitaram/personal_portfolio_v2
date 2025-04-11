"use client";
import { useLanguage } from "@/context/LanguageContext";

export default function Certifications() {
  const { translations } = useLanguage();

  return (
    <>
      <h2 className="text-3xl font-bold flex items-center justify-center">
        {translations.certificationsTitle || "Certificates"}
      </h2>
      <div className="bg-transparet py-10 px-5 md:px-20">
        <div className="flex flex-col justify-between gap-6">
          {translations.certification?.map((cert: any, index: number) => (
            <div
            onClick={() => window.open(
              cert.link, "_blank")}
              key={index}
              className="bg-[var(--card-certification-element-bg)] pr-6 rounded-full shadow-lg gap-2 w-fit flex flex-row items-center text-start transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full p-2">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="max-w-full max-h-16 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{cert.issuer}</p>
                <p className="text-xs text-[var(--text-secondary)]">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
