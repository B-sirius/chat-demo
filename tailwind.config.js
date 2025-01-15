/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#090815",
        dark: "#140e2d",
      },
      animation: {
        "bot-ease-in-out": "3s ease-in-out infinite alternate rotate-bot",
        "slide-bg-ease-in-out": "8s ease-in-out infinite alternate slide-bg",
      },
      keyframes: {
        "rotate-bot": {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "100%": { transform: "scale(1.1) rotate(-5deg)" },
        },
        "slide-bg": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
