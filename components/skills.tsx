"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Data & Cloud",
    skills: ["Databricks", "AWS", "GCP", "Snowflake", "Delta Lake", "Apache Spark", "Kafka"],
  },
  {
    title: "Languages",
    skills: ["Python", "SQL", "Java", "C++", "JavaScript", "TypeScript", "Scala"],
  },
  {
    title: "AI/ML",
    skills: ["PyTorch", "TensorFlow", "MLflow", "Scikit-learn", "LangChain", "Hugging Face", "OpenAI"],
  },
];

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      // Grid items animation
      if (gridRef.current) {
        const items = gridRef.current.querySelectorAll(".skill-category");
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
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
      id="about"
      className="relative py-32 md:py-48 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted tracking-wider">
              03
            </span>
            <span className="w-12 h-px bg-border" />
            <span className="text-sm text-muted uppercase tracking-[0.2em]">
              Skills
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Technologies
            <br />
            <span className="text-muted">I work with</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category group"
            >
              <div className="relative p-8 border border-border/50 rounded-2xl bg-card/20 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card/40 h-full">
                {/* Category number */}
                <span className="absolute top-6 right-6 text-5xl font-light text-border/30 select-none">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-light text-foreground mb-8 tracking-tight">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-tag px-4 py-2 text-sm text-muted border border-border/50 rounded-full transition-all duration-300 hover:border-foreground/30 hover:text-foreground hover:bg-foreground/5"
                      style={{
                        transitionDelay: `${skillIndex * 30}ms`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
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
