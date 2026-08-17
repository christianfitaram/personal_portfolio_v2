"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeProvider";
import data from "../../../public/locales/languages.json"; // Import JSON file

interface Language {
  name: string;
  code: string;
  flag: string;
}

const NAV_LINKS = [
  { href: "#home", key: "navHome", fallback: "Home" },
  { href: "#projects", key: "navProjects", fallback: "Projects" },
  { href: "#experience", key: "navExperience", fallback: "Experience" },
  { href: "#education", key: "navEducation", fallback: "Education" },
];

export default function Navbar() {
  const { translations, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [availableLanguages, setAvailableLanguages] = useState<Language[]>([]);
  const languages = data.languages;
  useEffect(() => {
    setAvailableLanguages(languages);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full flex flex-wrap items-center justify-between gap-4 px-8 sm:px-20 py-4 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)]">
      <a
        href="#home"
        className="font-[family-name:var(--font-geist-mono)] font-semibold text-[15px]"
      >
        christian<span className="text-[var(--fg-muted)]">.</span>fita
      </a>

      <div className="flex flex-wrap gap-6">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            {translations[link.key] || link.fallback}
          </a>
        ))}
      </div>

      <div className="flex flex-row items-center gap-3.5">
        <div className="flex flex-row gap-1.5 font-[family-name:var(--font-geist-mono)] text-xs font-semibold">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="cursor-pointer border border-[var(--border-color)] bg-transparent text-[var(--fg-muted)] px-2 py-1 rounded-md hover:text-[var(--foreground)] transition-colors"
            >
              {lang.code}
            </button>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          className="cursor-pointer border border-[var(--border-color)] bg-transparent text-[var(--foreground)] px-3 py-1.5 rounded-md font-[family-name:var(--font-geist-mono)] text-xs font-medium"
        >
          {theme === "dark" ? "☀ Light" : "☽ Dark"}
        </button>
      </div>
    </nav>
  );
}
