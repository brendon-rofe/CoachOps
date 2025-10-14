import { useEffect, useState } from "react";

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm0 18a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm10-8a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zM4 12a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm13.657-7.657a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707zM6.343 17.657a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707zM17.657 17.657l.707.707a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414zM6.343 6.343 5.636 5.636A1 1 0 0 1 7.05 4.222l.707.707A1 1 0 1 1 6.343 6.343z" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M21.752 15.002A9.718 9.718 0 0 1 12 22C6.477 22 2 17.523 2 12a9.718 9.718 0 0 1 6.998-9.752.75.75 0 0 1 .79 1.18A8.22 8.22 0 0 0 8 12a8.22 8.22 0 0 0 1.787 5.572.75.75 0 0 1-.79 1.18 9.685 9.685 0 0 1-1.514-.75 9.72 9.72 0 0 0 14.27-3z" />
  </svg>
);

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const isDark = mode === "dark";
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", mode);
  }, [mode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setMode(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setMode("dark");
    }
  }, []);

  return (
    <button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#233648] text-white hover:bg-[#2b4257] transition"
      aria-label="Toggle theme"
    >
      {mode === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
