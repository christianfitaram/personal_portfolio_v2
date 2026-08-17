"use client";
import { useLanguage } from "@/context/LanguageContext";
import { withBasePath } from "@/lib/withBasePath";

export default function Certifications() {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col gap-3.5">
      {translations.certification?.map((cert: any, index: number) => (
        <div
          key={index}
          onClick={() => window.open(cert.link, "_blank")}
          className="cursor-pointer bg-[var(--card-certification-bg)] border border-[var(--border-color)] rounded-xl px-5 py-3.5 flex items-center gap-4 hover:border-[var(--foreground)] transition-colors"
        >
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 p-1.5">
            <img
              src={withBasePath(cert.img)}
              alt={cert.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[15px] font-bold">{cert.title}</span>
            <span className="text-[13px] text-[var(--fg-muted)]">{cert.issuer}</span>
            <span className="text-xs text-[var(--fg-muted)] font-[family-name:var(--font-geist-mono)]">
              {cert.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
