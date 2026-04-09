"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Ripple - Policy Simulator",
    description:
      "AI-driven economic simulation platform using Databricks, PySpark, AWS, and Gemini API to model policy impacts with Monte Carlo simulations.",
    technologies: ["Databricks", "PySpark", "AWS", "Gemini API", "Monte Carlo"],
    featured: true,
  },
  {
    title: "Citi Bike Demand Predictor",
    description:
      "End-to-end MLOps pipeline using Databricks, MLflow, and LightGBM. Automated via GitHub Actions with a Streamlit dashboard for real-time predictions.",
    technologies: ["Databricks", "MLflow", "LightGBM", "Streamlit", "GitHub Actions"],
    featured: true,
  },
  {
    title: "UrbanCab Navigator",
    description:
      "NYC Taxi ML pipeline utilizing LightGBM, AWS S3, and Amazon Athena to reduce data retrieval time by 60% through optimized query patterns.",
    technologies: ["LightGBM", "AWS S3", "Amazon Athena", "Python"],
    featured: false,
  },
  {
    title: "ShopSphere",
    description:
      "Production-grade e-commerce platform built with Django REST Framework and React, featuring JWT authentication and Redux state management.",
    technologies: ["Django REST", "React", "JWT", "Redux", "PostgreSQL"],
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="px-6 py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-muted text-sm tracking-widest uppercase mb-3 font-mono">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_40px_rgba(161,161,170,0.08)] md:aspect-[4/3] flex flex-col"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-muted" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-medium text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono text-muted-foreground bg-background rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_30px_rgba(161,161,170,0.05)]"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-muted" />
              </div>

              <h3 className="text-lg font-medium text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs font-mono text-muted-foreground bg-background rounded-full border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
