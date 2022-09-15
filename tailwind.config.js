/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceX: "bounceX 4s infinite",
      },
      keyframes: {
        bounceX: {
          "0%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(20px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
