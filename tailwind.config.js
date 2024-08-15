/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        textprimary: "#2c3e50",
        textsecondary: "#2980b9",
      },
      backgroundColor: {
        bgprimary: "#2980b9",
        bgsecondary: "#2c3e50",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
