"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }

      if (containerRef.current) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    "Databricks",
    "AWS",
    "PySpark",
    "Python",
    "Machine Learning",
    "NLP",
    "Deep Learning",
    "MLOps",
    "Data Engineering",
    "Cloud Architecture",
  ];

  return (
    <div
      ref={containerRef}
      className="py-16 border-y border-border overflow-hidden"
    >
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="text-[clamp(2rem,8vw,6rem)] font-light text-muted/30 mx-8 tracking-tight"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
