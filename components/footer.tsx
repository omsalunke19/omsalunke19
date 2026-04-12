"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { name: "GitHub", href: "https://github.com/omsalunke19" },
  { name: "LinkedIn", href: "https://linkedin.com/in/omsalunke19" },
  { name: "Google Cloud", href: "https://www.cloudskillsboost.google/public_profiles/your-profile" },
  { name: "Email", href: "mailto:omsalunke@buffalo.edu" },
];

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
          },
        }
      );

      // Heading letter animation
      if (headingRef.current) {
        const chars = headingRef.current.querySelectorAll(".char");
        gsap.fromTo(
          chars,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const heading = "Let's Connect";

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 px-6 border-t border-border/30"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef}>
          {/* Section label */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-mono text-muted tracking-wider">
              05
            </span>
            <span className="w-12 h-px bg-border" />
            <span className="text-sm text-muted uppercase tracking-[0.2em]">
              Contact
            </span>
          </div>

          {/* Big heading */}
          <h2
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-12"
            style={{ perspective: "1000px" }}
          >
            {heading.split("").map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ transformStyle: "preserve-3d" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-16 leading-relaxed">
            Open to discussing opportunities in AI, data engineering, and cloud
            architecture. Currently based in Buffalo, NY.
          </p>

          {/* Social links */}
          <div className="flex flex-wrap gap-6 mb-24">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-lg text-muted hover:text-foreground transition-colors duration-300"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-12 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Om Salunke
            </p>
            <p className="text-sm text-muted-foreground">
              Built with Next.js & GSAP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
