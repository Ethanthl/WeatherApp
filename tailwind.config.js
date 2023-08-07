/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#fff",
        lighter: "rgba(255,255,255,.4)",
        dark: "#000",
        headerDark: "#6C40B5",
        headerLight: "#fff",
        primary: "#6C40B5",
        primaryDark: "#28124D",
        grey: "#666",
      },
      backgroundColor: {
        dark: "#24ac32",
        light: "#fff",
        cardDark: "rgba(0, 0, 0, 0.2)",
        cardDark50: "rgba(0, 0, 0, 0.2)",
        cardLight: "rgba(255, 255, 255, 0.5)",
        cardLight50: "rgba(255, 255, 255, 0.5)",
        primary: "#6C40B5",
        primaryDark: "#28124D",
      },

      backgroundImage: {
        bgDark: 'url("./assets/images/bg-dark.png")',
        bgLight: 'url("./assets/images/bg-light.png")',
      },

      borderColor: {
        dark: "#666",
        light: "rgba(255,255,255,.4)",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
