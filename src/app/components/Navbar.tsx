"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { languages } from "../../../public/locales/languages.json"; // Import JSON file

interface Language {
  name: string;
  code: string;
  flag: string;
}
export default function Navbar() {
  const { language, translations, setLanguage } = useLanguage();
  const [availableLanguages, setAvailableLanguages] = useState<Language[]>([]);
  useEffect(() => {
    setAvailableLanguages(languages);
  }, []);

  return (
    <nav className="flex flex-row w-full justify-end font-medium">
      <div className="flex flex-row">
        {/* Language Selector */}
        <div className="flex flex-row gap-3">
          {availableLanguages.map((lang) => (
            <button 
            key={lang.code} 
            onClick={() => setLanguage(lang.code)}
            className="cursor-pointer"
            >
              {lang.code}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
