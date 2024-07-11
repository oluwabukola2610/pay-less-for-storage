/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4680B9",
        secondary: "#386694",
        accent: "#285581",
        gradientStart: "#FFE0B2",
        gradientEnd: "#FFCC80",
        background: "#FAF8F5",
        borderColor: "#28558126",
        placeholder: "#285581",
        lightGray: "#F4F6F9",
        whiteOpacity: "rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
