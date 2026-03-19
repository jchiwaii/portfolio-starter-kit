"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read the class already set by the blocking script in <head>
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
    setMounted(true);

    // React to OS preference changes in real time (only when user hasn't manually chosen)
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    function onSystemChange(e: MediaQueryListEvent) {
      if (!localStorage.getItem("theme")) {
        const next = e.matches;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
      }
    }
    mq.addEventListener("change", onSystemChange);
    return () => mq.removeEventListener("change", onSystemChange);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  if (!mounted) return <div className="h-5 w-16" />;

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
