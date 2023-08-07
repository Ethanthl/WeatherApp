/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#fff",
        light: "#000",
        headerDark: "#6C40B5",
        headerLight: "#fff"
      },
      backgroundColor: {
        dark: "#24ac32",
        light: "#fff",
        cardDark: 'rgba(0, 0, 0, 0.2)',
        cardLight: 'rgba(255, 255, 255, 0.2)',
        primary: '#6C40B5',
        primaryDark: '#28124D'
      },

      backgroundImage: {
        bgDark: 'url("./assets/images/bg-dark.png")',
        bgLight: 'url("./assets/images/bg-light.png")'
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
