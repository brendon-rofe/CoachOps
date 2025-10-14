import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    if (typeof localStorage !== "undefined")
      return (localStorage.getItem("theme") as "light" | "dark") || "light";
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    const isDark = mode === "dark";
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <button
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      className="flex items-center justify-center rounded-lg h-10 w-10 bg-[#233648] text-white hover:bg-[#2b4257] transition"
      aria-label="Toggle theme"
    >
      {mode === "dark" ? (
        // ☀️ Light icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.828l1.414 1.414M17.95 17.95l1.414 1.414"/>
        </svg>
      ) : (
        // 🌙 Dark icon
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
          <path d="M21.752 15.002A9.718 9.718 0 0 1 12 22C6.477 22 2 17.523 2 12a9.718 9.718 0 0 1 6.998-9.752.75.75 0 0 1 .79 1.18A8.22 8.22 0 0 0 8 12a8.22 8.22 0 0 0 1.787 5.572.75.75 0 0 1-.79 1.18 9.685 9.685 0 0 1-1.514-.75 9.72 9.72 0 0 0 14.27-3z"/>
        </svg>
      )}
    </button>
  );
}
