"use client";

import { useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiGooglecloud } from "react-icons/si";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section fixed max-w-[var(--cMaxWidth)] w-[var(--cWidth)] bottom-0 z-[99] left-1/2 -translate-x-1/2">
      <div
        id="social"
        className="social-icons absolute left-[-20px] bottom-5 hidden lg:flex flex-col gap-5 z-[999] p-2.5"
      >
        <span
          className="w-[50px] h-[50px] relative flex"
          data-cursor="icons"
        >
          <a
            href="https://github.com/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons-link"
          >
            <FaGithub className="text-[28px]" />
          </a>
        </span>
        <span
          className="w-[50px] h-[50px] relative flex"
          data-cursor="icons"
        >
          <a
            href="https://linkedin.com/in/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons-link"
          >
            <FaLinkedinIn className="text-[28px]" />
          </a>
        </span>
        <span
          className="w-[50px] h-[50px] relative flex"
          data-cursor="icons"
        >
          <a
            href="https://www.cloudskillsboost.google/public_profiles/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons-link"
          >
            <SiGooglecloud className="text-[28px]" />
          </a>
        </span>
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        className="resume-button absolute z-[99] flex gap-1 bottom-10 right-0 w-auto whitespace-nowrap tracking-[4px] text-sm md:text-xl leading-5 font-semibold text-[#5e5e5e] cursor-pointer transition-all duration-500 origin-left-bottom transform translate-x-full rotate-[-90deg] md:transform-none hover:text-white"
      >
        <span className="text-white text-lg md:text-xl mt-[-1px] flex items-center">
          <TbNotes />
        </span>
        <HoverLinks text="RESUME" />
      </a>
    </div>
  );
};

export default SocialIcons;
