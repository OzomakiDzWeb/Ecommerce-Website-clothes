import React, { useEffect, useState } from "react";
import light from "../assets/website/light-mode-button.png";
import dark from "../assets/website/dark-mode-button.png";
const DarkMode = () => {
  const [theme, setThem] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <div className="relative">
      <img
        src={light}
        onClick={() => setThem(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src={dark}
        onClick={() => setThem(theme === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgb(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;
