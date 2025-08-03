"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import Dock from "@/components/ui/dock";
import { FaHome, FaUser, FaBriefcase, FaSun } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

function DockWithTheme() {
  const { toggleTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <Dock
        items={[
          {
            icon: <FaHome className="w-6 h-6 text-white" />,
            label: "Home",
            onClick: () => scrollToSection("about"),
          },
          {
            icon: <FaBriefcase className="w-6 h-6 text-white" />,
            label: "Projects",
            onClick: () => scrollToSection("projects"),
          },
          {
            icon: <FaUser className="w-6 h-6 text-white" />,
            label: "Contact",
            onClick: () => scrollToSection("contact"),
          },
          {
            icon: <FaSun className="w-6 h-6 text-white" />,
            label: "Theme",
            onClick: toggleTheme,
          },
        ]}
      />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <div className="w-full bg-zinc-200 bg-dot-black/[0.4] dark:bg-zinc-900 dark:bg-dot-white/[0.4] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Analytics />
        <main className="pb-20">
          <section className="flex flex-col justify-center items-center">
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
        </main>
      </div>
      <DockWithTheme />
    </ThemeProvider>
  );
}
