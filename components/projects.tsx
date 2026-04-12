"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Ripple",
    subtitle: "Policy Simulator",
    description:
      "AI-driven economic simulation platform using Databricks, PySpark, AWS, and Gemini API to model policy impacts with Monte Carlo simulations.",
    technologies: ["Databricks", "PySpark", "AWS", "Gemini API"],
    featured: true,
    color: "from-white/5 to-transparent",
  },
  {
    title: "Citi Bike",
    subtitle: "Demand Predictor",
    description:
      "End-to-end MLOps pipeline using Databricks, MLflow, and LightGBM. Automated via GitHub Actions with a Streamlit dashboard.",
    technologies: ["Databricks", "MLflow", "LightGBM", "Streamlit"],
    featured: true,
    color: "from-white/5 to-transparent",
  },
  {
    title: "UrbanCab Navigator",
    subtitle: "ML Pipeline",
    description:
      "NYC Taxi ML pipeline utilizing LightGBM, AWS S3, and Amazon Athena to reduce data retrieval time by 60%.",
    technologies: ["LightGBM", "AWS S3", "Athena"],
    featured: false,
  },
  {
    title: "ShopSphere",
    subtitle: "E-commerce Platform",
    description:
      "Production-grade e-commerce platform built with Django REST Framework and React, featuring JWT authentication.",
    technologies: ["Django", "React", "JWT", "Redux"],
    featured: false,
  },
];

export function Projects() {
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
        const items = gridRef.current.querySelectorAll(".project-card");
        items.forEach((item, i) => {
          gsap.fromTo(
            item,
            { y: 60, opacity: 0, scale: 0.98 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
              },
              delay: i * 0.08,
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 md:py-48 px-6 bg-card/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div ref={headerRef} className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-mono text-muted tracking-wider">
              02
            </span>
            <span className="w-12 h-px bg-border" />
            <span className="text-sm text-muted uppercase tracking-[0.2em]">
              Projects
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight">
            Selected
            <br />
            <span className="text-muted">work</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured projects - larger cards */}
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative aspect-[4/3] md:aspect-auto md:min-h-[400px]"
            >
              <div
                className={`relative h-full p-8 md:p-10 border border-border/50 rounded-3xl bg-gradient-to-br ${project.color} backdrop-blur-sm transition-all duration-500 hover:border-border hover:shadow-[0_0_60px_rgba(255,255,255,0.03)] flex flex-col`}
              >
                {/* Arrow */}
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-border/50 flex items-center justify-center opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>

                <div className="flex-1 flex flex-col justify-end">
                  <span className="text-sm text-muted uppercase tracking-[0.2em] mb-4">
                    {project.subtitle}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-mono text-muted-foreground border border-border/50 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              </div>
            </div>
          ))}

          {/* Other projects - smaller cards */}
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative"
            >
              <div className="relative h-full p-8 border border-border/50 rounded-2xl bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-border hover:bg-card/50">
                {/* Arrow */}
                <div className="absolute top-6 right-6 opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-muted" />
                </div>

                <span className="text-xs text-muted uppercase tracking-[0.2em] mb-3 block">
                  {project.subtitle}
                </span>
                <h3 className="text-xl font-light text-foreground mb-3 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono text-muted-foreground border border-border/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
