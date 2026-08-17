"use client";
import { useLanguage } from "@/context/LanguageContext";
import TypeWriter from "./TypeWriter";

export default function Hero() {
  const { translations } = useLanguage();
  return (
    <main className="flex flex-col gap-7 items-start w-full">
      <div className="font-[family-name:var(--font-geist-mono)] text-[15px] font-medium text-[var(--fg-muted)] border border-[var(--border-color)] inline-flex items-center px-3.5 py-2 rounded-md w-fit">
        &gt; <TypeWriter />
        <span className="animate-[blink_1s_step-start_infinite]">_</span>
      </div>

      <div className="flex flex-col gap-3.5 max-w-xl">
        <p className="text-[19px] leading-[1.55] font-semibold">
          {translations.description_1 ||
            "Web and mobile solutions using React, Next.js, Spring Boot, and Kotlin."}
        </p>
        <p className="text-[17px] leading-[1.6] text-[var(--fg-muted)]">
          {translations.description_2 ||
            "With a focus on data-driven technologies for efficient and scalable applications."}
        </p>
      </div>

      <div className="flex items-center gap-6 flex-wrap">
        <a
          className="bg-[var(--accent)] text-[var(--accent-fg)] px-[22px] py-[11px] rounded-md font-semibold text-sm hover:opacity-85 transition-opacity"
          href="mailto:christianfitaram@gmail.com"
        >
          {translations.contact || "Contact"}
        </a>
        <a
          className="text-[var(--fg-muted)] hover:text-[var(--foreground)] text-[15px] font-medium border-b border-transparent hover:border-[var(--foreground)] transition-colors"
          href="https://github.com/christianfitaram/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-[var(--fg-muted)] hover:text-[var(--foreground)] text-[15px] font-medium border-b border-transparent hover:border-[var(--foreground)] transition-colors"
          href="https://www.linkedin.com/in/christian-fita-ramirez-98a0882a4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
