/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/index.hbs", "./views/partials/*.hbs"],
  theme: {
    extend: {
      colors: {
        black: "#232323",
        "off-white": "#ECF2F7",
        "dark-blue": "#2C3A50",
        "dark-slate": "#1a1a1a",
        red: "#ff5050",
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
