/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/index.hbs", "./views/partials/*.hbs"],
  theme: {
    extend: {
      colors: {
        purple: "#5D39EE",
        pink: "#DA5B93",
        black: "#232323",
        "off-white": "#ECF2F7",
        orange: "#FF734E",
        white: "#FFFFFF",
        blue: "#0966c2",
        "dark-blue": "#374A67",
        green: "#399E5A",
      },
      fontFamily: {
        display: ["Bebas Neue", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
