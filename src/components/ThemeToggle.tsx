"use client";

import { IconSun, IconMoon } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-5 sm:top-6 sm:right-6 lg:top-8 lg:right-8",
        "p-2.5 sm:p-3 md:p-3.5 lg:p-4 rounded-xl transition-all duration-200",
        "hover:scale-110 active:scale-95",
        "bg-zinc-800/40 hover:bg-zinc-800/60",
        "border border-zinc-700/50",
        "backdrop-blur-sm",
        "shadow-lg",
        "z-50",
        theme === "dark"
          ? "hover:shadow-amber-500/20"
          : "hover:shadow-blue-500/20"
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IconSun className="w-6 h-6 md:w-7 md:h-7 text-amber-300" />
      ) : (
        <IconMoon className="w-6 h-6 md:w-7 md:h-7 text-blue-400" />
      )}
    </button>
  );
}
