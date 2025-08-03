import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { Analytics } from "@vercel/analytics/react";
import FloatingDock from "@/components/FloatingDock";
import { Spotlight } from "@/components/ui/Spotlight";

export default function Home() {
  return (
    <div className="w-full bg-zinc-200 bg-dot-black/[0.4] dark:bg-zinc-900 dark:bg-dot-white/[0.4] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Analytics />
      <section className="flex flex-col justify-center items-center">
        <Spotlight
          className="-top-0 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div id="about">
          <About />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </section>
      <FloatingDock />
    </div>
  );
}
