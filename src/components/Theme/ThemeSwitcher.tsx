import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="toggle bg-primary dark:bg-primaryDark shadow-lg">
      <button onClick={toggleTheme}>
        <Icon icon="fluent:dark-theme-20-filled" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
