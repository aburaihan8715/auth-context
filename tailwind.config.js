/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#990738",

          secondary: "#453cc4",

          accent: "#4fc41d",

          neutral: "#2c2640",

          "base-100": "#393e41",

          info: "#acc3ec",

          success: "#18915e",

          warning: "#edbb31",

          error: "#fc5940",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
