"use client";
import { useLanguage } from "@/context/LanguageContext";
import TypeWriter from "./TypeWriter";
export default function Hero() {
  const { translations } = useLanguage();
  return (
    <main className="flex flex-col gap-[32px] items-start">
      <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
       <TypeWriter/> &nbsp;
      </code>
      
      <div className="flex flex-col w-1/2">
      <p className="tracking-[-.01em] text-left sm:text-left font-semibold">
      {translations.description_1 || "Web and mobile solutions using React, Next.js, Spring Boot, andKotlin."}
      </p>
      <p className="tracking-[-.01em] text-left sm:text-left font-semibold">
      {translations.description_2 || "With a focus on data-driven technologies for efficient and scalable applications."}
      </p>
      </div>
      <div className="flex gap-4  items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid  transition-colors flex items-center justify-center  gap-2 hover:bg-[#383838] dark:hover:bg-[#888] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="mailto:christianfitaram@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        {translations.contact || "Contact"}
        </a>
      </div>
    </main>
  );
}
