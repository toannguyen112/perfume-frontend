/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout//**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "max-xl": { max: "1279px" },
      "max-lg": { max: "1023px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "424px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#9891FA",
        },
        secondary: "#360853",
        white: "#FFFFFF",
        black: "#0A0A0A",
        gray: {
          100: "#F6F6F8",
          200: "#EAECEE",
          300: "#D9DADB",
          400: "#F1F5F9"
        },
        red: {
          0: "#FFF3F3",
          50: "#FFDEDE",
        },
        blue: {
          400: "#3174DA",
        },
      },

      aspectRatio: {
        '4/3': '4 / 3',
        '2/1': '2 / 1',
        '3/1': '3 / 1',
      },

      fontFamily: {
        display: ["Fahkwang", "sans-serif"],
        sans: [
          "Fahkwang",
          "Roboto",
          "Averta",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
        ],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2.5rem",
          xl: "3rem",
        },
      },
    },
  },
};
