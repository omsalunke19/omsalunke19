"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Research Assistant",
    company: "University at Buffalo",
    period: "2026 - Present",
    description:
      "Engineered distributed NLP pipelines in Databricks using PySpark and AWS Bedrock for medical data analysis. Architected ETL workflows with Delta Lake and Unity Catalog for EDI records processing.",
    technologies: ["Databricks", "PySpark", "AWS Bedrock", "Delta Lake", "Unity Catalog"],
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
    technologies: ["Hyperledger Fabric", "Ethereum", "Python", "Django", "Databricks"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function Experience() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-muted text-sm tracking-widest uppercase mb-3 font-mono">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 md:p-8 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_30px_rgba(161,161,170,0.05)]"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-muted">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono shrink-0">
                  {exp.period}
                </span>
              </div>

              <p className="text-muted leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
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
      </div>
    </section>
  );
}
