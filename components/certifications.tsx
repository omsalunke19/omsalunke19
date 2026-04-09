"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    credential: "SAA-C03",
  },
  {
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    credential: "PL-300",
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

export function Certifications() {
  return (
    <section className="px-6 py-24 md:py-32 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-muted text-sm tracking-widest uppercase mb-3 font-mono">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border-hover hover:bg-card-hover hover:shadow-[0_0_30px_rgba(161,161,170,0.05)]"
            >
              <div className="p-3 rounded-xl bg-background border border-border shrink-0">
                <Award className="w-6 h-6 text-muted" />
              </div>

              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">
                  {cert.title}
                </h3>
                <p className="text-muted text-sm mb-2">{cert.issuer}</p>
                <span className="text-xs font-mono text-muted-foreground">
                  {cert.credential}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
