"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatIDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".what-box h2", {
        scrollTrigger: {
          trigger: ".whatIDO",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".what-content", {
        scrollTrigger: {
          trigger: ".whatIDO",
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skills = [
    {
      title: "DEVELOP",
      description:
        "Building scalable data pipelines, distributed systems, and intelligent applications using modern cloud technologies and best practices.",
      tags: [
        "Python",
        "TypeScript",
        "Databricks",
        "Spark",
        "AWS",
        "Docker",
        "FastAPI",
        "Next.js",
      ],
    },
    {
      title: "AI/ML",
      description:
        "Designing and implementing machine learning models, NLP systems, and AI-powered solutions that drive business value.",
      tags: [
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "LangChain",
        "RAG",
        "Computer Vision",
        "MLOps",
        "Hugging Face",
      ],
    },
  ];

  return (
    <section className="whatIDO flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center place-items-center lg:place-items-center relative opacity-100 h-auto lg:h-[var(--vh)] w-[var(--cWidth)] max-w-[1920px] mx-auto z-[9] py-12 lg:py-0">
      <div className="what-box w-full max-w-[500px] lg:w-1/2 flex justify-start lg:justify-center relative z-[9]">
        <h2 className="text-5xl sm:text-6xl lg:text-[calc(4vw+25px)] xl:text-7xl leading-tight font-semibold my-12 lg:my-0 lg:mr-[10%] xl:mr-[18%]">
          <span className="block">
            W<span className="italic">HAT</span>
          </span>
          <span className="block text-[#c2a4ff]">I DO</span>
        </h2>
      </div>

      <div className="what-box w-full max-w-[500px] lg:w-1/2 flex justify-center relative z-[9] h-auto lg:h-[500px]">
        <div className="what-box-in flex-col h-[450px] lg:h-[500px] lg:ml-[50px] xl:ml-[200px] relative flex w-full">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              ref={(el) => setRef(el, index)}
              onClick={() => handleClick(index)}
              className={`what-content w-full lg:w-[380px] xl:w-[450px] transition-all duration-500 relative p-6 lg:p-8 xl:p-12 box-border cursor-pointer ${
                activeIndex === index
                  ? "min-h-[67%] py-5 lg:py-8"
                  : activeIndex !== null
                  ? "min-h-[33%] py-2 lg:py-2.5"
                  : "min-h-[50%]"
              }`}
            >
              <div className="what-corner" />
              <div className="what-content-in h-full overflow-hidden opacity-100">
                <h3 className="text-2xl lg:text-3xl xl:text-4xl tracking-wide m-0 font-semibold">
                  {skill.title}
                </h3>
                <h4 className="font-light tracking-wide m-0 text-sm opacity-30 mt-2">
                  Description
                </h4>
                <p className="text-xs lg:text-sm leading-tight font-extralight tracking-wide my-2">
                  {skill.description}
                </p>
                <h5 className="font-light opacity-50 text-xs tracking-wide mb-1">
                  Skillset & tools
                </h5>
                <div
                  className={`what-content-flex flex gap-1 flex-wrap transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "lg:opacity-0"
                  }`}
                >
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="what-tags text-xs font-normal py-0.5 px-2 bg-white/15 border border-white/30 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="what-arrow absolute bottom-5 right-5 w-6 h-6 border border-white flex items-center justify-center">
                <div
                  className={`w-2.5 h-2.5 border-l border-b border-white transition-transform duration-500 ${
                    activeIndex === index
                      ? "rotate-[135deg] -translate-y-0.5"
                      : "-rotate-45 -translate-y-1"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
