"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Cloud, Mail } from "lucide-react";

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
  {
    name: "Email",
    href: "mailto:om@example.com",
    icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="px-6 py-16 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            {"Let's Connect"}
          </h2>
          <p className="text-muted max-w-md mb-8">
            Open to discussing opportunities in AI, data engineering, and cloud architecture.
          </p>

          <div className="flex items-center gap-4 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="group p-3 rounded-full border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_20px_rgba(161,161,170,0.1)]"
              >
                <link.icon className="w-5 h-5 text-muted transition-colors duration-300 group-hover:text-foreground" />
              </a>
            ))}
          </div>

          <div className="w-full h-px bg-border mb-8" />

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Om Salunke. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
