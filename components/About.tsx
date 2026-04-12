"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-me h3", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".about-me p", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="about-section flex items-center justify-start lg:justify-end place-items-center relative opacity-100 h-auto lg:h-[var(--vh)] w-[var(--cWidth)] max-w-[1920px] mx-auto p-0"
    >
      <div className="about-me py-12 pb-0 lg:p-0 w-full max-w-[500px] lg:w-1/2 lg:max-w-none transform-none lg:translate-y-0">
        <h3 className="text-2xl uppercase tracking-[7px] font-normal text-[#c2a4ff]">
          About Me
        </h3>
        <p className="text-2xl md:text-3xl lg:text-[1.9vw] xl:text-[2.5rem] font-semibold leading-tight lg:leading-[2.3vw] xl:leading-[2.7rem] tracking-wide mt-4">
          {"I'm a Master's student in Artificial Intelligence at the University at Buffalo, passionate about building intelligent systems that solve real-world problems. With experience in distributed data pipelines, NLP, and cloud architecture, I bridge the gap between research and production."}
        </p>
      </div>
    </section>
  );
};

export default About;
