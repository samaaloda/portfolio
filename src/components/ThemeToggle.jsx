"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = mounted ? theme === "dark" : true;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to daytime" : "Switch to nighttime"}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Day</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="hidden sm:inline">Night</span>
        </>
      )}
    </button>
  );
}
