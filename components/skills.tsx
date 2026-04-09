"use client";

import { motion } from "framer-motion";
import { Database, Code, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Data & Cloud",
    icon: Database,
    skills: ["Databricks", "AWS", "GCP", "Snowflake", "Delta Lake", "Apache Spark"],
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "SQL", "Java", "C++", "JavaScript", "TypeScript"],
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "MLflow", "Scikit-learn", "LangChain", "Hugging Face"],
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

export function Skills() {
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
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Skills & Technologies
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_30px_rgba(161,161,170,0.05)]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-background border border-border">
                  <category.icon className="w-5 h-5 text-muted" />
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-muted hover:text-foreground bg-background rounded-lg border border-border transition-colors duration-200"
                  >
                    {skill}
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
