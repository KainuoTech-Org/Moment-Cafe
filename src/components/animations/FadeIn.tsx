"use client";

import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function FadeIn({ children, className = "", delay = 0, direction = "up" }: FadeInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up": return { opacity: 0, y: 40 };
      case "down": return { opacity: 0, y: -40 };
      case "left": return { opacity: 0, x: 40 };
      case "right": return { opacity: 0, x: -40 };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
