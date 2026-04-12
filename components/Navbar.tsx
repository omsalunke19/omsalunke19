"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    // Smooth scroll to sections
    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const section = element.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  return (
    <>
      <div className="nav-fade" />
      <header className="header flex w-[var(--cWidth)] max-w-[var(--cMaxWidth)] justify-between py-5 md:py-8 lg:py-9 fixed left-1/2 -translate-x-1/2 top-0 z-[9999]">
        <div className="navbar-title font-bold text-sm md:text-base lg:text-lg tracking-tight">
          Om Salunke
        </div>

        <a
          href="mailto:omsalunke19@gmail.com"
          className="navbar-connect absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm lg:text-base tracking-wider font-medium"
        >
          <HoverLinks text="omsalunke19@gmail.com" />
        </a>

        <nav>
          <ul className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-10 lg:gap-20 text-xs md:text-sm lg:text-base">
            <li className="text-[#ccc] md:text-[#eae5ec] font-semibold tracking-wider cursor-pointer">
              <a data-href="#about">
                <HoverLinks text="About" />
              </a>
            </li>
            <li className="text-[#ccc] md:text-[#eae5ec] font-semibold tracking-wider cursor-pointer">
              <a data-href="#work">
                <HoverLinks text="Work" />
              </a>
            </li>
            <li className="text-[#ccc] md:text-[#eae5ec] font-semibold tracking-wider cursor-pointer">
              <a data-href="#contact">
                <HoverLinks text="Contact" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
