/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Civil Engineering Theme
        "ce-blue": {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        "ce-orange": {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        "ce-yellow": {
          50: "#fefce8",
          100: "#fffacd",
          200: "#ffed4e",
          300: "#ffde32",
          400: "#ffcd16",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ff9800",
          800: "#f57f17",
          900: "#e65100",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out",
        slideInLeft: "slideInLeft 0.6s ease-out",
        slideInRight: "slideInRight 0.6s ease-out",
        scaleIn: "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInLeft: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
