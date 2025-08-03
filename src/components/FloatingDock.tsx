"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FaHome, FaUser, FaBriefcase, FaSun } from "react-icons/fa";
import Dock from "./ui/dock";

const FloatingDock = () => {
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
};

export default FloatingDock;
