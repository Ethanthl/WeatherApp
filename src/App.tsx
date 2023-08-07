import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Home from "./components/Home/Home";
import ThemeSwitcher from "./components/Theme/ThemeSwitcher";
import Search from "./components/Search/Search";

function App() {
  return (
    <div className="main-container bg-bgLight dark:bg-bgDark text-light dark:text-dark h-screen">
      <div className="container">
        <ThemeSwitcher />
        <Search />
        <Home />
      </div>
    </div>
  );
}

export default App;
