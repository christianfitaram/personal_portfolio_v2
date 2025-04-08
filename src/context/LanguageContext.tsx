"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Define the shape of the context
interface LanguageContextProps {
  language: string;
  translations: any;
  setLanguage: (lang: string) => void;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Provider component
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState("EN"); // Default language
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    async function loadTranslations() {
      try {
        const response = await fetch(`/locales/${language}.json`);
        if (!response.ok) throw new Error("Failed to load language file");
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error loading language file:", error);
      }
    }
    loadTranslations();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to access context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
