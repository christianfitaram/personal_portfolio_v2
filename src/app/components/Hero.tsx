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
      <p className="tracking-[-.01em] text-left sm:text-left font-medium ">
        Web and mobile solutions using React, Next.js, Spring Boot, and
        Kotlin.
      </p>
      <p className="tracking-[-.01em] text-left sm:text-left font-medium ">
        With a focus on data-driven technologies for efficient and scalable
        applications.
      </p>
      </div>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        {translations.contact || "Contact"}
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>
      </div>
    </main>
  );
}
