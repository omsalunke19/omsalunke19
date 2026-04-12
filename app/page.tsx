import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Certifications } from "@/components/certifications";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main className="relative">
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Footer />
      </main>
    </>
  );
}
