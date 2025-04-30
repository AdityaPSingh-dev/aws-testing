/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#23B123",
        dark: "#1B1B1B",
        "dark-light": "#242424",
        "dark-text": "rgba(255, 255, 255, 0.87)",
      },
      fontFamily: {
        sans: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
