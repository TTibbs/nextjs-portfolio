"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/ThemeToggle";
import Dock from "@/components/ui/dock";
import { FaHome, FaUser, FaBriefcase } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider>
      <div className="w-full bg-zinc-200 bg-dot-black/[0.4] dark:bg-zinc-900 dark:bg-dot-white/[0.4] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <ThemeToggle />
        <Analytics />
        <main className="pb-20">{children}</main>
      </div>
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
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
