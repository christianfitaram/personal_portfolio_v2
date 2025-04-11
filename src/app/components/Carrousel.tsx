"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const logos = [
  "https://cdn.auth0.com/website/cic-homepage/language-logos/Node.js.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/Android.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/JS.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/PHP.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/React.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/NET.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/Python.svg",
  "https://cdn.auth0.com/website/cic-homepage/language-logos/Spring.svg",
];

export default function Carousel() {
  const { translations } = useLanguage();

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      <div className="mb-4">
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
          {translations.skillsTitle || "Skills"}{" "}
        </code>
      </div>
      <motion.div
        className="flex space-x-22 w-[100%] whitespace-nowrap px-1 bg-transparent"
        animate={{ x: ["0%", "-100%"] }} // Ensures seamless loop
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 20, // Adjust speed
        }}
      >
        {/* Duplicate logos to remove gaps at the end */}
        {[
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
          ...logos,
        ].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Tech logo ${index}`}
            className="h-10 w-10 sm:h-10 sm:w-10 filter transition duration-300"
            style={{ filter: "invert(var(--invert-value))" }}
          />
        ))}
      </motion.div>
    </div>
  );
}
