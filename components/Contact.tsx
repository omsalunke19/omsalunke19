"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward, MdCopyright } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-section h3", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-box", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="contact-section section-container mx-auto pb-16 lg:pb-24 mt-16 lg:mt-24"
    >
      <h3 className="text-4xl lg:text-5xl xl:text-6xl font-normal uppercase m-0">
        Contact
      </h3>

      <div className="contact-flex flex flex-col lg:flex-row justify-between mt-8 gap-10 lg:gap-0">
        <div className="contact-box flex flex-col">
          <h4 className="font-medium m-0 opacity-60 mt-5 lg:mt-0">Email</h4>
          <a
            href="mailto:omsalunke19@gmail.com"
            className="contact-social text-xl lg:text-2xl border-b border-[#ccc] inline-block mt-2"
          >
            omsalunke19@gmail.com
            <MdArrowOutward className="inline ml-2" />
          </a>

          <h4 className="font-medium m-0 opacity-60 mt-8">Location</h4>
          <h2 className="font-normal text-lg lg:text-xl xl:text-2xl m-0 mt-2">
            Buffalo, <span className="text-[#c2a4ff]">New York</span>
          </h2>
        </div>

        <div className="contact-box flex flex-col">
          <h4 className="font-medium m-0 opacity-60">Social</h4>
          <a
            href="https://github.com/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social text-xl lg:text-2xl border-b border-[#ccc] inline-block mt-2"
          >
            Github
            <MdArrowOutward className="inline ml-2" />
          </a>
          <a
            href="https://linkedin.com/in/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social text-xl lg:text-2xl border-b border-[#ccc] inline-block mt-2"
          >
            Linkedin
            <MdArrowOutward className="inline ml-2" />
          </a>
          <a
            href="https://twitter.com/omsalunke19"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social text-xl lg:text-2xl border-b border-[#ccc] inline-block mt-2"
          >
            Twitter
            <MdArrowOutward className="inline ml-2" />
          </a>
        </div>

        <div className="contact-box flex flex-col">
          <h2 className="font-normal text-lg lg:text-xl xl:text-2xl m-0">
            Designed and Developed by{" "}
            <span className="text-[#c2a4ff]">Om Salunke</span>
          </h2>
          <h5 className="text-lg lg:text-xl font-medium leading-5 flex gap-2 opacity-50 mt-4">
            <MdCopyright className="mt-0.5" />
            2024
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
