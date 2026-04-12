"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import gsap from "gsap";

const Landing = ({ children }: PropsWithChildren) => {
  const introRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate intro text
      gsap.from(".landing-intro h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".landing-intro h1 span", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.7,
      });

      // Animate info text
      gsap.from(".landing-info h3", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.from(".landing-info h2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="landing-section w-full max-w-[var(--cMaxWidth)] mx-auto relative h-[var(--vh)]">
      {/* Animated gradient circles */}
      <div className="landing-circle1" />
      <div className="landing-circle2 hidden sm:block" />

      <div className="landing-container w-[var(--cWidth)] mx-auto h-full relative max-w-[var(--cMaxWidth)]">
        {/* Intro - Left side on desktop */}
        <div
          ref={introRef}
          className="landing-intro absolute z-[9] top-[12%] left-0 lg:top-1/2 lg:left-auto lg:right-[66%] xl:right-[70%] lg:-translate-y-1/2"
        >
          <h2 className="m-0 text-[#c2a4ff] text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-light tracking-[2px]">
            {"Hello! I'm"}
          </h2>
          <h1 className="m-0 tracking-[2px] text-2xl sm:text-3xl md:text-4xl xl:text-6xl leading-tight font-medium">
            <span className="block overflow-hidden">
              <span className="inline-block">OM</span>
            </span>
            <span className="block overflow-hidden">
              <span className="inline-block">SALUNKE</span>
            </span>
          </h1>
        </div>

        {/* Character Model Container */}
        <div className="character-model h-[80vh] lg:h-screen absolute max-w-[1920px] max-h-[1080px] w-full left-1/2 -translate-x-1/2 z-0 lg:z-[11] bottom-[50px] lg:bottom-0 lg:fixed pointer-events-auto">
          <div className="character-rim" />
          {children}
          <div className="absolute w-screen h-[250px] bg-gradient-to-b from-transparent to-[var(--color-background)] bottom-[-50px] left-1/2 -translate-x-1/2 z-[9] lg:hidden" />
        </div>

        {/* Info - Right side on desktop */}
        <div
          ref={infoRef}
          className="landing-info absolute right-1/2 translate-x-1/2 bottom-10 lg:bottom-auto lg:top-[51%] lg:right-auto lg:left-[66%] xl:left-[70%] lg:-translate-y-1/2 lg:translate-x-0 z-[9] lg:z-auto text-center lg:text-left"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl xl:text-4xl tracking-[2px] font-light text-[#c2a4ff] m-0">
            A Creative
          </h3>
          <h2 className="m-0 mt-[-20px] ml-0 lg:ml-5 font-semibold text-2xl sm:text-3xl md:text-4xl xl:text-6xl leading-tight relative flex flex-nowrap uppercase tracking-[2px]">
            <span className="split-h2">
              <span>AI </span>
              <span>Engineer</span>
            </span>
          </h2>
          <h2 className="landing-info-h2 text-[#c481ff] text-3xl sm:text-4xl md:text-5xl xl:text-7xl w-[120%] m-0 font-semibold relative ml-[-5px]">
            <span className="split-h2">
              <span>Developer</span>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
