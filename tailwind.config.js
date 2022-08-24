/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#414B63",
          neutral: "#3A4256",
          info: "#000000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
  backgroundImage: {
    "hero-pattern": "url('/src/assets/images/bg.png')",
  },
};
