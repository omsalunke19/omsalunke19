"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Ripple",
    category: "Real-time Messaging Platform",
    tools: "Next.js, Socket.io, PostgreSQL, Redis",
    image: "/images/project1.jpg",
    link: "https://github.com/omsalunke19",
  },
  {
    title: "Citi Bike Predictor",
    category: "ML Demand Forecasting",
    tools: "Python, Spark, XGBoost, GCP",
    image: "/images/project2.jpg",
    link: "https://github.com/omsalunke19",
  },
  {
    title: "UrbanCab Navigator",
    category: "NYC Taxi Analytics",
    tools: "Databricks, PySpark, AWS S3",
    image: "/images/project3.jpg",
    link: "https://github.com/omsalunke19",
  },
  {
    title: "ShopSphere",
    category: "E-commerce Platform",
    tools: "React, Node.js, MongoDB, Stripe",
    image: "/images/project4.jpg",
    link: "https://github.com/omsalunke19",
  },
  {
    title: "RAG Pipeline",
    category: "Document Q&A System",
    tools: "LangChain, OpenAI, Pinecone, FastAPI",
    image: "/images/project5.jpg",
    link: "https://github.com/omsalunke19",
  },
  {
    title: "MLOps Dashboard",
    category: "Model Monitoring",
    tools: "MLflow, Kubernetes, Prometheus, Grafana",
    image: "/images/project6.jpg",
    link: "https://github.com/omsalunke19",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only enable horizontal scroll on desktop
      if (window.innerWidth > 1024) {
        let translateX = 0;

        const setTranslateX = () => {
          const box = document.getElementsByClassName("work-box");
          const rectLeft = document
            .querySelector(".work-container")!
            .getBoundingClientRect().left;
          const rect = box[0].getBoundingClientRect();
          const parentWidth =
            box[0].parentElement!.getBoundingClientRect().width;
          const padding =
            parseInt(window.getComputedStyle(box[0]).padding) / 2;
          translateX =
            rect.width * box.length - (rectLeft + parentWidth) + padding;
        };

        setTranslateX();

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".work-section",
            start: "top top",
            end: `+=${translateX}`,
            scrub: true,
            pin: true,
            id: "work",
          },
        });

        timeline.to(".work-flex", {
          x: -translateX,
          ease: "none",
        });

        return () => {
          timeline.kill();
          ScrollTrigger.getById("work")?.kill();
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="work-section h-auto lg:h-screen box-border will-change-transform"
    >
      <div className="work-container mx-auto flex flex-col h-full">
        <h2 className="mt-16 lg:mt-24 text-4xl lg:text-6xl xl:text-7xl font-medium ml-[var(--cWidth)] lg:ml-24">
          My <span className="text-[#c2a4ff]">Work</span>
        </h2>

        <div className="work-flex w-full flex flex-col lg:flex-row h-auto lg:h-full lg:ml-[-80px] lg:pr-[120px] relative mt-8 lg:mt-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`work-box p-6 lg:p-12 xl:p-20 flex flex-col w-full lg:w-[450px] xl:w-[600px] box-border border-b lg:border-b-0 lg:border-r border-[#363636] flex-shrink-0 gap-6 lg:gap-12 justify-start ${
                index % 2 === 1 ? "lg:flex-col-reverse" : ""
              }`}
            >
              <div className="work-image flex w-full justify-center">
                <div className="work-image-in relative group">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                  >
                    <div className="w-full h-[200px] lg:h-[250px] xl:h-[350px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg flex items-center justify-center">
                      <span className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white/10">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="work-link absolute bottom-2.5 right-2.5 bg-[var(--color-background)] w-12 h-12 rounded-full flex justify-center items-center text-2xl shadow-[0px_0px_10px_0px_rgba(255,255,255,0.5),inset_0px_0px_10px_0px_#393939] transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      <MdArrowOutward />
                    </div>
                  </a>
                </div>
              </div>

              <div className="work-info">
                <div className="work-title flex justify-between w-full mb-5">
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl leading-tight m-0 font-semibold">
                    0{index + 1}
                  </h3>
                  <div className="text-right">
                    <h4 className="text-base lg:text-lg font-normal m-0">
                      {project.title}
                    </h4>
                    <p className="font-extralight text-[#adacac] m-0 mt-1 text-sm">
                      {project.category}
                    </p>
                  </div>
                </div>
                <p className="font-extralight text-[#adacac] m-0 text-sm">
                  Tools and features
                </p>
                <p className="font-extralight text-white/80 m-0 mt-1 text-sm lg:text-base w-[90%]">
                  {project.tools}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
