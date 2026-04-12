"use client";

import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";

const TechStack = dynamic(() => import("./TechStack"), {
  ssr: false,
  loading: () => null,
});

const Character = dynamic(() => import("./Character"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#c2a4ff] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    setIsLoaded(true);

    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-[#0b080c] flex items-center justify-center z-[9999]">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-[#c2a4ff] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[#c2a4ff] text-sm tracking-widest">LOADING</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <SocialIcons />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-body max-w-[100vw] overflow-x-hidden">
            <div className="container-main w-full mx-auto relative">
              <Landing>
                {isDesktopView && <Character />}
                {!isDesktopView && <Character />}
              </Landing>

              <About />
              <WhatIDo />
              <Career />

              {isDesktopView && (
                <Suspense fallback={null}>
                  <TechStack />
                </Suspense>
              )}

              <Work />
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
