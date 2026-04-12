"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    credential: "SAA-C03",
    year: "2024",
  },
  {
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    credential: "PL-300",
    year: "2024",
  },
];

export function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );

      // Cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".cert-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
              },
              delay: i * 0.1,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 bg-card/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted tracking-wider">
              04
            </span>
            <span className="w-12 h-px bg-border" />
            <span className="text-sm text-muted uppercase tracking-[0.2em]">
              Credentials
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Certifications
          </h2>
        </div>

        {/* Certification cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card group relative"
            >
              <div className="relative p-8 md:p-10 border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card/50">
                {/* Year badge */}
                <span className="absolute top-8 right-8 text-sm font-mono text-muted-foreground px-3 py-1 border border-border/50 rounded-full">
                  {cert.year}
                </span>

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-2 tracking-tight pr-20">
                    {cert.title}
                  </h3>
                  <p className="text-muted">{cert.issuer}</p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Credential
                  </span>
                  <span className="w-4 h-px bg-border" />
                  <span className="text-sm font-mono text-foreground">
                    {cert.credential}
                  </span>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-foreground/30 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
