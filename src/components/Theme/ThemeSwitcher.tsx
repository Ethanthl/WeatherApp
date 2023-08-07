import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light"); // Default theme

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    if(theme === "dark") {
        document.documentElement.classList.add("dark")
    }else {
        document.documentElement.classList.remove("dark")
    }
        
  }, [theme]);
  return (
    <div
      className={`bg-${theme} text-${theme === "light" ? "black" : "white"}`}
    >
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
