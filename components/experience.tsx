"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Research Assistant",
    company: "University at Buffalo",
    period: "2026 - Present",
    description:
      "Engineered distributed NLP pipelines in Databricks using PySpark and AWS Bedrock for medical data analysis. Architected ETL workflows with Delta Lake and Unity Catalog for EDI records processing.",
    technologies: ["Databricks", "PySpark", "AWS Bedrock", "Delta Lake"],
  },
  {
    role: "Graduate Teaching Assistant",
    company: "University at Buffalo",
    period: "2025",
    description:
      "Facilitated Database Systems (CSE562) discussions and mentored students on system architecture, query optimization, and database design principles.",
    technologies: ["PostgreSQL", "Database Design", "Query Optimization"],
  },
  {
    role: "Software Engineer Intern",
    company: "Tech Mahindra",
    period: "2022 - 2023",
    description:
      "Developed blockchain solutions with Hyperledger Fabric and Ethereum. Integrated Python/Django backend services with Databricks for scalable data processing pipelines.",
    technologies: ["Hyperledger", "Ethereum", "Python", "Django"],
  },
];

export function Experience() {
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
        const cards = cardsRef.current.querySelectorAll(".exp-card");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
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
      id="work"
      className="relative py-32 md:py-48 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted tracking-wider">
              01
            </span>
            <span className="w-12 h-px bg-border" />
            <span className="text-sm text-muted uppercase tracking-[0.2em]">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Where I&apos;ve
            <br />
            <span className="text-muted">worked</span>
          </h2>
        </div>

        {/* Experience cards */}
        <div ref={cardsRef} className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="exp-card group relative"
            >
              <div className="relative p-8 md:p-12 border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card/50">
                {/* Number */}
                <span className="absolute top-8 right-8 text-7xl md:text-8xl font-light text-border/30 select-none">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-foreground mb-2 tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-muted text-lg">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono px-4 py-2 border border-border rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted leading-relaxed mb-8 max-w-3xl">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm text-muted-foreground border border-border/50 rounded-full transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-foreground/50 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
