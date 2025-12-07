"use client";

import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

export function FloatingReserve() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const label = language === 'en' ? "Reserve via DM" : "私訊預約";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://instagram.com" // Replace with actual IG profile link
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black text-white px-5 py-3 rounded-full shadow-2xl hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <Instagram className="w-5 h-5" />
          <span className="font-medium text-sm">{label}</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
