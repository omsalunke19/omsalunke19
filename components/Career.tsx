"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Research Assistant",
    company: "University at Buffalo",
    year: "NOW",
    description:
      "Developing Spark pipelines for graph-based NLP tasks, optimizing transformer models for question answering systems, and implementing retrieval augmented generation (RAG) architectures.",
  },
  {
    title: "Graduate Teaching Assistant",
    company: "University at Buffalo",
    year: "2025",
    description:
      "Assisted with Applied Machine Learning coursework, conducted office hours, and helped students with ML projects including model development and evaluation.",
  },
  {
    title: "Software Engineer Intern",
    company: "Tech Mahindra",
    year: "2023",
    description:
      "Built ETL pipelines processing 2M+ daily records using Databricks and PySpark. Developed real-time anomaly detection dashboards and automated data quality monitoring systems.",
  },
];

const Career = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".career-section h2", {
        scrollTrigger: {
          trigger: ".career-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate timeline
      gsap.to(".career-timeline", {
        scrollTrigger: {
          trigger: ".career-info",
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
        maxHeight: "100%",
        ease: "none",
      });

      // Animate each career box
      gsap.from(".career-info-box", {
        scrollTrigger: {
          trigger: ".career-info",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="career-section flex flex-col items-center place-items-center justify-center relative opacity-100 h-auto mx-auto mb-0 lg:mb-[250px] py-20 lg:py-[120px] mt-[-70px] lg:mt-[-200px] pt-[90px] lg:pt-[220px]"
    >
      <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight font-normal text-center bg-gradient-to-b from-white to-[#7f40ff] bg-clip-text text-transparent mt-0 lg:mt-12 mb-16 lg:mb-24">
        <span className="font-light">My career & </span>
        <br />
        experience
      </h2>

      <div className="career-container section-container">
        <div className="career-info relative flex flex-col mx-auto">
          <div className="career-timeline">
            <div className="career-dot" />
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="career-info-box flex flex-col lg:flex-row justify-between mb-12 lg:mb-16 gap-4 lg:gap-0"
            >
              <div className="career-info-in flex w-full lg:w-[45%] justify-between gap-5 lg:gap-12 pl-[5%] lg:pl-0 box-border">
                <div>
                  <h4 className="text-xl lg:text-2xl xl:text-3xl leading-tight tracking-wide font-medium m-0 w-[180px] lg:w-auto">
                    {exp.title}
                  </h4>
                  <h5 className="font-normal tracking-wide text-base lg:text-xl capitalize my-2 text-[#c2a4ff]">
                    {exp.company}
                  </h5>
                </div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl m-0 font-medium leading-tight">
                  {exp.year}
                </h3>
              </div>
              <p className="w-full lg:w-[45%] text-sm lg:text-base xl:text-lg font-light m-0 pl-[5%] lg:pl-0 box-border">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
