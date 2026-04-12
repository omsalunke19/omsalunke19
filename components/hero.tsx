"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 });

      // Animate name letters
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { y: 120, opacity: 0, rotateX: -90 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.05,
          }
        );
      }

      // Animate title
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.6"
        );
      }

      // Animate scroll indicator
      if (scrollIndicatorRef.current) {
        tl.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const name = "Om Salunke";

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6"
    >
      {/* Gradient orb background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent blur-3xl rounded-full animate-blob" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-muted" />
          <span className="text-xs tracking-[0.3em] text-muted uppercase">
            AI & Data Engineer
          </span>
          <span className="w-12 h-px bg-muted" />
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-[clamp(3rem,15vw,12rem)] font-light tracking-tighter leading-none mb-8"
          style={{ perspective: "1000px" }}
        >
          {name.split("").map((char, i) => (
            <span
              key={i}
              className="char inline-block"
              style={{ transformStyle: "preserve-3d" }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Title */}
        <p
          ref={titleRef}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          Master of Science in Artificial Intelligence
          <br />
          <span className="text-foreground/60">University at Buffalo</span>
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <a
            href="https://github.com/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-muted hover:text-foreground transition-all duration-300"
          >
            <span className="relative z-10">GitHub</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          </a>
          <span className="w-1 h-1 rounded-full bg-muted" />
          <a
            href="https://linkedin.com/in/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-muted hover:text-foreground transition-all duration-300"
          >
            <span className="relative z-10">LinkedIn</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          </a>
          <span className="w-1 h-1 rounded-full bg-muted" />
          <a
            href="https://www.cloudskillsboost.google/public_profiles/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative text-sm text-muted hover:text-foreground transition-all duration-300"
          >
            <span className="relative z-10">Google Cloud</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs tracking-[0.2em] text-muted uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
