"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Cloud } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/omsalunke19",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/omsalunke",
    icon: Linkedin,
  },
  {
    name: "Google Cloud",
    href: "https://www.cloudskillsboost.google/public_profiles/your-profile",
    icon: Cloud,
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted text-sm tracking-widest uppercase mb-4 font-mono">
            AI & Data Engineer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6 text-balance"
        >
          Om Salunke
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Master of Science in Artificial Intelligence at University at Buffalo
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group relative p-4 rounded-full border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_20px_rgba(161,161,170,0.1)]"
            >
              <link.icon className="w-5 h-5 text-muted transition-colors duration-300 group-hover:text-foreground" />
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-border flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-muted rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
